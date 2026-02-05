"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const images = [
  {
    src: "/images/detente.jpg",
    alt: "Extérieur",
    span: "md:col-span-2 md:row-span-2",
  },
  { src: "/images/room-standard.jpg", alt: "Standard" },
  { src: "/images/room-standard.jpg", alt: "Confort" },
  { src: "/images/recept.jpg", alt: "Hall", span: "md:col-span-2" },
  { src: "/images/salle.jpg", alt: "Salle de reunion" },
  { src: "/images/piscine.jpg", alt: "Piscine" },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  return (
    <section id="galerie" className="py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8 transition-all duration-1000 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <p className="mb-6 text-xs font-light tracking-[0.4em] uppercase text-accent">
              Galerie
            </p>
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground">
              <span className="text-balance">Découvrez nos espaces</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground font-light">
            Explorez l&apos;atmosphère unique de l&apos;Hôtel Tropic à travers
            notre sélection d&apos;images.
          </p>
        </div>

        {/* Gallery Grid */}
        <div ref={gridRef} className="grid md:grid-cols-4 gap-2">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelectedImage(image.src)}
              className={`group relative aspect-square overflow-hidden transition-all duration-700 ${image.span || ""} ${
                gridVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs tracking-[0.3em] uppercase text-background">
                  {image.alt}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95 p-6"
          onClick={() => setSelectedImage(null)}
          onKeyDown={(e) => e.key === "Escape" && setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-6 top-6 h-12 w-12 flex items-center justify-center border border-background/20 text-background hover:bg-background/10 transition-colors"
            aria-label="Fermer"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="relative h-[80vh] w-full max-w-6xl">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Image agrandie"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
