import Section from "./Section";

const SPONSORS_ROW1 = [
  { name: "De Bharata", initials: "De Bharata", color: "#FF6600", bg: "#FFF3E8", logo: `/img/Logo Mitra/De Bharata.svg` },
  { name: "Naga Mas", initials: "Naga Mas", color: "#1A5276", bg: "#EBF5FB", logo: `/img/Logo Mitra/Naga Mas.svg` },
  { name: "Fays Hospitality", initials: "Fays Hospitality", color: "#145A32", bg: "#E9F7EF", logo: `/img/Logo Mitra/Fays Hospitality.svg` },
  { name: "New Melati", initials: "New Melati", color: "#7D6608", bg: "#FEF9E7", logo: `/img/Logo Mitra/New Melati.svg` },
  { name: "Akohara", initials: "Akohara", color: "#1F618D", bg: "#EAF2F8", logo: `/img/Logo Mitra/Akohara.svg` },
  { name: "Ciputra", initials: "Ciputra", color: "#6C3483", bg: "#F5EEF8", logo: `/img/Logo Mitra/Ciputra.svg` },
  { name: "La Numa", initials: "La Numa", color: "#1A5276", bg: "#EBF5FB", logo: `/img/Logo Mitra/La Numa.svg` },
  { name: "Taman Loka", initials: "Taman Loka", color: "#1A5276", bg: "#EBF5FB", logo: `/img/Logo Mitra/Taman Loka.svg` },
  { name: "Alindra", initials: "Alindra", color: "#1A5276", bg: "#EBF5FB", logo: `/img/Logo Mitra/Alindra.svg` },
  { name: "Askitchen", initials: "Askitchen", color: "#1A5276", bg: "#EBF5FB", logo: `/img/Logo Mitra/Askitchen.svg` },
];

const SPONSORS_ROW2 = [
  { name: "Adhiwangsa", initials: "Adhiwangsa", color: "#1F618D", bg: "#EAF2F8", logo: `/img/Logo Mitra/Adhiwangsa.svg` },
  { name: "Adira", initials: "Adira", color: "#117A65", bg: "#E8F8F5", logo: `/img/Logo Mitra/Adira.svg` },
  { name: "Sanhose", initials: "Sanhose", color: "#922B21", bg: "#FDEDEC", logo: `/img/Logo Mitra/Sanhose.svg` },
  { name: "Avera", initials: "Avera", color: "#6E2F1A", bg: "#FAE5D3", logo: `/img/Logo Mitra/Avera.svg` },
  { name: "Info Denpasar", initials: "Info Denpasar", color: "#154360", bg: "#EAF2F8", logo: `/img/Logo Mitra/Info Denpasar.svg` },
  { name: "Domisili", initials: "Domisili", color: "#7B241C", bg: "#FDEDEC", logo: `/img/Logo Mitra/Domisili.svg` },
  { name: "Agrapana", initials: "Agrapana", color: "#145A32", bg: "#E9F7EF", logo: `/img/Logo Mitra/Agrapana.svg` },
  { name: "Sandimas", initials: "Sandimas", color: "#145A32", bg: "#E9F7EF", logo: `/img/Logo Mitra/Sandimas.svg` },
  { name: "Krisna Oleh - Oleh", initials: "Krisna Oleh - Oleh", color: "#145A32", bg: "#E9F7EF", logo: `/img/Logo Mitra/Krisna Oleh - Oleh.svg` },
  { name: "Nakula", initials: "Nakula", color: "#145A32", bg: "#E9F7EF", logo: `/img/Logo Mitra/Nakula.svg` },
];

const STATS = [
  { n: "10+", l: "Mitra Strategis" },
  { n: "5+", l: "Tahun Pengalaman" },
  { n: "100+", l: "Perizinan Diselesaikan" },
  { n: "100%", l: "Tingkat Keberhasilan" },
];

