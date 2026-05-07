import { Link } from 'react-router-dom'
import Section from '../components/Section'

const SERVICES = [
  {
    img: '/img/icon-timbangan.svg', title: 'Pendirian PT & CV',
    desc: 'Membantu proses pendirian badan usaha secara resmi, cepat, dan sesuai regulasi terbaru.',
    features: ['Akta pendirian', 'SK Kemenkumham', 'NPWP perusahaan', 'NIB & OSS'],
    color: 'from-green-400 to-green-600',
  },
  {
    img: '/img/icon-surat.svg', title: 'Perizinan OSS & NIB',
    desc: 'Pengurusan Nomor Induk Berusaha dan sistem OSS untuk kebutuhan operasional bisnis Anda.',
    features: ['Aktivasi OSS', 'Penerbitan NIB', 'Penyesuaian KBLI', 'Validasi data usaha'],
    color: 'from-green-300 to-green-500',
  },
  {
    img: '/img/icon-personal.svg', title: 'Konsultasi & Pendampingan',
    desc: 'Tim profesional siap membantu Anda memahami proses legalitas bisnis secara menyeluruh.',
    features: ['Konsultasi profesional', 'Pendampingan proses', 'Analisis kebutuhan izin', 'Support administrasi'],
    color: 'from-yellow-400 to-green-500',
  },
  {
    img: '/img/icon-pbg&slf.svg', title: 'PBG & SLF',
    desc: 'Layanan pengurusan Persetujuan Bangunan Gedung (PBG) dan Sertifikat Laik Fungsi (SLF) untuk memastikan bangunan Anda memenuhi standar dan regulasi yang berlaku.',
    features: ['Pengurusan PBG', 'Pengurusan SLF', 'Konsultasi persyaratan teknis', 'Pendampingan proses perizinan'],
    color: 'from-blue-400 to-green-500',
  },
]

const PROCESS = [
  { step: '01', label: 'Konsultasi Awal', desc: 'Diskusikan kebutuhan legalitas dan jenis perizinan usaha Anda bersama tim kami', img: '/img/icon-konsultasi.svg' },
  { step: '02', label: 'Verifikasi Dokumen', desc: 'Tim kami akan melakukan pengecekan dan penyesuaian dokumen sesuai regulasi yang berlaku', img: '/img/icon-verifikasidokumen.svg' },
  { step: '03', label: 'Proses Pengurusan', desc: 'Pengajuan dan pengurusan legalitas dilakukan secara profesional dan terstruktur', img: '/img/icon-prosespengurusan.svg' },
  { step: '04', label: 'Monitoring & Follow Up', desc: 'Kami memantau setiap tahapan proses hingga perizinan selesai diterbitkan', img: '/img/icon-monitoring.svg' },
  { step: '05', label: 'Legalitas Terbit', desc: 'Dokumen legalitas usaha Anda siap digunakan untuk mendukung operasional bisnis', img: '/img/icon-legalitasterbit.svg' },
]

const PACKAGES = [
  {
    name: 'Pendirian PT & CV', price: 'Rp 150 Jt', per: '/ unit',
    desc: 'Solusi legalitas usaha untuk Anda yang ingin memulai bisnis secara resmi dan terpercaya.',
    features: ['Pendirian PT Perorangan', 'Pendirian PT Umum', 'Pendirian CV', 'Akta & SK Kemenkumham'],
    highlight: false,
  },
  {
    name: 'PBG & SLF', price: 'Rp 450 Jt', per: '/ unit',
    desc: 'Pendampingan pengurusan legalitas bangunan agar sesuai dengan regulasi yang berlaku.',
    features: ['Pengurusan PBG', 'Pengurusan SLF', 'Verifikasi dokumen teknis', 'Pendampingan proses perizinan'],
    highlight: true,
  },
  {
    name: 'Perizinan & Legalitas Usaha', price: 'Custom', per: '',
    desc: 'Layanan lengkap untuk kebutuhan operasional dan legalitas bisnis Anda.',
    features: ['NIB & OSS', 'Izin usaha operasional', 'Penyesuaian KBLI', 'Perubahan data perusahaan', 'Konsultasi legalitas'],
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
              Solusi Legalitas Usaha Anda
            </span>
            <h1 className="font-display text-4xl lg:text-6xl font-black text-white mb-4">
              Layanan <em className="not-italic text-green-300">Lengkap</em> Kami
            </h1>
            <p className="text-white/75 text-lg max-w-2xl mx-auto">
              Dari konsultasi awal hingga selesai, kami hadir di setiap langkah perjalanan Anda
              membangun legalitas untuk usaha anda.
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
            <h2 className="font-display text-4xl font-black text-dark mb-4">Layanan Unggulan</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Layanan yang sudah sesuai dengan aturan.</p>
          </Section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {SERVICES.map(({ img, title, desc, features, color }, i) => (
              <Section key={title} delay={i * 80}>
                <div className="bg-white rounded-3xl overflow-hidden card-hover shadow-sm border border-gray-100 h-full flex flex-col">
                  {/* Top gradient */}
                  <div className={`bg-gradient-to-br ${color} h-3`} />
                  <div className="p-7 flex flex-col flex-1">
                    <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-3xl mb-5">
                      <img src={img} className="w-8 h-8 object-contain" />
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
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 ">
            {PROCESS.map(({ step, label, desc, img }, i) => (
              <Section key={step} delay={i * 100} className="text-center">
                <div className="relative">
                  {i < PROCESS.length - 1 && (
                    <div className="absolute top-7 left-1/2 w-full h-px bg-white/20 hidden md:block" />
                  )}
                  <div className="w-14 h-14 rounded-full bg-white/15 border-2 border-white/30
                                   flex flex-col items-center justify-center mx-auto mb-3 relative z-10">
                    <img src={img} alt={label} className="w-7 h-7 object-contain" />
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
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-400 mb-3">Legalitas Usaha</p>
            <h2 className="font-display text-4xl font-black text-dark mb-4">Solusi Legalitas untuk Kebutuhan Bisnis Anda</h2>
            <p className="text-gray-500 max-w-lg mx-auto">Transparan, Konsultasi gratis</p>
          </Section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-start">
            {PACKAGES.map(({ name, price, per, desc, features, highlight }, i) => (
              <Section key={name} delay={i * 100}>
                <div className={`rounded-3xl p-8 h-full flex flex-col border-2 transition-all duration-300
                                 ${highlight
                                   ? 'bg-green-600 border-green-600 shadow-2xl shadow-green-600/30 scale-105'
                                   : 'bg-white border-gray-100 hover:border-green-300 card-hover'}`}>
                  <h3 className={`font-display text-2xl font-black mb-1 ${highlight ? 'text-white' : 'text-d  ark'}`}>{name}</h3>
                  <p className={`text-sm mb-4 ${highlight ? 'text-white/70' : 'text-gray-400'}`}>{desc}</p>
                  {/* <div className={`text-4xl font-black font-display mb-6 ${highlight ? 'text-white' : 'text-green-600'}`}>
                    {price}<span className={`text-sm font-normal ${highlight ? 'text-white/60' : 'text-gray-400'}`}>{per}</span>
                  </div> */}
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
