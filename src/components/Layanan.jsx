import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  FileCheck2,
  BadgeCheck,
  ShieldCheck,
  BookMarked,
  ScrollText,
  Banknote,
  FileBarChart2,
  CheckCircle,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Pendirian Badan Usaha",
    icon: Building2,
    slug: "pendirian-badan-usaha",
    items: [
      "Akta Notaris",
      "SK Kemenkumham",
      "NPWP Badan",
      "NIB & Sertifikat OSS",
      "Konsultasi Nama & Struktur Kepemilikan",
    ],
  },
  {
    title: "Sertifikasi SKK Konstruksi",
    icon: FileCheck2,
    slug: "sertifikasi-skk-konstruksi",
    items: [
      "Pendampingan semua jenjang",
      "Konsultasi klasifikasi & subklasifikasi",
      "Registrasi via LPJK/BNSP",
    ],
  },
  {
    title: "Sertifikasi SBU Konstruksi",
    icon: BadgeCheck,
    slug: "sertifikasi-sbu-konstruksi",
    items: [
      "Pengajuan via LPJK / OSS",
      "Konsultasi bidang dan kualifikasi",
      "Validasi hingga sertifikat terbit",
    ],
  },
  {
    title: "Sertifikasi Serkom / SKKTK",
    icon: ShieldCheck,
    slug: "sertifikasi-serkom-skktk",
    items: [
      "Sertifikasi individu",
      "Pelatihan & uji kompetensi",
      "Pendaftaran via DJK ESDM",
    ],
  },
  {
    title: "Sertifikasi SBU JPTL",
    icon: ScrollText,
    slug: "sertifikasi-sbu-jptl",
    items: [
      "Legalitas PJT, PJL, PJK, dll",
      "Konsultasi klasifikasi usaha",
      "Pendampingan sertifikasi",
    ],
  },
  {
    title: "Sertifikasi ISO",
    icon: BookMarked,
    slug: "sertifikasi-iso",
    items: [
      "ISO 9001, 14001, 45001",
      "Audit internal & eksternal",
      "Sertifikasi lembaga resmi",
    ],
  },
  {
    title: "Audit & Laporan Keuangan",
    icon: FileBarChart2,
    slug: "audit-laporan-keuangan",
    items: [
      "Audit tahunan PSAK",
      "Laporan tender / izin",
      "Dikerjakan KAP resmi",
    ],
  },
  {
    title: "Pengurusan NPWP, OSS & NIB",
    icon: Banknote,
    slug: "pengurusan-npwp-oss-nib",
    items: [
      "NPWP Badan / Perorangan",
      "NIB & Izin Usaha OSS-RBA",
      "Sertifikat Standar & Update Data",
    ],
  },
  {
    title: "Konsultasi & Pajak UMKM",
    icon: Banknote,
    slug: "konsultasi-pajak-umkm",
    items: [
      "Registrasi NPWP & EFIN",
      "Pelaporan SPT PPh 21/23/PPN",
      "Pemutihan & e-Bupot",
    ],
  },
];

export default function Layanan() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleDetailNavigate = () => {
    if (selected?.slug) {
      navigate(`/layanan/${selected.slug}`);
    }
  };

  return (
    <section className="relative z-10 bg-gradient-to-br from-white to-blue-50 py-24 px-6 md:px-16" id="layanan">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          Layanan <span className="text-[#253994]">Unggulan</span> Kami
        </h2>
        <p className="mt-4 text-gray-500 text-base max-w-xl mx-auto">
          Semua kebutuhan legalitas & sertifikasi bisnis Anda, terpusat dalam satu layanan profesional.
        </p>
      </motion.div>

      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="show"
        variants={{
          show: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                show: { opacity: 1, scale: 1 },
              }}
              whileHover={{ y: -4, boxShadow: "0px 15px 30px rgba(0,0,0,0.1)" }}
              onClick={() => setSelected(service)}
              className="bg-white cursor-pointer p-6 rounded-2xl border border-gray-100 hover:border-blue-600 transition-all shadow-md"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                <Icon className="text-[#253994] w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
              <ul className="mt-3 text-sm text-gray-600 space-y-2">
                {service.items.slice(0, 2).map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
                {service.items.length > 2 && (
                  <li className="text-blue-600 text-xs mt-1 italic">Klik untuk lihat detail</li>
                )}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-md p-6 rounded-2xl shadow-xl relative"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3 mb-4">
                <selected.icon className="text-blue-600 w-6 h-6" />
                <h3 className="text-lg font-bold text-gray-800">{selected.title}</h3>
              </div>
              <ul className="text-sm text-gray-700 space-y-2 mb-6">
                {selected.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2">
                <button
                  onClick={handleDetailNavigate}
                  className="w-full py-2 bg-[#253994] hover:bg-[#1a3ab5] text-white rounded-xl font-medium transition"
                >
                  Lihat Detail Layanan
                </button>
               
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
