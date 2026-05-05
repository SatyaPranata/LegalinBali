import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { name: "Beranda", path: "/" },
  { name: "Properti", path: "/properti" },
  { name: "Layanan", path: "/layanan" },
  { name: "Tentang Kami", path: "/tentang" },
  { name: "Kontak", path: "/kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close drawer on route change
  useEffect(() => setMobileOpen(false), [location.pathname]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 font-body
                     bg-cream/90 backdrop-blur-md border-b border-green-300/20
                     ${scrolled ? "shadow-md shadow-green-600/10" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[68px]">
        {/* Logo */}
        {/* <Link to="/" className="font-display text-2xl font-black text-green-600 tracking-tight">
          Green<span className="text-green-400">villa</span>
        </Link> */}
        <img src="../public/img/logolegalinbali.svg" alt="" className="h-36" />

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none">
          {NAV_LINKS.map((link) => {
            const active = location.pathname === link.path;
            return (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 relative group
                              ${active ? "text-green-600" : "text-gray-600 hover:text-green-600"}`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-green-400 rounded-full
                                   transition-all duration-300
                                   ${active ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <a href="#">
          <btn className="hidden md:block btn-primary text-sm">Konsultasi Sekarang</btn>
        </a>

        {/* Hamburger */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMobileOpen((o) => !o)} aria-label="Menu">
          <span className={`w-6 h-0.5 bg-green-600 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-green-600 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-green-600 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-cream
                       ${mobileOpen ? "max-h-96 py-4" : "max-h-0"}`}
      >
        <ul className="flex flex-col gap-4 px-6">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`font-medium transition-colors
                            ${location.pathname === link.path ? "text-green-600" : "text-gray-600 hover:text-green-600"}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/kontak" className="btn-primary text-sm w-full mt-2 block text-center">
              Konsultasi Sekarang
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
