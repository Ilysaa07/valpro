import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Clock,
  DollarSign,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"; 
import Marquee from "react-fast-marquee";
import Client1 from "../assets/logo-client1.jpeg";
import Client2 from "../assets/logo-client2.jpeg";
import Client3 from "../assets/logo-client3.png";
import Client4 from "../assets/logo-client4.jpeg";
import Client5 from "../assets/logo-client5.jpeg";
import Client6 from "../assets/logo-client6.png";
import Client7 from "../assets/logo-client7.png";
import Client8 from "../assets/logo-client8.jpeg";
import Client9 from "../assets/logo-client9.png";
import Ban1 from "../assets/bannerclient.png"
import Ban2 from "../assets/bannerclient2.png"
import Ban3 from "../assets/bannerclient3.png";
import Ban4 from "../assets/bannerclient4.png";
import Ban5 from "../assets/bannerclient5.png";

const features = [
  {
    icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Profesional & Berpengalaman",
    description:
      "Kami terdiri dari tim ahli hukum dan konsultan perizinan yang telah menangani ratusan klien dari berbagai sektor bisnis.",
    gradient: "from-[#253994] to-blue-600",
    bgGradient: "from-blue-50 to-blue-100",
    stats: "500+ Klien",
  },
  {
    icon: <Clock className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Proses Cepat & Transparan",
    description:
      "Kami mengutamakan efisiensi tanpa mengorbankan kualitas. Setiap tahapan dijelaskan secara terbuka.",
    gradient: "from-green-500 to-green-600",
    bgGradient: "from-green-50 to-green-100",
    stats: "7-14 Hari",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Garansi Layanan",
    description:
      "Kami memberikan garansi bila ada kendala administratif bukan dari pihak Anda.",
    gradient: "from-[#253994] to-blue-700",
    bgGradient: "from-blue-50 to-blue-100",
    stats: "100% Garansi",
  },
  {
    icon: <DollarSign className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Harga Terjangkau & Fleksibel",
    description:
      "Kami percaya legalitas adalah kebutuhan semua pelaku usaha. Tersedia paket layanan sesuai skala bisnis Anda.",
    gradient: "from-gray-600 to-gray-700",
    bgGradient: "from-gray-50 to-gray-100",
    stats: "Mulai 500K",
  },
];

