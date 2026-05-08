import { Link } from "react-router-dom";
import Section from "./Section";

const FEATURES = [
  {
    icon: "/img/icon-timer.svg",
    title: "Proses Cepat & Transparan",
    desc: "Kami memastikan setiap tahapan jelas, terarah, dan mudah dipahami.",
  },
  {
    icon: "/img/icon-personal.svg",
    title: "Didampingi Tim Profesional",
    desc: "Berpengalaman dalam berbagai jenis perizinan usaha di Indonesia.",
  },
  {
    icon: "/img/icon-keamanan.svg",
    title: "Aman & Sesuai Regulasi",
    desc: "Minim risiko kesalahan yang dapat menghambat operasional bisnis Anda.",
  },
];

export default function About() {
  return (
    <section className="py-24 px-6 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Visual collage */}
        <Section className="relative h-[480px] hidden lg:block">
          <img src="/img/Gambar Bangunan.jpg"
            className="absolute top-0 left-0 w-3/4 h-[380px] rounded-3xl overflow-hidden
                       bg-gradient-to-br 
                       flex items-center justify-center text-8xl
                       shadow-2xl shadow-green-600/25"
          />

          <img src="/img/Gambar Arsitek.jpg"
            className="absolute bottom-0 right-0 w-[55%] h-60 rounded-2xl overflow-hidden
                       bg-gradient-to-br 
                       flex items-center justify-center text-6xl
                       border-4 border-cream shadow-xl"
          />

          <div
            className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full
                       border-4 border-green-300/40"
          />
          <div
            className="absolute top-10 -right-4 w-16 h-16 rounded-full
                       bg-green-200/50"
          />
        </Section>

        {/* Text content */}
        <Section delay={150}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-400 mb-3">Tentang Legalin Bali</p>
          <h2 className="font-display text-4xl lg:text-4xl font-black text-dark leading-[1.1] mb-5">Konsultan Perizinan Usaha yang Siap Mengembangkan Bisnis Anda</h2>
          <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-xl">
           Legalin Bali memberikan solusi lengkap untuk kebutuhan perizinan usaha Anda.
           Tanpa proses rumit, tanpa kebingungan—kami pastikan bisnis Anda berjalan sesuai regulasi yang berlaku.  
          </p>

          <div className="flex flex-col gap-5 mb-9">
            {FEATURES.map(({ icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4 group">
                <div
                  className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center
                             text-xl flex-shrink-0 group-hover:bg-green-600
                             transition-colors duration-300"
                >
                  <img
                    src={icon}
                    alt={title}
                    className="w-7 h-7 group-hover:brightness-0 group-hover:invert transition-all duration-300"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-dark text-sm mb-1">{title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to="/layanan">
              <button className="btn-primary">Layanan Kami</button>
            </Link>
            <Link to="/tentang#timkami">
              <button className="btn-outline-green">Tim Kami →</button>
            </Link>
          </div>
        </Section>
      </div>
    </section>
  );
}
