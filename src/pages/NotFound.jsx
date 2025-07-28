import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import SEOHelmet from "../components/SEOHelmet";

export default function NotFound() {
  return (
    <>
      <SEOHelmet 
        title="Halaman Tidak Ditemukan - Valpro Intertech"
        description="Halaman yang Anda cari tidak ditemukan. Kembali ke beranda Valpro Intertech untuk layanan konsultan legalitas dan perizinan usaha."
        canonical="https://valprointertech.com/404"
        ogUrl="https://valprointertech.com/404"
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-[#253994] mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Halaman Tidak Ditemukan
            </h2>
            <p className="text-gray-600">
              Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman tersebut telah dipindahkan atau tidak tersedia.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-[#253994] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Home className="w-4 h-4" />
              Kembali ke Beranda
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 border border-[#253994] text-[#253994] px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Halaman Sebelumnya
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

