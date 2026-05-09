import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function OfferStrip() {
  return (
    <section className="offerStrip">
      <div className="container offerInner">
        <div>
          <span className="eyebrow light"><Sparkles size={15} /> Disponibilidad y líneas activas</span>
          <h2>Consulta productos destacados, marcas disponibles y opciones recomendadas para tu próximo proyecto solar.</h2>
        </div>
        <Link href="/recursos" className="lightButton">
          Ver recursos <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
