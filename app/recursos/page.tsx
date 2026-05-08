import type { Metadata } from "next";
import Link from "next/link";
import { Download, FileText, Image as ImageIcon, Tag } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { resourceItems, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Recursos y fichas técnicas",
  description:
    "Recursos de Solar Supply: fichas técnicas, ofertas, disponibilidad y galería de instalaciones."
};

export default function RecursosPage() {
  const icons = [FileText, Tag, ImageIcon];

  return (
    <>
      <section className="pageHero compactHero">
        <div className="container">
          <span className="eyebrow">Recursos comerciales</span>
          <h1>Fichas técnicas, ofertas y materiales para apoyar la decisión de compra.</h1>
          <p>
            Esta sección está lista para adjuntar PDFs, brochures, fichas, videos o fotos reales de instalaciones cuando el cliente los entregue.
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
                <span>{item.status}</span>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <button type="button" className="disabledDownload" disabled>
                  <Download size={17} /> Pendiente de archivo
                </button>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section softSection">
        <div className="container">
          <SectionHeader
            center
            eyebrow="Ofertas"
            title="Bloque preparado para inventario y promociones por temporada."
            text="Cuando se tengan modelos, precios o disponibilidad, se pueden agregar tarjetas por producto sin cambiar la estructura de la web."
          />
          <div className="offerCards">
            <article><h3>Paneles por marca</h3><p>Publicar disponibilidad actual y fichas técnicas.</p></article>
            <article><h3>NEP seleccionado</h3><p>Microinversores 2,250 W, híbrido 12 kW y RSD.</p></article>
            <article><h3>Nuevas líneas</h3><p>Baterías, lámparas y productos complementarios.</p></article>
          </div>
          <div className="centerAction">
            <Link href={whatsappUrl("Hola Solar Supply, deseo recibir fichas técnicas y ofertas disponibles.")} className="primaryButton" target="_blank" rel="noreferrer">
              Solicitar recursos disponibles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
