
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />
      <Hero />
      <Services />
      <TechStack />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
