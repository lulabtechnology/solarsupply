import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { productFamilies } from "@/lib/site";

type ProductFamily = (typeof productFamilies)[number];

export function ProductCard({ product }: { product: ProductFamily }) {
  return (
    <article className="productCard">
      <div className="productImageWrap">
        <Image src={product.image} alt={product.title} width={620} height={430} className="productImage" />
        <span className="productBadge">{product.highlight}</span>
      </div>
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
