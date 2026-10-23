import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import {
  ArrowLeft, ArrowRight, Lock, Minus, Square, X, ShoppingCart, Home, Gamepad2, ChevronDown,
  Star, FileText, Users, Mail, Search, Folder, Sword, Compass, Wand2, Building2, Brain,
  Sparkles, Joystick, Monitor, Globe, Leaf, MessageCircle, Instagram, Youtube, Music2, Twitter,
} from "lucide-react";

import bg from "@/assets/bg.jpg";
import hero from "@/assets/hero.jpg";
import consoleImg from "@/assets/console.png";
import blog from "@/assets/blog.jpg";
import gFarm from "@/assets/game-farm.jpg";
import gLife from "@/assets/game-life.jpg";
import gOcean from "@/assets/game-ocean.jpg";
import gSandbox from "@/assets/game-sandbox.jpg";

const TITLE = "Aqua Arcade — Digital Games for PC & Consoles";
const DESC = "Discover amazing games, from modern hits to timeless classics. Instant digital delivery for PC, PlayStation, Xbox and Nintendo.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "OnlineStore",
  name: "Aqua Arcade",
  description: DESC,
  slogan: "PLAY. EXPLORE. COLLECT. BELONG.",
  url: "https://www.aqua-arcade.example",
  currenciesAccepted: "PLN",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Aqua Arcade" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

const games = [
  { id: "stardew", name: "Stardew Valley", price: 29.99, img: gFarm, platforms: "PC" },
  { id: "sims4", name: "The Sims 4", price: 199.9, img: gLife, platforms: "PC" },
  { id: "subnautica", name: "Subnautica", price: 109.99, img: gOcean, platforms: "PC · PS · Xbox" },
  { id: "terraria", name: "Terraria", price: 37.99, img: gSandbox, platforms: "PC · Switch" },
];

const pln = (n: number) => n.toFixed(2).replace(".", ",") + " zł";

const categories = [
  { label: "All Games", Icon: Gamepad2 }, { label: "Action", Icon: Sword }, { label: "Adventure", Icon: Compass },
  { label: "RPG", Icon: Wand2 }, { label: "Simulation", Icon: Building2 }, { label: "Strategy", Icon: Brain },
  { label: "Indie", Icon: Sparkles }, { label: "Retro Classics", Icon: Joystick },
];
const platforms = ["PC", "PlayStation", "Xbox", "Nintendo", "All Platforms"];

const bubbles = [
  { s: 70, t: "4%", l: "2%" }, { s: 46, t: "30%", l: "94%" }, { s: 90, t: "58%", l: "-2%" },
  { s: 38, t: "82%", l: "92%" }, { s: 56, t: "2%", l: "70%" },
];

