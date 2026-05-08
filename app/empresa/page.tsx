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
            <h1>Solar Supply, S.A. combina suministro, criterio técnico y visión internacional.</h1>
            <p>
              La empresa atiende instaladores de paneles solares y compañías que requieren suministro de productos confiables,
              con una comunicación cercana, moderna y técnica.
            </p>
            <Link href={whatsappUrl("Hola Solar Supply, deseo más información corporativa y comercial.")} className="primaryButton" target="_blank" rel="noreferrer">
              Hablar con Solar Supply <ArrowRight size={18} />
            </Link>
          </div>
          <Image src="/images/map-international.svg" alt="Cobertura Panamá Centroamérica y Suramérica" width={760} height={530} className="roundedVisual" />
        </div>
      </section>

      <section className="section">
        <div className="container fourGrid">
          <article className="metricCard"><Building2 size={26} /><strong>Solar Supply, S.A.</strong><span>Nombre comercial</span></article>
          <article className="metricCard"><UsersRound size={26} /><strong>Instaladores y empresas</strong><span>Público objetivo</span></article>
          <article className="metricCard"><ShieldCheck size={26} /><strong>Respaldo técnico</strong><span>Diferenciador</span></article>
          <article className="metricCard"><Globe2 size={26} /><strong>{site.market}</strong><span>Mercado objetivo</span></article>
        </div>
      </section>

      <section className="section softSection">
        <div className="container splitGrid reverse">
          <div className="storyCard">
            <span className="eyebrow">Posicionamiento</span>
            <h2>Una distribuidora solar con imagen limpia, técnica y preparada para nuevas categorías.</h2>
            <p>
              El sitio se diseñó para que Solar Supply pueda crecer con productos actuales y futuros: paneles solares, inversores,
              microinversores, baterías, estructuras, accesorios y otras líneas como lámparas o soluciones energéticas complementarias.
            </p>
            <p>
              La intención visual es corporativa, elegante y moderna, con fondo blanco, fotos amplias, azul navy como color principal y acentos solares.
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
            eyebrow="Para instaladores"
            title="Soporte para decidir mejor cuando aparece un producto nuevo."
            text="Una de las objeciones normales del público es el precio y la incertidumbre ante equipos nuevos. Por eso la comunicación se enfoca en confianza, respaldo y orientación."
          />
        </div>
      </section>
    </>
  );
}
