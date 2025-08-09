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
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-indigo-150 to-indigo-200">
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
