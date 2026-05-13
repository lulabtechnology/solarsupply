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

          <div className="detailVisualCarousel" aria-label={`Carrusel visual de ${product.title}`}>
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
              <strong>Nota comercial:</strong> la disponibilidad de modelos, marcas y configuraciones puede ajustarse según inventario,
              cotización activa y especificación técnica del proyecto.
            </div>
          </div>
          <ContactBlock />
        </div>
      </section>

      {product.catalogItems.length > 0 && (
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
