import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { QuoteForm } from "@/components/QuoteForm";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <QuoteForm />
      <Contact />
    </div>
  );
};

export default Index;
