import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileCheck2, MessagesSquare, Route } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { services, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servicios técnicos",
  description:
    "Servicios adicionales de Solar Supply: confección de planos, permisología y orientación técnica para clientes que compran productos."
};

export default function ServiciosPage() {
  return (
    <>
      <section className="pageHero">
        <div className="container pageHeroGrid">
          <div>
            <span className="eyebrow">Servicios técnicos adicionales</span>
            <h1>Planos, permisología y orientación técnica como valor agregado al suministro.</h1>
            <p>
              Solar Supply se enfoca en productos, pero también puede acompañar proyectos que requieran documentación,
              revisión técnica y soporte adicional para avanzar con mayor seguridad.
            </p>
            <Link href={whatsappUrl("Hola Solar Supply, deseo información sobre planos y permisología para un proyecto solar.")} className="primaryButton" target="_blank" rel="noreferrer">
              Consultar servicio <ArrowRight size={18} />
            </Link>
          </div>
          <Image src="/images/servicios-planos.png" alt="Especialista revisando planos de un proyecto solar" width={760} height={530} className="roundedVisual" />
        </div>
      </section>

      <section className="section">
        <div className="container servicesGrid">
          {services.map((service, index) => {
            const icons = [FileCheck2, Route, MessagesSquare];
            const Icon = icons[index] ?? FileCheck2;
            return (
              <article key={service.title} className="serviceCard">
                <Icon size={28} />
                <h2>{service.title}</h2>
                <p>{service.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section softSection">
        <div className="container">
          <SectionHeader
            center
            eyebrow="Cómo funciona"
            title="Un proceso claro para atender proyectos con mayor exigencia técnica."
            text="El cliente comparte el alcance del proyecto, Solar Supply propone el suministro correspondiente y, si aplica, cotiza el apoyo adicional de planos o permisología."
          />
          <div className="stepsGrid">
            <article><strong>01</strong><h3>Revisión del proyecto</h3><p>Se analizan capacidad, tipo de sistema, uso esperado y equipamiento requerido.</p></article>
            <article><strong>02</strong><h3>Selección y cotización</h3><p>Se recomienda la línea de producto más adecuada según la necesidad técnica y comercial.</p></article>
            <article><strong>03</strong><h3>Soporte adicional</h3><p>Cuando el cliente lo necesita, se cotizan planos y permisología como un servicio complementario.</p></article>
          </div>
        </div>
      </section>
    </>
  );
}
