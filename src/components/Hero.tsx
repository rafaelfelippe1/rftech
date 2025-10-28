import { Button } from "@/components/ui/button";
import logoRF from "@/assets/logo-rf.png";

export const Hero = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('orcamento');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden tech-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/95" />
      
      <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
        <div className="mb-8 inline-block">
          <img 
            src={logoRF} 
            alt="RF Logo" 
            className="w-48 h-48 md:w-64 md:h-64 mx-auto animate-glow-pulse"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-gradient">
          Rafael Felippe
        </h1>
        
        <p className="text-xl md:text-2xl text-primary font-semibold mb-6">
          Técnico em Informática
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          Soluções completas em manutenção de computadores, notebooks e suporte de TI para empresas e residências.
        </p>
        
        <Button 
          onClick={scrollToForm}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-full glow-effect transition-all hover:scale-105"
        >
          Solicitar Orçamento Agora
        </Button>
      </div>
    </section>
  );
};
