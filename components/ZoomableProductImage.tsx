"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Search, X } from "lucide-react";

type ZoomableProductImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function ZoomableProductImage({ src, alt, className }: ZoomableProductImageProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="zoomableImageButton"
        onClick={() => setOpen(true)}
        aria-label={`Ampliar imagen de ${alt}`}
      >
        <div className="zoomableImageInner">
          <Image src={src} alt={alt} width={900} height={620} className={className} />
          <span className="zoomableImageHint">
            <Search size={14} />
            Ampliar
          </span>
        </div>
      </button>

      {open && (
        <div className="lightboxBackdrop" role="dialog" aria-modal="true" aria-label={`Vista ampliada de ${alt}`}>
          <button
            type="button"
            className="lightboxClose"
            onClick={() => setOpen(false)}
            aria-label="Cerrar vista ampliada"
          >
            <X size={18} />
          </button>

          <button type="button" className="lightboxScrim" onClick={() => setOpen(false)} aria-hidden="true" />

          <div className="lightboxPanel">
            <Image src={src} alt={alt} width={1600} height={1100} className="lightboxImage" priority />
          </div>
        </div>
      )}
    </>
  );
}
