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
          <Image src={product.image} alt={product.title} width={760} height={530} className="roundedVisual" />
        </div>
      </section>

      <section className="section">
        <div className="container detailContentGrid">
          <div className="detailCard">
            <span className="productBadge static">{product.highlight}</span>
            <h2>Enfoque comercial</h2>
            <ul className="checkList">
              {product.items.map((item) => (
                <li key={item}><CheckCircle2 size={20} /> <span>{item}</span></li>
              ))}
            </ul>
            <div className="detailNote">
              <strong>Importante:</strong> la disponibilidad de modelos y marcas puede variar según inventario,
              negociación comercial y especificación del proyecto. Solar Supply orienta la selección final de acuerdo con cada requerimiento.
            </div>
          </div>
          <ContactBlock />
        </div>
      </section>
    </>
  );
}
