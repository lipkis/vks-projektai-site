const steps = [
  {
    number: '01',
    title: 'Susisiekiate',
    desc: 'Parašykite ar paskambinkite – suderinome patogų laiką pokalbiui arba apžiūrai vietoje.',
  },
  {
    number: '02',
    title: 'Aptariame projektą',
    desc: 'Išklausome Jūsų pageidavimus, apžiūrime patalpas ir įvertiname darbo apimtis.',
  },
  {
    number: '03',
    title: 'Pateikiame pasiūlymą',
    desc: 'Gausite aiškią kainodarą, terminų planą ir atliekamų darbų sąrašą – be paslėptų mokesčių.',
  },
  {
    number: '04',
    title: 'Atliekame darbus',
    desc: 'Dirbame sistemingai pagal suderintą grafiką, reguliariai informuojame ir palaikome ryšį.',
  },
]

export default function Process() {
  return (
    <section id="procesas" className="section-py bg-white">
      <div className="wrapper">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-4">
            Kaip dirbame
          </p>
          <h2 className="font-garamond text-3xl sm:text-4xl md:text-5xl text-brand-900 leading-tight">
            Proceso žingsniai
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div
            className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-stone-200"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                <div className="flex items-center gap-4 mb-5 lg:flex-col lg:items-start lg:gap-0">
                  <div className="relative z-10 flex-shrink-0 w-20 h-20 bg-stone-50 border border-stone-200 flex items-center justify-center lg:mb-6">
                    <span className="font-garamond text-gold-500 text-3xl font-normal">
                      {step.number}
                    </span>
                  </div>
                </div>

                <h3 className="font-garamond text-xl md:text-2xl text-brand-900 mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-brand-500 leading-relaxed">
                  {step.desc}
                </p>

                {/* Arrow between steps (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-10 -right-3 z-20 items-center justify-center w-6 h-6 -translate-y-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gold-500" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 pt-10 border-t border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="font-garamond text-brand-900 text-xl md:text-2xl max-w-sm leading-snug">
            Pasiruošę pradėti? Susisiekite šiandien.
          </p>
          <a
            href="#kontaktai"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-sans font-semibold text-sm px-7 py-4 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
          >
            Gauti pasiūlymą
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
