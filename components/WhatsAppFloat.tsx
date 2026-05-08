import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a className="whatsAppFloat" href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Cotizar por WhatsApp">
      <MessageCircle size={25} />
      <span>Cotizar</span>
    </a>
  );
}
