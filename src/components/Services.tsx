import { Wrench, Sparkles, Download, Wifi, Shield, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Wrench,
    title: "Manutenção Preventiva e Corretiva",
    description: "Cuidados regulares e reparos emergenciais"
  },
  {
    icon: Sparkles,
    title: "Formatação e Limpeza Completa",
    description: "Sistema limpo e otimizado"
  },
  {
    icon: Download,
    title: "Instalação de Programas e Upgrades",
    description: "Software atualizado e hardware modernizado"
  },
  {
    icon: Wifi,
    title: "Suporte Remoto",
    description: "Atendimento rápido à distância"
  },
  {
    icon: Shield,
    title: "Remoção de Vírus",
    description: "Proteção e segurança digital"
  },
  {
    icon: Users,
    title: "Suporte Presencial",
    description: "Atendimento personalizado no local"
  }
];

export const Services = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          O que eu faço
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Serviços profissionais de TI para sua tranquilidade
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-all hover:scale-105 hover:glow-effect group"
            >
              <service.icon className="w-12 h-12 text-primary mb-4 group-hover:animate-pulse" />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
