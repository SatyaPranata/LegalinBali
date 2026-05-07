import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const PROPERTIES = [
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
    tanggal: "12 Maret 2024",
    penulis: "Tim Legalin Bali",
    waktu_baca: "4 menit",
    artikel: [
      { type: "lead", text: "Di lereng bukit Sentul yang rimbun, berdiri sebuah villa yang bukan sekadar hunian — melainkan sebuah pernyataan tentang bagaimana manusia seharusnya hidup berdampingan dengan alam." },
      { type: "heading", text: "Asal Mula: Tanah Warisan yang Bertransformasi" },
      { type: "paragraph", text: "Villa Sentul Hijau berdiri di atas lahan seluas 350 m² yang dulunya adalah kebun kopi milik keluarga Pak Hendra Gunawan sejak tahun 1970-an. Selama lebih dari tiga dekade, tanah itu hanya ditanami pohon kopi robusta dan beberapa pohon sengon. Namun pada 2019, putra sulung Pak Hendra yang berprofesi sebagai arsitek memiliki visi berbeda: mengubah warisan keluarga itu menjadi hunian premium yang tetap menghormati alam." },
      { type: "paragraph", text: "Proses perencanaan memakan waktu hampir dua tahun. Sang arsitek, Andika Gunawan, melakukan riset mendalam ke beberapa proyek eco-resort di Ubud dan Lombok sebelum akhirnya merancang konsep yang unik: rumah yang 'tumbuh dari bumi', bukan ditancapkan di atasnya." },
      { type: "quote", text: "Kami tidak ingin menghancurkan pohon-pohon tua yang sudah ada. Justru desainnya kami sesuaikan mengikuti posisi pohon-pohon itu.", author: "Andika Gunawan, Arsitek & Pemilik" },
      { type: "heading", text: "Proses Konstruksi yang Tak Biasa" },
      { type: "paragraph", text: "Pembangunan dimulai pada Januari 2021 dan selesai Agustus 2022 — jauh lebih lama dari konstruksi villa konvensional. Ini bukan keterlambatan, melainkan kesengajaan. Tim konstruksi yang dipilih adalah pengrajin lokal dari desa Citeureup yang masih menggunakan teknik bangunan tradisional Sunda, dipadukan dengan teknologi modern." },
      { type: "paragraph", text: "Batu-batu andesit yang menghiasi dinding eksterior diambil dari sungai kering di sekitar lokasi. Kayu jati yang digunakan untuk rangka atap berasal dari pohon-pohon yang ditebang secara legal dari hutan produksi bersertifikat. Bahkan tanah galian pondasi tidak dibuang, melainkan diolah kembali menjadi bata tanah liat yang digunakan untuk dinding interior." },
      { type: "highlight", text: "Panel surya 10 kWp yang terpasang di atap mampu memenuhi 80% kebutuhan listrik villa, sisa energi disimpan dalam baterai lithium yang bisa bertahan hingga 12 jam tanpa sinar matahari." },
      { type: "heading", text: "Sertifikasi Hijau dan Legalitas" },
      { type: "paragraph", text: "Villa ini telah mendapatkan sertifikasi Green Building dari Kementerian PUPR pada 2023 — satu di antara hanya 47 hunian privat di Indonesia yang mendapatkan penghargaan ini. Sertifikat Hak Milik (SHM) telah terbit atas nama keluarga Gunawan sejak 2020, jauh sebelum konstruksi dimulai, memastikan tidak ada sengketa lahan di kemudian hari." },
      { type: "paragraph", text: "Tim Legalin Bali membantu proses pengurusan IMB (kini PBG) yang membutuhkan persetujuan khusus karena lokasinya berada di zona kawasan lindung parsial. Proses ini memakan waktu 8 bulan, namun akhirnya berhasil dengan status legal penuh dan diizinkan beroperasi sebagai villa komersial maupun hunian pribadi." },
    ],
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
    tanggal: "5 Februari 2024",
    penulis: "Tim Legalin Bali",
    waktu_baca: "3 menit",
    artikel: [
      { type: "lead", text: "Ketika kebanyakan pengembang berlomba membangun setinggi-tingginya, Rumah Bogor Asri justru memilih untuk merangkul tanah dan membiarkan alam menjadi dinding yang sesungguhnya." },
      { type: "heading", text: "Bermula dari Keresahan Seorang Ibu" },
      { type: "paragraph", text: "Ide Rumah Bogor Asri lahir dari keresahan Ibu Ratna Dewi, seorang guru sekolah dasar yang merasa anak-anaknya terlalu banyak menghabiskan waktu di dalam ruangan. Di tahun 2021, ia mulai mencari lahan di pinggiran Bogor dengan satu syarat sederhana: ada pohon besar di dalamnya." },
      { type: "paragraph", text: "Ia menemukan sebidang tanah 220 m² di Kelurahan Tegallega yang dimiliki oleh pensiunan TNI. Tanah itu sudah dibiarkan kosong selama 10 tahun, ditumbuhi pohon mangga tua dan tanaman liar. Bagi sebagian orang itu masalah — bagi Bu Ratna, itu adalah berkah." },
      { type: "quote", text: "Pohon mangga itu yang pertama kali membuat saya jatuh cinta dengan lahan ini. Saya bilang ke arsitek: pohon itu tidak boleh ditebang, desain rumahnya yang harus menyesuaikan.", author: "Ibu Ratna Dewi, Pemilik" },
      { type: "heading", text: "Konsep Open Living yang Lahir dari Keterbatasan" },
      { type: "paragraph", text: "Dengan budget yang terbatas namun keinginan yang kuat, arsitek yang dipilih — studio muda bernama Nusantara Atelier — mengembangkan konsep 'open living': menghilangkan dinding-dinding yang tidak perlu dan menggantinya dengan bukaan lebar, roster, dan taman dalam (inner courtyard). Hasilnya adalah rumah yang terasa dua kali lebih besar dari angka 180 m²-nya." },
      { type: "highlight", text: "Pohon mangga berusia 30 tahun kini berdiri di tengah teras belakang, dilindungi oleh atap kaca yang dirancang khusus agar akarnya tetap mendapat air hujan." },
      { type: "heading", text: "Perjalanan Legalitas yang Mengajarkan Kesabaran" },
      { type: "paragraph", text: "Proses balik nama dari pemilik lama ke Bu Ratna sempat terganjal karena sertifikat tanah masih atas nama almarhum ayah dari penjual. Legalin Bali turun tangan mengurus proses waris terlebih dahulu di pengadilan, dilanjutkan dengan balik nama, hingga akhirnya AJB (Akta Jual Beli) bisa ditandatangani di hadapan notaris. Total waktu yang dibutuhkan: 5 bulan." },
      { type: "paragraph", text: "Rumah ini kini menjadi percontohan di lingkungannya — tetangga-tetangga yang awalnya skeptis dengan desain 'tanpa tembok' kini sering berkunjung untuk sekadar duduk di teras yang sejuk, di bawah naungan pohon mangga yang sama." },
    ],
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
    tanggal: "20 Januari 2024",
    penulis: "Tim Legalin Bali",
    waktu_baca: "5 menit",
    artikel: [
      { type: "lead", text: "Cluster Depok Lestari bukan hanya kumpulan rumah. Ia adalah sebuah ekosistem — di mana 48 keluarga sepakat untuk hidup dengan cara yang lebih bertanggung jawab terhadap bumi." },
      { type: "heading", text: "Dari Bekas Sawah ke Komunitas Hijau" },
      { type: "paragraph", text: "Lahan seluas 3,2 hektar di Kelurahan Beji, Depok ini dulunya adalah hamparan sawah yang sudah tidak produktif sejak pertengahan 2000-an. Pemilik lahan, PT Agro Nusantara, sempat berencana membangun pusat perbelanjaan di sana. Namun tekanan dari komunitas lokal dan kajian amdal yang ketat akhirnya mengubah rencana tersebut." },
      { type: "paragraph", text: "PT Greenland Sejahtera, pengembang di balik Cluster Depok Lestari, melihat peluang berbeda. Daripada mengabaikan sejarah lahan tersebut, mereka justru menjadikannya sebagai identitas: mempertahankan 2 hektar dari total lahan sebagai taman komunal dan area resapan air — menghormati fungsi ekologis sawah yang telah hilang." },
      { type: "quote", text: "Kami ingin orang-orang yang tinggal di sini merasa bahwa mereka bagian dari alam, bukan terpisah darinya. Taman 2 hektar itu bukan fasilitas bonus, itu adalah jiwa dari cluster ini.", author: "Direktur PT Greenland Sejahtera" },
      { type: "heading", text: "Komplikasi Legalitas yang Hampir Menggagalkan Proyek" },
      { type: "paragraph", text: "Di balik keindahan Cluster Depok Lestari tersimpan kisah perjuangan legalitas yang panjang. Lahan ini ternyata memiliki 7 pemilik berbeda yang masing-masing hanya memegang girik (bukan SHM). Proses konsolidasi lahan dan konversi dari girik ke SHM membutuhkan waktu hampir 3 tahun dan melibatkan mediasi dengan seluruh ahli waris dari setiap pemilik." },
      { type: "highlight", text: "Tim Legalin Bali berhasil menyelesaikan konversi 7 bidang girik menjadi satu SHM Induk atas nama pengembang — sebuah pencapaian yang oleh notaris yang menangani disebut sebagai 'salah satu proses konsolidasi paling kompleks di Depok dalam 10 tahun terakhir'." },
      { type: "paragraph", text: "Kini, setiap pembeli unit di Cluster Depok Lestari menerima SHM atas namanya sendiri — bukan SHGB seperti yang umum ditemukan di perumahan serupa. Ini adalah komitmen pengembang dan Legalin Bali untuk memberikan keamanan kepemilikan tertinggi bagi setiap penghuni." },
    ],
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
    tanggal: "8 April 2024",
    penulis: "Tim Legalin Bali",
    waktu_baca: "3 menit",
    artikel: [
      { type: "lead", text: "Ada yang bilang membeli tanah adalah investasi terbaik karena tanah tidak pernah diproduksi lagi. Di Cisarua, satu kavling 500 m² menyimpan lebih dari sekadar nilai investasi — ia menyimpan potongan langit pegunungan yang semakin langka." },
      { type: "heading", text: "Tanah yang Pernah Menjadi Perkebunan Teh" },
      { type: "paragraph", text: "Kawasan Cisarua Asri berdiri di atas bekas perkebunan teh kecil yang dikelola oleh keluarga Belanda pada era kolonial. Setelah kemerdekaan, lahan tersebut beralih ke tangan pemerintah daerah dan sempat digunakan sebagai area penelitian pertanian selama beberapa dekade." },
      { type: "paragraph", text: "Pada 2018, lahan ini dilepas oleh pemerintah daerah melalui proses lelang terbuka. Sebuah konsorsium investor lokal membelinya dengan rencana mengembangkan kavling premium bernuansa alam. Tidak ada rencana hotel atau resort — murni kavling residensial yang menghormati karakter asli wilayah Cisarua." },
      { type: "quote", text: "Di sini, setiap pagi Anda akan dibangunkan oleh kabut yang turun dari Gunung Gede. Itu bukan fasilitas yang bisa dibuat oleh pengembang mana pun.", author: "Agen Properti Cisarua Asri" },
      { type: "heading", text: "Status SHGB dan Rencana Konversi" },
      { type: "paragraph", text: "Kavling ini saat ini berstatus SHGB (Sertifikat Hak Guna Bangunan) dengan masa berlaku hingga 2045. Legalin Bali sedang memproses konversi ke SHM untuk beberapa kavling termasuk unit ini — proses yang membutuhkan rekomendasi dari BPN (Badan Pertanahan Nasional) setempat." },
      { type: "highlight", text: "Lokasi strategis: hanya 12 menit dari pintu tol Ciawi, akses langsung ke Jalan Raya Puncak, dan berada di ketinggian 900 mdpl yang memberikan suhu rata-rata 18-22°C sepanjang tahun." },
    ],
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
    tanggal: "1 Mei 2024",
    penulis: "Tim Legalin Bali",
    waktu_baca: "5 menit",
    artikel: [
      { type: "lead", text: "Pada ketinggian 1.200 meter di atas permukaan laut, di mana awan kadang lewat lebih rendah dari atap rumah, Villa Puncak Elegan menceritakan kisah tentang kemewahan yang tidak perlu berteriak untuk dikenali." },
      { type: "heading", text: "Dibangun untuk Menantu, Dijual karena Takdir" },
      { type: "paragraph", text: "Villa ini dibangun oleh Bapak Soenaryo, seorang pengusaha tekstil dari Bandung, sebagai hadiah pernikahan untuk putri sulungnya pada 2019. Selama dua tahun konstruksi, tidak ada yang tahu bahwa villa ini pada akhirnya tidak akan pernah ditempati oleh sang putri — pernikahan tersebut batal sebelum pembangunan selesai." },
      { type: "paragraph", text: "Pak Soenaryo, dengan hati yang berat, memutuskan untuk menjual villa yang sudah ia bangun dengan begitu banyak cinta dan detail. 'Saya membangunnya untuk orang yang saya cintai,' katanya suatu hari kepada agen Legalin yang menangani proses jualnya, 'mungkin memang ia lebih cocok untuk orang lain yang mencintainya dengan cara yang sama.'" },
      { type: "quote", text: "Kolam renangnya diisi langsung dari mata air gunung yang mengalir di belakang properti. Itu bukan klaim marketing — saya sendiri yang menggali salurannya.", author: "Pak Soenaryo, Mantan Pemilik" },
      { type: "heading", text: "Detail yang Mencerminkan Kedalaman Rasa" },
      { type: "paragraph", text: "Setiap sudut villa ini berbicara tentang niat. Lantai kayu jati yang digunakan berasal dari restorasi gedung tua di Batavia (kini Jakarta) yang direnovasi. Beberapa papan bahkan masih menyimpan bekas paku kolonial yang sengaja dibiarkan sebagai penanda sejarah." },
      { type: "paragraph", text: "Dapur utamanya dilengkapi dengan oven batu bata yang dibangun oleh pengrajin dari Yogyakarta — jenis oven yang sama seperti yang digunakan di villa-villa mewah Tuscany, Italia. Lima kamar tidurnya masing-masing memiliki tema berbeda: Jawa, Bali, Sunda, Minang, dan Toraja, lengkap dengan artefak otentik dari masing-masing daerah." },
      { type: "highlight", text: "Villa ini pernah ditawarkan ke jaringan hotel butik internasional dan mendapat valuasi sebagai properti bernilai 7,2 miliar rupiah untuk penggunaan komersial — namun Pak Soenaryo memilih menjualnya sebagai hunian pribadi." },
      { type: "heading", text: "Legalitas Berlapis Tanpa Celah" },
      { type: "paragraph", text: "SHM villa ini sudah atas nama Pak Soenaryo sejak 2017, dua tahun sebelum konstruksi dimulai. IMB diterbitkan 2019 untuk bangunan residensial dua lantai. PBB selalu dibayar tepat waktu tanpa tunggakan sejak lahan pertama kali diakuisisi pada 2016." },
      { type: "paragraph", text: "Legalin Bali memverifikasi seluruh dokumen dan memastikan tidak ada sengketa batas dengan kavling tetangga — sebuah isu yang sering muncul di kawasan Puncak akibat sejarah pertanahan yang kompleks di era Orde Baru." },
    ],
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
    tanggal: "15 Maret 2024",
    penulis: "Tim Legalin Bali",
    waktu_baca: "4 menit",
    artikel: [
      { type: "lead", text: "Di saat baja dan beton menjadi simbol kemajuan, seorang insinyur muda justru kembali ke material yang telah digunakan nenek moyang selama ribuan tahun — dan membuktikan bahwa bambu bisa lebih kuat dari yang kita kira." },
      { type: "heading", text: "Sang Insinyur yang Jatuh Cinta dengan Bambu" },
      { type: "paragraph", text: "Fajar Nugroho adalah insinyur sipil lulusan ITB yang menghabiskan 8 tahun berkarir di perusahaan konstruksi konvensional. Pada 2020, ia mengikuti sebuah workshop di Bali yang dipimpin oleh arsitek bambu terkenal dari Kosta Rika — dan hidupnya berubah selamanya." },
      { type: "paragraph", text: "'Saya belajar bahwa bambu yang diproses dengan benar punya kekuatan tarik yang mendekati baja,' cerita Fajar. 'Tapi lebih ringan, lebih fleksibel dalam gempa, dan bisa dipanen kembali dalam 5 tahun. Tidak ada material bangunan lain yang se-renewable itu.'" },
      { type: "paragraph", text: "Ia mendirikan studio bernama BambooLab Indonesia dan Rumah Bambu Cibinong adalah proyek keempat mereka — juga yang paling ambisius. Untuk pertama kalinya, mereka menggabungkan struktur bambu laminasi dengan sistem biogas rumahan dan taman herbal terintegrasi." },
      { type: "quote", text: "Bambu yang kami gunakan ditanam di kebun sendiri di Sukabumi. Dari tanam sampai jadi struktur rumah: 4 tahun. Dari tanam sampai bambu baru bisa dipanen lagi: 5 tahun. Itu siklus yang indah.", author: "Fajar Nugroho, Pendiri BambooLab Indonesia" },
      { type: "heading", text: "Tantangan Legalitas yang Belum Punya Preseden" },
      { type: "paragraph", text: "Inilah yang membuat Rumah Bambu Cibinong menjadi kasus unik bagi Legalin Bali: tidak ada regulasi yang secara spesifik mengatur bangunan berbahan bambu di Indonesia. IMB (kini PBG) umumnya merujuk pada standar SNI untuk beton dan baja." },
      { type: "highlight", text: "Legalin Bali bekerja sama dengan tim insinyur BambooLab untuk menyusun dokumen teknis khusus yang membuktikan bahwa struktur bambu laminasi memenuhi standar kekuatan yang setara — dokumen ini kemudian menjadi referensi bagi Dinas PUPR Kabupaten Bogor dalam membuat panduan izin bangunan bambu pertama di wilayah mereka." },
      { type: "paragraph", text: "Proses ini memakan waktu 11 bulan — lebih lama dari konstruksi rumahnya sendiri yang hanya 7 bulan. Namun hasilnya adalah preseden hukum yang kini memudahkan proyek-proyek bambu lainnya di Bogor untuk mendapatkan izin dengan lebih cepat." },
    ],
  },
];

