import { supabase } from "@/app/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

const rateLimitStore: Record<string, { count: number; lastRequest: number }> =
  {};
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const MAX_REQUESTS = 3;

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.toString().split(",")[0] ||
    "unknown";

  const now = Date.now();
  const rateData = rateLimitStore[ip] || { count: 0, lastRequest: now };

  if (now - rateData.lastRequest > RATE_LIMIT_WINDOW_MS) {
    rateLimitStore[ip] = { count: 1, lastRequest: now };
  } else {
    rateData.count += 1;
    rateData.lastRequest = now;
    rateLimitStore[ip] = rateData;

    if (rateData.count > MAX_REQUESTS) {
      return new NextResponse(
        JSON.stringify({ error: "Too many request, please try again later." }),
        {
          status: 429,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  }

  const body: { email: string } = await request.json();
  const { email } = body;

  console.log("Received email", email, "from IP", ip);

  if (
    !email ||
    !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)
  ) {
    return new NextResponse(JSON.stringify({ error: "Invalid email" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
  const { error } = await supabase.from("waitlist").insert({ email });

  if (error)
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });

  return new NextResponse(
    JSON.stringify({ message: "Email added to waitlist successfully" }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
