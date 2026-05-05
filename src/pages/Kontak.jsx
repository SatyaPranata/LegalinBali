import { useState } from 'react'
import Section from '../components/Section'

const OFFICES = [
  { city: 'Jakarta (Pusat)', addr: 'Jl. Sudirman Kav. 52-53, Jakarta Selatan 12190', phone: '(021) 5555-1234', icon: '🏙️' },
  { city: 'Bogor', addr: 'Jl. Pajajaran No. 88, Bogor Tengah, Jawa Barat 16144', phone: '(0251) 8321-567', icon: '🌲' },
  { city: 'Bali', addr: 'Jl. Sunset Road No. 101, Kuta, Badung, Bali 80361', phone: '(0361) 7654-321', icon: '🌺' },
]

const FAQS = [
  { q: 'Apakah konsultasi pertama benar-benar gratis?', a: 'Ya, konsultasi awal sepenuhnya gratis dan tanpa komitmen. Kami ingin memahami kebutuhan Anda terlebih dahulu sebelum menawarkan solusi apapun.' },
  { q: 'Berapa lama proses pembangunan rata-rata?', a: 'Tergantung skala proyek. Renovasi eco-friendly biasanya 2-4 bulan, sementara pembangunan rumah baru memerlukan 6-12 bulan dari desain hingga serah terima.' },
  { q: 'Apakah Greenvilla melayani di luar Jabodetabek?', a: 'Saat ini kami beroperasi di Jabodetabek dan Bali. Untuk proyek di luar area tersebut, silakan hubungi kami untuk mendiskusikan kemungkinannya.' },
  { q: 'Bagaimana cara memulai proyek dengan Greenvilla?', a: 'Cukup isi form kontak atau hubungi kami via WhatsApp. Tim kami akan menghubungi Anda dalam 1x24 jam untuk menjadwalkan sesi konsultasi gratis.' },
]

