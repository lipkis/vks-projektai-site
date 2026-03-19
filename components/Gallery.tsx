import { galleryImages } from '@/lib/images'

export default function Gallery() {
  return (
    <section id="galerija" className="section-py bg-white">
      <div className="wrapper">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="section-label mb-4">Mūsų darbai</p>
            <h2 className="font-garamond text-3xl sm:text-4xl md:text-5xl text-brand-900 leading-tight">
              Projektų galerija
            </h2>
          </div>
          <p className="font-sans text-brand-400 text-sm max-w-xs text-left sm:text-right leading-relaxed">
            Realūs darbai Kaune ir Kauno rajone. Kiekvienas projektas – atskira istorija.
          </p>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden bg-stone-100 aspect-[4/3] group cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/60 transition-colors duration-300 flex items-end p-5">
                <span className="font-sans text-white text-sm font-semibold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 transition-transform">
                  {img.label}
                </span>
              </div>
              {/* Label badge visible on mobile */}
              <div className="absolute bottom-0 inset-x-0 bg-brand-900/75 px-4 py-2 sm:hidden">
                <span className="font-sans text-white text-xs font-medium">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="font-sans text-brand-400 text-sm mb-6">
            Norite pamatyti daugiau? Susisiekite – parodysime įvairių tipų projektų pavyzdžius.
          </p>
          <a
            href="#kontaktai"
            className="inline-flex items-center gap-2 border border-brand-900 text-brand-900 hover:bg-brand-900 hover:text-white font-sans text-sm font-semibold px-7 py-3.5 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-900"
          >
            Susisiekite dėl projekto
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
