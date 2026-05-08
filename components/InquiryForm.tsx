"use client";

import { useMemo, useState } from "react";
import { CalendarDays, Mail, MessageCircle, Send } from "lucide-react";
import { site, whatsappUrl } from "@/lib/site";

export function InquiryForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    product: "Paneles solares",
    message: ""
  });

  const message = useMemo(() => {
    return [
      "Hola Solar Supply, quiero solicitar una cotización.",
      `Nombre: ${form.name || "-"}`,
      `Empresa: ${form.company || "-"}`,
      `Teléfono: ${form.phone || "-"}`,
      `Correo: ${form.email || "-"}`,
      `Producto de interés: ${form.product || "-"}`,
      `Mensaje: ${form.message || "-"}`
    ].join("\n");
  }, [form]);

  const mailHref = `mailto:${site.email}?subject=${encodeURIComponent("Solicitud de cotización - Solar Supply")}&body=${encodeURIComponent(message)}`;

  function update(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  return (
    <div className={compact ? "formCard compact" : "formCard"}>
      <div className="formHeader">
        <span className="eyebrow">Cotización técnica</span>
        <h2>Cuéntanos qué necesitas suministrar</h2>
        <p>
          El formulario genera un mensaje ordenado para WhatsApp o correo, ideal para proyectos con
          especificaciones diferentes.
        </p>
      </div>

      <form className="contactForm" onSubmit={(event) => event.preventDefault()}>
        <div className="formRow">
          <label>
            Nombre
            <input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Nombre completo" />
          </label>
          <label>
            Empresa
            <input value={form.company} onChange={(e) => update("company", e.target.value)} placeholder="Empresa o proyecto" />
          </label>
        </div>
        <div className="formRow">
          <label>
            Teléfono
            <input value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="WhatsApp o teléfono" />
          </label>
          <label>
            Correo
            <input value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="correo@empresa.com" />
          </label>
        </div>
        <label>
          Producto de interés
          <select value={form.product} onChange={(e) => update("product", e.target.value)}>
            <option>Paneles solares</option>
            <option>Inversores FOX</option>
            <option>NEP Microinversores 2,250 W</option>
            <option>NEP Híbrido 12 kW</option>
            <option>Rapid Shutdown</option>
            <option>Estructuras y accesorios</option>
            <option>Baterías solares</option>
            <option>Planos y permisología</option>
          </select>
        </label>
        <label>
          Mensaje
          <textarea value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Ejemplo: necesito cotizar equipos para un proyecto residencial de 10 kW..." />
        </label>
        <div className="formActions">
          <a href={whatsappUrl(message)} target="_blank" rel="noreferrer" className="primaryButton">
            <MessageCircle size={18} /> Enviar por WhatsApp
          </a>
          <a href={mailHref} className="secondaryButton">
            <Mail size={18} /> Enviar por correo
          </a>
          <a href={`mailto:${site.email}?subject=${encodeURIComponent("Agendar llamada técnica - Solar Supply")}`} className="ghostButton">
            <CalendarDays size={18} /> Agendar llamada
          </a>
        </div>
      </form>
    </div>
  );
}
