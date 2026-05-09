import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Globe2, ShieldCheck, UsersRound } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { site, valuePillars, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Empresa",
  description:
    "Conoce Solar Supply, S.A., empresa de suministro solar con respaldo técnico para instaladores, empresas y proyectos regionales."
};

export default function EmpresaPage() {
  return (
    <>
      <section className="pageHero">
        <div className="container pageHeroGrid">
          <div>
            <span className="eyebrow">Quiénes somos</span>
            <h1>Solar Supply, S.A. combina suministro, criterio técnico y proyección internacional.</h1>
            <p>
              Solar Supply atiende instaladores de paneles solares, empresas de ingeniería, contratistas y clientes
              que buscan un proveedor serio de equipos y soluciones para sistemas solares.
            </p>
            <Link href={whatsappUrl("Hola Solar Supply, deseo más información corporativa y comercial.")} className="primaryButton" target="_blank" rel="noreferrer">
              Hablar con Solar Supply <ArrowRight size={18} />
            </Link>
          </div>
          <Image src="/images/empresa-corporativa.png" alt="Parque solar en cubierta comercial" width={760} height={530} className="roundedVisual" />
        </div>
      </section>

      <section className="section">
        <div className="container fourGrid">
          <article className="metricCard"><Building2 size={26} /><strong>Solar Supply, S.A.</strong><span>Empresa de suministro solar</span></article>
          <article className="metricCard"><UsersRound size={26} /><strong>Instaladores y empresas</strong><span>Público principal</span></article>
          <article className="metricCard"><ShieldCheck size={26} /><strong>Respaldo técnico</strong><span>Valor diferenciador</span></article>
          <article className="metricCard"><Globe2 size={26} /><strong>{site.market}</strong><span>Mercado objetivo</span></article>
        </div>
      </section>

      <section className="section softSection">
        <div className="container splitGrid reverse">
          <div className="storyCard">
            <span className="eyebrow">Posicionamiento</span>
            <h2>Una marca solar construida para vender producto, generar confianza y escalar regionalmente.</h2>
            <p>
              La propuesta comercial de Solar Supply se basa en ofrecer productos de buena calidad, costo competitivo y
              acompañamiento técnico, manteniendo la flexibilidad de trabajar paneles por marca e incorporar nuevas líneas cuando el mercado lo requiera.
            </p>
            <p>
              La imagen corporativa busca transmitir orden, solidez, modernidad y una visión más amplia que el mercado local,
              alineada con oportunidades en Panamá, Centroamérica y Suramérica.
            </p>
          </div>
          <div className="pillarGrid">
            {valuePillars.map((pillar) => (
              <article key={pillar.title} className="pillarCard light">
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            center
            eyebrow="Acompañamiento comercial"
            title="Apoyo para tomar mejores decisiones técnicas y comerciales."
            text="Solar Supply entiende que el instalador muchas veces necesita validar marcas, productos nuevos y configuraciones. Por eso la empresa se presenta como un aliado confiable, no solo como un punto de venta."
          />
        </div>
      </section>
    </>
  );
}
