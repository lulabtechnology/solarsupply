import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe2, ShieldCheck, SunMedium, Zap } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
import { OfferStrip } from "@/components/OfferStrip";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";
import { productFamilies, services, site, valuePillars, whatsappUrl } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero corporateHero">
        <div className="container heroGrid">
          <div className="heroCopy">
            <span className="eyebrow">Distribución solar · Panamá y mercados internacionales</span>
            <h1>Suministro solar confiable para instaladores, empresas y proyectos de alto crecimiento.</h1>
            <p>
              Solar Supply, S.A. nace para ofrecer productos solares de buen costo, calidad comprobada y respaldo técnico sólido:
              paneles, inversores, microinversores, estructuras, accesorios y nuevas líneas energéticas.
            </p>
            <div className="heroActions">
              <Link href="/productos" className="primaryButton">
                Ver productos <ArrowRight size={18} />
              </Link>
              <Link href={whatsappUrl()} target="_blank" rel="noreferrer" className="secondaryButton">
                Cotizar por WhatsApp
              </Link>
            </div>
            <div className="heroStats">
              <div><strong>Panamá</strong><span>base comercial</span></div>
              <div><strong>Centroamérica</strong><span>visión regional</span></div>
              <div><strong>Suramérica</strong><span>crecimiento</span></div>
            </div>
          </div>
          <div className="heroVisual">
            <Image src="/images/hero-solar-international.svg" alt="Productos solares con visión internacional" width={900} height={620} priority />
          </div>
        </div>
      </section>

      <section className="trustBand">
        <div className="container trustGrid">
          <div><SunMedium size={24} /><span>Paneles solares</span></div>
          <div><Zap size={24} /><span>Inversores y microinversores</span></div>
          <div><ShieldCheck size={24} /><span>Rapid Shutdown y seguridad</span></div>
          <div><Globe2 size={24} /><span>Proyección internacional</span></div>
        </div>
      </section>

      <section className="section">
        <div className="container splitGrid">
          <SectionHeader
            eyebrow="Propuesta corporativa"
            title="Una empresa de suministro solar pensada para crecer más allá de Panamá."
            text="La web se estructura como una plataforma corporativa, no como una landing: permite presentar empresa, productos, marcas, recursos, servicios técnicos y canales de contacto."
          />
          <div className="pillarGrid">
            {valuePillars.map((pillar) => (
              <article key={pillar.title} className="pillarCard">
                <CheckCircle2 size={22} />
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section softSection">
        <div className="container">
          <SectionHeader
            center
            eyebrow="Productos principales"
            title="Catálogo solar organizado para actualizar marcas, fichas y nuevas líneas sin rehacer el sitio."
            text="La estructura permite manejar paneles por marca, inversores por fabricante, NEP como línea específica, accesorios y baterías en negociación."
          />
          <div className="productGrid">
            {productFamilies.slice(0, 4).map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <OfferStrip />

      <section className="section">
        <div className="container servicesPreview">
          <div>
            <SectionHeader
              eyebrow="Servicio adicional"
              title="Planos y permisología para clientes que compran productos."
              text="Este servicio se presenta con claridad: no reemplaza el enfoque de suministro, sino que aumenta el valor técnico para proyectos que necesitan documentación y acompañamiento."
            />
            <div className="miniCards">
              {services.map((service) => (
                <article key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
          <Image src="/images/permisologia.svg" alt="Planos y permisología solar" width={760} height={530} className="roundedVisual" />
        </div>
      </section>

      <section className="section contactSectionHome">
        <div className="container contactHomeGrid">
          <div>
            <SectionHeader
              eyebrow="Contacto comercial"
              title="Cotizaciones según especificación de cada proyecto."
              text="Cada proyecto solar tiene capacidades, marcas, accesorios y condiciones distintas. Por eso la llamada a la acción principal es conversar y cotizar con criterio técnico."
            />
            <div className="contactQuickInfo">
              <p><strong>Teléfono:</strong> {site.phone}</p>
              <p><strong>Correo:</strong> {site.email}</p>
              <p><strong>Dirección:</strong> {site.address}</p>
            </div>
          </div>
          <InquiryForm compact />
        </div>
      </section>
    </>
  );
}
