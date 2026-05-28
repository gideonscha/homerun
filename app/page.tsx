import { Nav } from "@/components/homepage/Nav";
import { Hero } from "@/components/homepage/Hero";
import { ProofBar } from "@/components/homepage/ProofBar";
import { Services } from "@/components/homepage/Services";
import { ContactBlock } from "@/components/homepage/ContactBlock";
import { HowItWorks } from "@/components/homepage/HowItWorks";
import { About } from "@/components/homepage/About";
import { Testimonials } from "@/components/homepage/Testimonials";
import { Pricing } from "@/components/homepage/Pricing";
import { FAQ } from "@/components/homepage/FAQ";
import { FinalCTA } from "@/components/homepage/FinalCTA";
import { Footer } from "@/components/homepage/Footer";
import { WhatsAppFAB } from "@/components/homepage/WhatsAppFAB";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <ProofBar />
        <Services />
        <ContactBlock />
        <HowItWorks />
        <About />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
