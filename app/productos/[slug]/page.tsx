import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { ContactBlock } from "@/components/ContactBlock";
import { productFamilies, whatsappUrl } from "@/lib/site";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

const panelPdfPreviews = [
  {
    brand: "Trina Solar",
    title: "Vertex N TSM-NEG19RC.20",
    range: "610-635W",
    image: "/images/products/pdf-trina-vertex-n-635-cover.webp"
  },
  {
    brand: "Trina Solar",
    title: "Vertex N TSM-NEG21C.20",
    range: "695-720W",
    image: "/images/products/pdf-trina-vertex-n-720-cover.webp"
  },
  {
    brand: "Canadian Solar",
    title: "TOPBiHiKu6 CS6.2-66TB",
    range: "600-630W",
    image: "/images/products/pdf-canadian-topbihiku6-cover.webp"
  },
  {
    brand: "Jinko Solar",
    title: "Tiger Neo N-type 72HL4-(V)",
    range: "570-590W",
    image: "/images/products/pdf-jinko-tiger-neo-570-590-cover.webp"
  },
  {
    brand: "Jinko Solar",
    title: "Tiger Neo 66HL4M-BDV",
    range: "600-620W",
    image: "/images/products/pdf-jinko-tiger-neo-600-620-cover.webp"
  }
];

const panelHighlights = [
  {
    brand: "Trina Solar",
    model: "Vertex N TSM-NEG19RC.20",
    range: "610-635W",
    summary:
      "Módulo N-type i-TOPCon bifacial dual glass para proyectos que requieren alta eficiencia, buena generación y garantía extendida.",
    points: [
      "Potencia máxima hasta 635W",
      "Eficiencia máxima hasta 23.5%",
      "Tecnología N-type i-TOPCon bifacial dual glass",
      "Coeficiente de temperatura Pmax -0.29%/°C",
      "12 años de garantía de producto y 30 años de garantía de potencia"
    ]
  },
  {
    brand: "Trina Solar",
    model: "Vertex N TSM-NEG21C.20",
    range: "695-720W",
    summary:
      "Panel de alta potencia para proyectos de mayor escala, con tolerancia positiva y enfoque en reducción de costo del sistema.",
    points: [
      "Rango de potencia 695-720W",
      "Eficiencia máxima hasta 23.2%",
      "Tolerancia positiva 0~+5W",
      "Tecnología N-type i-TOPCon bifacial dual glass",
      "30 años de garantía de potencia"
    ]
  },
  {
    brand: "Canadian Solar",
    model: "TOPBiHiKu6 CS6.2-66TB",
    range: "600-630W",
    summary:
      "Módulo N-type bifacial TOPCon para aplicaciones solares con buena respuesta en clima caliente y generación adicional por la parte trasera.",
    points: [
      "Rango de potencia 600-630W",
      "Eficiencia máxima hasta 23.3%",
      "Hasta 85% de bifacialidad",
      "Coeficiente de temperatura Pmax -0.29%/°C",
      "12 años de garantía de producto y 30 años de garantía lineal de potencia"
    ]
  },
  {
    brand: "Jinko Solar",
    model: "Tiger Neo N-type 72HL4-(V)",
    range: "570-590W",
    summary:
      "Módulo monofacial N-type orientado a confiabilidad, tolerancia positiva y resistencia para condiciones ambientales exigentes.",
    points: [
      "Rango de potencia 570-590W",
      "Tolerancia positiva 0~+3%",
      "SMBB Technology para mejor captura de luz y corriente",
      "HOT 2.0 Technology para mayor confiabilidad y menor LID/LeTID",
      "12 años de garantía de producto y 30 años de garantía lineal"
    ]
  },
  {
    brand: "Jinko Solar",
    model: "Tiger Neo 66HL4M-BDV",
    range: "600-620W",
    summary:
      "Módulo bifacial dual glass N-type para proyectos que buscan generación por ambas caras y reducción del costo nivelado de energía.",
    points: [
      "Rango de potencia 600-620W",
      "Tecnología HOT 2.0",
      "Generación bifacial dual-sided",
      "Carga mecánica: 5400 Pa frontal y 2400 Pa trasera",
      "12 años de garantía de producto y 30 años de garantía lineal"
    ]
  }
];

