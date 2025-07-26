import { Instagram, Facebook, Music2 } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import LogoNav from "../assets/footer.png";

export default function Footer() {
  return (
    <footer className="bg-[#0d1e60] text-white px-6 py-12 md:px-20 rounded-t-4xl">
      <div className="flex flex-col md:flex-row md:justify-between gap-10">
        {/* Left Side - Logo and Description */}
        <div className="md:w-1/2 space-y-4">
          <div className="">
            <img
            src={LogoNav}
            alt="Valpro Intertech Logo"
            className="h-10 w-auto object-contain"
          />
          </div>
          <p className="text-sm leading-relaxed text-gray-300 max-w-md">
            Kami hadir untuk membantu Anda memulai, memperkuat, dan menumbuhkan
            usaha dengan dasar hukum yang kuat dan terpercaya.
          </p>
          <div className="flex space-x-3 mt-2">
            <a
              href="https://www.instagram.com/valprointertech"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white rounded-full hover:bg-white hover:text-[#0d1e60] transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/valprointertech"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white rounded-full hover:bg-white hover:text-[#0d1e60] transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.tiktok.com/@valprointertech?_t=ZS-8yCxaatWN56&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white rounded-full hover:bg-white hover:text-[#0d1e60] transition"
            >
              <Music2 className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Side - Navigation */}
        <div className="md:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-6 text-sm text-gray-200">
          <div>
            <h4 className="font-semibold mb-2">Menu</h4>
            <ul className="space-y-1">
              <li>
                <HashLink smooth to="/" className="hover:text-white">
                  Beranda
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#profil" className="hover:text-white">
                  Profil
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#layanan" className="hover:text-white">
                  Layanan
                </HashLink>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Perusahaan</h4>
            <ul className="space-y-1">
              <li>
                <Link to="/portofolio" className="hover:text-white">
                  Portofolio
                </Link>
              </li>
              <li>
                <HashLink smooth to="/#kontak" className="hover:text-white">
                  Kontak
                </HashLink>
              </li>
              <li>
                <Link to="/karir" className="hover:text-white">
                  Karir
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Legal</h4>
            <ul className="space-y-1">
              <li>
                <Link to="/privacy" className="hover:text-white">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white">
                  Syarat & Ketentuan
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 border-t border-gray-700 pt-2 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>
          © {new Date().getFullYear()} Valpro Intertech. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link to="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>
          <span>•</span>
          <Link to="/terms" className="hover:text-white">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
