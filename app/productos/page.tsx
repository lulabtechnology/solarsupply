import type { Metadata } from "next";
import Image from "next/image";
import { brands, productFamilies } from "@/lib/site";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Productos solares",
  description:
    "Catálogo corporativo de Solar Supply: paneles solares, inversores FOX, soluciones NEP, baterías, estructuras y accesorios."
};

export default function ProductosPage() {
  return (
    <>
      <section className="pageHero compactHero">
        <div className="container">
          <span className="eyebrow">Catálogo corporativo</span>
          <h1>Productos solares organizados por familia y línea comercial.</h1>
          <p>
            Solar Supply estructura su oferta para que el cliente pueda identificar con claridad las soluciones principales y consultar disponibilidad según cada proyecto.
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
            eyebrow="Manejo por líneas y marcas"
            title="Una estructura pensada para vender mejor y actualizar más fácil."
            text="Los paneles pueden manejarse por marca, los inversores por fabricante y las estructuras con una referencia discreta de proveedor, permitiendo que la web siga siendo útil aunque cambie la oferta comercial."
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
          <Image src="/images/product-paneles.png" alt="Paneles solares en cubierta comercial" width={1100} height={650} className="wideVisual" />
        </div>
      </section>
    </>
  );
}
