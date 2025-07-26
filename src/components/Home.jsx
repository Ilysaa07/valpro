import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import HeroSVG from "../assets/home.svg"; // Ganti sesuai path kamu

export default function HeroSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white rounded-b-[5rem] border-b-4 border-[#253994]">
      {/* Wave Background */}
      <div className="absolute top-0 left-0 w-full z-0 overflow-hidden">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-20 md:h-40"
          preserveAspectRatio="none"
          style={{ display: "block", maxWidth: "100%", overflow: "hidden" }}

        >
          <path
            fill="#3b82f6"
            fillOpacity="0.1"
            d="M0,96L60,128C120,160,240,224,360,213.3C480,203,600,117,720,80C840,43,960,53,1080,74.7C1200,96,1320,128,1380,144L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>
      </div>

      <div
        ref={ref}
        className="relative z-10 min-h-[60vh] md:min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 md:px-20 py-10 md:py-24 gap-10"
      >
        {/* Left Content */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInVariants}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 text-center md:text-left space-y-5"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#253994] leading-tight">
            <TypeAnimation
              sequence={[
                "Solusi Legalitas Terpercaya",
                1500,
                "Layanan Profesional & Cepat",
                1500,
                "Bantu Urus Izin Usaha Anda",
                1500,
              ]}
              speed={60}
              repeat={Infinity}
              wrapper="span"
            />
          </h1>

          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto md:mx-0">
            Fondasi hukum yang kuat adalah kunci pertumbuhan usaha. Kami hadir
            untuk menyederhanakan proses legalitas dan perizinan agar Anda bisa
            fokus mengembangkan bisnis.
          </p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center md:justify-start items-start sm:items-center gap-4 text-gray-700"
          >
            {[
              "Proses Cepat & Transparan",
              "Garansi Layanan",
              "Harga Terjangkau",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-2 text-sm sm:text-base">
                <CheckCircle className="text-green-500 w-5 h-5 shrink-0" />
                {text}
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-2">
            <a
              href="#kontak"
              className="bg-[#253994] hover:bg-[#1e2e7a] text-white text-sm sm:text-base font-semibold px-6 py-3 rounded-xl shadow transition"
            >
              Konsultasi Gratis
            </a>
            <a
              href="#layanan"
              className="border border-[#253994] text-[#253994] hover:bg-blue-50 text-sm sm:text-base font-semibold px-6 py-3 rounded-xl transition"
            >
              Pelajari Layanan
            </a>
          </div>
        </motion.div>

        {/* Right SVG Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src={HeroSVG}
            alt="Ilustrasi Legalitas"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