function Index() {
  const [cart, setCart] = useState(0);
  const [gamesOpen, setGamesOpen] = useState(false);

  const add = (name: string) => {
    setCart((c) => c + 1);
    toast.success(`${name} added to cart`, { description: "Your cart has been updated." });
  };

  const navItems = [
    { label: "Deals", Icon: Star }, { label: "Blog", Icon: FileText },
    { label: "About", Icon: Users }, { label: "Contact", Icon: Mail },
  ];

  return (
    <div className="aa-world" style={{ backgroundImage: `url(${bg})` }}>
      {bubbles.map((b, i) => (
        <span key={i} aria-hidden className="aa-deco" style={{ width: b.s, height: b.s, top: b.t, left: b.l, animationDelay: `${i * 1.3}s` }} />
      ))}

      <div className="aa-window">
        {/* Browser chrome */}
        <div className="d-flex align-items-center gap-2 px-2 pb-2" aria-hidden>
          <span className="aa-chrome-btn"><ArrowLeft size={18} /></span>
          <span className="aa-chrome-btn"><ArrowRight size={18} /></span>
          <div className="aa-address"><Lock size={14} className="aa-icon shrink-0" /><span className="truncate">https://www.aqua-arcade.example</span></div>
          <div className="aa-winctl d-none d-sm-flex"><span><Minus size={14} /></span><span><Square size={11} /></span><span><X size={15} /></span></div>
        </div>

        <div className="aa-inner">
          <header className="row g-3 align-items-center mb-3">
            <div className="col-12 col-md">
              <a href="/" aria-label="Aqua Arcade home" className="d-inline-block">
                <div className="aa-logo d-flex flex-wrap align-items-center gap-2">
                  <Sparkles className="aa-leaf shrink-0" size={34} aria-hidden />
                  <span className="aa-logo-aqua">AQUA</span>
                  <span className="aa-logo-arcade">ARCADE</span>
                </div>
              </a>
              <p className="aa-tagline mt-2 mb-0">GAMES • GOOD VIBES • BRIGHTER WORLDS</p>
            </div>
            <div className="col-12 col-md-auto d-flex gap-2 align-items-stretch">
              <div className="aa-panel d-flex align-items-center gap-3 px-3 py-2">
                <svg width="40" height="40" viewBox="0 0 8 8" className="aa-pixel shrink-0" aria-hidden>
                  <rect x="1" y="1" width="6" height="6" fill="var(--aa-cyan)" /><rect x="1" y="0" width="1" height="1" fill="var(--aa-cyan)" /><rect x="6" y="0" width="1" height="1" fill="var(--aa-cyan)" />
                  <rect x="2" y="3" width="1" height="1" fill="var(--aa-blue)" /><rect x="5" y="3" width="1" height="1" fill="var(--aa-blue)" /><rect x="3" y="5" width="2" height="1" fill="var(--aa-blue)" />
                </svg>
                <div>
                  <p className="mb-0 fw-bold" style={{ fontWeight: 800, letterSpacing: ".08em" }}>PLAYER 01</p>
                  <p className="mb-0 small"><a className="aa-link" href="#login">Log in</a> | <a className="aa-link" href="#signup">Sign up</a></p>
                </div>
              </div>
              <button className="aa-panel position-relative px-3" aria-label={`Cart, ${cart} items`} onClick={() => toast(`Cart: ${cart} item${cart === 1 ? "" : "s"}`)}>
                <ShoppingCart size={30} className="aa-icon" />
                <span className="aa-badge" aria-live="polite">{cart}</span>
              </button>
            </div>
          </header>

          <nav className="aa-nav d-flex align-items-center gap-1 mb-3 overflow-x-auto" aria-label="Main navigation">
            <a href="/" className="aa-nav-link" aria-current="page"><Home size={18} className="aa-icon" />Home</a>
            <div className="position-relative">
              <button className="aa-nav-link" aria-expanded={gamesOpen} aria-haspopup="true" onClick={() => setGamesOpen((o) => !o)}>
                <Gamepad2 size={18} className="aa-icon" />Games<ChevronDown size={16} />
              </button>
              {gamesOpen && (
                <ul className="aa-panel aa-dropdown list-unstyled m-0">
                  {["New releases", "Top sellers", "Coming soon", "Retro Classics"].map((x) => (
                    <li key={x}><a href="#featured" className="aa-list-item" onClick={() => setGamesOpen(false)}>{x}</a></li>
                  ))}
                </ul>
              )}
            </div>
            {navItems.map(({ label, Icon }) => (
              <a key={label} href={`#${label.toLowerCase()}`} className="aa-nav-link"><Icon size={18} className="aa-icon" />{label}</a>
            ))}
          </nav>

          <div className="row g-3">
            <aside className="col-12 col-lg-3 d-flex flex-column gap-3" aria-label="Browse">
              <form role="search" className="position-relative" onSubmit={(e) => { e.preventDefault(); toast("Search is a demo for now"); }}>
                <label htmlFor="q" className="sr-only">Search games</label>
                <input id="q" className="aa-input" placeholder="Search games…" type="search" />
                <button type="submit" aria-label="Search" className="aa-chrome-btn position-absolute" style={{ right: 3, top: 2 }}><Search size={16} /></button>
              </form>

              <div className="row g-3">
                <section className="col-12 col-sm-6 col-lg-12">
                  <div className="aa-panel p-2 h-100">
                    <h2 className="d-flex align-items-center gap-2 px-2 pt-1 mb-2" style={{ fontWeight: 700, fontSize: "1rem", color: "var(--aa-blue)" }}><Folder size={20} className="aa-star" />Categories</h2>
                    <ul className="list-unstyled m-0">
                      {categories.map(({ label, Icon }, i) => (
                        <li key={label}><a href="#featured" className={`aa-list-item ${i === 0 ? "is-active" : ""}`}><Icon size={16} className="aa-icon" />{label}</a></li>
                      ))}
                    </ul>
                  </div>
                </section>
                <section className="col-12 col-sm-6 col-lg-12">
                  <div className="aa-panel p-2 h-100">
                    <h2 className="d-flex align-items-center gap-2 px-2 pt-1 mb-2" style={{ fontWeight: 700, fontSize: "1rem", color: "var(--aa-blue)" }}><Monitor size={20} className="aa-icon" />Platforms</h2>
                    <ul className="list-unstyled m-0">
                      {platforms.map((p) => (
                        <li key={p}><a href="#featured" className="aa-list-item"><Gamepad2 size={16} className="aa-icon" />{p}</a></li>
                      ))}
                    </ul>
                  </div>
                </section>
              </div>

              <div className="aa-panel p-2 d-none d-lg-block">
                <img src={bg} alt="" loading="lazy" width={1920} height={1280} className="w-100 rounded-lg" style={{ aspectRatio: "4/3", objectFit: "cover", objectPosition: "left" }} />
                <div className="d-flex align-items-center justify-content-between px-1 pt-2">
                  <p className="mb-0 aa-brand-small" style={{ color: "var(--aa-blue)", lineHeight: 1.2 }}>PLAY.<br />EXPLORE.<br />COLLECT.<br />BELONG.</p>
                  <Globe size={44} className="aa-icon" aria-hidden />
                </div>
              </div>
            </aside>

            <main className="col-12 col-lg-9 d-flex flex-column gap-3">
              <section className="aa-hero" aria-labelledby="hero-title">
                <img src={hero} alt="Glass game controller splashing in turquoise water in front of a green futuristic city" width={1600} height={832}
                  className="position-absolute w-100 h-100" style={{ inset: 0, objectFit: "cover", objectPosition: "right center" }} />
                <div className="position-relative p-4 p-md-5 d-flex flex-column gap-3" style={{ maxWidth: 560 }}>
                  <h1 id="hero-title" className="aa-hero-title m-0">YOUR NEXT<br />LEVEL STARTS<br /><em>HERE.</em></h1>
                  <p className="aa-hero-copy m-0">Discover amazing games, from modern hits to timeless classics. Digital worlds, brighter together.</p>
                  <a href="#featured" className="aa-btn aa-btn-blue align-self-start px-4 py-2" style={{ fontSize: "1.1rem" }}>
                    EXPLORE GAMES <span className="aa-orb"><ArrowRight size={18} /></span>
                  </a>
                </div>
                <div className="position-absolute d-flex gap-2" style={{ bottom: 12, left: "50%", transform: "translateX(-50%)" }} aria-hidden>
                  {[0, 1, 2, 3].map((i) => <span key={i} className={`aa-dot ${i === 0 ? "is-active" : ""}`} />)}
                </div>
              </section>

              <div className="row g-3">
                {[
                  { Icon: Leaf, cls: "aa-leaf", t: "GREAT GAMES", d: "Better days." },
                  { Icon: Globe, cls: "aa-icon", t: "DIGITAL DELIVERY", d: "Play instantly." },
                  { Icon: Star, cls: "aa-star", t: "RETRO & NEW", d: "All in one place." },
                ].map(({ Icon, cls, t, d }) => (
                  <div key={t} className="col-12 col-sm-4">
                    <div className="aa-panel d-flex align-items-center gap-3 px-3 py-3 h-100">
                      <Icon size={36} className={`${cls} shrink-0`} aria-hidden />
                      <div className="min-w-0"><p className="m-0" style={{ fontWeight: 800, color: "var(--aa-blue)", letterSpacing: ".04em" }}>{t}</p><p className="m-0 small">{d}</p></div>
                    </div>
                  </div>
                ))}
              </div>

              <section id="featured" className="aa-panel p-3" aria-labelledby="feat-title">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h2 id="feat-title" className="aa-heading d-flex align-items-center gap-2 m-0"><Star size={24} className="aa-leaf" style={{ fill: "var(--aa-lime)" }} />Featured games</h2>
                  <a href="#featured" className="aa-link">View all <ArrowRight size={16} /></a>
                </div>
                <div className="row g-3">
                  {games.map((g) => (
                    <div key={g.id} className="col-6 col-md-3">
                      <article className="aa-card">
                        <img src={g.img} alt={`${g.name} cover art`} loading="lazy" width={816} height={816} />
                        <p className="small mt-2 mb-1 d-flex align-items-center gap-1"><Monitor size={14} className="aa-icon" />{g.platforms}</p>
                        <h3 className="m-0" style={{ fontSize: "1rem", fontWeight: 600 }}>{g.name}</h3>
                        <p className="aa-price my-1">{pln(g.price)}</p>
                        <button className="aa-btn aa-btn-lime mt-auto py-2" onClick={() => add(g.name)} aria-label={`Add ${g.name} to cart`}>
                          <ShoppingCart size={16} />Add to cart
                        </button>
                      </article>
                    </div>
                  ))}
                </div>
              </section>
            </main>

            <section className="col-12 col-md-6" aria-labelledby="retro-title">
              <div className="aa-panel p-3 h-100 d-flex align-items-center gap-3">
                <img src={consoleImg} alt="Translucent blue handheld retro console" loading="lazy" width={1024} height={768} style={{ width: "48%", objectFit: "contain" }} />
                <div className="min-w-0">
                  <h2 id="retro-title" className="aa-hero-title m-0" style={{ fontSize: "1.6rem" }}>RETRO<br />CLASSICS</h2>
                  <p className="my-2 small">Old favourites. New adventures. Always here.</p>
                  <a href="#featured" className="aa-btn aa-btn-blue px-3 py-1 small">BROWSE RETRO <span className="aa-orb" style={{ width: 24, height: 24 }}><ArrowRight size={14} /></span></a>
                </div>
              </div>
            </section>

            <section id="blog" className="col-12 col-md-6" aria-labelledby="blog-title">
              <div className="aa-panel p-3 h-100">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h2 id="blog-title" className="aa-heading d-flex align-items-center gap-2 m-0"><FileText size={22} />Latest from our blog</h2>
                  <a href="#blog" className="aa-link">View all <ArrowRight size={16} /></a>
                </div>
                <article className="row g-3 align-items-center">
                  <div className="col-5"><img src={blog} alt="Cozy cottage by a mountain lake" loading="lazy" width={944} height={704} className="w-100 rounded-lg" style={{ aspectRatio: "4/3", objectFit: "cover" }} /></div>
                  <div className="col-7">
                    <h3 className="m-0" style={{ fontSize: "1rem", fontWeight: 700 }}>Top 10 Cozy Games to Relax in 2026</h3>
                    <p className="small my-1">Discover the most relaxing games that bring good vibes and beautiful worlds.</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <time className="small" dateTime="2026-04-12">12 Apr 2026</time>
                      <a href="#blog" className="aa-chrome-btn" aria-label="Read article: Top 10 Cozy Games"><ArrowRight size={16} /></a>
                    </div>
                  </div>
                </article>
              </div>
            </section>
          </div>

          <footer className="aa-panel mt-3 px-3 py-3 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
            <div className="d-flex align-items-center gap-3">
              <span className="aa-brand-small" style={{ fontSize: "1.3rem" }}><span className="aa-logo-aqua">AQUA</span> <span className="aa-logo-arcade">ARCADE</span></span>
              <p className="small m-0">© 2026 Aqua Arcade. Play brighter.</p>
            </div>
            <ul className="list-unstyled d-flex gap-3 m-0 small">
              {["Terms", "Privacy", "FAQ", "Contact"].map((l) => <li key={l}><a className="aa-link" href={`#${l.toLowerCase()}`}>{l}</a></li>)}
            </ul>
            <ul className="list-unstyled d-flex gap-2 m-0">
              {[{ I: MessageCircle, l: "Discord" }, { I: Instagram, l: "Instagram" }, { I: Youtube, l: "YouTube" }, { I: Music2, l: "TikTok" }, { I: Twitter, l: "X" }].map(({ I, l }) => (
                <li key={l}><a href="#social" aria-label={l} className="aa-chrome-btn"><I size={16} /></a></li>
              ))}
            </ul>
          </footer>
        </div>
      </div>
    </div>
  );
}
