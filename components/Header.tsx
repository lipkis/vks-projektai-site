'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#apie', label: 'Apie mus' },
  { href: '#paslaugos', label: 'Paslaugos' },
  { href: '#galerija', label: 'Galerija' },
  { href: '#atsiliepimai', label: 'Atsiliepimai' },
  { href: '#procesas', label: 'Procesas' },
  { href: '#kontaktai', label: 'Kontaktai' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const headerBg =
    scrolled || mobileOpen ? 'bg-brand-900 shadow-lg' : 'bg-transparent'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${headerBg}`}
    >
      <div className="wrapper">
        <div className="flex items-center justify-between h-28 md:h-32">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900 py-3"
          >
            <img
              src="/images/logo.png"
              alt="VKS Projektai – Vidaus įrengimas"
              className="h-20 md:h-24 w-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Pagrindinis meniu">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/75 hover:text-gold-400 font-sans text-sm font-medium tracking-wide transition-colors duration-200 focus:outline-none focus-visible:text-gold-400 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontaktai"
              className="ml-2 inline-block bg-gold-500 hover:bg-gold-600 text-white font-sans text-sm font-semibold px-5 py-2.5 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
            >
              Susisiekite
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Uždaryti meniu' : 'Atidaryti meniu'}
          >
            {mobileOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav
            className="lg:hidden border-t border-white/10 py-4"
            aria-label="Mobilus meniu"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-2 py-3 text-white/80 hover:text-gold-400 font-sans text-base font-medium transition-colors duration-200 cursor-pointer"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 pb-2">
              <a
                href="#kontaktai"
                className="block bg-gold-500 hover:bg-gold-600 text-white font-sans text-sm font-semibold px-5 py-3 text-center transition-colors duration-200 cursor-pointer"
                onClick={() => setMobileOpen(false)}
              >
                Susisiekite
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
