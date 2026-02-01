"use client";

import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion, useSpring, useReducedMotion } from "framer-motion";

/* -------------------------------------------
  COPY — FR - KOMSOLUTION SA
------------------------------------------- */
const COPY_FR = {
  brand: {
    name: "Komsolution SA",
    label: "Bureau d'études",
    subline: "Engineering • Wireline • Wireless • IT",
  },
  nav: {
    services: "Services",
    expertise: "Expertise",
    team: "Équipe",
    cta: "Parler à un expert →",
  },
  hero: {
    badge: "Disponible pour nouveaux projets • Depuis 2021",
    eyebrow: "Bureau d'études télécom • Fibre (FTTx) & Wireless",
    title1: "Ingénierie FTTX",
    title2: "sur mesure",
    lead: "Notre expertise à votre service. Découvrez nos services d'ingénierie télécom et profitez de l'expertise de notre bureau d'études.",
    primary: "Découvrir nos services →",
    secondary: "Nous contacter",
  },
  trust: { title: "Ils nous font confiance" },
  stats: [
    { value: "22'000+", label: "BEP Orders délivrés" },
    { value: "10'000+", label: "Projets Infra Swisscom" },
    { value: "70+", label: "Communes Designées (FTTH)" },
    { value: "4-12h", label: "Délai de réponse Express" },
  ],
  services: {
    eyebrow: "Nos services",
    title: "Solutions d'infrastructure télécom",
    subtitle: "Trois pôles d'expertise. Un seul objectif : livrer un réseau propre, documenté, exploitable.",
    ctaCard: "En savoir plus →",
    items: [
      {
        icon: "⚡",
        title: "Wireline",
        subtitle: "FTTH, FTTO/M, FTTS/B",
        description: "Notre bureau d'études Wireline est le cœur de notre expertise en infrastructures de télécommunication filaires. De l'étude de faisabilité initiale à la documentation finale pour le déploiement optique.",
      },
      {
        icon: "📡",
        title: "Wireless",
        subtitle: "Planification radio",
        description: "Notre bureau d'études Wireless apporte une expertise pointue dans les technologies sans fil. Planification d'infrastructure, maintenance, gestion de projet et procédures d'autorisation.",
      },
      {
        icon: "🖥️",
        title: "IT & Design",
        subtitle: "Solutions numériques",
        description: "Services pour aider les entreprises à s'améliorer. Produits faciles à utiliser, fonctionnels et sécurisés qui fournissent des résultats à long terme.",
      },
    ],
  },
  expertise: {
    eyebrow: "Pourquoi nous choisir",
    title: "Notre expertise à votre service",
    p1: "Fondée en 2021, Komsolution SA s'appuie sur une décennie d'expérience dans le domaine FTTx. Notre approche unique repose sur la création de structures sur mesure, parfaitement adaptées aux besoins spécifiques de chaque client.",
    p2: "Nous sommes convaincus que le bien-être est la clé de la performance, c'est pourquoi nous collaborons étroitement avec des partenaires partageant nos valeurs.",
    pillars: [
      { icon: "⚡", title: "Équipe Agile", desc: "Adaptabilité et flexibilité pour répondre rapidement aux défis." },
      { icon: "📚", title: "Formation Continue", desc: "Investissement constant dans le développement des compétences." },
      { icon: "🚀", title: "Réactivité", desc: "Capacité à répondre rapidement aux demandes urgentes." },
      { icon: "🏆", title: "Expertise", desc: "Connaissance approfondie des technologies FTTx et wireless." },
    ],
    blueprint: {
      eyebrow: "Notre méthode",
      title: "Une approche structurée",
      lead: "De l'étude de faisabilité à la documentation finale, nous vous accompagnons à chaque étape.",
      items: ["Étude de faisabilité", "Conception & Plans", "Coordination terrain", "Documentation finale"],
      mode: "Mode: Précision",
      status: "Signal actif",
    },
  },
  team: {
    eyebrow: "Notre équipe",
    title: "Des experts passionnés",
    subtitle: "Une équipe qualifiée, formée en continu, orientée qualité et résultats.",
    focusLabel: "Focus",
    hint: "Cliquez sur les points pour naviguer",
  },
  contact: {
    eyebrow: "Contact",
    title: "Prêt à propulser votre infrastructure ?",
    lead: "Komsolution SA est là pour vous accompagner à chaque étape. Contactez-nous dès aujourd'hui.",
    cards: [
      { icon: "📞", label: "Téléphone", value: "+41 79 562 56 55 / +41 79 702 72 96" },
      { icon: "✉️", label: "Email", value: "info@komsolution.ch" },
      { icon: "📍", label: "Adresse", value: "Av. des Baumettes 7, 1020 Renens" },
    ],
    formTitle: "Envoyez-nous un message",
    formLead: "Réponse rapide garantie.",
    formButton: "Envoyer →",
    policy: "En envoyant, vous acceptez notre politique de confidentialité.",
    placeholders: { name: "Nom *", company: "Société", email: "Email *", phone: "Téléphone", message: "Votre projet *" },
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions fréquentes",
    items: [
      { q: "Comment pouvons-nous vous aider ?", a: "Nous offrons une gamme complète de services, de l'étude de faisabilité à la maintenance, en passant par le déploiement de réseaux FTTH et wireless." },
      { q: "Quelles sont vos zones d'intervention ?", a: "Komsolution SA intervient sur l'ensemble du territoire suisse (romande et alémanique) et peut également prendre en charge des projets internationaux." },
      { q: "Comment démarrer une collaboration ?", a: "Il suffit de nous contacter par téléphone, email ou via le formulaire. Nous organiserons rapidement une première consultation." },
    ],
  },
  footer: {
    tagline: "Bureau d'études télécom — FTTx, wireless, IT & design. Basé à Renens, Suisse.",
    rights: "© 2025 Komsolution SA. Tous droits réservés.",
    legal: { mentions: "Mentions légales", data: "Protection des données" },
  },
};

