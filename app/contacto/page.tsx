import type { Metadata } from "next";
import { ContactBlock } from "@/components/ContactBlock";
import { InquiryForm } from "@/components/InquiryForm";

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
            Comparte la información básica y el equipo de Solar Supply podrá orientarte con productos, marcas y disponibilidad.
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
            <h2>Plaza Calle 50, Obarrio, Bella Vista, Panamá.</h2>
            <p>El bloque está preparado para insertar Google Maps cuando se confirme el enlace definitivo de la ficha de negocio.</p>
          </div>
        </div>
      </section>
    </>
  );
}
