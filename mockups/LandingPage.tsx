import { ArrowUpRight, ChevronDown, Instagram, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";

const gold = "#c9a96e";
const cream = "#f0ebe3";
const muted = "#8a8070";

function Button({ children, onClick, filled = false }: { children: React.ReactNode; onClick?: () => void; filled?: boolean }) {
  return <button onClick={onClick} className={`group inline-flex items-center gap-5 border px-5 py-3 text-[10px] font-medium tracking-[.22em] transition-all duration-300 ${filled ? "border-[#c9a96e] bg-[#c9a96e] text-[#0a0a0a] hover:bg-[#e8c88a]" : "border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-[#0a0a0a]"}`}>{children}<ArrowUpRight size={14} strokeWidth={1.2} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" /></button>;
}

function Nav() {
  const [open, setOpen] = useState(false);
  return <nav className="absolute left-0 top-0 z-20 w-full px-6 py-6 md:px-12 md:py-8">
    <div className="flex items-center justify-between">
      <a href="#top" aria-label="Edward Bobrin Photography">
          <img src="/__mockup/images/logo-eb-signature.png" alt="Edward Bobrin Photography" className="h-10 w-auto" style={{ mixBlendMode: 'screen' }} />
        </a>
      <div className="hidden items-center gap-8 md:flex">
        {["Portfolio", "Collections", "Studio", "Trade & Licensing"].map((x) => <a key={x} href={`#${x.split(" ")[0].toLowerCase()}`} className="text-[10px] uppercase tracking-[.24em] text-[#b5ab9b] transition-colors duration-300 hover:text-[#f0ebe3]">{x}</a>)}
        <a href="#shop"><Button>SHOP PRINTS</Button></a>
      </div>
      <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="text-[#f0ebe3] md:hidden">{open ? <X size={22} /> : <Menu size={22} />}</button>
    </div>
    {open && <div className="mt-5 flex flex-col gap-5 border-t border-[#2a2a2a] bg-[#0a0a0a]/95 px-2 py-6 md:hidden">{["Portfolio", "Collections", "Studio", "Trade & Licensing"].map((x) => <a onClick={() => setOpen(false)} key={x} href={`#${x.split(" ")[0].toLowerCase()}`} className="text-xs uppercase tracking-[.24em] text-[#b5ab9b]">{x}</a>)}<a href="#shop"><Button>SHOP PRINTS</Button></a></div>}
  </nav>;
}

function Hero() {
  return <section id="top" className="relative flex min-h-[100dvh] items-end overflow-hidden border-b border-[#2a2a2a] bg-[#0a0a0a]">
    <div className="absolute inset-0 bg-cover bg-center grayscale" style={{ backgroundImage: "url('/__mockup/images/bobrin-hero.png')" }} />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/35 to-transparent" />
    <Nav />
    <div className="relative z-10 w-full px-6 pb-14 md:px-12 md:pb-20">
      <div className="max-w-4xl">
        <p className="mb-5 text-[9px] tracking-[.34em] text-[#c9a96e]">FINE-ART TRAVEL · LANDSCAPE · WILDLIFE</p>
        <h1 className="font-serif text-[4.5rem] font-light leading-[.78] tracking-[-.04em] text-[#f0ebe3] sm:text-8xl md:text-[9.2rem]">Where the<br /><span className="italic">World Holds Still.</span></h1>
        <p className="mt-8 max-w-sm text-xs leading-6 tracking-wide text-[#c0b7a9]">Quiet studies of the wild, collected from the far edges of the earth.</p>
      </div>
    </div>
    <div className="absolute bottom-10 right-7 z-10 hidden flex-col items-center gap-4 md:flex"><span className="h-16 w-px bg-[#c9a96e]" /><span className="text-[9px] tracking-[.3em] text-[#c9a96e] [writing-mode:vertical-rl]">SCROLL TO EXPLORE</span></div>
  </section>;
}

function About() {
  return <section id="studio" className="border-b border-[#2a2a2a] bg-[#0a0a0a] px-6 py-24 md:px-24 md:py-32"><div className="grid gap-16 md:grid-cols-[1.1fr_1fr] md:gap-28"><div><p className="mb-8 text-[9px] tracking-[.3em] text-[#c9a96e]">THE PRACTICE</p><blockquote className="max-w-xl font-serif text-4xl font-light leading-[.98] italic text-[#f0ebe3] md:text-6xl">“Photographs that outlast the journey.”</blockquote></div><div className="self-end"><p className="max-w-md text-sm leading-7 text-[#a69d91]">Edward Bobrin is a fine-art photographer drawn to the places where the world goes quiet. From the polar wilderness to the last light on an ancient street, his work is an invitation to look longer.</p><div className="mt-12 grid grid-cols-3 border-t border-[#c9a96e] pt-5"><div><strong className="font-serif text-2xl font-light text-[#f0ebe3]">20+</strong><span className="mt-1 block text-[9px] uppercase tracking-[.18em] text-[#8a8070]">Years</span></div><div><strong className="font-serif text-2xl font-light text-[#f0ebe3]">60+</strong><span className="mt-1 block text-[9px] uppercase tracking-[.18em] text-[#8a8070]">Countries</span></div><div><strong className="font-serif text-2xl font-light text-[#f0ebe3]">500+</strong><span className="mt-1 block text-[9px] uppercase tracking-[.18em] text-[#8a8070]">Editions</span></div></div></div></div></section>;
}

const collections = [{ name: "North / White", count: "24 prints", image: "bobrin-arctic.png" }, { name: "Wild / Unbound", count: "31 prints", image: "bobrin-wildlife.png" }, { name: "Elsewhere", count: "18 prints", image: "bobrin-asia.png" }];
function Collections() {
  return <section id="collections" className="bg-[#0a0a0a] px-6 py-24 md:px-12 md:py-32"><div className="mb-14 flex items-end justify-between"><div><p className="mb-4 text-[9px] tracking-[.3em] text-[#c9a96e]">THE ARCHIVE</p><h2 className="font-serif text-5xl font-light text-[#f0ebe3] md:text-7xl">Collections</h2></div><span className="hidden text-[10px] uppercase tracking-[.2em] text-[#8a8070] md:block">Selected works / 2026</span></div><div className="grid gap-5 md:grid-cols-3">{collections.map((item, i) => <a href="#shop" key={item.name} className={`group relative overflow-hidden ${i === 1 ? "md:mt-16" : ""}`}><div className="aspect-[4/5] overflow-hidden bg-[#111]"><img src={`/__mockup/images/${item.image}`} alt={item.name} className="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-105" /></div><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0a0a0a] to-transparent px-6 pb-6 pt-20"><h3 className="font-serif text-3xl font-light text-[#f0ebe3]">{item.name}</h3><p className="mt-1 text-[10px] tracking-[.2em] text-[#c9a96e]">{item.count}</p></div></a>)}</div></section>;
}

function Featured() {
  return <section id="shop" className="border-y border-[#2a2a2a] bg-[#111111] px-6 py-24 md:px-24 md:py-32"><div className="grid items-center gap-14 md:grid-cols-[1.1fr_1fr] md:gap-24"><div className="relative mx-auto w-full max-w-lg"><div className="absolute -inset-4 border border-[#2a2a2a] md:-inset-6" /><img src="/__mockup/images/bobrin-wolf.png" alt="The Watcher, wolf in snow" className="relative aspect-[4/5] w-full object-cover grayscale" /><span className="absolute -bottom-10 left-0 text-[9px] tracking-[.25em] text-[#8a8070]">PLATE 07 / THE WATCHER</span></div><div><p className="mb-6 text-[9px] tracking-[.3em] text-[#c9a96e]">CURRENTLY AVAILABLE</p><h2 className="font-serif text-6xl font-light leading-none text-[#f0ebe3] md:text-8xl">The<br /><span className="italic">Watcher</span></h2><p className="mt-8 max-w-sm text-sm leading-7 text-[#a69d91]">A solitary presence in the falling snow. Printed by hand on 100% cotton rag, each edition is signed and numbered.</p><dl className="mt-10 grid max-w-sm grid-cols-2 gap-y-5 border-t border-[#2a2a2a] pt-5 text-[10px] uppercase tracking-[.16em]"><div><dt className="text-[#8a8070]">Edition</dt><dd className="mt-2 text-[#f0ebe3]">1 — 75</dd></div><div><dt className="text-[#8a8070]">Sizes</dt><dd className="mt-2 text-[#f0ebe3]">24 × 30 in+</dd></div><div><dt className="text-[#8a8070]">From</dt><dd className="mt-2 text-[#c9a96e]">$450</dd></div></dl><div className="mt-10"><Button filled>VIEW EDITION</Button></div></div></div></section>;
}

function Trade() {
  return <section id="trade" className="border-b border-[#2a2a2a] bg-[#0a0a0a] px-6 py-24 md:px-12 md:py-28"><div className="flex flex-col justify-between gap-12 md:flex-row md:items-end"><div><p className="mb-5 text-[9px] tracking-[.3em] text-[#c9a96e]">PRIVATE & COMMERCIAL</p><h2 className="font-serif text-5xl font-light text-[#f0ebe3] md:text-7xl">For Collectors<br /><span className="italic">& Trade.</span></h2></div><Button>INQUIRE ABOUT A PROJECT</Button></div><div className="mt-20 grid border-t border-[#2a2a2a] md:grid-cols-3">{[["Interior Designers", "Spaces with a point of view.", "Bespoke print programs for residential and hospitality interiors."], ["Art Consultants", "A considered collection.", "Access the complete archive, editions and curatorial support."], ["Corporate Collections", "Work that stays with you.", "Meaningful works for workplaces, boardrooms and public spaces."]].map(([title, sub, body], i) => <div key={title} className={`py-8 md:px-8 ${i > 0 ? "border-t border-[#2a2a2a] md:border-l md:border-t-0" : ""}`}><h3 className="font-serif text-3xl font-light text-[#f0ebe3]">{title}</h3><p className="mt-3 font-serif text-lg italic text-[#c9a96e]">{sub}</p><p className="mt-4 max-w-xs text-xs leading-6 text-[#8a8070]">{body}</p></div>)}</div></section>;
}

function Footer() {
  return <footer className="bg-[#0a0a0a] px-6 py-12 md:px-12"><div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between"><div><img src="/__mockup/images/logo-eb-seal.png" alt="Edward Bobrin Photography" className="h-20 w-auto" style={{ mixBlendMode: 'screen' }} /><p className="mt-5 text-[10px] uppercase tracking-[.22em] text-[#8a8070]">Fine Art Photography</p></div><div className="flex items-center gap-8 text-[10px] tracking-[.12em] text-[#8a8070]"><span>© 2026 Edward Bobrin</span><span className="hidden md:block">All rights reserved.</span><a href="#top" className="hover:text-[#c9a96e]"><Instagram size={16} strokeWidth={1.2} /></a><a href="#top" className="hover:text-[#c9a96e]"><Linkedin size={16} strokeWidth={1.2} /></a></div></div></footer>;
}

export default function LandingPage() {
  return <main className="min-h-[100dvh] overflow-hidden bg-[#0a0a0a] text-[#f0ebe3]"><Hero /><About /><Collections /><Featured /><Trade /><Footer /><div className="fixed bottom-5 right-5 z-30 hidden rounded-full border border-[#2a2a2a] bg-[#111]/80 p-3 text-[#8a8070] backdrop-blur-sm md:block"><ChevronDown size={14} /></div></main>;
}