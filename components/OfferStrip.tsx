import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function OfferStrip() {
  return (
    <section className="offerStrip">
      <div className="container offerInner">
        <div>
          <span className="eyebrow light"><Sparkles size={15} /> Ofertas y disponibilidad</span>
          <h2>Espacio listo para publicar inventario, modelos destacados y promociones por temporada.</h2>
        </div>
        <Link href="/recursos" className="lightButton">
          Ver recursos <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
