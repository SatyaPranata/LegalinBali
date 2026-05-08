import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Section from "./Section";

const PROPERTIES = [
  {
    tag: "PBG & SLF",
    name: "B Hotel",
    loc: "Denpasar, Selatan",
    desc: "Hunian mewah dengan taman tropis, panel surya 10 kWp, dan sistem pengolahan air mandiri.",
    price: "Rp 3,2 M ",
    img: "/img/b hotel.jpg",
    url: "/proyek/bhotel",
  },
  {
    tag: "Merek",
    name: "Info Denpasar",
    loc: "Denpasar, Bali",
    desc: "Desain modern dengan konsep open living yang menyatu harmonis dengan alam sekitar.",
    price: "Rp 1,8 M",
    img: "/img/logoinfodenpasar.png",
    url: "/proyek/info-denpasar",
  },
];

function useFadeInLocal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function PropertyCard({ prop, delay }) {
  const ref = useFadeInLocal();
  return (
    <div
      ref={ref}
      className="section-animate bg-white rounded-3xl overflow-hidden card-hover
                 shadow-sm shadow-green-600/5 border border-gray-100"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Image */}
      <div className="h-52 bg-gradient-to-br flex items-center justify-center text-7xl relative">
        <img src={prop.img} className="w-full h-full object-cover" />
        <span
          className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold
                         uppercase tracking-wide px-3 py-1 rounded-full backdrop-blur-md"
        >
          {prop.tag}
        </span>
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-display font-bold text-xl text-dark">{prop.name}</h3>
            <p className="text-xs text-gray-400 mt-0.5 flex">
              <img src="../public/img/point.png" className="h-4 me-1" /> {prop.loc}
            </p>
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed my-4">{prop.desc}</p>

        <Link to={prop.url}>
          <button
            className="w-full bg-green-100 text-green-700 font-semibold py-3 rounded-2xl
          hover:bg-green-600 hover:text-white transition-all duration-200
          active:scale-95 text-sm"
          >
            Lihat Detail →
          </button>
        </Link>
      </div>
    </div>
  );
}

export default function Properties() {
  const [activeTab, setActiveTab] = useState("Semua");

  return (
    <section className="py-24 px-6 bg-green-100/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Section className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-400 mb-3">Proyek Kami</p>
          <h2 className="font-display text-4xl lg:text-5xl font-black text-dark mb-4">Wujudkan Bisnis Legal dengan Lebih Mudah</h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">Pendampingan legalitas usaha terpercaya untuk membantu bisnis Anda berkembang aman, profesional, dan sesuai regulasi di Bali.</p>
        </Section>

        {/* Grid */}
        <div className="flex flex-wrap justify-center gap-7">
          {PROPERTIES.map((prop, i) => (
            <div key={prop.name} className="w-full md:w-[calc(50%-14px)] lg:w-[calc(33.333%-19px)]">
              <PropertyCard prop={prop} delay={i * 100} />
            </div>
          ))}
        </div>

        <Section className="text-center mt-12">
          <Link to="/proyek">
            <button className="btn-outline-green">Lihat Semua Proyek →</button>
          </Link>
        </Section>
      </div>
    </section>
  );
}
