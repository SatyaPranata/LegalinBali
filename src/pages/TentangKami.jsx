import { Link } from 'react-router-dom'
import Section from '../components/Section'

const STATS = [
  { num: '12+', label: 'Tahun Pengalaman', icon: '📅' },
  { num: '500+', label: 'Properti Terbangun', icon: '🏡' },
  { num: '2.400+', label: 'Keluarga Bahagia', icon: '👨‍👩‍👧‍👦' },
  { num: '15+', label: 'Penghargaan', icon: '🏆' },
]

const VALUES = [
  { icon: '🌱', title: 'Keberlanjutan', desc: 'Setiap keputusan kami didasarkan pada dampak jangka panjang terhadap lingkungan dan ekosistem.' },
  { icon: '💡', title: 'Inovasi', desc: 'Kami terus berinovasi mengadopsi teknologi hijau terbaru untuk menghadirkan solusi terdepan.' },
  { icon: '🤝', title: 'Integritas', desc: 'Transparansi dan kejujuran adalah fondasi setiap hubungan kami dengan klien dan mitra.' },
  { icon: '❤️', title: 'Empati', desc: 'Kami memahami kebutuhan unik setiap keluarga dan merespons dengan solusi yang personal.' },
]

const TEAM = [
  { init: 'RH', name: 'Raka Hermawan', role: 'CEO & Co-Founder', desc: 'Arsitek bersertifikat LEED dengan 15 tahun pengalaman green building internasional.', emoji: '🌿' },
  { init: 'SA', name: 'Sari Andini', role: 'Chief Design Officer', desc: 'Pakar lansekap tropis, lulusan ITB dengan portofolio 200+ taman eco-certified.', emoji: '🌺' },
  { init: 'BP', name: 'Bimo Prakoso', role: 'Head of Construction', desc: 'Insinyur sipil spesialis material ramah lingkungan dan konstruksi berkelanjutan.', emoji: '🏗️' },
  { init: 'DN', name: 'Dian Nugroho', role: 'Energy Systems Lead', desc: 'Ahli panel surya dan sistem energi terbarukan dengan 200+ instalasi sukses.', emoji: '⚡' },
  { init: 'LW', name: 'Lina Wibowo', role: 'Client Relations', desc: 'Memastikan setiap klien mendapatkan pengalaman terbaik dari konsultasi hingga serah terima.', emoji: '💬' },
  { init: 'AR', name: 'Andi Rachman', role: 'Sustainability Officer', desc: 'Pakar sertifikasi hijau dan audit lingkungan, memastikan standar eco tertinggi terpenuhi.', emoji: '🌍' },
]

const MILESTONES = [
  { year: '2012', title: 'Berdiri', desc: 'Greenvilla didirikan dengan visi membangun properti yang harmonis dengan alam.' },
  { year: '2015', title: 'Ekspansi Jabodetabek', desc: 'Membuka cabang di Bogor, Depok, dan Bekasi. 100 properti pertama berhasil dibangun.' },
  { year: '2018', title: 'Sertifikasi GBCI', desc: 'Meraih sertifikasi Green Building Council Indonesia untuk seluruh proyek kami.' },
  { year: '2020', title: 'Penghargaan Nasional', desc: 'Dinobatkan sebagai Best Eco Developer oleh Kementerian PUPR.' },
  { year: '2022', title: '1.000 Unit', desc: 'Milestone 1.000 unit terbangun dengan tingkat kepuasan klien 98%.' },
  { year: '2024', title: 'Ekspansi Bali', desc: 'Hadir di Bali, membawa konsep eco-living ke destinasi wisata dunia.' },
]

