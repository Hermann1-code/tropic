"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="accueil" className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Hôtel Tropic Daloa"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          {/* Overline */}
          <p
            className={`mb-6 text-xs font-light tracking-[0.4em] uppercase text-background/80 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Daloa, Côte d&apos;Ivoire
          </p>

          {/* Title */}
          <h1
            className={`mb-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-background transition-all duration-1000 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block text-balance">Hôtel Tropic</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`mx-auto max-w-xl text-lg sm:text-xl font-light leading-relaxed text-background/90 transition-all duration-1000 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Un havre de sérénité où l&apos;élégance contemporaine rencontre la
            chaleur de l&apos;hospitalité africaine.
          </p>

          {/* CTA */}
          <div
            className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-1000 delay-[600ms] ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link
              href="#chambres"
              className="bg-background text-foreground px-10 py-4 text-xs font-medium tracking-widest uppercase transition-all hover:bg-accent hover:text-foreground"
            >
              Découvrir nos chambres
            </Link>
            <Link
              href="#contact"
              className="border border-background/50 text-background px-10 py-4 text-xs font-medium tracking-widest uppercase transition-all hover:bg-background/10"
            >
              Réserver
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-[800ms] ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link
            href="#apropos"
            className="flex flex-col items-center gap-3 text-background/60 hover:text-background transition-colors"
          >
            <span className="text-xs tracking-[0.3em] uppercase">Défiler</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  );
}
