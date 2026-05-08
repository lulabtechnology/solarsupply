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
            <h1>Planos y permisología como valor agregado para clientes que compran productos.</h1>
            <p>
              El servicio se presenta de forma clara: Solar Supply se enfoca en suministro solar, pero puede acompañar técnicamente a clientes que necesitan documentación y permisos.
            </p>
            <Link href={whatsappUrl("Hola Solar Supply, deseo información sobre planos y permisología para un proyecto solar.")} className="primaryButton" target="_blank" rel="noreferrer">
              Consultar servicio <ArrowRight size={18} />
            </Link>
          </div>
          <Image src="/images/permisologia.svg" alt="Servicios de planos y permisología" width={760} height={530} className="roundedVisual" />
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
            title="Un flujo simple para proyectos que requieren soporte técnico adicional."
            text="El cliente comparte el alcance, Solar Supply revisa la necesidad técnica, cotiza productos y define si aplica el servicio adicional de planos o permisología."
          />
          <div className="stepsGrid">
            <article><strong>01</strong><h3>Revisión del proyecto</h3><p>Se recibe información básica: capacidad, tipo de instalación, equipos requeridos y ubicación.</p></article>
            <article><strong>02</strong><h3>Cotización de productos</h3><p>Se recomienda la línea comercial adecuada: paneles, inversores, NEP, estructuras o accesorios.</p></article>
            <article><strong>03</strong><h3>Servicio adicional</h3><p>Si aplica, se cotizan planos y permisología como un costo adicional y no incluido automáticamente.</p></article>
          </div>
        </div>
      </section>
    </>
  );
}
