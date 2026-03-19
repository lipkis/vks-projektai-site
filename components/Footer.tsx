const footerLinks = [
  { href: '#apie', label: 'Apie mus' },
  { href: '#paslaugos', label: 'Paslaugos' },
  { href: '#galerija', label: 'Galerija' },
  { href: '#atsiliepimai', label: 'Atsiliepimai' },
  { href: '#procesas', label: 'Kaip dirbame' },
  { href: '#kontaktai', label: 'Kontaktai' },
]

const services = [
  'Pilnas vidaus įrengimas',
  'Plytelių klijavimas',
  'Gipskartonio montavimas',
  'Glaistymas ir dažymas',
  'Grindų klojimas',
  'Vonios remontas',
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-900 text-white" aria-label="Puslapio apačia">
      <div className="wrapper">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16 border-b border-white/10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-flex items-center gap-3 mb-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400">
              <div className="flex-shrink-0 w-10 h-10 bg-gold-500 flex items-center justify-center">
                <span className="text-white font-sans font-bold text-sm tracking-tight">VKS</span>
              </div>
              <div>
                <p className="text-white font-sans font-semibold text-base leading-none">VKS Projektai</p>
                <p className="text-gold-400 font-sans text-xs tracking-[0.18em] uppercase mt-1">Vidaus įrengimas</p>
              </div>
            </a>
            <p className="font-sans text-white/55 text-sm leading-relaxed">
              Vidaus apdailos darbai Kaune ir Kauno rajone. Pilnas projektų
              valdymas nuo A iki Z.
            </p>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-white/40 mb-5">
              Navigacija
            </h3>
            <nav aria-label="Puslapio navigacija">
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-sans text-sm text-white/65 hover:text-gold-400 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:text-gold-400"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services column */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-white/40 mb-5">
              Paslaugos
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <span className="font-sans text-sm text-white/65">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-white/40 mb-5">
              Kontaktai
            </h3>
            <ul className="space-y-4">
              <li>
                <p className="font-sans text-xs text-white/40 uppercase tracking-widest mb-1">Telefonas</p>
                <a
                  href="tel:+37060000000"
                  className="font-sans text-sm text-white/75 hover:text-gold-400 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:text-gold-400"
                >
                  +370 600 00000
                </a>
              </li>
              <li>
                <p className="font-sans text-xs text-white/40 uppercase tracking-widest mb-1">El. paštas</p>
                <a
                  href="mailto:info@vksprojektai.lt"
                  className="font-sans text-sm text-white/75 hover:text-gold-400 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:text-gold-400"
                >
                  info@vksprojektai.lt
                </a>
              </li>
              <li>
                <p className="font-sans text-xs text-white/40 uppercase tracking-widest mb-1">Darbo zona</p>
                <p className="font-sans text-sm text-white/75">
                  Kaunas ir Kauno rajonas
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
          <p className="font-sans text-xs text-white/35">
            &copy; {year} VKS Projektai. Visos teisės saugomos.
          </p>
          <p className="font-sans text-xs text-white/35">
            Vidaus apdailos darbai Kaune ir Kauno rajone
          </p>
        </div>
      </div>
    </footer>
  )
}
