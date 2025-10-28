import { Mail, Phone } from "lucide-react";
import qrcodeWhatsapp from "@/assets/qrcode-whatsapp.png";

export const Contact = () => {
  return (
    <footer className="py-16 px-4 border-t border-border">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
          Entre em contato
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="text-center">
            <a 
              href="https://wa.me/5521992491608"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-3 text-lg hover:text-primary transition-colors group"
            >
              <Phone className="w-6 h-6 text-primary group-hover:animate-pulse" />
              <span className="font-semibold">(21) 99249-1608</span>
            </a>
          </div>
          
          <div className="text-center">
            <a 
              href="mailto:rafaelfelippe1@gmail.com"
              className="inline-flex items-center justify-center space-x-3 text-lg hover:text-primary transition-colors group"
            >
              <Mail className="w-6 h-6 text-primary group-hover:animate-pulse" />
              <span className="font-semibold">rafaelfelippe1@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-lg text-muted-foreground mb-6">
            Ou escaneie o QR Code para contato direto via WhatsApp
          </p>
          <div className="inline-block bg-white p-4 rounded-lg">
            <img 
              src={qrcodeWhatsapp} 
              alt="QR Code WhatsApp" 
              className="w-48 h-48 mx-auto"
            />
          </div>
        </div>

        <p className="text-center text-muted-foreground text-lg font-medium">
          Atendimento tanto para empresas quanto residências
        </p>
        
        <div className="text-center mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2025 Rafael Felippe - Técnico em Informática. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
