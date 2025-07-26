// src/pages/LayananDetail.jsx
import { useParams, Link } from "react-router-dom";
import layananData from "../data/layananData";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

export default function LayananDetail() {
  const { slug } = useParams();
  const layanan = layananData.find((l) => l.slug === slug);

  if (!layanan) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 font-semibold text-xl">
        Layanan tidak ditemukan.
      </div>
    );
  }

  const Icon = layanan.icon;

  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-20 px-6 md:px-16 text-gray-800">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden md:flex">
        {/* Left Icon Panel */}
        <div className="bg-blue-100 md:w-1/3 p-10 flex flex-col items-center justify-center">
          <div className="bg-white p-6 rounded-full shadow-md">
            <Icon className="text-[#253994] w-10 h-10" />
          </div>
          <h2 className="text-center text-[#253994] text-lg font-bold mt-4">
            {layanan.title}
          </h2>
        </div>

        {/* Right Content */}
        <div className="md:w-2/3 p-8 relative">
          <Link
            to="/"
            className="flex items-center text-sm text-blue-600 mb-4 hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Kembali ke Beranda
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-2xl md:text-3xl font-bold text-[#253994] mb-4"
          >
            {layanan.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-gray-600 mb-6 leading-relaxed"
          >
            {layanan.description}
          </motion.p>

          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="space-y-4 mb-8"
          >
            {layanan.items.map((item, idx) => (
              <motion.li
                key={idx}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex items-start gap-3 text-gray-700"
              >
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
          <HashLink
            smooth
            to="/#kontak"
            className="block text-center w-full py-3 bg-[#253994] hover:bg-blue-800 text-white rounded-xl font-semibold transition duration-300"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-[#253994] hover:bg-blue-800 text-white rounded-xl font-semibold transition duration-300"
            >
              Konsultasi Sekarang
            </motion.button>
          </HashLink>
        </div>
      </div>
    </section>
  );
}
