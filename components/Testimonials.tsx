const testimonials = [
  {
    name: 'Tomas Kačinskas',
    location: 'Kaunas',
    project: 'Pilnas buto įrengimas',
    rating: 5,
    text: 'Pilnas buto remontas buvo atliktas per sutartą laiką ir be jokių netikėtumų. Komanda profesionali – žinojome, kas vyksta kiekviename etape. Ypač džiaugiamės vonios kambariu: plytelės sudėtos tiksliai, viskas tvarkinga. Rekomenduočiau drąsiai.',
  },
  {
    name: 'Rasa Petrauskienė',
    location: 'Garliava',
    project: 'Vonios ir prieškambario remontas',
    rating: 5,
    text: 'Ieškojome rangovo, kuris viską atliktų patiems nesirūpinant. VKS Projektai – būtent tai. Nuo aptarimo iki galutinio rezultato viskas buvo gerai suorganizuota. Grindys, gipskartonis, dažymas – visos darbų rūšys atliktos kokybiškai ir laiku.',
  },
  {
    name: 'Andrius Jonaitis',
    location: 'Kaunas',
    project: 'Viso buto apdaila',
    rating: 5,
    text: 'Tai jau antras kartas dirbame su šia komanda. Pirmą kartą renovavome virtuvę, dabar – viso buto apdaila. Patikimi, punktualūs, neapleidžia darbo iki galo. Aiški kainodara, jokių staigmenų sąskaitoje. Tikrai rekomenduoju.',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} iš 5 žvaigždučių`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={i < count ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth={i < count ? 0 : 1}
          className={`w-4 h-4 ${i < count ? 'text-gold-500' : 'text-stone-300'}`}
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
            clipRule="evenodd"
          />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="atsiliepimai" className="section-py bg-stone-50">
      <div className="wrapper">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="section-label mb-4">Atsiliepimai</p>
          <h2 className="font-garamond text-3xl sm:text-4xl md:text-5xl text-brand-900 leading-tight">
            Ką sako mūsų klientai
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="bg-white p-8 border border-stone-100 flex flex-col"
            >
              <Stars count={t.rating} />

              <blockquote className="mt-5 flex-1">
                <p className="font-sans text-brand-700 text-sm leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
              </blockquote>

              <footer className="mt-6 pt-5 border-t border-stone-100">
                <p className="font-garamond text-brand-900 text-lg leading-none">
                  {t.name}
                </p>
                <p className="font-sans text-brand-400 text-xs mt-1">
                  {t.location} &middot; {t.project}
                </p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
