import Section from "./Section";

const FEATURES = [
  {
    icon: "🌞",
    title: "Panel Surya Terintegrasi",
    desc: "Energi bersih untuk kebutuhan sehari-hari tanpa tagihan listrik berlebih.",
  },
  {
    icon: "💧",
    title: "Sistem Daur Ulang Air",
    desc: "Teknologi pengolahan air hujan untuk efisiensi maksimal penggunaan air.",
  },
  {
    icon: "🌱",
    title: "Material Ramah Lingkungan",
    desc: "Konstruksi menggunakan bahan-bahan alami dan bersertifikasi ekologis internasional.",
  },
];

export default function About() {
  return (
    <section className="py-24 px-6 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* ── Visual collage ── */}
        <Section className="relative h-[480px] hidden lg:block">
          {/* Main card */}
          <img src="../public/img/Gambar Bangunan.jpg"
            className="absolute top-0 left-0 w-3/4 h-[380px] rounded-3xl overflow-hidden
                       bg-gradient-to-br 
                       flex items-center justify-center text-8xl
                       shadow-2xl shadow-green-600/25"
          >
            
          </img>

          {/* Accent card */}
          <img src="../public/img/Gambar Arsitek.jpg"
            className="absolute bottom-0 right-0 w-[55%] h-60 rounded-2xl overflow-hidden
                       bg-gradient-to-br 
                       flex items-center justify-center text-6xl
                       border-4 border-cream shadow-xl"
          >
            
          </img>

          {/* Award badge */}
          {/* <div
            className="absolute top-1/2 -translate-y-1/2 right-4
                       bg-green-600 text-white rounded-2xl p-5 text-center
                       shadow-xl shadow-green-700/30 animate-float"
          >
            <div className="text-2xl mb-1">🏆</div>
            <div className="font-display font-black text-lg leading-none">Best</div>
            <div className="text-xs opacity-75 uppercase tracking-wider mt-1">Eco Dev '24</div>
          </div> */}

          {/* Decoration ring */}
          <div
            className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full
                       border-4 border-green-300/40"
          />
          <div
            className="absolute top-10 -right-4 w-16 h-16 rounded-full
                       bg-green-200/50"
          />
        </Section>

        {/* ── Text content ── */}
        <Section delay={150}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-400 mb-3">Tentang Legalin Bali</p>
          <h2 className="font-display text-4xl lg:text-5xl font-black text-dark leading-[1.1] mb-5">Properti Impian dengan Konsep Keberlanjutan</h2>
          <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-xl">
            Greenvilla hadir sebagai solusi hunian modern yang mengedepankan keseimbangan antara kenyamanan hidup dan kelestarian alam. Setiap properti kami dirancang dengan standar
            <span className="text-green-600 font-semibold"> green building internasional</span>, menghadirkan harmoni sempurna antara arsitektur kontemporer dan ekosistem alami.
          </p>

          <div className="flex flex-col gap-5 mb-9">
            {FEATURES.map(({ icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4 group">
                <div
                  className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center
                             text-xl flex-shrink-0 group-hover:bg-green-600
                             transition-colors duration-300"
                >
                  {icon}
                </div>
                <div>
                  <h4 className="font-semibold text-dark text-sm mb-1">{title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="btn-primary">Layanan Kami</button>
            <button className="btn-outline-green">Tim Kami →</button>
          </div>
        </Section>
      </div>
    </section>
  );
}
