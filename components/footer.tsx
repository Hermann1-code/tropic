import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

const navLinks = [
  { href: "#apropos", label: "À propos" },
  { href: "#chambres", label: "Chambres" },
  { href: "#services", label: "Services" },
  { href: "#galerie", label: "Galerie" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-foreground py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link href="#accueil" className="inline-block mb-6">
              <span className="text-2xl font-light tracking-[0.2em] uppercase text-background">
                Tropic
              </span>
              <span className="text-2xl font-light text-accent">.</span>
            </Link>
            <p className="text-background/60 font-light leading-relaxed max-w-xs">
              Votre havre de sérénité au cœur de Daloa, Côte d&apos;Ivoire.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-background/40 mb-6">
              Navigation
            </p>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-background/60 hover:text-background transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-background/40 mb-6">
              Contact
            </p>
            <div className="space-y-3 text-sm text-background/60">
              <p>+225 00 00 00 00 00</p>
              <p>contact@hoteltropic-daloa.ci</p>
              <p>Daloa, Côte d&apos;Ivoire</p>
            </div>
            
            {/* Social */}
            <div className="flex gap-4 mt-8">
              <Link
                href="https://facebook.com/hoteltropicdaloa"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center border border-background/20 text-background/60 hover:border-accent hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="https://instagram.com/hoteltropicdaloa"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center border border-background/20 text-background/60 hover:border-accent hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} Hôtel Tropic Daloa. Tous droits réservés.
          </p>
          <p className="text-xs text-background/40">
            Conçu avec passion
          </p>
        </div>
      </div>
    </footer>
  );
}
