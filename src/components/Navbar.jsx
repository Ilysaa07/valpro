import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import LogoNav from "../assets/logonav.png";
import LazyImage from "./LazyImage";

const layananList = [
  { title: "Pendirian Badan Usaha", slug: "pendirian-badan-usaha" },
  { title: "Sertifikasi SKK Konstruksi", slug: "sertifikasi-skk-konstruksi" },
  { title: "Sertifikasi SBU Konstruksi", slug: "sertifikasi-sbu-konstruksi" },
  { title: "Sertifikasi Serkom / SKKTK", slug: "sertifikasi-serkom-skktk" },
  { title: "Sertifikasi SBU JPTL", slug: "sertifikasi-sbu-jptl" },
  { title: "Sertifikasi ISO", slug: "sertifikasi-iso" },
  { title: "Audit & Laporan Keuangan", slug: "audit-laporan-keuangan" },
  { title: "Pengurusan NPWP, OSS & NIB", slug: "pengurusan-npwp-oss-nib" },
  { title: "Konsultasi & Pajak UMKM", slug: "konsultasi-pajak-umkm" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLink =
    "text-gray-800 hover:text-[#253994] transition font-medium text-base";

  const buttonStyle =
    "bg-[#253994] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#0f4fe1] transition text-sm md:text-base";

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <LazyImage
              src={LogoNav}
              alt="Logo Valpro Intertech - Konsultan Legalitas dan Perizinan Usaha Bandung"
              className="h-12 sm:h-14 w-auto max-h-16 object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <HashLink smooth to="/#home" className={navLink}>
              Beranda
            </HashLink>

            <div
              className="relative group"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 hover:text-[#253994] transition text-base">
                Layanan
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-64 bg-white shadow-lg border border-gray-100 rounded-xl py-2 z-50"
                  >
                    {layananList.map((item) => (
                      <li key={item.slug}>
                        <Link
                          to={`/layanan/${item.slug}`}
                          className="block px-4 py-2 text-base text-gray-800 hover:p-5 hover:bg-blue-50 hover:text-[#253994] transition-all rounded-md"
                          onClick={() => setDropdownOpen(false)}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            <HashLink smooth to="/#profil" className={navLink}>
              Profil
            </HashLink>
            <a href="#kontak" className={buttonStyle}>
              Konsultasi Sekarang
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-t shadow-lg w-full px-4 pt-4 pb-6"
          >
            <div className="flex flex-col gap-3">
              <HashLink
                smooth
                to="/#home"
                className={navLink}
                onClick={() => setIsOpen(false)}
              >
                Home
              </HashLink>

              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer py-2 hover:text-[#253994] transition text-base">
                  <span>Layanan</span>
                  <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <ul className="pl-4 mt-2 space-y-2">
                  {layananList.map((item) => (
                    <li key={item.slug}>
                      <Link
                        to={`/layanan/${item.slug}`}
                        className="block py-2 px-4 text-base hover:text-[#253994] hover:bg-blue-100 rounded-md transition"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>

              <HashLink
                smooth
                to="#profil"
                className={navLink}
                onClick={() => setIsOpen(false)}
              >
                Profil
              </HashLink>
              <a
                href="#kontak"
                className="mt-2 bg-[#253994] text-white font-semibold py-2 rounded-md text-center hover:bg-[#0f4fe1] transition text-sm md:text-base"
                onClick={() => setIsOpen(false)}
              >
                Konsultasi
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
