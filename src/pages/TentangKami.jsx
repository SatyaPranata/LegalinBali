import { Link } from "react-router-dom";
import Section from "../components/Section";

const STATS = [
  { num: "5+", label: "Tahun Pengalaman", img: "/img/icon-kalender.svg" },
  { num: "100+", label: "Perizinan Diselesaikan", img: "/img/icon-sertifikat.svg" },
  { num: "1.000+", label: "Klien Telah Dibantu", img: "/img/icon-orangbanyak.svg" },
  { num: "15+", label: "Mitra & Instansi", img: "/img/icon-kerjasama.svg" },
];

const VALUES = [
  { img: "/img/icon-koper.svg", title: "Profesionalisme", desc: "Kami memastikan setiap proses legalitas ditangani secara tepat, terstruktur, dan sesuai regulasi yang berlaku" },
  { img: "/img/icon-mata.svg", title: "Transparansi", desc: "Setiap tahapan proses kami komunikasikan secara jelas agar client merasa aman dan nyaman" },
  { img: "/img/icon-shield.svg", title: "Integritas", desc: "Kejujuran dan tanggung jawab menjadi dasar utama dalam membangun kepercayaan client" },
  { img: "/img/icon-percepatan.svg", title: "Pelayanan Responsif", desc: "Tim kami siap membantu dan memberikan solusi terbaik sesuai kebutuhan legalitas bisnis Anda" },
];

const TEAM = [
  { init: "JE", name: "Jiesta Sudibya", role: "Direktur", desc: "Arsitek bersertifikat LEED dengan 15 tahun pengalaman green building internasional.", emoji: "🌿" },
  { init: "NI", name: "Tjok Nia", role: "Staff Admin", desc: "Pakar lansekap tropis, lulusan ITB dengan portofolio 200+ taman eco-certified.", emoji: "🌺" },
  { init: "GD", name: "Gus Dira", role: "Staff Legal", desc: "Insinyur sipil spesialis material ramah lingkungan dan konstruksi berkelanjutan.", emoji: "🏗️" },
  { init: "ST", name: "Satya Pranata", role: "Staff Teknis", desc: "Ahli panel surya dan sistem energi terbarukan dengan 200+ instalasi sukses.", emoji: "⚡" },
];

const MILESTONES = [
  { year: "2020", title: "Berdiri", desc: "Legalim Bali didirikan dengan visi membantu para usahawan meningkatkan usaha mereka dengan legalitasnya." },
  { year: "2021", title: "Ekspansi Layanan", desc: "Memperluas cakupan layanan konsultasi dan pendampingan hukum untuk individu, perusahaan, hingga sektor bisnis properti dan investasi." },
  { year: "2022", title: "Kepercayaan & Kredibilitas", desc: "Dipercaya menangani berbagai kebutuhan legal, mulai dari perizinan, kontrak bisnis, penyelesaian sengketa, hingga pendampingan korporasi." },
  { year: "2025", title: "100+ Legalitas", desc: "Legalitas yang kami kerjakan sudah 100+" },
];