/* -------------------------------------------
  COPY — DE - KOMSOLUTION SA
------------------------------------------- */
const COPY_DE = {
  brand: { name: "Komsolution SA", label: "Planungsbüro", subline: "Engineering • Festnetz • Funk • IT" },
  nav: { services: "Leistungen", expertise: "Expertise", team: "Team", cta: "Kontakt aufnehmen →" },
  hero: {
    badge: "Verfügbar für neue Projekte • Seit 2021",
    eyebrow: "Telekom-Engineering • Glasfaser (FTTx) & Funk",
    title1: "FTTx-Engineering",
    title2: "massgeschneidert",
    lead: "Unsere Expertise in Ihrem Dienst. Entdecken Sie unsere Telekom-Engineering-Dienstleistungen.",
    primary: "Leistungen entdecken →",
    secondary: "Kontakt aufnehmen",
  },
  trust: { title: "Sie vertrauen uns" },
  stats: [
    { value: "6000+", label: "Gelieferte Projekte" },
    { value: "2700+", label: "Rollout-Designs" },
    { value: "20+", label: "Gemeinden" },
    { value: "4-12h", label: "Express" },
  ],
  services: {
    eyebrow: "Unsere Leistungen",
    title: "Telekom-Infrastrukturlösungen",
    subtitle: "Drei Kompetenzbereiche. Ein Ziel: ein sauberes, dokumentiertes Netzwerk.",
    ctaCard: "Mehr erfahren →",
    items: [
      { icon: "⚡", title: "Festnetz", subtitle: "FTTH, FTTO/M, FTTS/B", description: "Unser Planungsbüro Festnetz ist das Herzstück unserer Expertise in der Telekommunikationsinfrastruktur." },
      { icon: "📡", title: "Funk", subtitle: "Funkplanung", description: "Fundierte Expertise in drahtlosen Technologien. Planung, Wartung und Genehmigungsverfahren." },
      { icon: "🖥️", title: "IT & Design", subtitle: "Digitale Lösungen", description: "Benutzerfreundliche, funktionale und sichere Produkte für langfristige Ergebnisse." },
    ],
  },
  expertise: {
    eyebrow: "Warum wir",
    title: "Unsere Expertise in Ihrem Dienst",
    p1: "Gegründet 2021, stützt sich Komsolution SA auf über ein Jahrzehnt Erfahrung im FTTx-Bereich.",
    p2: "Wir arbeiten eng mit Partnern zusammen, die unsere Werte teilen.",
    pillars: [
      { icon: "⚡", title: "Agiles Team", desc: "Anpassungsfähigkeit für komplexe Projekte." },
      { icon: "📚", title: "Weiterbildung", desc: "Ständige Kompetenzentwicklung." },
      { icon: "🚀", title: "Reaktivität", desc: "Schnelle Reaktion auf Anfragen." },
      { icon: "🏆", title: "Expertise", desc: "FTTx- und Funktechnologien." },
    ],
    blueprint: {
      eyebrow: "Unsere Methode",
      title: "Ein strukturierter Ansatz",
      lead: "Von der Machbarkeitsstudie bis zur Dokumentation.",
      items: ["Machbarkeitsstudie", "Konzeption & Pläne", "Feldkoordination", "Finale Dokumentation"],
      mode: "Modus: Präzision",
      status: "Signal aktiv",
    },
  },
  team: {
    eyebrow: "Unser Team",
    title: "Leidenschaftliche Experten",
    subtitle: "Kontinuierlich geschult, qualitäts- und ergebnisorientiert.",
    focusLabel: "Fokus",
    hint: "Klicken Sie auf die Punkte zum Navigieren",
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Bereit, Ihre Infrastruktur voranzutreiben?",
    lead: "Komsolution SA begleitet Sie bei jedem Schritt.",
    cards: [
      { icon: "📞", label: "Telefon", value: "+41 79 562 56 55 / +41 79 702 72 96" },
      { icon: "✉️", label: "E-Mail", value: "info@komsolution.ch" },
      { icon: "📍", label: "Adresse", value: "Av. des Baumettes 7, 1020 Renens" },
    ],
    formTitle: "Nachricht senden",
    formLead: "Schnelle Antwort garantiert.",
    formButton: "Senden →",
    policy: "Mit dem Senden akzeptieren Sie unsere Datenschutzerklärung.",
    placeholders: { name: "Name *", company: "Firma", email: "E-Mail *", phone: "Telefon", message: "Ihr Projekt *" },
  },
  faq: {
    eyebrow: "FAQ",
    title: "Häufige Fragen",
    items: [
      { q: "Wie können wir Ihnen helfen?", a: "Komplette Palette von Dienstleistungen, von der Machbarkeitsstudie bis zur Wartung." },
      { q: "In welchen Gebieten sind Sie tätig?", a: "Komsolution SA ist in der gesamten Schweiz tätig." },
      { q: "Wie starten wir?", a: "Kontaktieren Sie uns per Telefon, E-Mail oder Formular." },
    ],
  },
  footer: {
    tagline: "Telekom-Planungsbüro — FTTx, Funk, IT & Design. Standort Renens, Schweiz.",
    rights: "© 2025 Komsolution SA. Alle Rechte vorbehalten.",
    legal: { mentions: "Impressum", data: "Datenschutz" },
  },
};

