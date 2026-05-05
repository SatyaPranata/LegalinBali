import Section from './Section'

export default function CTA() {
  return (
    <section className="py-24 px-6 bg-cream">
      <Section>
        <div
          className="max-w-4xl mx-auto relative overflow-hidden rounded-[2.5rem]
                     bg-gradient-to-br from-green-600 to-green-400
                     px-10 py-20 text-center
                     shadow-2xl shadow-green-600/30"
        >
          {/* Decoration */}
          <div className="absolute -top-16 -right-16 text-[220px] opacity-[0.07] select-none">🌿</div>
          <div className="absolute -bottom-12 -left-12 text-[160px] opacity-[0.07] select-none rotate-45">🍃</div>

          <div className="relative z-10">
            <div
              className="inline-flex items-center gap-2 bg-white/15 border border-white/25
                         text-white text-xs font-semibold uppercase tracking-widest
                         px-4 py-1.5 rounded-full mb-6"
            >
              🌍 Bergabung Bersama 2.400+ Keluarga
            </div>

            <h2 className="font-display text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
              Mulai Perjalanan Eco-Living<br />Anda Hari Ini
            </h2>
            <p className="text-white/80 text-base lg:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Konsultasikan kebutuhan hunian ramah lingkungan Anda dengan tim ahli kami.
              Gratis, tanpa komitmen, dan tanpa tekanan.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-white text-green-700 font-bold px-8 py-3.5 rounded-full
                                 hover:bg-green-50 hover:-translate-y-0.5 hover:shadow-xl
                                 transition-all duration-200 active:scale-95">
                🌿 Konsultasi Gratis
              </button>
              <button className="btn-outline-white">
                Lihat Semua Properti →
              </button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap justify-center gap-6 mt-10 text-white/60 text-xs">
              <span>✓ Tanpa biaya awal</span>
              <span>✓ Tim ahli bersertifikasi</span>
              <span>✓ Garansi 10 tahun</span>
              <span>✓ Purna jual terpercaya</span>
            </div>
          </div>
        </div>
      </Section>
    </section>
  )
}
