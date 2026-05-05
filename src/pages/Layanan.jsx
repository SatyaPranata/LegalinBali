import { Link } from 'react-router-dom'
import Section from '../components/Section'

const SERVICES = [
  {
    icon: '🏗️', title: 'Konstruksi Hijau',
    desc: 'Pembangunan hunian menggunakan material eco-friendly bersertifikat internasional. Kami memastikan setiap proyek memenuhi standar green building tertinggi.',
    features: ['Material daur ulang', 'Sertifikasi GBCI', 'Zero waste construction', 'Audit lingkungan'],
    color: 'from-green-400 to-green-600',
  },
  {
    icon: '🌳', title: 'Desain Lansekap',
    desc: 'Taman tropis terintegrasi yang mempercantik sekaligus mendinginkan hunian Anda secara alami. Biodiversitas terjaga, estetika terjamin.',
    features: ['Tanaman endemik lokal', 'Irigasi tetes pintar', 'Roof garden', 'Vertical garden'],
    color: 'from-green-300 to-green-500',
  },
  {
    icon: '⚡', title: 'Instalasi Energi Surya',
    desc: 'Sistem solar panel dan pengelolaan energi pintar untuk kemandirian energi dan efisiensi biaya listrik hingga 80% per bulan.',
    features: ['Panel surya PERC', 'Battery storage', 'Smart energy monitor', 'Grid-tie system'],
    color: 'from-yellow-400 to-green-500',
  },
  {
    icon: '💧', title: 'Manajemen Air',
    desc: 'Teknologi pengolahan dan daur ulang air hujan untuk efisiensi maksimal. Hemat tagihan air hingga 60% dengan sistem water harvesting.',
    features: ['Rain harvesting', 'Greywater recycling', 'Filter membran', 'Smart water meter'],
    color: 'from-blue-400 to-green-500',
  },
  {
    icon: '🔧', title: 'Perawatan & Maintenance',
    desc: 'Tim ahli berpengalaman siap merawat seluruh ekosistem rumah eco-friendly Anda. Jadwal rutin dan respons darurat 24 jam.',
    features: ['Inspeksi rutin', 'Respons 24 jam', 'Garansi 10 tahun', 'Aplikasi monitoring'],
    color: 'from-green-500 to-green-700',
  },
  {
    icon: '📐', title: 'Konsultasi & Desain',
    desc: 'Konsultasi eksklusif dengan arsitek dan pakar eco-living berpengalaman. Dari konsep hingga blueprint, kami wujudkan visi Anda.',
    features: ['Konsultasi gratis', '3D rendering', 'Studi kelayakan', 'Pendampingan perizinan'],
    color: 'from-green-600 to-green-400',
  },
]

const PROCESS = [
  { step: '01', label: 'Konsultasi', desc: 'Gratis & tanpa komitmen', icon: '💬' },
  { step: '02', label: 'Survei Lokasi', desc: 'Analisis lahan & kebutuhan', icon: '📍' },
  { step: '03', label: 'Desain & RAB', desc: 'Blueprint & estimasi biaya', icon: '📐' },
  { step: '04', label: 'Konstruksi', desc: 'Tepat waktu & berkualitas', icon: '🏗️' },
  { step: '05', label: 'Serah Terima', desc: 'Siap huni & purna jual', icon: '🎉' },
]

const PACKAGES = [
  {
    name: 'Starter', price: 'Rp 150 Jt', per: '/ unit',
    desc: 'Cocok untuk renovasi eco-friendly skala kecil',
    features: ['Konsultasi desain', 'Panel surya 2 kWp', 'Taman mini', 'Garansi 2 tahun'],
    highlight: false,
  },
  {
    name: 'Pro', price: 'Rp 450 Jt', per: '/ unit',
    desc: 'Paket lengkap untuk rumah eco-friendly baru',
    features: ['Semua fitur Starter', 'Panel surya 10 kWp', 'Water harvesting', 'Lansekap penuh', 'Garansi 5 tahun', 'Smart home system'],
    highlight: true,
  },
  {
    name: 'Premium', price: 'Custom', per: '',
    desc: 'Solusi total untuk villa dan properti mewah',
    features: ['Semua fitur Pro', 'Desain eksklusif', 'Material premium', 'Battery storage', 'Garansi 10 tahun', 'Dedicated PM'],
    highlight: false,
  },
]