export default function Kontak() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return
    setSent(true)
  }

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
              💬 Hubungi Kami
            </span>
            <h1 className="font-display text-4xl lg:text-6xl font-black text-white mb-4">
              Kami Siap <em className="not-italic text-green-300">Membantu</em> Anda
            </h1>
            <p className="text-white/75 text-lg max-w-xl mx-auto">
              Ada pertanyaan, ingin konsultasi, atau siap memulai proyek? Tim ramah kami siap merespons dalam 1x24 jam.
            </p>
          </Section>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-10">
            <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" fill="#f8f5f0" />
          </svg>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Form */}
          <Section className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              {sent ? (
                <div className="text-center py-12">
                  <div className="text-7xl mb-5">🌿</div>
                  <h3 className="font-display text-2xl font-black text-dark mb-3">Pesan Terkirim!</h3>
                  <p className="text-gray-500 mb-6">Terima kasih, <strong>{form.name}</strong>! Tim kami akan menghubungi Anda maksimal 1x24 jam.</p>
                  <button onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }) }}
                    className="btn-outline-green">
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-2xl font-black text-dark mb-6">Kirim Pesan</h2>
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">Nama Lengkap *</label>
                        <input name="name" value={form.name} onChange={handleChange}
                          placeholder="Budi Santoso"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none
                                     focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">Nomor WhatsApp</label>
                        <input name="phone" value={form.phone} onChange={handleChange}
                          placeholder="08123456789"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none
                                     focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">Email *</label>
                      <input name="email" value={form.email} onChange={handleChange}
                        placeholder="budi@email.com" type="email"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none
                                   focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">Layanan yang Diminati</label>
                      <select name="service" value={form.service} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none
                                   focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all text-gray-600">
                        <option value="">Pilih layanan...</option>
                        <option>Beli Properti</option>
                        <option>Konstruksi Hijau</option>
                        <option>Desain Lansekap</option>
                        <option>Instalasi Panel Surya</option>
                        <option>Konsultasi Umum</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">Pesan *</label>
                      <textarea name="message" value={form.message} onChange={handleChange}
                        placeholder="Ceritakan kebutuhan atau pertanyaan Anda..."
                        rows={5}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none
                                   focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all resize-none" />
                    </div>
                    <button onClick={handleSubmit} className="btn-primary w-full justify-center">
                      🌿 Kirim Pesan
                    </button>
                    <p className="text-xs text-gray-400 text-center">
                      Dengan mengirim pesan, Anda menyetujui kebijakan privasi kami. Kami tidak akan menyebarkan data Anda.
                    </p>
                  </div>
                </>
              )}
            </div>
          </Section>

          {/* Info */}
          <Section delay={150} className="lg:col-span-2 space-y-6">
            {/* Quick contact */}
            <div className="bg-green-600 rounded-3xl p-7 text-white">
              <h3 className="font-bold text-lg mb-5">Kontak Cepat</h3>
              <div className="space-y-4">
                <a href="https://wa.me/628111234567" target="_blank" rel="noreferrer"
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-2xl p-4 transition-all">
                  <span className="text-2xl">💬</span>
                  <div>
                    <div className="font-semibold text-sm">WhatsApp</div>
                    <div className="text-white/60 text-xs">+62 811-1234-567</div>
                  </div>
                </a>
                <a href="tel:02155551234"
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-2xl p-4 transition-all">
                  <span className="text-2xl">📞</span>
                  <div>
                    <div className="font-semibold text-sm">Telepon</div>
                    <div className="text-white/60 text-xs">(021) 5555-1234</div>
                  </div>
                </a>
                <a href="mailto:hello@greenvilla.id"
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-2xl p-4 transition-all">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <div className="font-semibold text-sm">Email</div>
                    <div className="text-white/60 text-xs">hello@greenvilla.id</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Jam operasional */}
            <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-dark text-lg mb-4">🕐 Jam Operasional</h3>
              <div className="space-y-3 text-sm">
                {[
                  { day: 'Senin – Jumat', time: '08.00 – 17.00 WIB' },
                  { day: 'Sabtu', time: '09.00 – 14.00 WIB' },
                  { day: 'Minggu & Libur', time: 'Tutup' },
                ].map(({ day, time }) => (
                  <div key={day} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="text-gray-500">{day}</span>
                    <span className={`font-semibold ${time === 'Tutup' ? 'text-red-400' : 'text-green-600'}`}>{time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust */}
            <div className="bg-green-100/60 rounded-3xl p-6">
              <div className="grid grid-cols-2 gap-4 text-center text-sm">
                {[
                  { icon: '✅', label: 'Konsultasi Gratis' },
                  { icon: '⚡', label: 'Respons Cepat' },
                  { icon: '🔒', label: 'Data Aman' },
                  { icon: '🤝', label: 'Tanpa Komitmen' },
                ].map(({ icon, label }) => (
                  <div key={label} className="bg-white rounded-2xl py-3 px-2 shadow-sm">
                    <div className="text-2xl mb-1">{icon}</div>
                    <div className="text-gray-600 text-xs font-medium">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* Kantor */}
      <section className="py-16 px-6 bg-green-100/40">
        <div className="max-w-7xl mx-auto">
          <Section className="text-center mb-10">
            <h2 className="font-display text-3xl font-black text-dark mb-2">Kantor Kami</h2>
            <p className="text-gray-500">Kunjungi kami langsung di salah satu kantor berikut.</p>
          </Section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OFFICES.map(({ city, addr, phone, icon }, i) => (
              <Section key={city} delay={i * 80}>
                <div className="bg-white rounded-3xl p-7 card-hover border border-gray-100 shadow-sm">
                  <div className="text-4xl mb-4">{icon}</div>
                  <h3 className="font-bold text-dark text-lg mb-2">{city}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">📍 {addr}</p>
                  <p className="text-green-600 text-sm font-semibold">📞 {phone}</p>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-3xl mx-auto">
          <Section className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-400 mb-3">FAQ</p>
            <h2 className="font-display text-3xl font-black text-dark">Pertanyaan yang Sering Ditanyakan</h2>
          </Section>
          <div className="space-y-4">
            {FAQS.map(({ q, a }, i) => (
              <Section key={i} delay={i * 60}>
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  <button
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-semibold text-dark text-sm">{q}</span>
                    <span className={`text-green-600 text-xl transition-transform duration-300 flex-shrink-0
                                     ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-48' : 'max-h-0'}`}>
                    <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">{a}</p>
                  </div>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