/* -------------------------------------------
  TEAM DATA - 6 membres avec Directeur en premier
------------------------------------------- */
const TEAM_FR = [
  { name: "Yanik", role: "Directeur", image: "/images/team/yanik.jpg" },
  { name: "Aldin", role: "Projeteur FTTX", image: "/images/team/aldin.jpg" },
  { name: "Alessandro", role: "Projeteur FTTX", image: "/images/team/alessandro.jpg" },
  { name: "Lucien", role: "Projeteur FTTX", image: "/images/team/lucien.jpg" },
  { name: "Mustapha", role: "Projeteur FTTX", image: "/images/team/mustapha.jpg" },
  { name: "Bruno", role: "Projeteur FTTX", image: "/images/team/bruno.png" },
];

const TEAM_DE = [
  { name: "Yanik", role: "Geschäftsführer", image: "/images/team/yanik.jpg" },
  { name: "Aldin", role: "FTTx-Projektierer", image: "/images/team/aldin.jpg" },
  { name: "Alessandro", role: "FTTx-Projektierer", image: "/images/team/alessandro.jpg" },
  { name: "Lucien", role: "FTTx-Projektierer", image: "/images/team/lucien.jpg" },
  { name: "Mustapha", role: "FTTx-Projektierer", image: "/images/team/mustapha.jpg" },
  { name: "Bruno", role: "FTTx-Projektierer", image: "/images/team/bruno.png" },
];

