import type { Metadata } from "next";
import Link from "next/link";
import { Download, FileText, Image as ImageIcon, Tag } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { resourceItems, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Recursos y fichas técnicas",
  description:
    "Recursos de Solar Supply: fichas técnicas, disponibilidad comercial y materiales de apoyo para proyectos solares."
};

export default function RecursosPage() {
  const icons = [FileText, Tag, ImageIcon];
  const messages = [
    "Hola Solar Supply, deseo recibir fichas técnicas de sus productos.",
    "Hola Solar Supply, deseo consultar disponibilidad y oferta comercial.",
    "Hola Solar Supply, deseo recibir información adicional sobre aplicaciones y productos."
  ];

  return (
    <>
      <section className="pageHero compactHero">
        <div className="container">
          <span className="eyebrow">Recursos comerciales</span>
          <h1>Información técnica y comercial para apoyar cada cotización.</h1>
          <p>
            Esta sección concentra el tipo de material que Solar Supply comparte con instaladores y empresas para facilitar la evaluación de equipos y soluciones.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container resourcesGrid">
          {resourceItems.map((item, index) => {
            const Icon = icons[index] ?? FileText;
            return (
              <article key={item.title} className="resourceCard">
                <Icon size={30} />
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <Link href={whatsappUrl(messages[index])} className="secondaryButton" target="_blank" rel="noreferrer">
                  <Download size={17} /> {item.action}
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section softSection">
        <div className="container">
          <SectionHeader
            center
            eyebrow="Disponibilidad comercial"
            title="Consulta productos activos, líneas destacadas y opciones recomendadas."
            text="La oferta puede cambiar según inventario, marca y negociación comercial. Por eso Solar Supply trabaja con atención directa para orientar mejor cada solicitud."
          />
          <div className="offerCards">
            <article><h3>Paneles por marca</h3><p>Consulta opciones disponibles para tu proyecto según potencia, formato y rendimiento.</p></article>
            <article><h3>Líneas FOX y NEP</h3><p>Monofásicos, híbridos, microinversores, Rapid Shutdown y respaldo energético.</p></article>
            <article><h3>Nuevas categorías</h3><p>Estructuras, accesorios, baterías y futuras líneas complementarias como lámparas.</p></article>
          </div>
          <div className="centerAction">
            <Link href={whatsappUrl("Hola Solar Supply, deseo recibir información técnica y comercial de sus productos.")} className="primaryButton" target="_blank" rel="noreferrer">
              Solicitar información
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
