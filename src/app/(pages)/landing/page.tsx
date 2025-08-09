import {
  Navbar,
  Hero,
  Features,
  HowItWorks,
  CTA,
  Footer,
  Survey,
} from "@/app/components/landing/landing";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />

      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <Survey />

      <Footer />
    </div>
  );
}