/* -------------------------------------------
  Utilities
------------------------------------------- */
function cn(...c) { return c.filter(Boolean).join(" "); }

const MOTION = {
  spring: { soft: { stiffness: 140, damping: 18 }, firm: { stiffness: 220, damping: 20 } },
};

/* -------------------------------------------
  Magnetic Button
------------------------------------------- */
function MagneticButton({ className, children, ...props }) {
  const ref = useRef(null);
  const mx = useSpring(0, MOTION.spring.firm);
  const my = useSpring(0, MOTION.spring.firm);

  return (
    <motion.button
      ref={ref}
      onPointerMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        mx.set((e.clientX - (r.left + r.width / 2)) * 0.12);
        my.set((e.clientY - (r.top + r.height / 2)) * 0.12);
      }}
      onPointerLeave={() => { mx.set(0); my.set(0); }}
      style={{ x: mx, y: my }}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold",
        "transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3CBDB4]/70",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}

/* -------------------------------------------
  Tilt Card
------------------------------------------- */
function TiltCard({ className, children }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const rx = useSpring(0, MOTION.spring.firm);
  const ry = useSpring(0, MOTION.spring.firm);

  return (
    <motion.div
      ref={ref}
      onPointerMove={(e) => {
        if (reduce) return;
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        rx.set((0.5 - (e.clientY - r.top) / r.height) * 8);
        ry.set(((e.clientX - r.left) / r.width - 0.5) * 10);
      }}
      onPointerLeave={() => { rx.set(0); ry.set(0); }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl",
        "shadow-[0_35px_110px_rgba(0,0,0,0.48)]",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_30%_18%,rgba(255,255,255,0.15),transparent_45%)] opacity-70" />
      {children}
    </motion.div>
  );
}

