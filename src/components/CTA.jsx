import Section from "./Section";

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
          <div className="absolute -top-16 -right-16 text-[220px] opacity-[0.07] select-none"></div>
          <div className="absolute -bottom-12 -left-12 text-[160px] opacity-[0.07] select-none rotate-45"></div>

          <div className="relative z-10">
            <div
              className="inline-flex items-center gap-2 bg-white/15 border border-white/25
                         text-white text-xs font-semibold uppercase tracking-widest
                         px-4 py-1.5 rounded-full mb-6"
            >
              100+ Legalitas Tuntas
            </div>

            <h2 className="font-display text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
              Mulai Legalitas Usaha
              <br />
              Anda Hari Ini
            </h2>
            <p className="text-white/80 text-base lg:text-lg mb-10 max-w-xl mx-auto leading-relaxed">Konsultasikan legalitas usaha anda dengan tim ahli kami. Gratis.</p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button
                className="bg-white text-green-700 font-bold px-8 py-3.5 rounded-full
                                 hover:bg-green-50 hover:-translate-y-0.5 hover:shadow-xl
                                 transition-all duration-200 active:scale-95"
              >
                Konsultasi Gratis
              </button>
              <a href="/proyek">
                <button className="btn-outline-white">Lihat Semua Proyek →</button>
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap justify-center gap-6 mt-10 text-white/60 text-xs">
              <span>✓ Gratis Konsultasi</span>
              <span>✓ Konsultasi Bersama Tim Ahli</span>
              <span>✓ Aman & Terkendali</span>
            </div>
          </div>
        </div>
      </Section>
    </section>
  );
}
