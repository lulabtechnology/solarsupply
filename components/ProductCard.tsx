import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { productFamilies } from "@/lib/site";

type ProductFamily = (typeof productFamilies)[number];

export function ProductCard({ product }: { product: ProductFamily }) {
  const isPaneles = product.slug === "paneles-solares";
  const isMicro = product.slug === "microinversores-inversores-rsd";
  const isStructure = product.slug === "estructura-accesorios-electricos";
  const isStaticProduct = isPaneles || isMicro || isStructure;
  const sourceSlides = product.carousel?.length
    ? product.carousel
    : [{ name: product.title, label: product.highlight, image: product.image }];
  const slides = [...sourceSlides, ...sourceSlides];
  const customMiniLogos = "miniLogos" in product && Array.isArray(product.miniLogos) ? product.miniLogos : [];
  const miniLogoSlides = customMiniLogos.length > 0 ? customMiniLogos : isPaneles ? sourceSlides : [];
  const staticAlt = isPaneles
    ? "Paneles solares instalados en techo comercial"
    : isMicro
      ? "Inversores solares instalados en pared técnica"
      : "Estructuras y accesorios eléctricos para montaje de paneles solares";

  return (
    <article className="productCard">
      {isStaticProduct ? (
        <div className="productImageWrap productStaticVisual" aria-label={`Imagen de ${product.title}`}>
          <Image
            src={product.image}
            alt={staticAlt}
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
        {isStaticProduct && miniLogoSlides.length > 0 && (
          <div className="panelMiniLogoCarousel" aria-label={`Carrusel de marcas de ${product.title}`}>
            <div className="panelMiniLogoTrack">
              {[...miniLogoSlides, ...miniLogoSlides, ...miniLogoSlides].map((slide, index) => (
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
