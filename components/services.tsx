"use client";

import {
  Wifi,
  Car,
  UtensilsCrossed,
  ConciergeBell,
  Clock,
  Coffee,
  Shirt,
  Users,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const services = [
  { icon: Wifi, title: "Wi-Fi Gratuit", description: "Haut débit" },
  { icon: Car, title: "Parking", description: "Gardé 24h/24" },
  { icon: UtensilsCrossed, title: "Restaurant", description: "Cuisine locale" },
  { icon: Coffee, title: "Bar", description: "Cocktails" },
  { icon: ConciergeBell, title: "Room Service", description: "À la demande" },
  { icon: Clock, title: "Réception", description: "24h/24" },
  { icon: Shirt, title: "Blanchisserie", description: "Express" },
  { icon: Users, title: "Conférence", description: "Équipée" },
];

export function Services() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-32 bg-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`mb-20 text-center max-w-2xl mx-auto transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="mb-6 text-xs font-light tracking-[0.4em] uppercase text-accent">
            Services
          </p>
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-background">
            <span className="text-balance">
              Tout pour votre confort
            </span>
          </h2>
        </div>

        {/* Services Grid */}
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-px bg-background/10">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-foreground p-8 sm:p-12 text-center hover:bg-foreground/80 transition-all duration-700 ${
                gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex h-14 w-14 items-center justify-center border border-background/20 text-background/60 mb-6 group-hover:border-accent group-hover:text-accent transition-colors">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-medium tracking-wider uppercase text-background mb-2">
                {service.title}
              </h3>
              <p className="text-xs text-background/50">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