export async function generateStaticParams() {
  return productFamilies.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = productFamilies.find((item) => item.slug === slug);
  if (!product) return { title: "Producto" };
  return {
    title: product.title,
    description: product.summary
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = productFamilies.find((item) => item.slug === slug);

  if (!product) notFound();

  const isPaneles = product.slug === "paneles-solares";
  const sourceSlides = product.carousel?.length
    ? product.carousel
    : [{ name: product.title, label: product.highlight, image: product.image }];
  const slides = [...sourceSlides, ...sourceSlides];

  return (
    <>
      <section className="pageHero productDetailHero">
        <div className="container productDetailGrid">
          <div>
            <Link href="/productos" className="backLink"><ArrowLeft size={17} /> Volver a productos</Link>
            <span className="eyebrow">{product.eyebrow}</span>
            <h1>{product.title}</h1>
            <p>{product.summary}</p>
            <div className="heroActions">
              <Link href={whatsappUrl(`Hola Solar Supply, deseo cotizar ${product.title}.`)} className="primaryButton" target="_blank" rel="noreferrer">
                {product.cta} <ArrowRight size={18} />
              </Link>
              <Link href="/contacto" className="secondaryButton">Formulario de contacto</Link>
            </div>
          </div>

          <div className={`detailVisualCarousel${isPaneles ? " panelVisualCarousel" : ""}`} aria-label={`Carrusel visual de ${product.title}`}>
            <div className="detailVisualTrack">
              {slides.map((slide, index) => (
                <div className="detailVisualSlide" key={`${slide.name}-${index}`}>
                  <Image src={slide.image} alt={slide.name} width={900} height={620} className="detailVisualImage" />
                  <div className="detailVisualCaption">
                    <strong>{slide.name}</strong>
                    <span>{slide.label}</span>
                  </div>
                </div>
              ))}
            </div>
            <span className="productBadge">{product.highlight}</span>
          </div>
        </div>
      </section>

      {isPaneles && (
        <section className="section panelPdfSection">
          <div className="container">
            <div className="sectionHeader center">
              <span className="eyebrow">Fichas técnicas disponibles</span>
              <h2>Primeras páginas de los catálogos de paneles.</h2>
              <p>
                Presiona cualquier ficha para verla ampliada. Las referencias pueden variar según inventario, potencia disponible y actualización tecnológica de cada fabricante.
              </p>
            </div>
            <div className="panelPdfGrid">
              {panelPdfPreviews.map((pdf) => (
                <a className="panelPdfCard" href={pdf.image} target="_blank" rel="noreferrer" key={`${pdf.brand}-${pdf.title}`}>
                  <div className="panelPdfImageWrap">
                    <Image src={pdf.image} alt={`${pdf.brand} ${pdf.title}`} width={900} height={1280} className="panelPdfImage" />
                  </div>
                  <div className="panelPdfBody">
                    <span>{pdf.brand}</span>
                    <h3>{pdf.title}</h3>
                    <strong>{pdf.range}</strong>
                    <small>Presiona para ampliar</small>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container detailContentGrid">
          <div className="detailCard">
            <span className="productBadge static">{product.highlight}</span>
            <h2>Información de la categoría</h2>
            <ul className="checkList">
              {product.items.map((item) => (
                <li key={item}><CheckCircle2 size={20} /> <span>{item}</span></li>
              ))}
            </ul>
            <div className="detailNote">
              <strong>Nota comercial:</strong> Solar Supply trabaja con líneas de paneles que pueden actualizarse según disponibilidad, nuevas tecnologías,
              potencia vigente y especificación del proyecto. Para modelos adicionales o fichas actualizadas, la confirmación se realiza por WhatsApp.
            </div>
          </div>
          <ContactBlock />
        </div>
      </section>

      {isPaneles ? (
        <section className="section softSection">
          <div className="container">
            <div className="sectionHeader center">
              <span className="eyebrow">Información técnica clave</span>
              <h2>Referencias de paneles para consulta comercial.</h2>
              <p>
                Resumen de las fichas recibidas. Para precio final, disponibilidad, equivalencias o modelos adicionales, se confirma directamente por WhatsApp.
              </p>
            </div>

            <div className="panelInfoGrid">
              {panelHighlights.map((panel) => (
                <article className="panelInfoCard" key={`${panel.brand}-${panel.model}`}>
                  <span>{panel.brand}</span>
                  <h3>{panel.model}</h3>
                  <strong>{panel.range}</strong>
                  <p>{panel.summary}</p>
                  <ul>
                    {panel.points.map((point) => (
                      <li key={point}><CheckCircle2 size={18} /> <span>{point}</span></li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="panelConsultBox">
              <div>
                <span className="eyebrow small">Consulta comercial</span>
                <h3>Más potencias, nuevas tecnologías o disponibilidad actual</h3>
                <p>
                  El catálogo puede crecer con nuevas líneas y tecnologías de paneles. Solar Supply confirma la opción adecuada según inventario, ficha vigente y requerimientos del proyecto.
                </p>
              </div>
              <Link
                href={whatsappUrl("Hola Solar Supply, quiero consultar paneles solares disponibles, marcas, potencias y fichas técnicas.")}
                className="primaryButton"
                target="_blank"
                rel="noreferrer"
              >
                Consultar por WhatsApp <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      ) : product.catalogItems.length > 0 && (
        <section className="section softSection">
          <div className="container">
            <div className="sectionHeader center">
              <span className="eyebrow">Productos y catálogos</span>
              <h2>Referencias visibles dentro de {product.title}.</h2>
              <p>
                Estas tarjetas muestran lo que se venderá dentro de la familia seleccionada, con imágenes y datos listos para seguir ampliando por tandas.
              </p>
            </div>
            <div className="catalogGrid">
              {product.catalogItems.map((item) => (
                <article className="catalogCard" key={item.title}>
                  <div className="catalogImageWrap">
                    <Image src={item.image} alt={item.title} width={720} height={520} className="catalogImage" />
                  </div>
                  <div className="catalogCardBody">
                    <span>{item.label}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="tagList">
                      {item.specs.map((spec) => <small key={spec}>{spec}</small>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
