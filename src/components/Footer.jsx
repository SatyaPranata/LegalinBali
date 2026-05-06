import Section from "./Section";

const FOOTER_LINKS = {
  Properti: ["Villa Eco", "Rumah Cluster", "Kavling Hijau", "Komersial", "Investasi"],
  Layanan: ["Konstruksi", "Desain Lansekap", "Panel Surya", "Konsultasi", "Perawatan"],
  Perusahaan: ["Tentang Kami", "Tim Kami", "Karir", "Press Kit", "Kontak"],
};

const SOCIALS = [
  { label: "/img/icon-instagram.svg", name: "Instagram", href: "" },
  { label: "/img/icon-gmail.svg", name: "Gmail", href: "" },
  { label: "/img/icon-location.svg", name: "Google Maps", href: "" },
];

export default function Footer() {
  return (
    <footer className="bg-dark pt-16 pb-8 px-6">
      <Section>
        <div className="max-w-7xl mx-auto">
          {/* Top grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12
                          border-b border-white/10"
          >
            {/* Brand */}
            <div className="lg:col-span-1">
              <span className="font-display text-2xl font-black text-white block mb-3">
                <img src="/img/logolegalinbulet.svg" alt="Legalin Bali" className="w-48" />
              </span>
              <p className="text-white/45 text-sm leading-relaxed mb-5">
                Legalin Bali memberikan solusi lengkap untuk kebutuhan perizinan usaha Anda. Tanpa proses rumit, tanpa kebingungan—kami pastikan bisnis Anda berjalan sesuai regulasi yang berlaku.
              </p>

              {/* Social icons */}
              <div className="flex gap-3">
                {SOCIALS.map(({ label, name, href }) => (
                  <a
                    href={href}
                    key={name}
                    aria-label={name}
                    className="group w-9 h-9 rounded-xl bg-white/8 flex items-center justify-center
                              hover:bg-green-600 transition-colors duration-200"
                  >
                    <img
                      src={label}
                      alt={name}
                      className="w-5 h-5 brightness-0 invert
                                group-hover:brightness-100 group-hover:invert-0
                                transition-all duration-300"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="text-white font-semibold text-sm mb-5">{heading}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-white/45 text-sm hover:text-green-400
                                   transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8">
            <p className="text-white/30 text-xs">© 2020 Legalin Bali</p>
            <div className="flex gap-5">
              {["Privasi", "Syarat & Ketentuan", "Cookie"].map((label) => (
                <a key={label} href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">
                  {label}
                </a>
              ))}
            </div>
            <p className="text-white/25 text-xs">Menyediakan Berbagai Macam Legalitas Untuk Usaha Anda</p>
          </div>
        </div>
      </Section>
    </footer>
  );
}