export default function TentangKami() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-green-700 via-green-600 to-green-400 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <Section>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/25 text-white
                             text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              🌿 Tentang Greenvilla
            </span>
            <h1 className="font-display text-4xl lg:text-6xl font-black text-white mb-4">
              Kami Percaya Rumah yang <em className="not-italic text-green-300">Baik</em><br />
              Tidak Harus Merusak Alam
            </h1>
            <p className="text-white/75 text-lg max-w-2xl mx-auto">
              Sejak 2012, Greenvilla hadir sebagai pelopor properti berkelanjutan di Indonesia —
              membuktikan bahwa kenyamanan hidup dan kelestarian alam bisa berjalan beriringan.
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
          {STATS.map(({ num, label, icon }, i) => (
            <Section key={label} delay={i * 80}>
              <div className="bg-white rounded-3xl p-8 text-center card-hover border border-gray-100 shadow-sm">
                <div className="text-4xl mb-3">{icon}</div>
                <div className="font-display text-4xl font-black text-green-600 mb-1">{num}</div>
                <div className="text-gray-500 text-sm">{label}</div>
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
              <div className="absolute top-0 left-0 w-3/4 h-80 rounded-3xl bg-gradient-to-br from-green-400 to-green-700
                               flex items-center justify-center text-8xl shadow-2xl shadow-green-600/25">🌲</div>
              <div className="absolute bottom-0 right-0 w-1/2 h-52 rounded-2xl bg-gradient-to-br from-green-100 to-green-300
                               flex items-center justify-center text-6xl border-4 border-cream shadow-xl">🏠</div>
              <div className="absolute top-1/2 -translate-y-1/2 right-4 bg-green-600 text-white rounded-2xl p-5 text-center
                               shadow-xl shadow-green-700/30 animate-float">
                <div className="text-2xl mb-1">🏆</div>
                <div className="font-display font-black text-lg leading-none">Best</div>
                <div className="text-xs opacity-75 uppercase tracking-wider mt-1">Eco Dev '24</div>
              </div>
            </div>
          </Section>
          <Section delay={150}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-400 mb-3">Kisah Kami</p>
            <h2 className="font-display text-4xl font-black text-dark leading-tight mb-5">
              Dari Sebuah Mimpi Menjadi Gerakan Nyata
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Greenvilla lahir dari keprihatinan akan cepatnya laju pembangunan yang mengorbankan alam.
              Pendiri kami, Raka Hermawan, bermimpi membuktikan bahwa arsitektur modern dan ekosistem
              yang sehat bisa saling mendukung, bukan bertentangan.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Kini, lebih dari 2.400 keluarga telah membuktikan bahwa hidup di rumah eco-friendly
              bukan hanya lebih sehat dan nyaman, tetapi juga lebih hemat secara jangka panjang —
              dan yang terpenting, meninggalkan warisan bumi yang lebih baik untuk generasi berikutnya.
            </p>
            <div className="flex gap-4">
              <Link to="/kontak" className="btn-primary">Mulai Bersama Kami</Link>
              <Link to="/properti" className="btn-outline-green">Lihat Properti</Link>
            </div>
          </Section>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <Section className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-400 mb-3">Nilai Kami</p>
            <h2 className="font-display text-4xl font-black text-dark">Prinsip yang Memandu Kami</h2>
          </Section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon, title, desc }, i) => (
              <Section key={title} delay={i * 80}>
                <div className="bg-white rounded-3xl p-7 card-hover border border-gray-100 shadow-sm text-center h-full">
                  <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl mx-auto mb-5">
                    {icon}
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
            <h2 className="font-display text-4xl font-black text-white">12 Tahun Membangun Alam</h2>
          </Section>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-green-600/30" />
            <div className="space-y-10">
              {MILESTONES.map(({ year, title, desc }, i) => (
                <Section key={year} delay={i * 80}>
                  <div className="flex gap-8 items-start pl-16 relative">
                    <div className="absolute left-0 w-12 h-12 rounded-full bg-green-600 flex items-center justify-center
                                   text-white font-bold text-xs text-center leading-tight shadow-lg shadow-green-600/30">
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
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <Section className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-400 mb-3">Tim Kami</p>
            <h2 className="font-display text-4xl font-black text-dark mb-4">Orang-Orang di Balik Greenvilla</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Tim multidisiplin yang bersemangat mewujudkan hunian berkelanjutan.</p>
          </Section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {TEAM.map(({ init, name, role, desc, emoji }, i) => (
              <Section key={name} delay={i * 80}>
                <div className="bg-white rounded-3xl p-7 card-hover border border-gray-100 shadow-sm text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-700
                                   flex items-center justify-center text-white font-black text-2xl mx-auto mb-4
                                   shadow-lg shadow-green-600/25">
                    {init}
                  </div>
                  <div className="text-3xl mb-3">{emoji}</div>
                  <h3 className="font-bold text-dark text-lg mb-1">{name}</h3>
                  <div className="text-green-600 text-xs font-bold uppercase tracking-wider mb-3">{role}</div>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-green-100/50">
        <Section className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-black text-dark mb-3">Bergabunglah dengan Gerakan Eco-Living</h2>
          <p className="text-gray-500 mb-6">Bersama, kita bisa membangun Indonesia yang lebih hijau, satu rumah dalam satu waktu.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/kontak" className="btn-primary">🌿 Konsultasi Gratis</Link>
            <Link to="/properti" className="btn-outline-green">Lihat Properti →</Link>
          </div>
        </Section>
      </section>
    </>
  )
}
