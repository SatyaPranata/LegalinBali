import Section from './Section'

const TESTIMONIALS = [
  {
    stars: 5,
    quote: 'Luar biasa! Tagihan listrik kami turun drastis setelah pindah ke hunian Greenvilla. Anak-anak juga lebih sehat karena udara yang bersih dan segar setiap hari.',
    name:  'Budi Santoso',
    role:  'Pemilik Villa Sentul',
    loc:   'Sentul, Bogor',
    init:  'BS',
  },
  {
    stars: 5,
    quote: 'Tim Greenvilla sangat profesional dan responsif. Rumah kami selesai tepat waktu dengan kualitas yang benar-benar melampaui ekspektasi awal kami.',
    name:  'Sari Dewi',
    role:  'Pemilik Rumah Bogor',
    loc:   'Bogor, Jawa Barat',
    init:  'SD',
  },
  {
    stars: 5,
    quote: 'Konsep eco-living yang ditawarkan benar-benar terwujud nyata. Air hujan dapat digunakan, taman subur, dan rumah selalu sejuk tanpa AC berlebih.',
    name:  'Ahmad Rizal',
    role:  'Pemilik Cluster Depok',
    loc:   'Depok, Jawa Barat',
    init:  'AR',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-dark overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-400/10 rounded-full blur-2xl" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <Section className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-400 mb-3">
            Testimoni
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-black text-white mb-4">
            Apa Kata Penghuni Kami
          </h2>
          <p className="text-white/45 text-base max-w-lg mx-auto leading-relaxed">
            Ribuan keluarga telah merasakan manfaat tinggal di hunian eco-friendly bersama Greenvilla.
          </p>
        </Section>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {TESTIMONIALS.map(({ stars, quote, name, role, loc, init }, i) => (
            <Section key={name} delay={i * 100}>
              <div
                className="bg-white/5 border border-white/8 rounded-3xl p-8
                           hover:bg-white/8 hover:border-green-400/30
                           transition-all duration-300 card-hover h-full flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: stars }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-base">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/70 text-sm leading-relaxed mb-6 flex-1 italic">
                  "{quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 border-t border-white/10 pt-5">
                  <div
                    className="w-11 h-11 rounded-full bg-green-600 flex items-center justify-center
                               text-white font-bold text-sm flex-shrink-0"
                  >
                    {init}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{name}</div>
                    <div className="text-white/40 text-xs">{role} · {loc}</div>
                  </div>
                </div>
              </div>
            </Section>
          ))}
        </div>

        {/* Social proof bar */}
        <Section>
          <div className="border border-white/10 rounded-2xl px-8 py-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { n: '2.400+', l: 'Keluarga Bahagia' },
              { n: '4.9/5',  l: 'Rating Rata-rata' },
              { n: '98%',    l: 'Klien Puas' },
              { n: '15+',    l: 'Penghargaan' },
            ].map(({ n, l }) => (
              <div key={l} className="text-center">
                <div className="font-display text-3xl font-black text-green-400">{n}</div>
                <div className="text-white/40 text-xs uppercase tracking-wider mt-1">{l}</div>
              </div>
            ))}
          </div>
        </Section>

      </div>
    </section>
  )
}