const testimonials = [
  {
    //name: "Endang Syuhada",
    //company: "PT. MAJU KARYA BHAKTI UTOMO",
    role: "CEO",
    content:
      "Pelayanan yang sangat profesional dan cepat. Dalam 2 minggu semua dokumen perizinan kami sudah selesai. Highly recommended!",
    rating: 5,
    //avatar: <img src={Client8} alt="" className="w-full h-full object-cover rounded-full" />,
    industry: "Konstruksi",
  },
  {
    //name: "Irham Tolinggi",
    //company: "CV. GIGATAMA GROUP",
    role: "Direktur",
    content:
      "Tim yang sangat responsif dan transparan. Mereka selalu update progress dan menjelaskan setiap tahapan dengan detail.",
    rating: 5,
    //avatar: <img src={Client2} alt="" className="w-full h-full object-cover rounded-full" />,
    industry: "Konstruksi",
  },
  {
    //name: "Kelvin Giovanni Arissaputra",
    //company: "PT. MULTI KREASINDO ABADI",
    role: "Direktur",
    content:
      "Proses yang sangat mudah dan cepat. Tim sangat membantu dalam menjelaskan setiap persyaratan yang dibutuhkan.",
    rating: 5,
    //avatar: <img src={Client9} alt="" className="w-full h-full object-cover rounded-full" />,
    industry: "Konstruksi",
  },
  {
    //name: "Fian Sofian Supriadi",
    //company: "PT. ARTAJAYA KONSTRUKSI",
    role: "Direktur",
    content:
      "Kami sangat puas dengan layanan yang diberikan. Semua dokumen perizinan kami selesai tepat waktu dan tanpa kendala.",
    rating: 5,
    //avatar: <img src={Client5} alt="" className="w-full h-full object-cover rounded-full" />,
    industry: "Konstruksi",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }, // Sedikit percepat stagger
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardHoverVariants = {
  hover: {
    y: -10, // Lift lebih tinggi
    scale: 1.03, // Sedikit membesar
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)", // Shadow lebih tegas
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const TestimonialCarousel = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Interval lebih panjang untuk membaca
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto px-4 md:px-0"> {/* Tambahkan padding horizontal */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="relative p-8 bg-white/90 backdrop-blur-sm border border-blue-100 rounded-3xl shadow-2xl overflow-hidden" // Shadow lebih kuat
      >
        {/* Latar belakang gelombang abstrak (opsional, bisa diganti SVG/gambar lain) */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path fill="#253994" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,170.7C672,160,768,160,864,154.7C960,149,1056,139,1152,149.3C1248,160,1344,192,1392,208L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
        </div>


        <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#253994] to-blue-600 rounded-full flex items-center justify-center shadow-lg z-10">
          <Quote className="w-6 h-6 text-white" />
        </div>

        <div className="flex items-center mb-6 relative z-10">
          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
          <span className="ml-2 text-sm text-slate-600">
            ({testimonials[currentIndex].rating}/5)
          </span>
        </div>

        <p className="text-base md:text-lg text-gray-700 mb-8 italic leading-relaxed relative z-10">
          "{testimonials[currentIndex].content}"
        </p>

        <div className="flex items-center justify-between flex-col sm:flex-row gap-4 relative z-10">
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-[#253994]/20 shadow-md"> {/* Border dan shadow pada avatar */}
              {testimonials[currentIndex].avatar}
            </div>
            <div>
              <h4 className="font-bold text-[#253994] text-lg">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-gray-700">
                {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
              </p>
              <p className="text-sm text-green-600 font-medium">
                {testimonials[currentIndex].industry}
              </p>
            </div>
          </div>

          <div className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full border border-[#253994]/10 shadow-sm"> {/* Shadow pada badge */}
            <span className="text-sm font-medium text-[#253994]">
              {testimonials[currentIndex].industry}
            </span>
          </div>
        </div>
      </motion.div>

      <div className="flex items-center justify-center mt-8 space-x-4">
        <button
          onClick={prevTestimonial}
          className="p-3 bg-white/90 backdrop-blur-sm border border-[#253994]/20 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        >
          <ChevronLeft className="w-5 h-5 text-[#253994] group-hover:text-blue-600 transition-colors" /> {/* Perubahan warna icon */}
        </button>

        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gradient-to-r from-[#253994] to-blue-600 scale-125 shadow-md" // Tambah shadow
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextTestimonial}
          className="p-3 bg-white/90 backdrop-blur-sm border border-[#253994]/20 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        >
          <ChevronRight className="w-5 h-5 text-[#253994] group-hover:text-blue-600 transition-colors" /> {/* Perubahan warna icon */}
        </button>
      </div>
    </div>
  );
};

const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [controls, isInView]);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4 md:px-8 lg:px-12 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {/* Tambahkan elemen grafis latar belakang abstrak */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#253994] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-20" ref={ref}> {/* Menaikkan space-y */}
        {/* SECTION: MENGAPA MEMILIH KAMI */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#253994] mb-4 drop-shadow-sm"> {/* Ukuran font lebih besar, drop-shadow */}
            Mengapa Memilih Kami?
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-16 text-lg md:text-xl leading-relaxed"> {/* Ukuran font lebih besar, leading-relaxed */}
            Kami hadir untuk memberikan solusi terbaik dalam legalitas dan perizinan usaha Anda.
            Berikut alasan mengapa ratusan klien mempercayakan pada kami:
          </p>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"> {/* Gap lebih besar */}
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="group"
              >
                <motion.div
                  variants={cardHoverVariants}
                  className="relative p-7 bg-white/85 backdrop-blur-md border border-blue-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col transform" // Backdrop blur lebih kuat, border lebih jelas
                >
                  <div
                    className={`absolute inset-0 rounded-3xl transition-all duration-500 ` +
                    `opacity-0 group-hover:opacity-100 ` +
                    `bg-gradient-to-br ${feature.bgGradient} scale-105 group-hover:scale-100`} // Efek scale saat hover
                  />
                  <div className="relative z-10 text-left flex-grow">
                    <div
                      className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white flex items-center justify-center mb-5 shadow-lg`} // Ukuran icon lebih besar, shadow lebih kuat, rounded lebih tegas
                    >
                      {feature.icon}
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-[#253994] mb-3"> {/* Font lebih besar dan bold */}
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-700 mb-5 leading-relaxed">{feature.description}</p> {/* Line height lebih baik */}
                  </div>
                  <div className="relative z-10 mt-auto">
                    <span className="inline-block text-base font-semibold text-[#253994] bg-blue-100 px-4 py-2 rounded-full shadow-sm"> {/* Padding lebih besar, shadow kecil */}
                      {feature.stats}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SECTION: TESTIMONIAL */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 1.0 },
            },
          }}
          className="pt-10" // Tambahkan padding top untuk jarak dari section sebelumnya
        >
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#253994] text-center mb-10 drop-shadow-sm">
            Apa Kata Klien Kami?
          </h3>
          <TestimonialCarousel testimonials={testimonials} />
        </motion.div> */}

        {/* SECTION: MARQUEE CLIENT */}
        <div className="py-1"> {/* Padding lebih besar */}
          <Marquee gradient={false} speed={45}>
            <img src={Ban1} alt="Client Logo" className="h-65 sm:h-65 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" />
            <img src={Ban2} alt="Client Logo" className="h-65 sm:h-65 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" />
            </Marquee>
            <Marquee gradient={false} speed={45}> {/* Matikan gradient dan atur kecepatan */}
            <img src={Ban3} alt="Client Logo" className="h-65 sm:h-65 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" />
            <img src={Ban4} alt="Client Logo" className="h-65 sm:h-65 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" />
            <img src={Ban5} alt="Client Logo" className="h-65 sm:h-65 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" />
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;