import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { productFamilies } from "@/lib/site";

type ProductFamily = (typeof productFamilies)[number];

export function ProductCard({ product }: { product: ProductFamily }) {
  const isPaneles = product.slug === "paneles-solares";
  const sourceSlides = product.carousel?.length
    ? product.carousel
    : [{ name: product.title, label: product.highlight, image: product.image }];
  const slides = [...sourceSlides, ...sourceSlides];

  return (
    <article className="productCard">
      {isPaneles ? (
        <div className="productImageWrap productStaticVisual" aria-label={`Imagen de ${product.title}`}>
          <Image
            src={product.image}
            alt="Paneles solares instalados en techo comercial"
            width={1600}
            height={900}
            className="productStaticImage"
          />
        </div>
      ) : (
        <div className="productImageWrap productHeroCarousel" aria-label={`Carrusel visual de ${product.title}`}>
          <div className="productHeroTrack">
            {slides.map((slide, index) => (
              <div className="productHeroSlide" key={`${slide.name}-${index}`}>
                <Image src={slide.image} alt={slide.name} width={900} height={620} className="productImage" />
                <div className="productSlideCaption">
                  <strong>{slide.name}</strong>
                  <span>{slide.label}</span>
                </div>
              </div>
            ))}
          </div>
          <span className="productBadge">{product.highlight}</span>
        </div>
      )}
      <div className="productCardBody">
        <span className="eyebrow small">{product.eyebrow}</span>
        <h3>{product.title}</h3>
        <p>{product.summary}</p>
        <Link href={`/productos/${product.slug}`} className="textLink">
          Ver detalle <ArrowRight size={17} />
        </Link>
        {isPaneles && (
          <div className="panelMiniLogoCarousel" aria-label="Carrusel de marcas de paneles solares">
            <div className="panelMiniLogoTrack">
              {[...sourceSlides, ...sourceSlides].map((slide, index) => (
                <div className="panelMiniLogoSlide" key={`${slide.name}-mini-${index}`}>
                  <Image src={slide.image} alt={slide.name} width={260} height={120} className="panelMiniLogoImage" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
