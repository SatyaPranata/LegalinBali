import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const PROPERTIES = [
  {
    id: "bhotel",
    emoji: "",
    tag: "PBG & SLF",
    name: "B Hotel",
    loc: "Bali, Denpasar",
    beds: 4,
    baths: 3,
    area: 280,
    desc: "Hunian Hotel Mewah Yang Berada di Kota Denpasar, Bali",
    price: "",
    img: "/img/b hotel.jpg",
    type: "Hotel",
    tanggal: "12 Maret 2024",
    penulis: "Tim Legalin Bali",
    waktu_baca: "4 menit",
    artikel: [
      { type: "lead", text: "Di jantung kota Denpasar yang dinamis, berdiri sebuah oase urban yang bukan sekadar tempat menginap — melainkan sebuah perpaduan harmoni antara kenyamanan modern dan gaya hidup tropis." },
      { type: "heading", text: "Konsep: Ketenangan di Tengah Hiruk Pikuk Kota" },
      {
        type: "paragraph",
        text: "b Hotel Bali & Spa menghadirkan nuansa urban tropical yang unik di kawasan Imam Bonjol. Dibangun dengan visi memberikan aksesibilitas tinggi namun tetap menjaga ketenangan bagi para tamunya, hotel ini menjadi jembatan antara semangat kota Denpasar dengan kenyamanan pesisir Bali Selatan seperti Kuta dan Seminyak.",
      },
      {
        type: "paragraph",
        text: "Setiap sudut hotel dirancang untuk menciptakan keseimbangan. Dengan desain yang elegan dan minimalis, hotel ini memastikan setiap tamu, baik untuk urusan bisnis maupun liburan, mendapatkan pengalaman menginap yang berkualitas dan menyegarkan.",
      },
      { type: "quote", text: "Kami ingin menghadirkan tempat pelarian yang tenang di tengah kota, di mana kenyamanan tamu menjadi prioritas utama melalui pelayanan yang tulus dan fasilitas premium", author: "Manajemen b Hotel Bali & Spa" },
      { type: "heading", text: "Fasilitas yang Memanjakan" },
      {
        type: "paragraph",
        text: "Operasional hotel ini didukung oleh fasilitas lengkap yang dirancang untuk memenuhi segala kebutuhan. Mulai dari kamar Deluxe yang nyaman hingga Suite Room yang mewah, semua dilengkapi dengan fasilitas standar bintang empat. B Hotel Restaurant hadir menyajikan ragam kuliner lezat, sementara b Hotel Bali Spa menawarkan relaksasi total setelah seharian beraktivitas.",
      },
      { type: "highlight", text: "Sertifikasi CHSE dan penghargaan Siddhakarya yang diraih membuktikan komitmen hotel dalam menjaga standar kualitas, keamanan, dan kebersihan yang tinggi bagi seluruh pengunjung." },
      { type: "heading", text: "Kepatuhan Legalitas dan Standar Pelayanan" },
      {
        type: "paragraph",
        text: "Sebagai akomodasi terpercaya, b Hotel Bali & Spa sangat memperhatikan aspek legalitas. Hal ini sejalan dengan komitmen Legalin Bali yang selalu mengedepankan kepatuhan hukum dalam setiap operasional bisnis. Pengurusan izin gedung (PBG) dan sertifikasi operasional yang lengkap menjadi fondasi kuat mengapa hotel ini menjadi pilihan utama.",
      },
    ],
  },
  {
    id: "info-denpasar",
    emoji: "",
    tag: "MEREK",
    name: "Info Denpasar",
    loc: "Denapasar, Bali",
    beds: 3,
    baths: 2,
    area: 180,
    desc: "Sebuah Informasi Digital Mengenai Kota Denpasar dan Sekitarnya",
    price: "",
    img: "/img/logoinfodenpasar.png",
    type: "Merek",
    tanggal: "5 Februari 2024",
    penulis: "Tim Legalin Bali",
    waktu_baca: "3 menit",
    artikel: [
      { type: "lead", text: "Di tengah derasnya arus informasi digital, hadir sebuah platform yang bukan sekadar media sosial — melainkan sebuah titik temu dan rujukan utama bagi denyut nadi kehidupan warga Kota Denpasar." },
      { type: "heading", text: "Asal Mula: Dari Komunitas Menjadi Referensi Utama" },
      {
        type: "paragraph",
        text: `Info Denpasar tumbuh dari kebutuhan warga akan informasi yang cepat, akurat, dan relevan. Sejak awal kemunculannya, platform ini memiliki visi untuk menjadi "mata dan telinga" kota, melaporkan segala hal mulai dari info lalu lintas, kegiatan budaya, hingga peluang bisnis lokal yang sedang berkembang di Bali.`,
      },
      {
        type: "quote",
        text: "Kami ingin menjadi jembatan informasi yang bermanfaat bagi masyarakat, memastikan setiap warga tahu apa yang sedang terjadi di kota mereka secara real-time.",
        author: "Manajemen Info Denpasar",
      },
      { type: "highlight", text: "Hampir setiap hari, Info Denpasar memotret pertumbuhan ekonomi kota, mulai dari pembukaan outlet baru hingga perkembangan infrastruktur. Kecepatan arus informasi ini membuktikan bahwa Denpasar adalah pasar yang sangat dinamis bagi para pengusaha dan investor." },
      { type: "heading", text: "Dinamika Kota dan Pertumbuhan Bisnis" },
      {
        type: "paragraph",
        text: "Dengan jangkauan audiens yang luas, Info Denpasar menjadi barometer tren bisnis di Bali, di mana setiap usaha yang muncul memerlukan fondasi publikasi dan legalitas yang kuat agar dapat bersaing secara sehat.",
      },
    ],
  },
  // {
  //   id: "cluster-depok-lestari",
  //   emoji: "🏘️",
  //   tag: "Cluster Green",
  //   name: "Cluster Depok Lestari",
  //   loc: "Depok, Jawa Barat",
  //   beds: 3,
  //   baths: 2,
  //   area: 150,
  //   desc: "Kompleks perumahan ramah lingkungan dengan fasilitas komunitas taman hijau seluas 2 ha.",
  //   price: "Rp 1,2 M",
  //   img: "/img/b hotel.jpg",
  //   type: "Cluster",
  //   tanggal: "20 Januari 2024",
  //   penulis: "Tim Legalin Bali",
  //   waktu_baca: "5 menit",
  //   artikel: [
  //     { type: "lead", text: "Cluster Depok Lestari bukan hanya kumpulan rumah. Ia adalah sebuah ekosistem — di mana 48 keluarga sepakat untuk hidup dengan cara yang lebih bertanggung jawab terhadap bumi." },
  //     { type: "heading", text: "Dari Bekas Sawah ke Komunitas Hijau" },
  //     { type: "paragraph", text: "Lahan seluas 3,2 hektar di Kelurahan Beji, Depok ini dulunya adalah hamparan sawah yang sudah tidak produktif sejak pertengahan 2000-an." },
  //     { type: "quote", text: "Kami ingin orang-orang yang tinggal di sini merasa bahwa mereka bagian dari alam, bukan terpisah darinya.", author: "Direktur PT Greenland Sejahtera" },
  //     { type: "highlight", text: "Tim Legalin Bali berhasil menyelesaikan konversi 7 bidang girik menjadi satu SHM Induk atas nama pengembang." },
  //   ],
  // },
  // {
  //   id: "kavling-cisarua-asri",
  //   emoji: "🌾",
  //   tag: "Prime Land",
  //   name: "Kavling Cisarua Asri",
  //   loc: "Cisarua, Bogor",
  //   beds: 0,
  //   baths: 0,
  //   area: 500,
  //   desc: "Kavling tanah strategis di kawasan pegunungan dengan udara segar dan pemandangan hijau.",
  //   price: "Rp 900 Jt",
  //   img: "/img/b hotel.jpg",
  //   type: "Kavling",
  //   tanggal: "8 April 2024",
  //   penulis: "Tim Legalin Bali",
  //   waktu_baca: "3 menit",
  //   artikel: [
  //     { type: "lead", text: "Ada yang bilang membeli tanah adalah investasi terbaik karena tanah tidak pernah diproduksi lagi. Di Cisarua, satu kavling 500 m² menyimpan lebih dari sekadar nilai investasi." },
  //     { type: "heading", text: "Tanah yang Pernah Menjadi Perkebunan Teh" },
  //     { type: "paragraph", text: "Kawasan Cisarua Asri berdiri di atas bekas perkebunan teh kecil yang dikelola oleh keluarga Belanda pada era kolonial." },
  //     { type: "quote", text: "Di sini, setiap pagi Anda akan dibangunkan oleh kabut yang turun dari Gunung Gede.", author: "Agen Properti Cisarua Asri" },
  //     { type: "highlight", text: "Lokasi strategis: hanya 12 menit dari pintu tol Ciawi, berada di ketinggian 900 mdpl dengan suhu rata-rata 18-22°C sepanjang tahun." },
  //   ],
  // },
  // {
  //   id: "villa-puncak-elegan",
  //   emoji: "🏠",
  //   tag: "Best Seller",
  //   name: "Villa Puncak Elegan",
  //   loc: "Puncak, Bogor",
  //   beds: 5,
  //   baths: 4,
  //   area: 350,
  //   desc: "Villa premium di ketinggian 1.200 mdpl, lengkap dengan kolam renang air gunung alami.",
  //   price: "Rp 5,5 M",
  //   img: "/img/b hotel.jpg",
  //   type: "Villa",
  //   tanggal: "1 Mei 2024",
  //   penulis: "Tim Legalin Bali",
  //   waktu_baca: "5 menit",
  //   artikel: [
  //     { type: "lead", text: "Pada ketinggian 1.200 meter di atas permukaan laut, Villa Puncak Elegan menceritakan kisah tentang kemewahan yang tidak perlu berteriak untuk dikenali." },
  //     { type: "heading", text: "Dibangun untuk Menantu, Dijual karena Takdir" },
  //     { type: "paragraph", text: "Villa ini dibangun oleh Bapak Soenaryo sebagai hadiah pernikahan untuk putri sulungnya pada 2019 — namun pernikahan tersebut batal sebelum pembangunan selesai." },
  //     { type: "quote", text: "Kolam renangnya diisi langsung dari mata air gunung yang mengalir di belakang properti.", author: "Pak Soenaryo, Mantan Pemilik" },
  //     { type: "highlight", text: "Villa ini pernah mendapat valuasi 7,2 miliar rupiah untuk penggunaan komersial — namun dijual sebagai hunian pribadi." },
  //   ],
  // },
  // {
  //   id: "rumah-bambu-cibinong",
  //   emoji: "🌳",
  //   tag: "Eco Living",
  //   name: "Rumah Bambu Cibinong",
  //   loc: "Cibinong, Bogor",
  //   beds: 3,
  //   baths: 2,
  //   area: 160,
  //   desc: "Rumah unik berbahan bambu bersertifikasi dengan desain kontemporer dan efisiensi energi tinggi.",
  //   price: "Rp 1,4 M",
  //   img: "/img/b hotel.jpg",
  //   type: "Rumah",
  //   tanggal: "15 Maret 2024",
  //   penulis: "Tim Legalin Bali",
  //   waktu_baca: "4 menit",
  //   artikel: [
  //     { type: "lead", text: "Di saat baja dan beton menjadi simbol kemajuan, seorang insinyur muda justru kembali ke material yang telah digunakan nenek moyang selama ribuan tahun." },
  //     { type: "heading", text: "Sang Insinyur yang Jatuh Cinta dengan Bambu" },
  //     { type: "paragraph", text: "Fajar Nugroho adalah insinyur sipil lulusan ITB yang mendirikan BambooLab Indonesia setelah mengikuti workshop di Bali." },
  //     { type: "quote", text: "Bambu yang kami gunakan ditanam di kebun sendiri di Sukabumi. Dari tanam sampai jadi struktur rumah: 4 tahun. Itu siklus yang indah.", author: "Fajar Nugroho, Pendiri BambooLab Indonesia" },
  //     { type: "highlight", text: "Dokumen teknis yang disusun Legalin Bali menjadi referensi bagi Dinas PUPR Kabupaten Bogor dalam membuat panduan izin bangunan bambu pertama di wilayah mereka." },
  //   ],
  // },
];

