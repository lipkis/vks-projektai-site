'use client'

import { useRef } from 'react'

const featured = [
  {
    name: 'Ričardas Šimčikas',
    service: 'Buto įrengimas',
    date: '2025 03 14',
    text: 'Esu labai dėkingas Vytautui už jo nuoširdų darbą ir atsakymus į mano visus "durnus" klausimus. Jo suteiktos rekomendacijos itin palengvino visą įsirengimo procesą "nuo A iki Z". Visi darbai buvo atlikti sutartais terminais, nesusidūriau su jokiomis problemomis. Stipri rekomendacija.',
  },
  {
    name: 'Irmantas M',
    service: 'Pilnas buto apdailos įruošimas',
    date: '2025 03 14',
    text: 'Buvo atsakingas už pilną vidaus apdailą 45 kvm naujos statybos bute Kaune. Rekomendavo ir parinko aukštos kokybės medžiagas, sėkmingai įgyvendindamas nestandartinius sprendimus. Labai žmogiškas bendravimas ir supratingumas, rekomenduoju.',
  },
  {
    name: 'mantas mikulis',
    service: 'Kompleksinis darbų atlikimas',
    date: '2025 03 13',
    text: 'Esame labai patenkinti šios komandos darbu. Jie rūpinosi viskuo: nuo gipso montavimo, glaistymo ir dažymo iki plytelių klijavimo, grindų klojimo bei šviestuvų pakabinimo. Kokybiškai ir laiku atlikti darbai.',
  },
]

const compact = [
  { name: 'vaidas maksvytis', service: 'Plytelių klijavimas', text: 'Ne tik puikiai atliko darbą, bet ir padėjo išspręsti kelias netikėtas problemas. Dėkingas už profesionalumą ir geranoriškumą.' },
  { name: 'Paulius', service: 'Kapitalinis buto remontas', text: 'Remontas atliktas puikiai, atsakingai ir laikytasi sutartų terminų. Būtinai kreipsiuosi dar kartą. Labai rekomenduoju!' },
  { name: 'Sarune Meskaityte', service: 'Sienų dažymas', text: 'Darbas atliktas profesionaliai ir laiku, bendravimas malonus ir sklandus. Naudojausi pirmą kartą, bet tikrai ne paskutinį!' },
  { name: 'Darius Katinas', service: 'Plytelių klijavimas', text: 'Greitai, kokybiškai ir labai atsakingai! Lengva komunikacija, viskas padaryta kaip norėjom! Tikrai kreipsiuos dar.' },
  { name: 'Deividas Aldakauskas', service: 'Vidaus apdaila', text: 'Darbai atlikti profesionaliai ir laiku. Ypač patiko atsakingas požiūris į kliento poreikius. Drąsiai rekomenduojame.' },
  { name: 'Karolis Babenskas', service: 'Vidaus apdaila', text: 'Darbas atliktas laiku, kokybiškai ir be jokių problemų. Bendravimas aiškus ir profesionalus. Labai rekomenduoju!' },
  { name: 'Ignas Klimavičius', service: 'Plytelių klijavimas', text: 'Meistras tikrai kruopštus ir atsakingas, neradom prie ko prikibti. Rekomenduojam 100%.' },
  { name: 'Gabija Sazanskyte', service: 'Plytelių klijavimas', text: 'Puikiai atliktas darbas!' },
]

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 iš 5 žvaigždučių">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-gold-400" aria-hidden="true">
          <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
        </svg>
      ))}
    </div>
  )
}

function Initials({ name }: { name: string }) {
  const parts = name.trim().split(' ')
  const initials = parts.length >= 2
    ? parts[0][0] + parts[parts.length - 1][0]
    : parts[0][0]
  return (
    <div className="w-10 h-10 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center flex-shrink-0">
      <span className="text-gold-400 font-sans text-xs font-bold uppercase">{initials}</span>
    </div>
  )
}

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'right' ? 320 : -320, behavior: 'smooth' })
    }
  }

  return (
    <section id="atsiliepimai" className="section-py bg-brand-900">
      <div className="wrapper">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <div>
            <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-4">Atsiliepimai</p>
            <h2 className="font-garamond text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              Ką sako mūsų klientai
            </h2>
            <p className="font-sans text-white/40 text-sm mt-3">
              {featured.length + compact.length} atsiliepimai · vidurkis 5.0 ★ · šaltinis: paslaugos.lt
            </p>
          </div>
          <a
            href="https://paslaugos.lt/uab-vks-projektai-uv783"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 border border-white/20 hover:border-gold-500 text-white/60 hover:text-gold-400 font-sans text-sm font-medium px-5 py-2.5 transition-colors duration-200 cursor-pointer focus:outline-none"
          >
            Visi atsiliepimai
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>

        {/* Featured 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 mb-8">
          {featured.map((t) => (
            <article key={t.name} className="bg-brand-900 p-8 flex flex-col relative">
              {/* Large decorative quote */}
              <span className="absolute top-6 right-8 font-garamond text-8xl text-white/5 leading-none select-none" aria-hidden="true">&ldquo;</span>

              <Stars />

              <blockquote className="mt-6 flex-1">
                <p className="font-sans text-white/75 text-sm leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
              </blockquote>

              <footer className="mt-8 flex items-center gap-3">
                <Initials name={t.name} />
                <div>
                  <p className="font-sans text-white text-sm font-semibold leading-none">{t.name}</p>
                  <p className="font-sans text-white/40 text-xs mt-1">{t.service} · {t.date}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>

        {/* Compact scrollable strip */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto pb-2 scroll-smooth"
            style={{ scrollbarWidth: 'none' }}
          >
            {compact.map((t) => (
              <article
                key={t.name}
                className="flex-shrink-0 w-72 bg-white/5 border border-white/10 p-5 flex flex-col"
              >
                <Stars />
                <blockquote className="mt-3 flex-1">
                  <p className="font-sans text-white/60 text-xs leading-relaxed">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </blockquote>
                <footer className="mt-4 flex items-center gap-2.5">
                  <Initials name={t.name} />
                  <div>
                    <p className="font-sans text-white text-xs font-semibold leading-none">{t.name}</p>
                    <p className="font-sans text-white/35 text-xs mt-1">{t.service}</p>
                  </div>
                </footer>
              </article>
            ))}
          </div>

          {/* Scroll buttons */}
          <div className="flex gap-2 mt-5 justify-end">
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 border border-white/20 hover:border-gold-500 text-white/50 hover:text-gold-400 flex items-center justify-center transition-colors duration-200 cursor-pointer focus:outline-none"
              aria-label="Slinkti kairėn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 border border-white/20 hover:border-gold-500 text-white/50 hover:text-gold-400 flex items-center justify-center transition-colors duration-200 cursor-pointer focus:outline-none"
              aria-label="Slinkti dešinėn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
