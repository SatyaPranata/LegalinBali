import Section from "./Section";

const SERVICES = [
  {
    icon: "/img/icon-pbg&slf.svg",
    title: "PBG & SLF",
    desc: "Pembuatan izin bangunan gedung sesuai bidang bisnis anda",
  },
  {
    icon: "/img/icon-timbangan.svg",
    title: "Pendirian Badan Usaha",
    desc: "Pengurusan PT, CV, hingga legalitas awal usaha Anda secara lengkap dan resmi.",
  },
  {
    icon: "/img/icon-surat.svg",
    title: "Perizinan OSS & NIB",
    desc: "Proses Nomor Induk Berusaha dan perizinan berbasis OSS dengan mudah dan cepat.",
  },
  {
    icon: "/img/icon-usaha.svg",
    title: "Perizinan Operasional",
    desc: "Pengurusan izin usaha sesuai bidang bisnis agar siap beroperasi tanpa kendala.",
  },
];

const PROCESS = [
  { step: "01", label: "Konsultasi", desc: "Gratis & Tanpa Komitmen" },
  { step: "02", label: "Deal", desc: "Sesuai Kebutuhan Anda" },
  { step: "03", label: "Proses", desc: "Tepat Waktu & Berkualitas" },
  { step: "04", label: "Selesai", desc: "Sertifikat Atau Dokumen Siap Diserahkan" },
];

export default function Services() {
  return (
    <section className="py-24 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Left — text */}
          <Section>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-400 mb-3">Layanan Kami</p>
            <h2 className="font-display text-4xl lg:text-5xl font-black text-dark leading-[1.1] mb-5">Solusi Lengkap untuk Legalitas Usaha Anda</h2>
            <p className="text-gray-500 text-base leading-relaxed mb-9 max-w-xl">
              Dari tahap awal hingga bisnis Anda siap berjalan, kami mendampingi setiap proses perizinan dengan sistem yang terstruktur, cepat, dan sesuai regulasi. Fokus Anda pada bisnis, urusan legalitas biar kami yang tangani.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">Lihat Semua Layanan Kami</button>
              <button className="btn-outline-green">Hubungi Kami</button>
            </div>
          </Section>

          {/* Right — service grid */}
          <Section delay={150}>
            <div className="grid grid-cols-2 gap-5">
              {SERVICES.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-white border border-gray-100 rounded-2xl p-6
                             hover:border-green-400/50 hover:-translate-y-1
                             transition-all duration-300 group cursor-pointer
                             shadow-sm hover:shadow-lg hover:shadow-green-600/8"
                >
                  <div
                    className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center
                               text-2xl mb-4 group-hover:bg-green-600 transition-colors duration-300"
                  >
                    <img
                    src={icon}
                    alt={title}
                    className="w-7 h-7 group-hover:brightness-0 group-hover:invert transition-all duration-300"
                  />
                  </div>
                  <h4 className="font-bold text-dark text-sm mb-2">{title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* Process timeline */}
        <Section>
          <div className="bg-green-600 rounded-3xl p-10">
            <h3 className="font-display text-2xl font-bold text-white text-center mb-10">Proses Mudah Bersama Legalin Bali</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {PROCESS.map(({ step, label, desc }, i) => (
                <div key={step} className="relative text-center">
                  {i < PROCESS.length - 1 && (
                    <div
                      className="absolute top-6 left-1/2 w-full h-px bg-white/20
                                 hidden lg:block"
                    />
                  )}
                  <div
                    className="w-12 h-12 rounded-full bg-white/15 border-2 border-white/30
                               flex items-center justify-center text-white font-bold text-sm
                               mx-auto mb-3 relative z-10"
                  >
                    {step}
                  </div>
                  <div className="text-white font-bold text-sm mb-1">{label}</div>
                  <div className="text-white/55 text-xs">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>
    </section>
  );
}