function LogoCard({ name, initials, color, bg, logo }) {
  return (
    <div
      className="flex-shrink-0 mx-4 group cursor-default
                    bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-6 py-5
                    flex flex-col items-center justify-center gap-3
                    w-[160px] h-[110px]
                    hover:bg-white hover:border-white hover:-translate-y-1 hover:shadow-xl
                    transition-all duration-300"
    >
      {logo ? (
        <img
          src={logo}
          alt={name}
          className="h-10 w-auto object-contain brightness-0 invert
                     group-hover:brightness-100 group-hover:invert-0
                     transition-all duration-300"
        />
      ) : (
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center
                     font-bold text-sm tracking-wide bg-white/20 text-white
                     group-hover:scale-110 group-hover:text-current
                     transition-all duration-300"
          style={{ "--hover-bg": bg, "--hover-color": color }}
        >
          <span className="group-hover:hidden">{initials}</span>
          <span
            className="hidden group-hover:flex w-full h-full rounded-xl
                       items-center justify-center text-sm font-bold"
            style={{ backgroundColor: bg, color }}
          >
            {initials}
          </span>
        </div>
      )}
      <span
        className="text-[11px] text-white/60 text-center leading-tight font-medium
                       group-hover:text-gray-600 transition-colors"
      >
        {name}
      </span>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }) {
  const tripled = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden marquee-wrap w-full">
      <div className={reverse ? "marquee-track-reverse" : "marquee-track"}>
        {tripled.map((s, i) => (
          <LogoCard key={`${s.name}-${i}`} {...s} />
        ))}
      </div>
    </div>
  );
}

export default function Sponsors() {
  return (
    <section className="py-24 overflow-hidden relative bg-gradient-to-br from-green-800 via-green-700 to-green-600">
      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-900/40 rounded-full blur-3xl pointer-events-none" />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="relative z-10">
        {/* ── Header ── */}
        <Section className="text-center px-6 mb-14">
          <div
            className="inline-block border border-white/25 text-white/80  tracking-[0.2em] px-4 py-1.5 rounded-full mb-4
                          bg-white/10 backdrop-blur-sm"
          >
            Mitra & Kolaborasi
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-black text-white mb-4">
            Dipercaya & Bermitra dengan <em className="not-italic text-green-400">Institusi Terkemuka</em>
          </h2>
          <p className="text-white/60 text-base max-w-2xl mx-auto leading-relaxed">
            Kami menjalin kerja sama strategis dengan berbagai instansi pemerintah, lembaga keuangan, serta asosiasi profesional untuk memastikan setiap proses perizinan berjalan lancar, cepat, dan sesuai regulasi yang berlaku.
          </p>
        </Section>

        {/* ── Marquee rows ── */}
        <div className="mb-5">
          <MarqueeRow items={SPONSORS_ROW1} reverse={false} />
        </div>
        <div className="mb-14">
          <MarqueeRow items={SPONSORS_ROW2} reverse={true} />
        </div>

        {/* ── Stats bar ── */}
        <Section className="px-6">
          <div
            className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md border border-white/15
                          rounded-3xl px-8 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {STATS.map(({ n, l }) => (
              <div key={l} className="text-center">
                <div className="font-display text-3xl font-black text-white">{n}</div>
                <div className="text-white/50 text-xs uppercase tracking-widest mt-1.5">{l}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── CTA kecil ── */}
        <Section className="text-center mt-10 px-6">
          <p className="text-white/50 text-sm mb-4">Tertarik bermitra dengan Legalin Bali?</p>

          <a
            href="/kontak"
            className="inline-flex items-center gap-2 bg-white text-green-700
                       font-semibold text-sm px-6 py-2.5 rounded-full
                       hover:bg-green-50 hover:shadow-xl hover:-translate-y-0.5
                       transition-all duration-200 shadow-md"
          >
            Hubungi Kami →
          </a>
        </Section>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}