/* -------------------------------------------
  Marquee
------------------------------------------- */
function Marquee({ items }) {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#05070d] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#05070d] to-transparent z-10" />
      <div className="flex gap-8 whitespace-nowrap py-3">
        <motion.div 
          className="flex gap-8" 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...items, ...items].map((t, i) => (
            <div key={`${t}-${i}`} className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm font-medium text-white/70 backdrop-blur-xl">
              {t}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/* -------------------------------------------
  Team Carousel with Real Photos
------------------------------------------- */
function TeamCarousel({ team, copy }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % team.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [team.length]);

  return (
    <section id="equipe" className="relative bg-[#05070d] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-white/60">{copy.team.eyebrow}</p>
            <h2 className="mt-3 text-4xl font-semibold text-white md:text-5xl">{copy.team.title}</h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">{copy.team.subtitle}</p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">{copy.team.focusLabel}</p>
              <div className="mt-3 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xl font-semibold text-white">{team[active].name}</p>
                  <p className="text-sm text-[#3CBDB4]">{team[active].role}</p>
                </div>
                <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-[#3CBDB4]/50">
                  <img src={team[active].image} alt={team[active].name} className="w-full h-full object-cover object-top" />
                </div>
              </div>
            </div>
            
            <p className="mt-6 text-xs text-white/40">{copy.team.hint}</p>
          </div>

          <div className="relative">
            <TiltCard className="p-8">
              <div className="relative z-10">
                <div className="relative w-64 h-80 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a2744] to-[#2d3a52]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0"
                    >
                      <img 
                        src={team[active].image} 
                        alt={team[active].name}
                        className="w-full h-full object-cover object-top"
                      />
                    </motion.div>
                  </AnimatePresence>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2744]/90 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-semibold text-white text-lg">{team[active].name}</p>
                    <p className="text-[#3CBDB4] text-sm">{team[active].role}</p>
                  </div>
                </div>

                <div className="flex justify-center gap-2 mt-6">
                  {team.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActive(index)}
                      className={cn(
                        "h-2 rounded-full transition-all duration-300",
                        index === active ? "w-8 bg-[#3CBDB4]" : "w-2 bg-white/30 hover:bg-white/50"
                      )}
                    />
                  ))}
                </div>
              </div>
            </TiltCard>

            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-4 border-[#3CBDB4]/30 rounded-full" />
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#3CBDB4]/10 rounded-full" />
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-12 flex-wrap">
          {team.map((m, i) => (
            <button
              key={m.name}
              onClick={() => setActive(i)}
              className={cn(
                "text-center transition-all duration-300",
                i === active ? "scale-110" : "opacity-60 hover:opacity-100"
              )}
            >
              <div className={cn(
                "w-16 h-16 rounded-full mx-auto mb-2 overflow-hidden border-2 transition-all",
                i === active ? "border-[#3CBDB4] shadow-[0_0_20px_rgba(60,189,180,0.4)]" : "border-white/20"
              )}>
                <img src={m.image} alt={m.name} className="w-full h-full object-cover object-top" />
              </div>
              <p className={cn("text-xs font-medium", i === active ? "text-white" : "text-white/50")}>{m.name}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------
  FAQ Section
------------------------------------------- */
function FAQSection({ items, copy }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-[#05070d] py-20">
      <div className="mx-auto max-w-4xl px-6">
        <p className="text-xs uppercase tracking-[0.22em] text-white/60">{copy.faq.eyebrow}</p>
        <h2 className="mt-3 text-4xl font-semibold text-white">{copy.faq.title}</h2>

        <div className="mt-10 space-y-3">
          {items.map((it, i) => (
            <div key={it.q} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-6 p-6 text-left">
                <span className="text-base font-semibold text-white">{it.q}</span>
                <span className="text-white/60 text-xl">{open === i ? "−" : "+"}</span>
              </button>
              <motion.div 
                initial={false} 
                animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }} 
                transition={{ duration: 0.3 }} 
                className="px-6 overflow-hidden"
              >
                <div className="pb-6 text-sm leading-relaxed text-white/70">{it.a}</div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------
  Hero Image Carousel Component
------------------------------------------- */
function HeroImageCarousel() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    { src: "/images/hero-office.jpg", alt: "Komsolution Office" },
    { src: "/images/hero-building.jpg", alt: "Komsolution Building" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-[450px] h-[380px] z-10">
      <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#3CBDB4]/20 shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={images[currentImage].src}
            alt={images[currentImage].alt}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentImage ? "bg-[#3CBDB4] w-6" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------
  Main Component - KOMSOLUTION SA
------------------------------------------- */
export default function KomsolutionSA() {
  const [lang, setLang] = useState("fr");
  const [switching, setSwitching] = useState(false);

  const t = lang === "fr" ? COPY_FR : COPY_DE;
  const team = lang === "fr" ? TEAM_FR : TEAM_DE;
  const clients = ["CIRCET SA", "CABLEX SA", "INVENTIS SA", "STRAPAG SA", "AXIANS SA", "TM-CONCEPT SA", "GROUPE-E SA"];

  const changeLang = (next) => {
    if (next === lang) return;
    setSwitching(true);
    setTimeout(() => setLang(next), 150);
    setTimeout(() => setSwitching(false), 400);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#05070d] text-white">
      
      <AnimatePresence>
        {switching && (
          <motion.div
            className="pointer-events-none fixed inset-0 z-[500] bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(60,189,180,0.12),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(123,163,201,0.10),transparent_50%)]" />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-black">
              <img src="/images/favicon.png" alt="K" className="w-full h-full object-contain" />
            </div>
            <div className="leading-tight">
              <div className="text-[10px] uppercase tracking-[0.26em] text-white/50">{t.brand.label}</div>
              <div className="text-base font-semibold">
                <span className="text-[#7BA3C9]">KOM</span>
                <span className="text-white">SOLUTION</span>
                <span className="text-white/60 text-xs ml-1">SA</span>
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-sm text-white/70 hover:text-white transition-colors">{t.nav.services}</a>
            <a href="#expertise" className="text-sm text-white/70 hover:text-white transition-colors">{t.nav.expertise}</a>
            <a href="#equipe" className="text-sm text-white/70 hover:text-white transition-colors">{t.nav.team}</a>

            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1">
              {[{ code: "fr", label: "FR" }, { code: "de", label: "DE" }].map((x) => (
                <button
                  key={x.code}
                  onClick={() => changeLang(x.code)}
                  className={cn(
                    "relative rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.22em] transition",
                    lang === x.code ? "text-black" : "text-white/70 hover:text-white"
                  )}
                >
                  {lang === x.code && (
                    <motion.span
                      layoutId="langPill"
                      className="absolute inset-0 rounded-full bg-white"
                      transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    />
                  )}
                  <span className="relative z-10">{x.label}</span>
                </button>
              ))}
            </div>
          </nav>

          <MagneticButton
            className="bg-white text-black shadow-lg hover:shadow-xl"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            {t.nav.cta}
          </MagneticButton>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative">
        <div className="relative mt-4 w-full max-w-4xl px-6 z-10 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl">
            {t.stats.map((s, i) => (
              <div key={i} className="p-3 rounded-xl border border-white/10 bg-white/[0.03]">
                <div className="text-lg font-semibold">{s.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)] animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-white/70">{t.hero.badge}</span>
            </motion.div>
            
            <div className="text-xs uppercase tracking-widest text-white/50 mb-4">{t.hero.eyebrow}</div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-semibold leading-tight mb-6"
            >
              <span className="text-white">{t.hero.title1}</span>
              <br />
              <span className="bg-gradient-to-r from-[#7BA3C9] to-[#3CBDB4] bg-clip-text text-transparent">{t.hero.title2}</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/70 text-lg mb-8 max-w-lg"
            >
              {t.hero.lead}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <MagneticButton 
                className="bg-[#3CBDB4] text-black hover:shadow-[0_20px_60px_rgba(60,189,180,0.25)]"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t.hero.primary}
              </MagneticButton>
              <MagneticButton 
                className="border border-white/20 bg-white/5 text-white hover:bg-white/10"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t.hero.secondary}
              </MagneticButton>
            </motion.div>
          </div>
        </div>
{/* Hero Image Carousel - Desktop Only */}
        <HeroImageCarousel />
        <div className="pb-12">
          <div className="text-center text-[10px] uppercase tracking-widest text-white/40 mb-3">{t.trust.title}</div>
          <Marquee items={clients} />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-[#05070d]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-white/50 mb-3">{t.services.eyebrow}</p>
          <h2 className="text-4xl font-semibold mb-4">{t.services.title}</h2>
          <p className="text-white/60 max-w-xl mb-12">{t.services.subtitle}</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {t.services.items.map((s, i) => (
              <TiltCard key={i} className="p-6 group cursor-pointer">
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-2xl mb-4 group-hover:bg-[#3CBDB4]/10 transition-colors">
                    {s.icon}
                  </div>
                  <p className="text-xs uppercase tracking-widest text-[#7BA3C9] mb-1">{s.subtitle}</p>
                  <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                  <p className="text-sm text-white/60 mb-4">{s.description}</p>
                  <span className="text-[#3CBDB4] text-sm font-semibold group-hover:underline">{t.services.ctaCard}</span>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section id="expertise" className="py-20 bg-[#05070d]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/50 mb-3">{t.expertise.eyebrow}</p>
              <h2 className="text-4xl font-semibold mb-6">{t.expertise.title}</h2>
              <p className="text-white/60 mb-4">{t.expertise.p1}</p>
              <p className="text-white/60 mb-8">{t.expertise.p2}</p>
              
              <div className="grid grid-cols-2 gap-3">
                {t.expertise.pillars.map((p, i) => (
                  <div key={i} className="p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center">{p.icon}</div>
                      <span className="font-semibold text-sm">{p.title}</span>
                    </div>
                    <p className="text-xs text-white/50">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <TiltCard className="p-6">
              <div className="pointer-events-none absolute inset-0 opacity-20" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }} />
              <div className="relative z-10">
                <p className="text-xs uppercase tracking-widest text-white/50 mb-2">{t.expertise.blueprint.eyebrow}</p>
                <h3 className="text-2xl font-semibold mb-3">{t.expertise.blueprint.title}</h3>
                <p className="text-sm text-white/60 mb-6">{t.expertise.blueprint.lead}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {t.expertise.blueprint.items.map((x, i) => (
                    <div key={i} className="p-3 rounded-xl border border-white/10 bg-black/30 text-xs text-white/70">{x}</div>
                  ))}
                </div>
                
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4" />
                <div className="flex justify-between text-xs text-white/40">
                  <span>{t.expertise.blueprint.mode}</span>
                  <span className="text-[#7BA3C9]">{t.expertise.blueprint.status}</span>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <TeamCarousel team={team} copy={t} />

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-[#05070d]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/50 mb-3">{t.contact.eyebrow}</p>
              <h2 className="text-4xl font-semibold mb-4">{t.contact.title}</h2>
              <p className="text-white/60 mb-8">{t.contact.lead}</p>
              
              <div className="space-y-4">
                {t.contact.cards.map((c, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors">
                    <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">{c.icon}</div>
                    <div>
                      <div className="text-xs text-white/50">{c.label}</div>
                      <div className="font-semibold">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <TiltCard className="p-6">
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2">{t.contact.formTitle}</h3>
                <p className="text-sm text-white/50 mb-6">{t.contact.formLead}</p>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder={t.contact.placeholders.name} className="w-full px-4 py-3 rounded-xl border border-white/10 bg-black/30 text-white placeholder:text-white/30 outline-none focus:border-[#3CBDB4]/50 transition-colors" />
                    <input type="text" placeholder={t.contact.placeholders.company} className="w-full px-4 py-3 rounded-xl border border-white/10 bg-black/30 text-white placeholder:text-white/30 outline-none focus:border-[#3CBDB4]/50 transition-colors" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="email" placeholder={t.contact.placeholders.email} className="w-full px-4 py-3 rounded-xl border border-white/10 bg-black/30 text-white placeholder:text-white/30 outline-none focus:border-[#3CBDB4]/50 transition-colors" />
                    <input type="tel" placeholder={t.contact.placeholders.phone} className="w-full px-4 py-3 rounded-xl border border-white/10 bg-black/30 text-white placeholder:text-white/30 outline-none focus:border-[#3CBDB4]/50 transition-colors" />
                  </div>
                  <textarea placeholder={t.contact.placeholders.message} rows={4} className="w-full px-4 py-3 rounded-xl border border-white/10 bg-black/30 text-white placeholder:text-white/30 outline-none focus:border-[#3CBDB4]/50 resize-none transition-colors" />
                  <MagneticButton className="w-full bg-[#3CBDB4] text-black">{t.contact.formButton}</MagneticButton>
                  <p className="text-xs text-white/40">{t.contact.policy}</p>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection items={t.faq.items} copy={t} />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/30 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl overflow-hidden bg-black">
                  <img src="/images/favicon.png" alt="K" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="font-semibold">
                    <span className="text-[#7BA3C9]">KOM</span>
                    <span className="text-white">SOLUTION</span>
                    <span className="text-white/60 text-xs ml-1">SA</span>
                  </div>
                  <div className="text-xs text-white/50">{t.brand.subline}</div>
                </div>
              </div>
              <p className="text-sm text-white/50 max-w-md">{t.footer.tagline}</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{t.nav.services}</h4>
              <ul className="space-y-2 text-sm text-white/50">
                {t.services.items.map((s) => (
                  <li key={s.title} className="hover:text-white cursor-pointer transition-colors">{s.title}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{t.contact.eyebrow}</h4>
              <ul className="space-y-2 text-sm text-white/50">
                <li>{t.contact.cards[0].value}</li>
                <li>{t.contact.cards[1].value}</li>
                <li>{t.contact.cards[2].value}</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/40">{t.footer.rights}</p>
            <div className="flex gap-6 text-xs text-white/40">
              <a href="#" className="hover:text-white transition-colors">{t.footer.legal.mentions}</a>
              <a href="#" className="hover:text-white transition-colors">{t.footer.legal.data}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
