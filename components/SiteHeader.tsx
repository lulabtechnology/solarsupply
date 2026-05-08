"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, whatsappUrl } from "@/lib/site";
import { Logo } from "@/components/Logo";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="siteHeader">
      <div className="container headerInner">
        <Logo compact />

        <nav className="desktopNav" aria-label="Navegación principal">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href} className={active ? "navActive" : ""}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link href={whatsappUrl()} className="headerCta" target="_blank" rel="noreferrer">
          Cotizar ahora
        </Link>

        <button className="menuButton" onClick={() => setOpen((value) => !value)} aria-label="Abrir menú">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="mobileNav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href={whatsappUrl()} className="mobileCta" target="_blank" rel="noreferrer">
            Cotizar por WhatsApp
          </Link>
        </div>
      )}
    </header>
  );
}
