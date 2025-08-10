import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lexflow",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml", rel: "icon" }],
  },
  description: "Language learning platform with integrated AI",
  authors: [{ name: "Franco Popp", url: "https://francopopp.com" }],
  keywords: [
    "language learning",
    "AI",
    "education",
    "language model",
    "interactive learning",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
