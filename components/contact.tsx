"use client";

import React from "react"

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowUpRight, Send, CalendarDays, User, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const contactInfo = [
  {
    icon: MapPin,
    label: "Adresse",
    value: "Daloa, Côte d'Ivoire",
    detail: "Quartier Commerce",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+225 00 00 00 00 00",
    detail: "Disponible 24h/24",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@hoteltropic-daloa.ci",
    detail: "Réponse sous 24h",
  },
  {
    icon: Clock,
    label: "Réception",
    value: "24h/24, 7j/7",
    detail: "À votre service",
  },
];

const roomTypes = [
  { value: "standard", label: "Chambre Standard - 25 000 FCFA" },
  { value: "confort", label: "Chambre Confort - 40 000 FCFA" },
  { value: "suite", label: "Suite - 65 000 FCFA" },
];

export function Contact() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    roomType: "confort",
    guests: "1",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Bonjour, je souhaite réserver :
- Nom : ${formData.name}
- Email : ${formData.email}
- Téléphone : ${formData.phone}
- Arrivée : ${formData.checkIn}
- Départ : ${formData.checkOut}
- Chambre : ${roomTypes.find(r => r.value === formData.roomType)?.label}
- Personnes : ${formData.guests}
${formData.message ? `- Message : ${formData.message}` : ""}`;
    
    window.open(`https://wa.me/2250000000000?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`mb-20 text-center max-w-2xl mx-auto transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="mb-6 text-xs font-light tracking-[0.4em] uppercase text-accent">
            Réservation
          </p>
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground">
            <span className="text-balance">
              Réservez votre séjour
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Reservation Form */}
          <div 
            ref={formRef}
            className={`transition-all duration-1000 delay-200 ${
              formVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs tracking-wider uppercase text-muted-foreground mb-3">
                    Nom complet
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom"
                      className="w-full bg-background border-0 pl-12 pr-4 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs tracking-wider uppercase text-muted-foreground mb-3">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="votre@email.com"
                      className="w-full bg-background border-0 pl-12 pr-4 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-xs tracking-wider uppercase text-muted-foreground mb-3">
                  Téléphone
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+225 00 00 00 00 00"
                    className="w-full bg-background border-0 pl-12 pr-4 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
              </div>

              {/* Check-in & Check-out */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="checkIn" className="block text-xs tracking-wider uppercase text-muted-foreground mb-3">
                    Date d&apos;arrivée
                  </label>
                  <div className="relative">
                    <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="date"
                      id="checkIn"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      required
                      className="w-full bg-background border-0 pl-12 pr-4 py-4 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="checkOut" className="block text-xs tracking-wider uppercase text-muted-foreground mb-3">
                    Date de départ
                  </label>
                  <div className="relative">
                    <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="date"
                      id="checkOut"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      required
                      className="w-full bg-background border-0 pl-12 pr-4 py-4 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                </div>
              </div>

              {/* Room Type & Guests */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="roomType" className="block text-xs tracking-wider uppercase text-muted-foreground mb-3">
                    Type de chambre
                  </label>
                  <select
                    id="roomType"
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    className="w-full bg-background border-0 px-4 py-4 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-accent appearance-none cursor-pointer"
                  >
                    {roomTypes.map(room => (
                      <option key={room.value} value={room.value}>{room.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="guests" className="block text-xs tracking-wider uppercase text-muted-foreground mb-3">
                    Nombre de personnes
                  </label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full bg-background border-0 pl-12 pr-4 py-4 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-accent appearance-none cursor-pointer"
                    >
                      {[1, 2, 3, 4].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? "personne" : "personnes"}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs tracking-wider uppercase text-muted-foreground mb-3">
                  Message (optionnel)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Demandes spéciales, questions..."
                  className="w-full bg-background border-0 px-4 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent resize-none"
                />
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  className="flex items-center justify-center gap-3 bg-foreground text-background px-8 py-4 text-xs font-medium tracking-widest uppercase hover:bg-accent transition-colors"
                >
                  <Send className="h-4 w-4" />
                  Envoyer via WhatsApp
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                <Link
                  href="tel:+2250000000000"
                  className="flex items-center justify-center gap-3 border border-foreground text-foreground px-8 py-4 text-xs font-medium tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Appeler directement
                </Link>
              </div>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div 
            ref={infoRef}
            className={`transition-all duration-1000 delay-400 ${
              infoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {contactInfo.map((info, index) => (
                <div 
                  key={info.label}
                  className="transition-all duration-700"
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  <info.icon className="h-5 w-5 text-accent mb-4" />
                  <p className="text-xs tracking-wider uppercase text-muted-foreground mb-1">
                    {info.label}
                  </p>
                  <p className="text-foreground font-medium">{info.value}</p>
                  <p className="text-sm text-muted-foreground">{info.detail}</p>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="relative aspect-video overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31836.89750967987!2d-6.4631!3d6.8771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfb90a26c1e64303%3A0x8b5b0f92b15f0c9!2sDaloa%2C%20C%C3%B4te%20d&#39;Ivoire!5e0!3m2!1sfr!2sfr!4v1706700000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
