import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Home from "./pages/Home";
import Proyek from "./pages/Proyek";
import Layanan from "./pages/Layanan";
import TentangKami from "./pages/TentangKami";
import Kontak from "./pages/Kontak";

export default function App() {
  return (
    <Router>
      <Loader />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyek" element={<Proyek />} />
          <Route path="/layanan" element={<Layanan />} />
          <Route path="/tentang" element={<TentangKami />} />
          <Route path="/kontak" element={<Kontak />} />
        </Routes>
      </main>
      <Footer />

      {/* Floating buttons — scroll-to-top di atas WhatsApp */}
      <ScrollToTopButton />
      <WhatsAppButton number="628111234567" />
    </Router>
  );
}