export default function Layanan() {
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
              ⚡ Solusi Eco-Living
            </span>
            <h1 className="font-display text-4xl lg:text-6xl font-black text-white mb-4">
              Layanan <em className="not-italic text-green-300">Lengkap</em> Kami
            </h1>
            <p className="text-white/75 text-lg max-w-2xl mx-auto">
              Dari konsultasi awal hingga purna jual, kami hadir di setiap langkah perjalanan Anda
              membangun hunian ramah lingkungan impian.
            </p>
          </Section>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-10">
            <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" fill="#f8f5f0" />
          </svg>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <Section className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-400 mb-3">Apa yang Kami Tawarkan</p>
            <h2 className="font-display text-4xl font-black text-dark mb-4">6 Layanan Unggulan</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Ekosistem layanan terintegrasi untuk hunian berkelanjutan yang sempurna.</p>
          </Section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {SERVICES.map(({ icon, title, desc, features, color }, i) => (
              <Section key={title} delay={i * 80}>
                <div className="bg-white rounded-3xl overflow-hidden card-hover shadow-sm border border-gray-100 h-full flex flex-col">
                  {/* Top gradient */}
                  <div className={`bg-gradient-to-br ${color} h-3`} />
                  <div className="p-7 flex flex-col flex-1">
                    <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-3xl mb-5">
                      {icon}
                    </div>
                    <h3 className="font-display font-bold text-xl text-dark mb-3">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{desc}</p>
                    <ul className="space-y-2">
                      {features.map(f => (
                        <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-green-600">
        <div className="max-w-7xl mx-auto">
          <Section className="text-center mb-12">
            <h2 className="font-display text-4xl font-black text-white mb-3">Proses Mudah Bersama Kami</h2>
            <p className="text-white/60 max-w-lg mx-auto">5 langkah sederhana menuju hunian eco-friendly impian Anda.</p>
          </Section>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {PROCESS.map(({ step, label, desc, icon }, i) => (
              <Section key={step} delay={i * 100} className="text-center">
                <div className="relative">
                  {i < PROCESS.length - 1 && (
                    <div className="absolute top-7 left-1/2 w-full h-px bg-white/20 hidden md:block" />
                  )}
                  <div className="w-14 h-14 rounded-full bg-white/15 border-2 border-white/30
                                   flex flex-col items-center justify-center mx-auto mb-3 relative z-10">
                    <span className="text-xl">{icon}</span>
                  </div>
                  <div className="text-white/50 text-xs font-bold mb-1">{step}</div>
                  <div className="text-white font-bold text-sm mb-1">{label}</div>
                  <div className="text-white/50 text-xs">{desc}</div>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <Section className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-400 mb-3">Paket Harga</p>
            <h2 className="font-display text-4xl font-black text-dark mb-4">Pilih Paket yang Tepat</h2>
            <p className="text-gray-500 max-w-lg mx-auto">Transparan, tanpa biaya tersembunyi. Konsultasi gratis sebelum memilih.</p>
          </Section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-start">
            {PACKAGES.map(({ name, price, per, desc, features, highlight }, i) => (
              <Section key={name} delay={i * 100}>
                <div className={`rounded-3xl p-8 h-full flex flex-col border-2 transition-all duration-300
                                 ${highlight
                                   ? 'bg-green-600 border-green-600 shadow-2xl shadow-green-600/30 scale-105'
                                   : 'bg-white border-gray-100 hover:border-green-300 card-hover'}`}>
                  {highlight && (
                    <div className="bg-white/20 text-white text-xs font-bold uppercase tracking-widest
                                   px-3 py-1 rounded-full w-fit mb-4">
                      🌟 Paling Populer
                    </div>
                  )}
                  <h3 className={`font-display text-2xl font-black mb-1 ${highlight ? 'text-white' : 'text-dark'}`}>{name}</h3>
                  <p className={`text-sm mb-4 ${highlight ? 'text-white/70' : 'text-gray-400'}`}>{desc}</p>
                  <div className={`text-4xl font-black font-display mb-6 ${highlight ? 'text-white' : 'text-green-600'}`}>
                    {price}<span className={`text-sm font-normal ${highlight ? 'text-white/60' : 'text-gray-400'}`}>{per}</span>
                  </div>
                  <ul className="space-y-3 flex-1 mb-8">
                    {features.map(f => (
                      <li key={f} className={`flex items-center gap-2 text-sm ${highlight ? 'text-white/80' : 'text-gray-600'}`}>
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0
                                          ${highlight ? 'bg-white/20 text-white' : 'bg-green-100 text-green-600'}`}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/kontak"
                    className={`w-full py-3 rounded-full font-semibold text-center block transition-all duration-200 active:scale-95
                                ${highlight
                                  ? 'bg-white text-green-700 hover:bg-green-50'
                                  : 'btn-outline-green'}`}>
                    Mulai Sekarang →
                  </Link>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
