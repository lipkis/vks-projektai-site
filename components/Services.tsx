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
    desc: 'Vonios kambariai, virtuvės, prieškambariai. Tiesios siūlės, tikslūs kampai, patikimas klijavimas.',
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
          d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
        />
      </svg>
    ),
  },
  {
    title: 'Gipskartonio montavimas',
    desc: 'Pertvaros, lubų konstrukcijos, nišos, apšiltinimas. Tikslūs ir tvarūs sprendimai bet kokiai erdvei.',
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
          d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
        />
      </svg>
    ),
  },
  {
    title: 'Glaistymas ir dažymas',
    desc: 'Lygūs paviršiai, kokybiškas glaistas, tolygus dažymas. Darbas be purslų ir netvarkos.',
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
          d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
        />
      </svg>
    ),
  },
  {
    title: 'Grindų klojimas',
    desc: 'Laminatas, parketlentės, vinilinės grindys, keraminės plytelės. Tinkamas pagrindo paruošimas ir tikslus klojimas.',
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
          d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75.125v-1.5m0 1.5A1.125 1.125 0 0 1 2.25 18.375m0 0V5.625m0 12.75h1.5c.621 0 1.125-.504 1.125-1.125M2.25 5.625c0-.621.504-1.125 1.125-1.125m0 0h17.25m-17.25 0A1.125 1.125 0 0 1 3.375 4.5m0 0h17.25m0 0c.621 0 1.125.504 1.125 1.125m0 0v12.75m0 0A1.125 1.125 0 0 1 20.625 19.5m0 0h-1.5m1.5 0c.621 0 1.125-.504 1.125-1.125V5.625m-1.5 12.75V7.5a1.125 1.125 0 0 0-1.125-1.125H6.375A1.125 1.125 0 0 0 5.25 7.5v9.375a1.125 1.125 0 0 0 1.125 1.125h9.375a1.125 1.125 0 0 0 1.125-1.125Z"
        />
      </svg>
    ),
  },
  {
    title: 'Vonios remontas',
    desc: 'Pilnas vonios kambario įrengimas: hidroizoliacija, plytelės, santechnika, aksesuarų tvirtinimas.',
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
          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
        />
      </svg>
    ),
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

export default function Services() {
  const [featured, ...rest] = services

  return (
    <section id="paslaugos" className="section-py bg-stone-50">
      <div className="wrapper">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="section-label mb-4">Paslaugos</p>
          <h2 className="font-garamond text-3xl sm:text-4xl md:text-5xl text-brand-900 leading-tight">
            Viskas po vienu stogu
          </h2>
        </div>

        {/* Featured card */}
        <div className="bg-brand-900 p-8 md:p-10 mb-6 flex flex-col md:flex-row md:items-start gap-6">
          <div className="text-gold-400 flex-shrink-0 mt-1">{featured.icon}</div>
          <div>
            <span className="inline-block font-sans text-xs font-semibold tracking-[0.18em] uppercase text-gold-400 mb-3">
              Pagrindinis produktas
            </span>
            <h3 className="font-garamond text-2xl md:text-3xl text-white mb-3">
              {featured.title}
            </h3>
            <p className="font-sans text-white/70 text-base leading-relaxed max-w-2xl">
              {featured.desc}
            </p>
          </div>
        </div>

        {/* Service grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
          {rest.map((service) => (
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
