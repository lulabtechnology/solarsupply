import { Mail, MapPin, Phone } from "lucide-react";
import { site, whatsappUrl } from "@/lib/site";

export function ContactBlock() {
  return (
    <aside className="contactPanel">
      <span className="eyebrow">Contacto directo</span>
      <h3>Solar Supply, S.A.</h3>
      <p>Atención para instaladores, empresas y proyectos que requieren suministro solar confiable.</p>
      <ul className="contactList">
        <li><Phone size={18} /> <span>{site.phone} · WhatsApp {site.whatsappLabel}</span></li>
        <li><Mail size={18} /> <a href={`mailto:${site.email}`}>{site.email}</a></li>
        <li><MapPin size={18} /> <span>{site.address}</span></li>
      </ul>
      <a className="primaryButton full" href={whatsappUrl()} target="_blank" rel="noreferrer">
        Escribir por WhatsApp
      </a>
    </aside>
  );
}
