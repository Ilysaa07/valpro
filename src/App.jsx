import { Routes, Route } from "react-router-dom";
import "./App.css";

// Komponen Halaman
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Layanan from "./components/Layanan.jsx";
import WhyChooseUsSection from "./components/WhyChooseUsSection.jsx";
import Profil from "./components/Profil.jsx";
import Kontak from "./components/Kontak.jsx";
import Footer from "./components/Footer.jsx";
import ChatBot from "./components/ChatBot.jsx";

// Halaman Detail
import LayananDetail from "./pages/LayananDetail.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Halaman Utama */}
        <Route
          path="/"
          element={
            <>
              <div className="overflow-x-hidden">
                <Home />
              </div>
              <Layanan />
              <WhyChooseUsSection />
              <Profil />
              <Kontak />
              <Footer />
              <ChatBot />
            </>
          }
        />

        {/* Halaman Detail Layanan */}
        <Route path="/layanan/:slug" element={<LayananDetail />} />
      </Routes>
    </>
  );
}

export default App;
