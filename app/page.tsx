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
            <span className="eyebrow">Distribución solar · Panamá, Centroamérica y Suramérica</span>
            <h1>Suministro solar confiable para instaladores, empresas y proyectos con visión internacional.</h1>
            <p>
              Solar Supply, S.A. ofrece paneles solares, inversores, microinversores, baterías, estructuras y accesorios,
              con un enfoque comercial serio, criterio técnico y atención orientada a proyectos reales.
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
              <div><strong>Paneles solares</strong><span>suministro por marca</span></div>
              <div><strong>NEP y FOX ESS</strong><span>catálogos destacados</span></div>
              <div><strong>Respaldo técnico</strong><span>orientación comercial</span></div>
            </div>
          </div>
          <div className="heroVisual">
            <Image src="/images/hero-solar-real.png" alt="Profesionales en una instalación solar comercial" width={900} height={620} priority />
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
            title="Una empresa de suministro solar preparada para crecer con nuevas marcas y nuevas líneas de producto."
            text="La web presenta a Solar Supply como una plataforma corporativa completa: empresa, productos, marcas, servicios técnicos, recursos y contacto comercial en un solo ecosistema."
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
            title="Un catálogo pensado para vender hoy y crecer mañana."
            text="Solar Supply presenta sus productos por carrusel de marcas y catálogos: paneles Trina, Jinko y Canadian; soluciones NEP y FOX ESS; baterías y accesorios eléctricos."
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
              title="Planos y permisología para clientes que compran productos con Solar Supply."
              text="Además del suministro, Solar Supply puede apoyar proyectos que requieran confección de planos, permisología y orientación técnica como un servicio adicional cotizado según el alcance."
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
          <Image src="/images/servicios-planos.png" alt="Revisión técnica de planos para proyecto solar" width={760} height={530} className="roundedVisual" />
        </div>
      </section>

      <section className="section contactSectionHome">
        <div className="container contactHomeGrid">
          <div>
            <SectionHeader
              eyebrow="Contacto comercial"
              title="Cotizaciones según especificación, capacidad y tipo de proyecto."
              text="Cada proyecto solar exige una combinación distinta de equipos y accesorios. Por eso Solar Supply trabaja sobre consulta técnica y cotización personalizada."
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
