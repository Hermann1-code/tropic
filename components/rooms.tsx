"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Wifi, Tv, Wind, Bath, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const rooms = [
  {
    name: "Standard",
    tagline: "L'essentiel du confort",
    description: "Un espace épuré et fonctionnel pour un séjour agréable.",
    image: "/images/room-standard.jpg",
    price: "25 000",
    size: "18m²",
  },
  {
    name: "Confort",
    tagline: "L'équilibre parfait",
    description: "Spacieuse et lumineuse, idéale pour les séjours prolongés.",
    image: "/images/room-standard.jpg",
    price: "40 000",
    size: "25m²",
    featured: true,
  },
  {
    name: "Suite",
    tagline: "L'excellence absolue",
    description:
      "Notre meilleure catégorie pour une expérience exceptionnelle.",
    image: "/images/room-standard.jpg",
    price: "65 000",
    size: "35m²",
  },
];

const amenities = [
  { icon: Wind, label: "Climatisation" },
  { icon: Wifi, label: "Wi-Fi" },
  { icon: Tv, label: "TV" },
  { icon: Bath, label: "Salle de bain" },
];

export function Rooms() {
  const [activeRoom, setActiveRoom] = useState(1);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  return (
    <section id="chambres" className="py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-20 max-w-2xl transition-all duration-1000 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <p className="mb-6 text-xs font-light tracking-[0.4em] uppercase text-accent">
            Nos chambres
          </p>
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground">
            <span className="text-balance">
              Des espaces pensés pour votre bien-être
            </span>
          </h2>
        </div>

        {/* Rooms Grid */}
        <div ref={gridRef} className="grid lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={room.name}
              className={`group cursor-pointer transition-all duration-700 ${
                activeRoom === index ? "lg:-translate-y-4" : ""
              } ${gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setActiveRoom(index)}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden mb-6">
                <Image
                  src={room.image || "/placeholder.svg"}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {room.featured && (
                  <div className="absolute top-6 left-6 bg-accent text-foreground px-4 py-2 text-xs tracking-widest uppercase">
                    Populaire
                  </div>
                )}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div>
                <p className="text-xs tracking-wider uppercase text-muted-foreground mb-2">
                  {room.tagline}
                </p>
                <h3 className="text-2xl font-light text-foreground mb-3">
                  Chambre {room.name}
                </h3>
                <p className="text-muted-foreground font-light mb-6">
                  {room.description}
                </p>

                {/* Amenities */}
                <div className="flex gap-4 mb-6">
                  {amenities.map((amenity) => (
                    <div
                      key={amenity.label}
                      className="h-10 w-10 flex items-center justify-center border border-border text-muted-foreground"
                      title={amenity.label}
                    >
                      <amenity.icon className="h-4 w-4" />
                    </div>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-end justify-between pt-6 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">
                      À partir de
                    </p>
                    <p className="text-2xl font-light text-foreground">
                      {room.price}
                      <span className="text-sm text-muted-foreground ml-1">
                        FCFA
                      </span>
                    </p>
                  </div>
                  <Link
                    href="#contact"
                    className="flex items-center gap-2 text-xs tracking-wider uppercase text-foreground hover:text-accent transition-colors"
                  >
                    Réserver
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
