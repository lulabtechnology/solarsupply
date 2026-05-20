import Link from "next/link";
import { Facebook, Globe, Instagram, Mail, MapPin, MessageCircle, Music2, Phone } from "lucide-react";
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

          <div className="footerExtraPanel">
            <ul className="footerSocialList">
              <li>
                <a href={site.footerWhatsappUrl} target="_blank" rel="noreferrer" className="footerSocialLink">
                  <span className="footerSocialIcon whatsapp"><MessageCircle size={16} /></span>
                  <span>
                    <strong>WhatsApp directo</strong>
                    <small>Escríbenos por WhatsApp</small>
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${site.footerSalesEmail}`} className="footerSocialLink">
                  <span className="footerSocialIcon email"><Mail size={16} /></span>
                  <span>
                    <strong>Correo de ventas</strong>
                    <small>{site.footerSalesEmail}</small>
                  </span>
                </a>
              </li>
              <li>
                <a href={site.websiteUrl} target="_blank" rel="noreferrer" className="footerSocialLink">
                  <span className="footerSocialIcon web"><Globe size={16} /></span>
                  <span>
                    <strong>Sitio web</strong>
                    <small>www.solarsupplysa.com</small>
                  </span>
                </a>
              </li>
              <li>
                <a href={site.instagramUrl} target="_blank" rel="noreferrer" className="footerSocialLink">
                  <span className="footerSocialIcon instagram"><Instagram size={16} /></span>
                  <span>
                    <strong>Instagram</strong>
                    <small>@solar_supply_</small>
                  </span>
                </a>
              </li>
              <li>
                <a href={site.facebookUrl} target="_blank" rel="noreferrer" className="footerSocialLink">
                  <span className="footerSocialIcon facebook"><Facebook size={16} /></span>
                  <span>
                    <strong>Facebook</strong>
                    <small>Solar Supply SA</small>
                  </span>
                </a>
              </li>
              <li>
                <a href={site.tiktokUrl} target="_blank" rel="noreferrer" className="footerSocialLink">
                  <span className="footerSocialIcon tiktok"><Music2 size={16} /></span>
                  <span>
                    <strong>TikTok</strong>
                    <small>@solar_supply_</small>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
