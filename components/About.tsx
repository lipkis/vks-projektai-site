const benefits = [
  {
    title: 'Vienas atsakingas rangovas',
    desc: 'Nereikia ieškoti kelių skirtingų specialistų. Visus darbus – nuo planavimo iki galutinio valymo – koordinuojame ir atliekame patys.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
  },
  {
    title: 'Aiški komunikacija',
    desc: 'Nuolat informuojame apie darbo eigą. Prieš pradedant – aiški sutartis. Darbo metu – operatyvūs atsakymai ir skaidri kainodara.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
        />
      </svg>
    ),
  },
  {
    title: 'Kokybiškas darbų atlikimas',
    desc: 'Naudojame patikimas medžiagas ir dirbame kruopščiai. Kiekvienas projektas baigiamas taip, kaip norėtume savo namuose.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
        />
      </svg>
    ),
  },
  {
    title: 'Laiku atliekami darbai',
    desc: 'Laikomės sutartų terminų. Sudarome realų grafiką ir jo laikomės – Jūsų planai svarbūs ir mums.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
  },
]

export default function About() {
  return (
    <section id="apie" className="section-py bg-white">
      <div className="wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left – text */}
          <div>
            <p className="section-label mb-4">Apie mus</p>
            <h2 className="font-garamond text-3xl sm:text-4xl md:text-5xl text-brand-900 leading-tight mb-6">
              Vidaus apdailos specialistai
              <br />
              <span className="italic text-gold-500">su patirtimi</span>
            </h2>
            <div className="space-y-4 text-brand-600 font-sans text-base leading-relaxed">
              <p>
                VKS Projektai – Jonavoje įsikūrusi vidaus apdailos įmonė, atliekanti
                pilną vidaus įrengimą gyvenamuosiuose ir komerciniuose
                pastatuose. Dirbame Kaune ir Kauno rajone.
              </p>
              <p>
                Mūsų privalumas – vienas rangovas visam projektui. Klientas
                susisiekia su mumis vieną kartą, o mes pasirūpiname viskuo: nuo
                darbo plano parengimo iki paskutinio švarinimo. Jokio vargo su
                koordinavimu tarp skirtingų meistrų.
              </p>
              <p>
                Per daugelį metų sukaupta patirtis leidžia mums prognozuoti
                iššūkius iš anksto, laikytis terminų ir užtikrinti kokybę, kuri
                matoma ne tik iš karto, bet ir po metų.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-100">
              <p className="font-sans text-sm text-brand-400 tracking-wide mb-1">
                Darbo zona
              </p>
              <p className="font-garamond text-2xl text-brand-900">
                Kaunas ir Kauno rajonas
              </p>
            </div>
          </div>

          {/* Right – benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="p-6 bg-stone-50 border border-stone-100 hover:border-gold-300 transition-colors duration-200"
              >
                <div className="text-gold-500 mb-4">{b.icon}</div>
                <h3 className="font-garamond text-lg text-brand-900 mb-2">
                  {b.title}
                </h3>
                <p className="font-sans text-sm text-brand-500 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
