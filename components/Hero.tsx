import Image from 'next/image'
import { heroImage } from '@/lib/images'

export default function Hero() {
  return (
    <section id="hero" aria-label="Pagrindinis">
      {/* Full-height hero */}
      <div className="relative min-h-screen flex items-center">
        {/* Background image + overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={heroImage.src}
            alt=""
            aria-hidden="true"
            fill
            className="object-cover"
            priority
            quality={85}
          />
          {/* Base dark layer */}
          <div className="absolute inset-0 bg-brand-900/55" />
          {/* Gradient to keep right side slightly visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/80 via-brand-900/40 to-transparent" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 wrapper py-32 md:py-40">
          <div className="max-w-2xl">
            {/* Location badge */}
            <div className="inline-flex items-center gap-2 bg-gold-500/15 border border-gold-500/35 text-gold-300 font-sans text-xs font-semibold tracking-[0.18em] uppercase px-4 py-2 mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 flex-shrink-0"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                  clipRule="evenodd"
                />
              </svg>
              Kaunas ir Kauno rajonas
            </div>

            {/* Heading */}
            <h1 className="font-garamond text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-normal text-white leading-[1.1] mb-6">
              Vidaus įrengimas
              <br />
              <span className="text-gold-400">Kaune nuo A iki Z</span>
            </h1>

            {/* Subheadline */}
            <p className="font-sans text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-xl">
              Vienas rangovas visam projektui – nuo planavimo iki pilno
              įgyvendinimo. Atliekame vidaus apdailos darbus Kaune ir Kauno
              rajone.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#kontaktai"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-sans font-semibold text-base px-8 py-4 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
              >
                Gauti pasiūlymą
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
              <a
                href="#paslaugos"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-sans font-semibold text-base px-8 py-4 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                Mūsų paslaugos
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-brand-900 border-t border-white/10">
        <div className="wrapper">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {[
              { value: '10+', label: 'Metų patirtis' },
              { value: '150+', label: 'Užbaigtų projektų' },
              { value: '100%', label: 'Darbų garantija' },
            ].map((stat) => (
              <div key={stat.label} className="px-4 py-6 md:px-8 text-center">
                <p className="font-garamond text-gold-400 text-3xl md:text-4xl font-normal">
                  {stat.value}
                </p>
                <p className="font-sans text-white/55 text-xs md:text-sm mt-1.5 tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
