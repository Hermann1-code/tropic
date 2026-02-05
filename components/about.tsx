"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function About() {
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section id="apropos" className="py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div
            ref={imageRef}
            className={`relative aspect-square overflow-hidden transition-all duration-1000 ${
              imageVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <Image
              src="/images/recept.jpg"
              alt="Hall de l'Hôtel Tropic"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div
            ref={contentRef}
            className={`lg:pl-8 transition-all duration-1000 delay-300 ${
              contentVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <p className="mb-6 text-xs font-light tracking-[0.4em] uppercase text-accent">
              Notre histoire
            </p>

            <h2 className="mb-8 text-4xl sm:text-5xl font-light tracking-tight text-foreground">
              <span className="text-balance">
                L&apos;art de l&apos;hospitalité
              </span>
            </h2>

            <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
              <p>
                Niché au coeur de Daloa, l&apos;Hôtel Tropic incarne une vision
                contemporaine de l&apos;hospitalité ivoirienne. Chaque détail a
                été pensé pour créer une expérience où confort et authenticité
                se rencontrent.
              </p>
              <p>
                Notre établissement allie design épuré et touches locales,
                offrant un refuge paisible pour les voyageurs en quête
                d&apos;excellence et de sérénité.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 pt-12 border-t border-border grid grid-cols-3 gap-8">
              {[
                { value: "10+", label: "Années" },
                { value: "500+", label: "Clients" },
                { value: "4.8", label: "Note", accent: true },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className={`transition-all duration-700 ${
                    contentVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${600 + index * 150}ms` }}
                >
                  <p
                    className={`text-3xl sm:text-4xl font-light ${stat.accent ? "text-accent" : "text-foreground"}`}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs tracking-wider uppercase text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
