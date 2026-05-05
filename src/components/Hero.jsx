import { useState, useEffect, useRef } from "react";
import Section from "./Section";

const STATS = [
  { num: "500+", label: "Properti" },
  { num: "98%", label: "Klien Puas" },
  { num: "12+", label: "Tahun Pengalaman" },
];

const SLIDES = [
  { src: "/img/Gambar Bangunan.jpg", label: "Bali, Denpasar" },
  { src: "/img/Gambar Arsitek.jpg", label: "Bali, Denpasar" },
  { src: "/img/Gambar Konstruksi.png", label: "Bali, Denpasar" },
];

const INTERVAL = 5000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, INTERVAL);
  };

  const goTo = (index) => {
    setCurrent(index);
    startTimer();
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000
                      ${i === current ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `url('${slide.src}')` }}
        />
      ))}

      <div className="absolute inset-0 bg-black/70" />

      <div
        className="absolute top-6 right-6 z-20 bg-white/15 backdrop-blur-sm
                      border border-white/25 text-white text-xs font-semibold
                      px-4 py-1.5 rounded-full transition-all duration-500"
      >
        {SLIDES[current].label}
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300
                        ${i === current ? "w-6 bg-green-400" : "w-2 bg-white/40 hover:bg-white/70"}`}
          />
        ))}
      </div>

      <div
        className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full
                      grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        <Section>
          <h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white
                         leading-[1.08] mb-5"
          >
            Temukan Rumah <em className="not-italic text-green-400">Eco‑Friendly</em> Impian Anda
          </h1>

          <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-9 max-w-lg">Kami menghadirkan properti berkelanjutan yang harmonis dengan alam. Nikmati kehidupan nyaman tanpa mengorbankan lingkungan.</p>

          <div className="flex flex-wrap gap-4 mb-12">
            <button className="btn-primary">Tentang Kami</button>
            <button className="btn-outline-white">Layanan Kami</button>
          </div>

          <div className="flex flex-wrap gap-9 md:max-w-md sm:max-w-sm p-2 backdrop-blur-md items-center justify-center border border-white/25 rounded-3xl">
            {STATS.map(({ num, label }) => (
              <div key={label} className="text-center">
                <div className="font-display text-3xl font-black text-white">{num}</div>
                <div className="text-white/55 text-xs uppercase tracking-widest mt-1">{label}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section delay={200} className="hidden lg:block">
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-7 animate-float">
              <div className="w-full h-72 rounded-2xl mb-5 overflow-hidden relative bg-green-700">
                <img src="../public/img/DepanLegalin.png" className="w-full h-full object-cover" />
              </div>

              <h2 className="text-white font-bold text-xl mb-1">Legalin Bali</h2>
              <p className="text-white/60 text-sm">Jalan Jayagiri 17, Denpasar Renon</p>
            </div>

            {/* <div
              className="absolute -top-4 -right-4 bg-white rounded-2xl px-4 py-3
                            shadow-xl shadow-black/10 flex items-center gap-3 animate-float"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center text-lg">🏆</div>
              <div>
                <div className="text-xs font-bold text-dark">Best Eco Dev</div>
                <div className="text-[11px] text-gray-400">2024 Award</div>
              </div>
            </div> */}

            <div
              className="absolute -bottom-9 -left-4 bg-white rounded-2xl px-4 py-3
                            shadow-xl shadow-black/10 flex items-center gap-3 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center text-lg">
                <img src="../public/img/point.png" alt="" className="w-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-dark">{SLIDES[current].label.replace(/^[^ ]+ /, "")}</div>
                <div className="text-[11px] text-gray-400">Lokasi Kami</div>
              </div>
            </div>
          </div>
        </Section>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-10 sm:h-14">
          <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" fill="#f8f5f0" />
        </svg>
      </div>
    </section>
  );
}
