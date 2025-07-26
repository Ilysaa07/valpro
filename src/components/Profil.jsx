import { useState } from "react";
import { motion } from "framer-motion";
import ProfileImage from "../assets/profil.svg";

export default function Profil() {
  const [activeTab, setActiveTab] = useState("tentang");

  const tabs = {
    tentang: {
      title: "Tentang Kami",
      content: (
        <>
          <p>
            <strong>Mitra Legalitas Usaha Anda</strong> — Kami hadir untuk
            membantu Anda memulai, memperkuat, dan menumbuhkan usaha dengan
            dasar hukum yang kuat dan terpercaya.
          </p>
          <p>
            Berdiri lebih dari 10 tahun yang lalu sebagai konsultan kecil, kini
            kami telah membantu ratusan pelaku usaha dari berbagai sektor. Pada
            2022, kami resmi berbadan hukum sebagai Perseroan Terbatas (PT),
            menandai komitmen kami dalam mendampingi bisnis Anda.
          </p>
        </>
      ),
    },
    visi: {
      title: "Visi",
      content: (
        <p>
          Menjadi mitra utama layanan legalitas dan perizinan usaha terpercaya
          di Indonesia yang mendorong pertumbuhan bisnis melalui fondasi hukum
          yang kuat.
        </p>
      ),
    },
    misi: {
      title: "Misi",
      content: (
        <ul className="list-disc list-inside space-y-1">
          <li>
            Memberikan pendampingan yang ramah, cepat tanggap, dan solutif.
          </li>
          <li>
            Menyediakan layanan legalitas usaha yang profesional dan transparan.
          </li>
          <li>
            Membantu UMKM hingga perusahaan besar membangun kepercayaan melalui
            dokumen legal yang sah.
          </li>
          <li>
            Menjadi jembatan antara regulasi dan praktik bisnis yang efisien.
          </li>
        </ul>
      ),
    },
  };

  return (
    <section
      id="profil"
      className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20 px-6 md:px-16 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center z-10 relative">
        {/* Image */}
        <motion.img
          src={ProfileImage}
          alt="Profil"
          className="w-full max-w-md mx-auto"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Content */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-extrabold text-gray-800">
            Profil <span className="text-[#253994]">Perusahaan</span>
          </h2>

          {/* Tab Menu */}
          <div className="flex gap-4 flex-wrap text-sm font-medium">
            {Object.entries(tabs).map(([key, { title }]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-4 py-2 rounded-full transition ${
                  activeTab === key
                    ? "bg-[#253994] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white/80 p-6 rounded-xl shadow-lg text-gray-700 backdrop-blur-sm space-y-4 text-base leading-relaxed">
            {tabs[activeTab].content}
          </div>
        </motion.div>
      </div>

      {/* Background blur effect */}
      <div className="absolute top-0 -left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#b3b9ff] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
    </section>
  );
}