export default function TentangKami() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-green-700 via-green-600 to-green-400 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <Section>
            <span
              className="inline-flex items-center gap-2 bg-white/10 border border-white/25 text-white
                             text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
            >
              Tentang Legalin Bali
            </span>
            <h1 className="font-display text-4xl lg:text-6xl font-black text-white mb-4">
              Kami Percaya <em className="not-italic text-green-300">Legalitas</em>
              <br />
              yang Tepat Membantu Bisnis Bertumbuh
            </h1>
            <p className="text-white/75 text-lg max-w-2xl mx-auto">
              Sejak awal berdiri, Legalin Bali hadir untuk membantu pelaku usaha mendapatkan legalitas yang aman, terpercaya, dan sesuai regulasi. Kami percaya proses perizinan yang jelas akan memberikan rasa tenang dalam mengembangkan
              bisnis.
            </p>
          </Section>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-10">
            <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" fill="#f8f5f0" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map(({ num, label, img }, i) => (
            <Section key={label} delay={i * 80}>
              <div className="bg-gradient-to-br from-green-700 via-green-600 to-green-400 overflow-hidden rounded-3xl p-8 text-center card-hover border border-gray-100 shadow-sm">
                <img src={img} alt={label} className="w-10 h-10 object-contain mx-auto mb-3 brightness-0 invert" />
                <div className="font-display text-4xl font-black text-white mb-1">{num}</div>
                <div className="text-gray-400 text-sm">{label}</div>
              </div>
            </Section>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6 bg-green-100/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Section>
            <div className="relative h-[420px]">
              <img
                src="/img/Gambar Bangunan.jpg"
                className="absolute top-0 left-0 w-3/4 h-[380px] rounded-3xl overflow-hidden
                       bg-gradient-to-br 
                       flex items-center justify-center text-8xl
                       shadow-2xl shadow-green-600/25"
              ></img>

              {/* Accent card */}
              <img
                src="/img/Gambar Arsitek.jpg"
                className="absolute bottom-0 right-0 w-[55%] h-60 rounded-2xl overflow-hidden
                       bg-gradient-to-br 
                       flex items-center justify-center text-6xl
                       border-4 border-cream shadow-xl"
              ></img>
            </div>
          </Section>
          <Section delay={150}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-400 mb-3">Kisah Kami</p>
            <h2 className="font-display text-4xl font-black text-dark leading-tight mb-5">Dari Pendampingan Menjadi Kepercayaan</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Legalin Bali hadir dari pengalaman dalam membantu berbagai kebutuhan legalitas usaha dan perizinan bangunan di Bali. Kami memahami bahwa proses administrasi dan regulasi sering kali memakan waktu serta membingungkan bagi
              pelaku usaha.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">Karena itu, kami berkomitmen memberikan layanan yang profesional, transparan, dan terarah agar setiap client dapat menjalankan bisnisnya dengan lebih aman dan nyaman.</p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Didukung oleh tim berpengalaman dan jaringan profesional, kami terus membantu UMKM, perusahaan, maupun investor dalam menyelesaikan kebutuhan legalitas secara efektif dan sesuai regulasi terbaru.
            </p>
            <div className="flex gap-4">
              <Link to="/kontak" className="btn-primary">
                Mulai Bersama Kami
              </Link>
              <Link to="/properti" className="btn-outline-green">
                Lihat Proyek Kami
              </Link>
            </div>
          </Section>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <Section className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-400 mb-3">Nilai Kami</p>
            <h2 className="font-display text-4xl font-black text-dark">Prinsip yang Menjadi Dasar Pelayanan Kami</h2>
          </Section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ img, title, desc }, i) => (
              <Section key={title} delay={i * 80}>
                <div className="bg-white rounded-3xl p-7 card-hover border border-gray-100 shadow-sm text-center h-full">
                  <div className="w-16 h-16 rounded-2xl bg-green-800 flex items-center justify-center text-3xl mx-auto mb-5">
                    <img src={img} alt={title} className="w-10 h-10" />
                  </div>
                  <h3 className="font-bold text-dark text-lg mb-3">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-dark overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/10 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto relative z-10">
          <Section className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-400 mb-3">Perjalanan Kami</p>
            <h2 className="font-display text-4xl font-black text-white">5 Tahun Membangun Legalitas Usaha</h2>
          </Section>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-green-600/30" />
            <div className="space-y-10">
              {MILESTONES.map(({ year, title, desc }, i) => (
                <Section key={year} delay={i * 80}>
                  <div className="flex gap-8 items-start pl-16 relative">
                    <div
                      className="absolute left-0 w-12 h-12 rounded-full bg-green-600 flex items-center justify-center
                                   text-white font-bold text-xs text-center leading-tight shadow-lg shadow-green-600/30"
                    >
                      {year.slice(2)}
                    </div>
                    <div>
                      <div className="text-green-400 text-xs font-bold mb-1">{year}</div>
                      <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </Section>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="timkami" className="py-20 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <Section className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-400 mb-3">Tim Kami</p>
            <h2 className="font-display text-4xl font-black text-dark mb-4">Orang-Orang di Balik Legalin Bali</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Tim yang bersemangat mewujudkan Legalitas usaha anda</p>
          </Section>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {TEAM.map(({ init, name, role, desc, emoji }, i) => (
              <Section key={name} delay={i * 80}>
                <div className="bg-white rounded-3xl p-7 card-hover border border-gray-100 shadow-sm text-center">
                  <div
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-700
                                   flex items-center justify-center text-white font-black text-2xl mx-auto mb-4
                                   shadow-lg shadow-green-600/25"
                  >
                    {init}
                  </div>
                  {/* <div className="text-3xl mb-3">{emoji}</div> */}
                  <h3 className="font-bold text-dark text-lg mb-1">{name}</h3>
                  <div className="text-green-600 text-xs font-bold uppercase tracking-wider mb-3">{role}</div>
                  {/* <p className="text-gray-400 text-sm leading-relaxed">{desc}</p> */}
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