/* ── Sidebar Card ── */
function SidebarCard({ prop }) {
  return (
    <Link
      to={`/proyek/${prop.id}`}
      className="flex items-center gap-3 bg-white rounded-2xl p-3 border border-gray-100
                 hover:border-green-300 hover:shadow-md transition-all duration-200 group"
    >
      {/* Thumbnail kecil */}
      <div className="shrink-0 w-14 h-14 rounded-xl overflow-hidden">
        <img src={prop.img} alt={prop.name} className="w-full h-full object-cover" />
      </div>
      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-dark text-sm leading-tight truncate group-hover:text-green-700 transition-colors">{prop.name}</p>
        <p className="text-xs text-gray-400 mt-0.5 truncate">📍 {prop.loc}</p>
        <p className="text-xs font-bold text-green-600 mt-1">{prop.price}</p>
      </div>
      <span className="shrink-0 text-gray-300 group-hover:text-green-500 transition-colors text-sm">→</span>
    </Link>
  );
}

export default function ProyekDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const prop = PROPERTIES.find((p) => p.id === id);
  const others = PROPERTIES.filter((p) => p.id !== id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!prop) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="text-6xl mb-4">🔍</div>
        <h1 className="text-2xl font-bold text-dark mb-2">Properti tidak ditemukan</h1>
        <p className="text-gray-400 mb-6">Halaman yang Anda cari tidak ada.</p>
        <Link to="/proyek" className="btn-primary">
          ← Kembali ke Proyek
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero — pakai gambar sebagai background */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        {/* Background image dengan overlay gelap */}
        <div className="absolute inset-0">
          <img src={prop.img} alt={prop.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/70" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <Link to="/proyek" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium mb-8 transition-colors">
            ← Kembali ke Proyek
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-green-600 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">{prop.tag}</span>
            <span className="bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">{prop.type}</span>
          </div>
          <h1 className="font-display text-3xl lg:text-5xl font-black text-white mb-3 leading-tight">{prop.name}</h1>
          <p className="text-white/75 text-base mb-6">📍 {prop.loc}</p>
          {/* <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm">
            <span>✍️ {prop.penulis}</span>
            <span>📅 {prop.tanggal}</span>
            <span>⏱ {prop.waktu_baca}</span>
          </div> */}
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-10">
            <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" fill="#f8f5f0" />
          </svg>
        </div>
      </section>

      {/* Konten utama + sidebar */}
      <section className="py-16 px-6" style={{ background: "#f8f5f0" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* ── Kolom Kiri: Artikel ── */}
            <div className="flex-1 min-w-0">
              {/* Info singkat */}
              {/* <div className="bg-white rounded-2xl p-5 mb-8 flex flex-wrap items-center justify-between gap-4 shadow-sm border border-gray-100">
                <div className="flex flex-wrap gap-5 text-sm text-gray-500">
                  {prop.beds > 0 && <span>🛏 {prop.beds} Kamar Tidur</span>}
                  {prop.baths > 0 && <span>🚿 {prop.baths} Kamar Mandi</span>}
                  <span>📐 {prop.area} m²</span>
                </div>
                <div className="text-xl font-black text-green-700">{prop.price}</div>
              </div> */}

              {/* Artikel */}
              <div className="space-y-6">
                {prop.artikel.map((block, i) => {
                  if (block.type === "lead")
                    return (
                      <p key={i} className="text-xl text-gray-700 leading-relaxed font-medium border-l-4 border-green-500 pl-5">
                        {block.text}
                      </p>
                    );
                  if (block.type === "heading")
                    return (
                      <h2 key={i} className="font-display text-2xl font-black text-dark pt-4">
                        {block.text}
                      </h2>
                    );
                  if (block.type === "paragraph")
                    return (
                      <p key={i} className="text-gray-600 leading-relaxed text-base">
                        {block.text}
                      </p>
                    );
                  if (block.type === "quote")
                    return (
                      <blockquote key={i} className="bg-green-50 border-l-4 border-green-500 rounded-r-2xl px-6 py-5 my-6">
                        <p className="text-green-800 italic text-lg leading-relaxed mb-2">"{block.text}"</p>
                        <cite className="text-green-600 text-sm font-semibold not-italic">— {block.author}</cite>
                      </blockquote>
                    );
                  if (block.type === "highlight")
                    return (
                      <div key={i} className="bg-green-600 text-white rounded-2xl px-6 py-5">
                        <p className="text-base leading-relaxed font-medium">{block.text}</p>
                      </div>
                    );
                  return null;
                })}
              </div>

              <div className="border-t border-gray-200 my-10" />

              <div className="mt-8 text-center">
                <button onClick={() => navigate("/proyek")} className="text-green-600 hover:text-green-800 font-semibold text-sm transition-colors">
                  ← Lihat Semua Properti
                </button>
              </div>
            </div>

            {/* ── Kolom Kanan: Sidebar ── */}
            <aside className="w-full lg:w-80 shrink-0">
              <div className="sticky top-28">
                <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
                  <h3 className="font-display font-black text-dark text-base mb-1">Proyek Lainnya</h3>
                  <p className="text-xs text-gray-400 mb-4">Temukan properti lain yang mungkin Anda suka</p>
                  <div className="space-y-3">
                    {others.map((p) => (
                      <SidebarCard key={p.id} prop={p} />
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Link
                      to="/proyek"
                      className="block w-full text-center text-sm font-semibold text-green-600
                                 hover:text-white hover:bg-green-600 border-2 border-green-600
                                 py-2.5 rounded-xl transition-all duration-200"
                    >
                      Lihat Semua Proyek →
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
