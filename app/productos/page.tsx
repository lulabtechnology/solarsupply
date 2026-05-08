import type { Metadata } from "next";
import Image from "next/image";
import { brands, productFamilies } from "@/lib/site";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Productos solares",
  description:
    "Catálogo corporativo de Solar Supply: paneles solares, inversores FOX, microinversores NEP, Rapid Shutdown, baterías, estructuras y accesorios."
};

export default function ProductosPage() {
  return (
    <>
      <section className="pageHero compactHero">
        <div className="container">
          <span className="eyebrow">Catálogo corporativo</span>
          <h1>Productos solares organizados por familia y marca.</h1>
          <p>
            La página está preparada para crecer con nuevas marcas, fichas técnicas, ofertas, baterías, lámparas y productos complementarios.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container productGrid allProducts">
          {productFamilies.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="section softSection">
        <div className="container brandSection">
          <SectionHeader
            eyebrow="Manejo por marcas"
            title="La estructura permite actualizar productos sin complicar el mantenimiento."
            text="Los inversores se manejan por marca, los paneles por disponibilidad y las estructuras con marca discreta para facilitar cambios comerciales."
          />
          <div className="brandGrid">
            {brands.map((brand) => (
              <article className="brandCard" key={brand.name}>
                <span>{brand.category}</span>
                <h3>{brand.name}</h3>
                <p>{brand.description}</p>
                <div className="tagList">
                  {brand.products.map((product) => <small key={product}>{product}</small>)}
                </div>
              </article>
            ))}
          </div>
          <Image src="/images/hero-solar-international.svg" alt="Catálogo solar internacional" width={1100} height={650} className="wideVisual" />
        </div>
      </section>
    </>
  );
}
