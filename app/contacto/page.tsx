import type { Metadata } from "next";
import Link from "next/link";
import { ContactBlock } from "@/components/ContactBlock";
import { InquiryForm } from "@/components/InquiryForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta a Solar Supply, S.A. para cotizar productos solares, inversores, estructuras, accesorios, planos y permisología."
};

export default function ContactoPage() {
  return (
    <>
      <section className="pageHero compactHero">
        <div className="container">
          <span className="eyebrow">Contacto</span>
          <h1>Cotiza productos solares según las especificaciones de tu proyecto.</h1>
          <p>
            Comparte la información básica de tu requerimiento y el equipo de Solar Supply podrá orientarte con productos, marcas y opciones disponibles.
          </p>
        </div>
      </section>
      <section className="section contactPageSection">
        <div className="container contactPageGrid">
          <InquiryForm />
          <ContactBlock />
        </div>
      </section>
      <section className="mapPlaceholder">
        <div className="container">
          <div className="mapCard">
            <span className="eyebrow">Ubicación</span>
            <h2>Plaza Calle 50, Piso 1, Local 1, Obarrio, Bella Vista, Panamá.</h2>
            <p>Solar Supply atiende consultas comerciales y técnicas desde su ubicación en Ciudad de Panamá, con alcance hacia mercados regionales.</p>
            <div style={{ marginTop: '20px' }}>
              <Link href={site.googleMapsUrl} className="lightButton" target="_blank" rel="noreferrer">
                Ver ubicación en Google Maps
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
