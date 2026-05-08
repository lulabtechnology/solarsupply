import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navItems, productFamilies, site, whatsappUrl } from "@/lib/site";
import { Logo } from "@/components/Logo";

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="container footerGrid">
        <div className="footerBrand">
          <Logo compact />
          <p>
            {site.tagline} Suministro de paneles, inversores, microinversores, estructuras,
            accesorios y líneas solares en crecimiento.
          </p>
          <Link href="https://www.lulabtech.com/" target="_blank" rel="noreferrer" className="creditLink">
            Diseño y construcción por LulabTech
          </Link>
        </div>

        <div>
          <h3>Navegación</h3>
          <ul className="footerList">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Productos</h3>
          <ul className="footerList">
            {productFamilies.slice(0, 5).map((product) => (
              <li key={product.slug}>
                <Link href={`/productos/${product.slug}`}>{product.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Contacto</h3>
          <ul className="footerContact">
            <li>
              <Phone size={17} /> <span>{site.phone} · WhatsApp {site.whatsappLabel}</span>
            </li>
            <li>
              <Mail size={17} /> <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <MapPin size={17} /> <span>{site.address}</span>
            </li>
          </ul>
          <Link href={whatsappUrl()} className="footerCta" target="_blank" rel="noreferrer">
            Solicitar cotización
          </Link>
        </div>
      </div>
    </footer>
  );
}
