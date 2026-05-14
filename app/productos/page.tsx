import type { Metadata } from "next";
import { brands, productFamilies } from "@/lib/site";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Productos solares",
  description:
    "Catálogo corporativo de Solar Supply: paneles solares Trina, Jinko y Canadian, microinversores, inversores, RSD, baterías FOX ESS, estructuras y accesorios eléctricos."
};

export default function ProductosPage() {
  return (
    <>
      <section className="pageHero compactHero">
        <div className="container">
          <span className="eyebrow">Catálogo corporativo</span>
          <h1>Equipos solares organizados para cotizar por marca y aplicación.</h1>
          <p>
            Seleccione la familia que necesita y revise las líneas disponibles: paneles solares, microinversores, inversores, RSD, baterías, estructuras y accesorios para proyectos fotovoltaicos.
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
            eyebrow="Catálogo por familias"
            title="Marcas visibles y productos organizados para consulta comercial."
            text="Cada categoría está pensada para presentar primero las marcas principales y luego resumir la información clave de los productos disponibles para cotización."
          />
          <div className="brandGrid brandGridFour">
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
        </div>
      </section>
    </>
  );
}
