import Link from "next/link";

export default function NotFound() {
  return (
    <section className="pageHero compactHero">
      <div className="container centerOnly">
        <span className="eyebrow">Página no encontrada</span>
        <h1>No encontramos esta sección.</h1>
        <p>Vuelve al inicio o revisa el catálogo de productos de Solar Supply.</p>
        <Link href="/" className="primaryButton">Volver al inicio</Link>
      </div>
    </section>
  );
}
