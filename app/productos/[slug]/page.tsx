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

const microPdfPreviews = [
  {
    brand: "FOX ESS",
    title: "US Series Split-Phase Hybrid/AC",
    range: "3.8-11.4kW",
    image: "/images/products/pdf-fox-us-series-cover.webp"
  },
  {
    brand: "FOX ESS",
    title: "EP6 batería de alto voltaje",
    range: "23.04 kWh máx.",
    image: "/images/products/pdf-fox-ep6-cover.webp"
  },
  {
    brand: "FOX ESS",
    title: "EP12 batería de alto voltaje",
    range: "46.08 kWh máx.",
    image: "/images/products/pdf-fox-ep12-cover.webp"
  },
  {
    brand: "FOX ESS",
    title: "G Series G7 / G10",
    range: "Monofásicos",
    image: "/images/products/pdf-fox-g-series-cover.webp"
  },
  {
    brand: "NEP",
    title: "BDM-1600/2000/2250",
    range: "Microinversores",
    image: "/images/products/pdf-nep-bdm-cover.webp"
  },
  {
    brand: "NEP",
    title: "Accesorios para microinversores",
    range: "Cable · End cap · WiFi · Tools",
    image: "/images/products/pdf-nep-accessories-cover.webp"
  },
  {
    brand: "NEP",
    title: "BDH-8KSP/10KSP/12KSP-LB",
    range: "Híbrido 48V",
    image: "/images/products/pdf-nep-bdh-cover.webp"
  },
  {
    brand: "NEP",
    title: "PVG-2 / PVG-3",
    range: "Rapid Shutdown",
    image: "/images/products/pdf-nep-rsd-datasheet-cover.webp"
  },
  {
    brand: "NEP",
    title: "NEP RSD Solution",
    range: "Solución RSD",
    image: "/images/products/pdf-nep-rsd-solution-cover.webp"
  }
];

