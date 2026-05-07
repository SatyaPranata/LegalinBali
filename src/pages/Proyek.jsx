import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section";

const TABS = ["Semua", "Villa", "Rumah", "Cluster", "Kavling"];

// Data properties — id harus match dengan ProyekDetail.jsx
const PROPERTIES = [
  {
    id: "villa-sentul-hijau",
    emoji: "🏡",
    tag: "Eco Certified",
    name: "Villa Sentul Hijau",
    loc: "Sentul, Bogor",
    beds: 4,
    baths: 3,
    area: 280,
    desc: "Hunian mewah dengan taman tropis, panel surya 10 kWp, dan sistem pengolahan air mandiri.",
    price: "Rp 3,2 M",
    color: "from-green-500 to-green-700",
    type: "Villa",
  },
  {
    id: "rumah-bogor-asri",
    emoji: "🌿",
    tag: "Sustainable",
    name: "Rumah Bogor Asri",
    loc: "Bogor, Jawa Barat",
    beds: 3,
    baths: 2,
    area: 180,
    desc: "Desain modern dengan konsep open living yang menyatu harmonis dengan alam sekitar.",
    price: "Rp 1,8 M",
    color: "from-green-400 to-green-600",
    type: "Rumah",
  },
  {
    id: "cluster-depok-lestari",
    emoji: "🏘️",
    tag: "Cluster Green",
    name: "Cluster Depok Lestari",
    loc: "Depok, Jawa Barat",
    beds: 3,
    baths: 2,
    area: 150,
    desc: "Kompleks perumahan ramah lingkungan dengan fasilitas komunitas taman hijau seluas 2 ha.",
    price: "Rp 1,2 M",
    color: "from-green-300 to-green-500",
    type: "Cluster",
  },
  {
    id: "kavling-cisarua-asri",
    emoji: "🌾",
    tag: "Prime Land",
    name: "Kavling Cisarua Asri",
    loc: "Cisarua, Bogor",
    beds: 0,
    baths: 0,
    area: 500,
    desc: "Kavling tanah strategis di kawasan pegunungan dengan udara segar dan pemandangan hijau.",
    price: "Rp 900 Jt",
    color: "from-green-200 to-green-400",
    type: "Kavling",
  },
  {
    id: "villa-puncak-elegan",
    emoji: "🏠",
    tag: "Best Seller",
    name: "Villa Puncak Elegan",
    loc: "Puncak, Bogor",
    beds: 5,
    baths: 4,
    area: 350,
    desc: "Villa premium di ketinggian 1.200 mdpl, lengkap dengan kolam renang air gunung alami.",
    price: "Rp 5,5 M",
    color: "from-green-600 to-green-800",
    type: "Villa",
  },
  {
    id: "rumah-bambu-cibinong",
    emoji: "🌳",
    tag: "Eco Living",
    name: "Rumah Bambu Cibinong",
    loc: "Cibinong, Bogor",
    beds: 3,
    baths: 2,
    area: 160,
    desc: "Rumah unik berbahan bambu bersertifikasi dengan desain kontemporer dan efisiensi energi tinggi.",
    price: "Rp 1,4 M",
    color: "from-green-400 to-green-700",
    type: "Rumah",
  },
];

function useFadeInLocal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
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
      <div
        className={`h-52 bg-gradient-to-br ${prop.color} flex items-center justify-center
                       text-7xl relative`}
      >
        {prop.emoji}
        <span
          className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold
                         uppercase tracking-wide px-3 py-1 rounded-full"
        >
          {prop.tag}
        </span>
        <span
          className="absolute top-4 right-4 bg-white text-green-700 text-xs font-black
                         px-3 py-1 rounded-full shadow"
        >
          {prop.price}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display font-bold text-xl text-dark">{prop.name}</h3>
        <p className="text-xs text-gray-400 mt-0.5 mb-3">📍 {prop.loc}</p>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{prop.desc}</p>
        {/* <div className="flex gap-4 text-xs text-gray-500 border-t border-gray-100 pt-4 mb-5">
          {prop.beds > 0 && <span>🛏 {prop.beds} Kamar</span>}
          {prop.baths > 0 && <span>🚿 {prop.baths} KM</span>}
          <span>📐 {prop.area} m²</span>
        </div> */}
        <Link
          to={`/proyek/${prop.id}`}
          className="block w-full bg-green-100 text-green-700 font-semibold py-3 rounded-2xl
                     hover:bg-green-600 hover:text-white transition-all duration-200
                     active:scale-95 text-sm text-center"
        >
          Lihat Detail →
        </Link>
      </div>
    </div>
  );
}

export default function Property() {
  const [activeTab, setActiveTab] = useState("Semua");
  const [search, setSearch] = useState("");

  const filtered = PROPERTIES.filter((p) => {
    const matchTab = activeTab === "Semua" || p.type === activeTab;
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.loc.toLowerCase().includes(search.toLowerCase());
    return matchTab && matchSearch;
  });

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-green-700 via-green-600 to-green-400 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <Section>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/25 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              Katalog Legalin
            </span>
            <h1 className="font-display text-4xl lg:text-6xl font-black text-white mb-4">
              Legalitas Yang <em className="not-italic text-green-300">Kami</em> Kerjakan
            </h1>
            <p className="text-white/75 text-lg max-w-xl mx-auto mb-8">Pilihan legalitas yang kami kerjakan</p>
            <div className="max-w-lg mx-auto flex items-center bg-white rounded-full px-5 py-3 gap-3 shadow-xl">
              <span className="text-green-500">🔍</span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari nama proyek anda..."
                className="flex-1 outline-none text-sm text-gray-700 placeholder:text-gray-400"
              />
            </div>
          </Section>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-10">
            <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" fill="#d8f3dc" />
          </svg>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 px-6 bg-green-100/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200
                            ${activeTab === tab ? "bg-green-600 text-white shadow-lg shadow-green-600/25" : "bg-white text-gray-500 hover:bg-green-100 hover:text-green-700"}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <p className="text-sm text-gray-400 mb-6 text-center">{filtered.length} properti ditemukan</p>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((prop, i) => (
                <PropertyCard key={prop.name} prop={prop} delay={i * 100} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-lg font-medium">Properti tidak ditemukan</p>
              <p className="text-sm mt-1">Coba kata kunci atau filter lain</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-16 px-6 bg-cream">
        <Section className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-black text-dark mb-3">Tidak Menemukan yang Cocok?</h2>
          <p className="text-gray-500 mb-6">Tim kami siap membantu menemukan properti yang sesuai kebutuhan dan budget Anda.</p>
          <Link to="/kontak" className="btn-primary inline-block">
            Konsultasi Gratis
          </Link>
        </Section>
      </section>
    </>
  );
}
