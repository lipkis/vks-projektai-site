const footerLinks = [
  { href: '#apie', label: 'Apie mus' },
  { href: '#paslaugos', label: 'Paslaugos' },
  { href: '#galerija', label: 'Galerija' },
  { href: '#atsiliepimai', label: 'Atsiliepimai' },
  { href: '#procesas', label: 'Kaip dirbame' },
  { href: '#kontaktai', label: 'Kontaktai' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-900 text-white" aria-label="Puslapio apačia">
      <div className="wrapper">
        {/* Main footer grid – 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr_1fr] gap-10 py-16 border-b border-white/10">
          {/* Brand column */}
          <div>
            <a href="#" className="inline-block mb-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400">
              <img
                src="/images/logo.png"
                alt="VKS Projektai"
                className="w-full max-w-[180px] h-auto"
                style={{ mixBlendMode: 'screen' }}
              />
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

          {/* Contact column */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-white/40 mb-5">
              Kontaktai
            </h3>
            <ul className="space-y-4">
              <li>
                <p className="font-sans text-xs text-white/40 uppercase tracking-widest mb-1">Telefonas</p>
                <a
                  href="tel:+37067888620"
                  className="font-sans text-sm text-white/75 hover:text-gold-400 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:text-gold-400"
                >
                  +370 678 88620
                </a>
              </li>
              <li>
                <p className="font-sans text-xs text-white/40 uppercase tracking-widest mb-1">El. paštas</p>
                <a
                  href="mailto:Vksprojektai@gmail.com"
                  className="font-sans text-sm text-white/75 hover:text-gold-400 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:text-gold-400"
                >
                  Vksprojektai@gmail.com
                </a>
              </li>
              <li>
                <p className="font-sans text-xs text-white/40 uppercase tracking-widest mb-1">Adresas</p>
                <p className="font-sans text-sm text-white/75">Panerių g. 17-28, Jonava</p>
              </li>
              <li className="flex gap-3 pt-1">
                <a
                  href="https://www.facebook.com/VKSProjektai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-gold-400 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:text-gold-400"
                  aria-label="Facebook puslapis"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://paslaugos.lt/uab-vks-projektai-uv783"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-gold-400 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:text-gold-400"
                  aria-label="Paslaugos.lt profilis"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                  </svg>
                </a>
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
