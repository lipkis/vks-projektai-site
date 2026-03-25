'use client'

import { useState } from 'react'

const contactDetails = [
  {
    label: 'Telefonas',
    value: '+370 678 88620',
    href: 'tel:+37067888620',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
        />
      </svg>
    ),
  },
  {
    label: 'El. paštas',
    value: 'Vksprojektai@gmail.com',
    href: 'mailto:Vksprojektai@gmail.com',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    label: 'Adresas',
    value: 'Kaunas ir Kauno rajonas',
    href: null,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
        />
      </svg>
    ),
  },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: wire up form submission (e.g. Formspree, email service)
    setSent(true)
  }

  return (
    <section id="kontaktai" className="section-py bg-white">
      <div className="wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left – contact info */}
          <div>
            <p className="section-label mb-4">Kontaktai</p>
            <h2 className="font-garamond text-3xl sm:text-4xl md:text-5xl text-brand-900 leading-tight mb-6">
              Susisiekite su mumis
            </h2>
            <p className="font-sans text-brand-500 text-base leading-relaxed mb-10">
              Aprašykite savo projektą – atsakysime per darbo dieną. Konsultacija
              nemokama ir jokių įsipareigojimų.
            </p>

            <div className="space-y-6">
              {contactDetails.map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-stone-100 flex items-center justify-center text-brand-700 mt-0.5">
                    {c.icon}
                  </div>
                  <div>
                    <p className="font-sans text-xs text-brand-400 uppercase tracking-widest mb-0.5">
                      {c.label}
                    </p>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="font-sans text-brand-900 text-base font-medium hover:text-gold-500 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:text-gold-500"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="font-sans text-brand-900 text-base font-medium">
                        {c.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.facebook.com/VKSProjektai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-stone-200 hover:border-gold-500 text-brand-700 hover:text-gold-500 font-sans text-sm font-medium px-4 py-2.5 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
              <a
                href="https://paslaugos.lt/uab-vks-projektai-uv783"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-stone-200 hover:border-gold-500 text-brand-700 hover:text-gold-500 font-sans text-sm font-medium px-4 py-2.5 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                </svg>
                Paslaugos.lt profilis
              </a>
            </div>

            {/* Response time note */}
            <div className="mt-8 p-5 bg-stone-50 border-l-4 border-gold-500">
              <p className="font-sans text-sm text-brand-600 leading-relaxed">
                <strong className="font-semibold text-brand-900">Atsakymo laikas:</strong>{' '}
                Į užklausas atsakome per 1 darbo dieną. Skubiems klausimams
                rekomenduojame paskambinti tiesiogiai.
              </p>
            </div>
          </div>

          {/* Right – form */}
          <div>
            {sent ? (
              <div className="h-full flex flex-col items-start justify-center py-16">
                <div className="w-14 h-14 bg-green-50 flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-7 h-7 text-green-600"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-garamond text-2xl text-brand-900 mb-3">
                  Žinutė išsiųsta
                </h3>
                <p className="font-sans text-brand-500 text-base leading-relaxed">
                  Ačiū už Jūsų užklausą. Susisieksime per 1 darbo dieną.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5"
                aria-label="Kontaktinė forma"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-sans text-xs font-semibold text-brand-700 uppercase tracking-widest mb-2"
                    >
                      Vardas
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Jūsų vardas"
                      className="w-full font-sans text-brand-900 text-sm bg-stone-50 border border-stone-200 px-4 py-3 placeholder-brand-300 focus:outline-none focus:border-gold-500 focus:bg-white transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-sans text-xs font-semibold text-brand-700 uppercase tracking-widest mb-2"
                    >
                      Telefonas
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+370 600 00000"
                      className="w-full font-sans text-brand-900 text-sm bg-stone-50 border border-stone-200 px-4 py-3 placeholder-brand-300 focus:outline-none focus:border-gold-500 focus:bg-white transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-sans text-xs font-semibold text-brand-700 uppercase tracking-widest mb-2"
                  >
                    El. paštas
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="jusu@pastas.lt"
                    className="w-full font-sans text-brand-900 text-sm bg-stone-50 border border-stone-200 px-4 py-3 placeholder-brand-300 focus:outline-none focus:border-gold-500 focus:bg-white transition-colors duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-sans text-xs font-semibold text-brand-700 uppercase tracking-widest mb-2"
                  >
                    Projekto aprašymas
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Trumpai aprašykite patalpas ir darbus, kuriuos norėtumėte atlikti..."
                    className="w-full font-sans text-brand-900 text-sm bg-stone-50 border border-stone-200 px-4 py-3 placeholder-brand-300 focus:outline-none focus:border-gold-500 focus:bg-white transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-900 hover:bg-brand-800 text-white font-sans font-semibold text-sm px-8 py-4 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-900 focus-visible:ring-offset-2"
                >
                  Siųsti užklausą
                </button>

                <p className="font-sans text-xs text-brand-400 text-center leading-relaxed">
                  Pateikdami formą sutinkate su privatumo politika.
                  Jūsų duomenys nebus perduodami trečiosioms šalims.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gold-500 flex-shrink-0" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <p className="font-sans text-sm font-medium text-brand-700">Kaunas ir Kauno rajonas</p>
          </div>
          <div className="relative w-full h-72 md:h-96 border border-stone-200 overflow-hidden">
            <iframe
              title="VKS Projektai žemėlapis"
              src="https://maps.google.com/maps?q=Kaunas,+Lietuva&hl=lt&z=12&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(20%) contrast(95%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
