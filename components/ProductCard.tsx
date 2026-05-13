import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { productFamilies } from "@/lib/site";

type ProductFamily = (typeof productFamilies)[number];

export function ProductCard({ product }: { product: ProductFamily }) {
  const slides = product.carousel ? [...product.carousel, ...product.carousel] : [];

  return (
    <article className="productCard">
      <div className="productImageWrap">
        <Image src={product.image} alt={product.title} width={900} height={620} className="productImage" />
        <span className="productBadge">{product.highlight}</span>
      </div>
      {slides.length > 0 && (
        <div className="productMiniCarousel" aria-label={`Carrusel de ${product.title}`}>
          <div className="productMiniTrack">
            {slides.map((slide, index) => (
              <div className="productMiniSlide" key={`${slide.name}-${index}`}>
                <Image src={slide.image} alt={slide.name} width={160} height={72} />
                <span>{slide.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="productCardBody">
        <span className="eyebrow small">{product.eyebrow}</span>
        <h3>{product.title}</h3>
        <p>{product.summary}</p>
        <Link href={`/productos/${product.slug}`} className="textLink">
          Ver detalle <ArrowRight size={17} />
        </Link>
      </div>
    </article>
  );
}
