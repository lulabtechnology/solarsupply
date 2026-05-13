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
          <h1>Productos solares organizados por marcas, catálogos y líneas comerciales.</h1>
          <p>
            Cada familia muestra un carrusel de marcas o productos para que el cliente identifique primero la categoría y luego entre al detalle de lo que Solar Supply puede cotizar.
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
            eyebrow="Nueva lógica de productos"
            title="Marcas por fuera, productos y catálogos dentro de cada familia."
            text="La sección queda preparada para trabajar por tandas: primero se muestran las marcas principales y, al entrar en cada categoría, se despliegan productos, catálogos e imágenes específicas."
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
