"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function Preloader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("solar-supply-preloader");
    if (!seen) {
      setVisible(true);
      const timer = window.setTimeout(() => {
        sessionStorage.setItem("solar-supply-preloader", "true");
        setVisible(false);
      }, 950);
      return () => window.clearTimeout(timer);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="preloader" aria-label="Cargando Solar Supply">
      <div className="preloaderCard">
        <Image src="/brand/logo-solarsupply.png" alt="Solar Supply" width={310} height={95} priority />
        <div className="preloaderBar"><span /></div>
      </div>
    </div>
  );
}
