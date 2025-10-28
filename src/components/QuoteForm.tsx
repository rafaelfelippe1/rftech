import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

const serviceOptions = [
  "Formatação e Instalação de Sistema",
  "Limpeza Física e Troca de Pasta Térmica",
  "Instalação de Programas (Pacote Office, Antivírus, etc.)",
  "Upgrade de Peças (Instalar SSD, Memória RAM)",
  "Remoção de Vírus e Otimização",
  "Configuração de Rede / Wi-Fi",
  "Suporte Remoto"
];

export const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    services: [] as string[],
    description: ""
  });

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error("Por favor, preencha seu nome");
      return;
    }

    if (!formData.phone.trim()) {
      toast.error("Por favor, preencha seu WhatsApp");
      return;
    }

    if (formData.services.length === 0 && !formData.description.trim()) {
      toast.error("Por favor, selecione pelo menos um serviço ou descreva seu problema");
      return;
    }

    // Format WhatsApp message
    let message = `Olá Rafael! Meu nome é ${formData.name} e gostaria de um orçamento.\n\n`;
    message += `Meu contato é: ${formData.phone}\n\n`;
    
    if (formData.services.length > 0) {
      message += `Serviços que preciso:\n`;
      formData.services.forEach(service => {
        message += `• ${service}\n`;
      });
      message += `\n`;
    }
    
    if (formData.description.trim()) {
      message += `Descrição adicional:\n${formData.description}`;
    }

    // Open WhatsApp
    const whatsappNumber = "5521992491608";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast.success("Redirecionando para o WhatsApp...");
  };

  return (
    <section id="orcamento" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          Monte seu Orçamento
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Selecione os serviços que você precisa abaixo e envie seu pedido diretamente pelo meu WhatsApp
        </p>
        
        <Card className="p-8 bg-card border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-lg mb-2 block">Seu Nome *</Label>
              <Input
                id="name"
                type="text"
                placeholder="Digite seu nome completo"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="bg-input border-border text-foreground"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-lg mb-2 block">Seu WhatsApp (para retorno) *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(21) 99999-9999"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="bg-input border-border text-foreground"
              />
            </div>

            <div>
              <Label className="text-lg mb-4 block">Quais serviços você precisa?</Label>
              <div className="space-y-3">
                {serviceOptions.map((service) => (
                  <div key={service} className="flex items-start space-x-3">
                    <Checkbox
                      id={service}
                      checked={formData.services.includes(service)}
                      onCheckedChange={() => handleServiceToggle(service)}
                      className="mt-1"
                    />
                    <Label
                      htmlFor={service}
                      className="text-base font-normal cursor-pointer leading-tight"
                    >
                      {service}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="description" className="text-lg mb-2 block">Outro problema? Descreva aqui:</Label>
              <Textarea
                id="description"
                placeholder="Ex: Meu computador não liga, está muito lento, preciso de uma peça específica..."
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                className="bg-input border-border text-foreground min-h-32"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6 rounded-full glow-effect transition-all hover:scale-105"
            >
              Enviar Pedido via WhatsApp
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};
