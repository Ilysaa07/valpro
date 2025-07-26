import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Instagram,
  Facebook,
  Music2,
  Smartphone,
  Car,
} from "lucide-react";
import { Toaster, toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";

export default function Kontak() {
  const formRef = useRef();
  const [form, setForm] = useState({
    nama: "",
    email: "",
    nomorHp: "",
    pesan: "",
  });
  const [loading, setLoading] = useState(false);

  // Mengelola perubahan input form
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Fungsi untuk memvalidasi input form
  const validateForm = () => {
    if (!form.nama || !form.email || !form.nomorHp || !form.pesan) {
      toast.error("Semua bidang wajib diisi.");
      return false;
    }

    // Validasi format email menggunakan regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error("Format email tidak valid.");
      return false;
    }

    // Validasi nomor HP (minimal 10 digit, maksimal 15 digit)
    const phoneRegex = /^[0-9]{10,15}$/;
    const cleanPhone = form.nomorHp.replace(/[^0-9]/g, ""); // Hapus karakter non-digit
    if (!phoneRegex.test(cleanPhone)) {
      toast.error("Nomor HP harus berisi 10-15 digit angka.");
      return false;
    }

    return true;
  };

  // Fungsi untuk memformat nomor telepon ke format internasional (62)
  const formatPhoneNumber = (phone) => {
    let cleanPhone = phone.replace(/[^0-9]/g, ""); // Hapus semua karakter non-digit

    if (cleanPhone.startsWith("0")) {
      cleanPhone = "62" + cleanPhone.substring(1); // Ganti 0 dengan 62
    } else if (!cleanPhone.startsWith("62")) {
      cleanPhone = "62" + cleanPhone; // Tambahkan 62 jika tidak dimulai dengan 62
    }

    return cleanPhone;
  };

  // Mengirim pesan via WhatsApp
  const handleWhatsApp = () => {
    if (!validateForm()) return; // Validasi form sebelum mengirim

    const nomorTujuan = "6281399710085"; // Nomor WhatsApp tujuan
    // const nomorPengirim = formatPhoneNumber(form.nomorHp); // Ini tidak digunakan langsung di URL WhatsApp, tapi bisa untuk logging

    // Pesan yang akan dikirim ke WhatsApp
    const pesan = `Halo, saya ${form.nama}
📧 Email: ${form.email}
📱 No. HP: ${form.nomorHp}

💬 Pesan:
${form.pesan}

Terima kasih!`;

    // Buat URL WhatsApp dengan pesan yang di-encode
    const url = `https://wa.me/${nomorTujuan}?text=${encodeURIComponent(
      pesan
    )}`;
    window.open(url, "_blank"); // Buka tab baru dengan WhatsApp

    setForm({ nama: "", email: "", nomorHp: "", pesan: "" }); // Reset form
    toast.success("Pesan WhatsApp berhasil disiapkan!"); // Notifikasi sukses
  };

  // Mengirim pesan via EmailJS
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Validasi form sebelum mengirim
    setLoading(true); // Atur loading ke true

    // SIAPKAN DATA UNTUK EMAILJS SESUAI DENGAN PLACEHOLDER DI TEMPLATE
    // Perhatikan bahwa nama properti di sini (nama, email, nomorHp, pesan)
    // harus sama persis dengan {{nama}}, {{email}}, {{nomorHp}}, {{pesan}} di template EmailJS Anda.
    const templateParams = {
      nama: form.nama,
      email: form.email,
      nomorHp: form.nomorHp,
      pesan: form.pesan,
      // 'to_name' tidak ada di template yang Anda tunjukkan, jadi bisa dihapus
      // atau dibiarkan jika Anda menggunakannya di konfigurasi EmailJS lainnya.
      // to_name: "Valpro Intertech",
    };

    // Kirim email menggunakan EmailJS
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Service ID dari .env
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Template ID dari .env
        templateParams, // Data form yang sudah disesuaikan
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Public Key dari .env
      )
      .then(() => {
        toast.success("Pesan berhasil dikirim via Email!"); // Notifikasi sukses
        setForm({ nama: "", email: "", nomorHp: "", pesan: "" }); // Reset form
      })
      .catch((error) => {
        console.error("EmailJS Error:", error); // Log error ke konsol
        toast.error("Gagal mengirim pesan. Silakan coba lagi."); // Notifikasi error
      })
      .finally(() => setLoading(false)); // Atur loading kembali ke false
  };

  return (
    <section
      id="kontak"
      className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 px-4 md:px-8 font-inter"
    >
      {/* Toaster untuk notifikasi */}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#363636",
            color: "#fff",
            borderRadius: "12px",
            padding: "16px",
            fontSize: "14px",
          },
        }}
      />

      {/* Header Bagian Kontak */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          Hubungi <span className="text-[#253994]">Kami</span>
        </h2>
        <p className="mt-4 text-gray-500 text-base max-w-xl mx-auto">
          Kami siap membantu Anda dengan segala kebutuhan legalitas dan
          sertifikasi bisnis. Silakan hubungi kami melalui form di bawah ini
          atau melalui kontak yang tersedia.
        </p>
      </motion.div>

      {/* Konten Utama (Info Kontak dan Form) */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Kolom Kiri: Informasi Kontak dan Sosial Media */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-4 space-y-6"
          >
            {/* Kartu Informasi Kontak */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                Informasi Kontak
              </h3>
              <div className="space-y-5">
                <ContactInfo
                  Icon={Phone}
                  label="Telepon"
                  value="+62 813-9971-0085"
                  iconColor="text-green-600"
                  bgColor="bg-green-50"
                />
                <ContactInfo
                  Icon={Mail}
                  label="Email"
                  value="mail@valprointertech.com"
                  iconColor="text-blue-600"
                  bgColor="bg-blue-50"
                />
                <ContactInfo
                  Icon={Clock}
                  label="Jam Operasional"
                  value="Senin–Jumat: 08.00–16.00 
                    Sabtu: 08.00–13.00
                    Minggu: Libur"
                  iconColor="text-orange-600"
                  bgColor="bg-orange-50"
                />
              </div>
            </div>

            {/* Google Maps Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className=""
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-7 shadow-xl border border-white/50">
                <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-red-600 to-pink-600 rounded-full"></div>
                  Lokasi Kami
                </h3>
                <div className="overflow-hidden rounded-xl shadow-lg">
                  <iframe
                    title="Lokasi Valpro Intertech"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.955062219461!2d107.53114337499728!3d-7.014567892986952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa3613d29fa909357%3A0xf02c45daf0efee5f!2sValpro%20Intertech!5e0!3m2!1sid!2sid!4v1752995732651!5m2!1sid!2sid"
                    width="100%"
                    height="400"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full border-0"
                  />
                </div>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <MapPin size={16} className="inline-block mr-1" />{" "}
                    <strong>Alamat:</strong> Jl. Raya Gading Tutuka No.175 B,
                    Soreang, Kab. Bandung
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    <Car size={16} className="inline-block mr-1" />{" "}
                    <strong>Akses:</strong> Mudah dijangkau dengan kendaraan
                    pribadi atau transportasi umum
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Kolom Kanan: Formulir Kirim Pesan */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-8"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-11 shadow-xl border border-white/50">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                Kirim Pesan
              </h3>

              <form
                ref={formRef}
                onSubmit={handleEmailSubmit}
                className="space-y-6"
              >
                {/* Baris 1: Nama dan Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="nama"
                      value={form.nama}
                      onChange={handleChange}
                      placeholder="Masukkan nama lengkap"
                      required
                      className="w-full border border-gray-200 px-4 py-3.5 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700 bg-gray-50/50 hover:bg-white focus:bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Alamat Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="contoh@email.com"
                      required
                      className="w-full border border-gray-200 px-4 py-3.5 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700 bg-gray-50/50 hover:bg-white focus:bg-white"
                    />
                  </div>
                </div>

                {/* Baris 2: Nomor HP */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Smartphone size={16} className="text-gray-500" />
                    Nomor HP/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="nomorHp"
                    value={form.nomorHp}
                    onChange={handleChange}
                    placeholder="08123456789 atau +6281234567890"
                    required
                    className="w-full border border-gray-200 px-4 py-3.5 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700 bg-gray-50/50 hover:bg-white focus:bg-white"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Format: 08xxxxxxxxx atau +62xxxxxxxxx (10-15 digit)
                  </p>
                </div>

                {/* Baris 3: Pesan */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Pesan Anda *
                  </label>
                  <textarea
                    name="pesan"
                    rows="6"
                    value={form.pesan}
                    onChange={handleChange}
                    placeholder="Tulis pesan atau pertanyaan Anda di sini..."
                    required
                    className="w-full border border-gray-200 px-4 py-3.5 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700 resize-none bg-gray-50/50 hover:bg-white focus:bg-white"
                  />
                </div>

                {/* Tombol Kirim */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 flex justify-center items-center gap-3 bg-[#253994] hover:from-blue-700 hover:to-indigo-700 disabled:from-blue-400 disabled:to-indigo-400 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={20} />
                        Kirim via Email
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="flex-1 flex justify-center items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
                  >
                    <MessageCircle size={20} />
                    Kirim via WhatsApp
                  </button>
                </div>

                <p className="text-xs text-gray-500 text-center mt-4">
                  * Semua field wajib diisi. Data Anda akan dijaga
                  kerahasiaannya.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Komponen Pembantu: Contact Info
function ContactInfo({
  Icon,
  label,
  value,
  iconColor = "text-blue-600",
  bgColor = "bg-blue-50",
}) {
  return (
    <div className="flex items-start gap-4 group">
      <div
        className={`flex-shrink-0 w-12 h-12 ${bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}
      >
        <Icon size={20} className={iconColor} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-gray-800 text-sm mb-1">{label}</p>
        <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
          {value}
        </p>
      </div>
    </div>
  );
}

// Komponen Pembantu: Social Link
function SocialLink({ href, Icon, className, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-600 transition-all duration-300 hover:bg-gray-100 transform hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-md ${className}`}
      title={label}
    >
      <Icon size={20} />
    </a>
  );
}