/* ── Sidebar Card ── */
function SidebarCard({ prop }) {
  return (
    <Link
      to={`/proyek/${prop.id}`}
      className="flex items-center gap-3 bg-white rounded-2xl p-3 border border-gray-100
                 hover:border-green-300 hover:shadow-md transition-all duration-200 group"
    >
      {/* Thumbnail */}
      <div className={`shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${prop.color}
                       flex items-center justify-center text-2xl`}>
        {prop.emoji}
      </div>
      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-dark text-sm leading-tight truncate group-hover:text-green-700 transition-colors">
          {prop.name}
        </p>
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
        <Link to="/proyek" className="btn-primary">← Kembali ke Proyek</Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className={`relative pt-32 pb-16 px-6 bg-gradient-to-br ${prop.color} overflow-hidden`}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <Link to="/proyek" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium mb-8 transition-colors">
            ← Kembali ke Proyek
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">{prop.tag}</span>
            <span className="bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">{prop.type}</span>
          </div>
          <div className="text-6xl mb-5">{prop.emoji}</div>
          <h1 className="font-display text-3xl lg:text-5xl font-black text-white mb-3 leading-tight">{prop.name}</h1>
          <p className="text-white/75 text-base mb-6">📍 {prop.loc}</p>
          <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm">
            <span>✍️ {prop.penulis}</span>
            <span>📅 {prop.tanggal}</span>
            <span>⏱ {prop.waktu_baca}</span>
          </div>
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
              {/* Info harga */}
              <div className="bg-white rounded-2xl p-5 mb-8 flex flex-wrap items-center justify-between gap-4 shadow-sm border border-gray-100">
                <div className="flex flex-wrap gap-5 text-sm text-gray-500">
                  {prop.beds > 0 && <span>🛏 {prop.beds} Kamar Tidur</span>}
                  {prop.baths > 0 && <span>🚿 {prop.baths} Kamar Mandi</span>}
                  <span>📐 {prop.area} m²</span>
                </div>
                <div className="text-xl font-black text-green-700">{prop.price}</div>
              </div>

              {/* Artikel */}
              <div className="space-y-6">
                {prop.artikel.map((block, i) => {
                  if (block.type === "lead")
                    return <p key={i} className="text-xl text-gray-700 leading-relaxed font-medium border-l-4 border-green-500 pl-5">{block.text}</p>;
                  if (block.type === "heading")
                    return <h2 key={i} className="font-display text-2xl font-black text-dark pt-4">{block.text}</h2>;
                  if (block.type === "paragraph")
                    return <p key={i} className="text-gray-600 leading-relaxed text-base">{block.text}</p>;
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

              {/* CTA */}
              <div className="bg-white rounded-3xl p-8 text-center shadow-sm border border-gray-100">
                <div className="text-4xl mb-3">{prop.emoji}</div>
                <h3 className="font-display text-2xl font-black text-dark mb-2">Tertarik dengan {prop.name}?</h3>
                <p className="text-gray-400 text-sm mb-6">Tim Legalin Bali siap membantu proses legalitas dan pembelian Anda.</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <a href="https://wa.me/628111234567" target="_blank" rel="noopener noreferrer" className="btn-primary">
                    💬 Hubungi Kami via WhatsApp
                  </a>
                  <Link to="/kontak" className="btn-outline-green">
                    📋 Konsultasi Gratis
                  </Link>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button onClick={() => navigate("/proyek")} className="text-green-600 hover:text-green-800 font-semibold text-sm transition-colors">
                  ← Lihat Semua Properti
                </button>
              </div>
            </div>

            {/* ── Kolom Kanan: Sidebar Proyek Lainnya ── */}
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
