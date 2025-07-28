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
import SEOHelmet from "./components/SEOHelmet.jsx";

// Halaman Detail
import LayananDetail from "./pages/LayananDetail.jsx";
import NotFound from "./pages/NotFound.jsx";

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
              <SEOHelmet 
                title="Valpro Intertech | Konsultan Legalitas & Perizinan Usaha Bandung"
                description="Valpro Intertech: Konsultan legalitas terpercaya di Bandung. Kami ahli dalam pendirian PT & CV, pengurusan izin usaha, sertifikasi ISO, dan konsultasi pajak. Percepat legalitas bisnis Anda bersama kami!"
                canonical="https://valprointertech.com"
                ogUrl="https://valprointertech.com"
                additionalStructuredData={[
                  {
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "Valpro Intertech",
                    "url": "https://valprointertech.com",
                    "potentialAction": {
                      "@type": "SearchAction",
                      "target": "https://valprointertech.com/layanan/{search_term_string}",
                      "query-input": "required name=search_term_string"
                    }
                  },
                  {
                    "@context": "https://schema.org",
                    "@type": "ProfessionalService",
                    "name": "Valpro Intertech",
                    "description": "Konsultan legalitas dan perizinan usaha terpercaya di Bandung",
                    "url": "https://valprointertech.com",
                    "serviceType": "Business Consulting",
                    "areaServed": "Indonesia",
                    "hasOfferCatalog": {
                      "@type": "OfferCatalog",
                      "name": "Layanan Legalitas",
                      "itemListElement": [
                        {
                          "@type": "Offer",
                          "itemOffered": {
                            "@type": "Service",
                            "name": "Pendirian PT & CV",
                            "description": "Layanan pendirian badan usaha PT dan CV"
                          }
                        },
                        {
                          "@type": "Offer",
                          "itemOffered": {
                            "@type": "Service",
                            "name": "Sertifikasi ISO",
                            "description": "Layanan sertifikasi ISO 9001, 14001, 45001"
                          }
                        }
                      ]
                    }
                  }
                ]}
              />
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
        
        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