const microHighlights = [
  {
    brand: "FOX ESS",
    model: "US Series Split-Phase Hybrid/AC",
    range: "3.8kW a 11.4kW",
    summary:
      "Inversor de almacenamiento monofásico para aplicaciones con baterías de alto voltaje, respaldo y monitoreo remoto.",
    points: [
      "Rango de potencia 3.8kW a 11.4kW",
      "Compatible con baterías de alto voltaje",
      "Hasta 4 unidades en paralelo",
      "Type 4X para instalación exterior",
      "Monitoreo remoto vía app o portal web"
    ]
  },
  {
    brand: "FOX ESS",
    model: "G Series G7 / G10",
    range: "Inversores monofásicos",
    summary:
      "Línea G Series de inversores monofásicos con tres MPPT, alta eficiencia, monitoreo remoto y protección para instalación exterior.",
    points: [
      "Modelos G7, G8, G9, G10 y G10.5",
      "Three MPPT Inverters",
      "Eficiencia máxima 97.8%",
      "IP65 Rated",
      "Plataforma de monitoreo remoto"
    ]
  },
  {
    brand: "FOX ESS",
    model: "EP6 / EP12",
    range: "Baterías compatibles",
    summary:
      "Baterías de alto voltaje para complementar soluciones híbridas y de almacenamiento en proyectos solares.",
    points: [
      "EP6 escalable hasta 23.04 kWh",
      "EP12 escalable hasta 46.08 kWh",
      "90% de profundidad de descarga",
      "Nivel de protección IP65",
      "Montaje sobre muro o piso"
    ]
  },
  {
    brand: "NEP",
    model: "BDM-1600 / 2000 / 2250",
    range: "Microinversores",
    summary:
      "Microinversores NEP para instalaciones solares con monitoreo a nivel de panel y opciones de comunicación WiFi o PLC.",
    points: [
      "Modelos BDM-1600, BDM-2000 y BDM-2250",
      "Instalación plug and play",
      "Monitoreo a nivel de panel",
      "Protecciones integradas como GFDI y surge protection",
      "Garantía base 12 años con opción de extensión"
    ]
  },
  {
    brand: "NEP",
    model: "BDH-8KSP-LB / 10KSP-LB / 12KSP-LB",
    range: "Inversor híbrido 48V",
    summary:
      "Solución híbrida NEP para PV, generador, on/off grid y acoplamiento AC/DC, compatible con bancos de baterías de 48V.",
    points: [
      "Modelos 8kW, 10kW y 12kW",
      "Máximo 18kW PV hacia batería y salidas AC",
      "Soporta hasta 10 unidades en paralelo",
      "Whole Home 200A AC passthrough and backup",
      "AFCI y NEP RSD integrados"
    ]
  },
  {
    brand: "NEP",
    model: "PVG-2 / PVG-3 y RSD Solution",
    range: "Rapid Shutdown",
    summary:
      "Dispositivos de apagado rápido a nivel de módulo para seguridad, diagnóstico, monitoreo y compatibilidad con inversores NEP y no NEP.",
    points: [
      "PVG-2 y PVG-3 para apagado rápido",
      "Monitoreo a nivel de módulo",
      "Comunicación PLC de dos vías",
      "Opciones WiFi, Ethernet y celular según solución",
      "PVG-O como gateway/transmisor para inversores no NEP"
    ]
  },
  {
    brand: "NEP",
    model: "Accesorios para microinversores",
    range: "Instalación y comunicación",
    summary:
      "Accesorios comerciales para completar la instalación de microinversores NEP, según la lista enviada por el cliente.",
    points: [
      "Microinversor BDM-2000 / 2250W WiFi",
      "Trunk cable 2.4m 10AWG",
      "End cap para cable troncal",
      "BDNZ-Wifi single phase y three phase",
      "Herramienta de desconexión para microinversor y trunk cable"
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
  const isMicro = product.slug === "microinversores-inversores-rsd";
  const isStructure = product.slug === "estructura-accesorios-electricos";
  const sourceSlides = product.carousel?.length
    ? product.carousel
    : [{ name: product.title, label: product.highlight, image: product.image }];
  const slides = [...sourceSlides, ...sourceSlides];
  const isTechnicalDetail = isPaneles || isMicro;
  const currentPdfPreviews = isMicro ? microPdfPreviews : panelPdfPreviews;
  const currentHighlights = isMicro ? microHighlights : panelHighlights;
  const detailNoteText = isStructure
    ? "Solar Supply confirma disponibilidad, cantidades, compatibilidad de montaje y accesorios necesarios para cada proyecto. La cotización final se valida por WhatsApp según medidas, tipo de techo y requerimientos de instalación."
    : isMicro
      ? "Solar Supply trabaja con soluciones de conversión, respaldo, microinversores y RSD que pueden variar según compatibilidad técnica, baterías, disponibilidad y configuración del proyecto. Para modelos adicionales o fichas actualizadas, la confirmación se realiza por WhatsApp."
      : "Solar Supply trabaja con líneas de paneles que pueden actualizarse según disponibilidad, nuevas tecnologías, potencia vigente y especificación del proyecto. Para modelos adicionales o fichas actualizadas, la confirmación se realiza por WhatsApp.";

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

          {isStructure ? (
            <div className="detailStaticVisual structureDetailVisual" aria-label={`Imagen de ${product.title}`}>
              <Image
                src={product.image}
                alt="Estructuras y accesorios eléctricos para montaje de paneles solares"
                width={1600}
                height={900}
                className="detailStaticImage"
                priority
              />
            </div>
          ) : (
            <div className={`detailVisualCarousel${isTechnicalDetail ? " panelVisualCarousel" : ""}`} aria-label={`Carrusel visual de ${product.title}`}>
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
          )}
        </div>
      </section>

      {isTechnicalDetail && (
        <section className="section panelPdfSection">
          <div className="container">
            <div className="sectionHeader center">
              <span className="eyebrow">Fichas técnicas disponibles</span>
              <h2>{isMicro ? "Primeras páginas de los catálogos de inversores, microinversores y RSD." : "Primeras páginas de los catálogos de paneles."}</h2>
              <p>
                {isMicro
                  ? "Presiona cualquier ficha para verla ampliada. Las referencias pueden variar según inventario, compatibilidad de baterías, configuración del sistema y actualización de cada fabricante."
                  : "Presiona cualquier ficha para verla ampliada. Las referencias pueden variar según inventario, potencia disponible y actualización tecnológica de cada fabricante."}
              </p>
            </div>
            <div className="panelPdfGrid">
              {currentPdfPreviews.map((pdf) => (
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
              <strong>Nota comercial:</strong> {detailNoteText}
            </div>
          </div>
          <ContactBlock />
        </div>
      </section>

      {isTechnicalDetail ? (
        <section className="section softSection">
          <div className="container">
            <div className="sectionHeader center">
              <span className="eyebrow">Información técnica clave</span>
              <h2>{isMicro ? "Referencias de inversores, microinversores y RSD para consulta comercial." : "Referencias de paneles para consulta comercial."}</h2>
              <p>
                {isMicro
                  ? "Resumen de las fichas recibidas para FOX ESS y NEP. Para precio final, compatibilidad, disponibilidad o modelos adicionales, se confirma directamente por WhatsApp."
                  : "Resumen de las fichas recibidas. Para precio final, disponibilidad, equivalencias o modelos adicionales, se confirma directamente por WhatsApp."}
              </p>
            </div>

            <div className="panelInfoGrid">
              {currentHighlights.map((panel) => (
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
                <h3>{isMicro ? "Más modelos, compatibilidades o fichas vigentes" : "Más potencias, nuevas tecnologías o disponibilidad actual"}</h3>
                <p>
                  {isMicro
                    ? "El catálogo puede crecer con nuevos inversores, baterías compatibles, microinversores, accesorios y soluciones RSD. Solar Supply confirma la opción adecuada según inventario, ficha vigente y requerimientos del proyecto."
                    : "El catálogo puede crecer con nuevas líneas y tecnologías de paneles. Solar Supply confirma la opción adecuada según inventario, ficha vigente y requerimientos del proyecto."}
                </p>
              </div>
              <Link
                href={whatsappUrl(isMicro ? "Hola Solar Supply, quiero consultar microinversores, inversores, RSD, compatibilidad de baterías y fichas técnicas." : "Hola Solar Supply, quiero consultar paneles solares disponibles, marcas, potencias y fichas técnicas.")}
                className="primaryButton"
                target="_blank"
                rel="noreferrer"
              >
                Consultar por WhatsApp <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      ) : isStructure && product.catalogItems.length > 0 ? (
        <section className="section softSection structureProductsSection">
          <div className="container">
            <div className="sectionHeader center">
              <span className="eyebrow">Lista de productos CHIKO</span>
              <h2>Productos incluidos para estructuras y accesorios eléctricos.</h2>
              <p>
                La información se muestra en formato de tabla comercial, con imagen referencial, código, descripción y unidad para facilitar la cotización por WhatsApp.
              </p>
            </div>

            <div className="structureProductTable">
              <div className="structureTableHeader" aria-hidden="true">
                <span>#</span>
                <span>Imagen</span>
                <span>Código</span>
                <span>Descripción</span>
                <span>Unidad</span>
              </div>

              {product.catalogItems.map((item, index) => (
                <article className="structureTableRow" key={item.title}>
                  <div className="structureTableIndex">{String(index + 1).padStart(2, "0")}</div>
                  <div className="structureTableImageWrap">
                    <Image src={item.image} alt={item.title} width={520} height={360} className="structureTableImage" />
                  </div>
                  <div className="structureTableCode">
                    <span>Código</span>
                    <strong>{"code" in item ? String(item.code) : "-"}</strong>
                  </div>
                  <div className="structureTableInfo">
                    <span>{item.label}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="tagList compactTags">
                      {item.specs.map((spec) => <small key={spec}>{spec}</small>)}
                    </div>
                  </div>
                  <div className="structureTableUnit">
                    <span>Unidad</span>
                    <strong>{"unit" in item ? String(item.unit) : "-"}</strong>
                  </div>
                </article>
              ))}
            </div>

            <div className="panelConsultBox structureConsultBox">
              <div>
                <span className="eyebrow small">Consulta comercial</span>
                <h3>Cotizar estructuras, rieles y accesorios CHIKO</h3>
                <p>
                  Solar Supply puede confirmar cantidades, disponibilidad y combinación de accesorios según tipo de techo, cantidad de paneles y alcance del proyecto.
                </p>
              </div>
              <Link
                href={whatsappUrl("Hola Solar Supply, quiero cotizar estructuras y accesorios CHIKO de la lista de productos.")}
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
