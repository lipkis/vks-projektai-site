const services = [
  {
    title: 'Pilnas vidaus įrengimas',
    desc: 'Atliekame visus vidaus apdailos darbus pagal vieną sutartį – nuo patalpų paruošimo iki galutinės apdailos. Klientui nereikia pačiam koordinuoti skirtingų meistrų.',
    featured: true,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },
  {
    title: 'Plytelių klijavimas',
    desc: 'Vonios kambariai, virtuvės, prieškambariai. Tiesios siūlės, tikslūs kampai, patikimas klijavimas. Kaina nuo 25 €/m².',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" /></svg>,
  },
  {
    title: 'Laminato klojimas',
    desc: 'Laminatas, parketlentės, vinilinės grindys. Tikslus klojimas su tinkamu pagrindo paruošimu.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75.125v-1.5m0 1.5A1.125 1.125 0 0 1 2.25 18.375m0 0V5.625m0 12.75h1.5c.621 0 1.125-.504 1.125-1.125M2.25 5.625c0-.621.504-1.125 1.125-1.125m0 0h17.25m-17.25 0A1.125 1.125 0 0 1 3.375 4.5m0 0h17.25m0 0c.621 0 1.125.504 1.125 1.125m0 0v12.75m0 0A1.125 1.125 0 0 1 20.625 19.5m0 0h-1.5m1.5 0c.621 0 1.125-.504 1.125-1.125V5.625m-1.5 12.75V7.5a1.125 1.125 0 0 0-1.125-1.125H6.375A1.125 1.125 0 0 0 5.25 7.5v9.375a1.125 1.125 0 0 0 1.125 1.125h9.375a1.125 1.125 0 0 0 1.125-1.125Z" /></svg>,
  },
  {
    title: 'Gipso kartono montavimas',
    desc: 'Pertvaros, lubų konstrukcijos, nišos, apšiltinimas. Tikslūs ir tvarūs sprendimai bet kokiai erdvei.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" /></svg>,
  },
  {
    title: 'Pakabinamų lubų montavimas',
    desc: 'Gipskartonio ir garso izoliuojančių pakabinamos lubų sistemų įrengimas.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185Z" /></svg>,
  },
  {
    title: 'Sienų dažymas',
    desc: 'Tolygus, kokybiškas sienų dažymas. Darbas be purslų ir netvarkos, paviršius paruošiamas tinkamai.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" /></svg>,
  },
  {
    title: 'Lubų dažymas',
    desc: 'Profesionalus lubų paruošimas ir dažymas. Tolygus dengimas be dryžių ir nelygumo.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" /></svg>,
  },
  {
    title: 'Sienų glaistymas',
    desc: 'Lygūs, kokybiški paviršiai prieš dažymą ar tapetavimą. Naudojame profesionalius medžiagas.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>,
  },
  {
    title: 'Vonios remontas',
    desc: 'Pilnas vonios kambario įrengimas: hidroizoliacija, plytelės, santechnika, aksesuarų tvirtinimas.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" /></svg>,
  },
  {
    title: 'Grindų lyginimas',
    desc: 'Lyginamosios masės pilimas ir grindų paruošimas prieš grindų dangos klojimą.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>,
  },
  {
    title: 'Grindų betonavimas',
    desc: 'Betoninių grindų įrengimas pramoniniuose ir gyvenamuosiuose objektuose.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>,
  },
  {
    title: 'Grindjuosčių montavimas',
    desc: 'Tikslus grindjuosčių tvirtinimas ir kampų apdaila kaip galutinis grindų darbų akordas.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>,
  },
  {
    title: 'Dekoratyvinis tinkavimas',
    desc: 'Dekoratyvinės tinko tekstūros, venetiškas tinkavimas, mikrocementas. Unikalūs sienų paviršiai.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" /></svg>,
  },
  {
    title: 'Projekto valdymas',
    desc: 'Sudarome darbo grafiką, koordinuojame visus etapus ir reguliariai informuojame klientą. Jūs – stebite rezultatą, ne procesą.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
        />
      </svg>
    ),
  },
]

const featuredServices = services.filter((s) =>
  ['Pilnas vidaus įrengimas', 'Projekto valdymas'].includes(s.title)
)
const supportingServices = services.filter((s) =>
  !['Pilnas vidaus įrengimas', 'Projekto valdymas'].includes(s.title)
)

export default function Services() {
  return (
    <section id="paslaugos" className="section-py bg-stone-50">
      <div className="wrapper">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="section-label mb-4">Paslaugos</p>
          <h2 className="font-garamond text-3xl sm:text-4xl md:text-5xl text-brand-900 leading-tight">
            Viskas po vienu stogu
          </h2>
          <p className="font-sans text-brand-500 text-base leading-relaxed mt-4">
            Mūsų pagrindinis produktas – pilnas vidaus įrengimas su projekto valdymu.
            Jūs gausite vieną rangovą, vieną sutartį ir ramią galvą.
          </p>
        </div>

        {/* Two featured cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {featuredServices.map((service) => (
            <div
              key={service.title}
              className="bg-brand-900 p-8 md:p-10 flex flex-col gap-5"
            >
              <div className="flex items-start gap-5">
                <div className="text-gold-400 flex-shrink-0 mt-1">{service.icon}</div>
                <div>
                  <span className="inline-block font-sans text-xs font-semibold tracking-[0.18em] uppercase text-gold-400 mb-3">
                    Akcentuojama paslauga
                  </span>
                  <h3 className="font-garamond text-2xl md:text-3xl text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="font-sans text-white/70 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-5 mt-auto">
                <a
                  href="#kontaktai"
                  className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-sans text-sm font-medium transition-colors duration-200 cursor-pointer"
                >
                  Aptarti projektą
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
          {supportingServices.map((service) => (
            <div
              key={service.title}
              className="bg-white p-7 hover:bg-stone-50 transition-colors duration-200 group"
            >
              <div className="text-gold-500 mb-5 group-hover:text-gold-600 transition-colors duration-200">
                {service.icon}
              </div>
              <h3 className="font-garamond text-xl text-brand-900 mb-2">
                {service.title}
              </h3>
              <p className="font-sans text-sm text-brand-500 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
