import {
  Building2,
  FileCheck2,
  BadgeCheck,
  ShieldCheck,
  BookMarked,
  ScrollText,
  Banknote,
  FileBarChart2,
} from "lucide-react";

export const layananData = [
  {
    title: "Pendirian Badan Usaha",
    slug: "pendirian-badan-usaha",
    icon: Building2,
    description:
      "Layanan untuk membantu pendirian berbagai bentuk badan usaha seperti CV, PT, Firma, dan lainnya secara legal dan sesuai peraturan perundang-undangan.",
    items: [
      "Akta Notaris: Dokumen resmi pendirian badan usaha yang disahkan oleh notaris.",
      "SK Kemenkumham: Surat Keputusan pengesahan dari Kementerian Hukum dan HAM.",
      "NPWP Badan: Nomor Pokok Wajib Pajak untuk entitas bisnis.",
      "NIB & Sertifikat OSS: Nomor Induk Berusaha dan dokumen perizinan melalui sistem OSS.",
      "Konsultasi Nama & Struktur Kepemilikan: Bantuan dalam pemilihan nama dan susunan pemilik saham.",
    ],
  },
  {
    title: "Sertifikasi SKK Konstruksi",
    slug: "sertifikasi-skk-konstruksi",
    icon: FileCheck2,
    description:
      "Sertifikasi Kompetensi Kerja (SKK) Konstruksi adalah pengakuan terhadap tenaga ahli dan terampil dalam bidang konstruksi berdasarkan standar kompetensi kerja nasional.",
    items: [
      "Pendampingan semua jenjang: Mulai dari SKK level dasar hingga madya dan utama.",
      "Konsultasi klasifikasi & subklasifikasi: Penyesuaian sertifikasi sesuai bidang keahlian.",
      "Registrasi via LPJK/BNSP: Proses pengajuan melalui Lembaga resmi pemerintah.",
    ],
  },
  {
    title: "Sertifikasi SBU Konstruksi",
    slug: "sertifikasi-sbu-konstruksi",
    icon: BadgeCheck,
    description:
      "Sertifikat Badan Usaha (SBU) Konstruksi adalah syarat wajib untuk perusahaan agar dapat mengikuti proyek pemerintah maupun swasta di bidang konstruksi.",
    items: [
      "Pengajuan via LPJK / OSS: Proses pendaftaran resmi badan usaha konstruksi.",
      "Konsultasi bidang dan kualifikasi: Penentuan bidang pekerjaan dan kualifikasi SBU.",
      "Validasi hingga sertifikat terbit: Pendampingan hingga dokumen resmi dikeluarkan.",
    ],
  },
  {
    title: "Sertifikasi Serkom / SKKTK",
    slug: "sertifikasi-serkom-skktk",
    icon: ShieldCheck,
    description:
      "Sertifikasi Kompetensi (Serkom) atau SKKTK (Surat Keterangan Kompetensi Tenaga Kerja) adalah bukti kemampuan individu di bidang kelistrikan yang dikeluarkan DJK ESDM.",
    items: [
      "Sertifikasi individu: Untuk teknisi/tenaga kerja perorangan.",
      "Pelatihan & uji kompetensi: Persiapan dan pelaksanaan ujian kompetensi.",
      "Pendaftaran via DJK ESDM: Dilakukan sesuai regulasi Direktorat Jenderal Ketenagalistrikan.",
    ],
  },
  {
    title: "Sertifikasi SBU JPTL",
    slug: "sertifikasi-sbu-jptl",
    icon: ScrollText,
    description:
      "Sertifikasi Badan Usaha Jasa Penunjang Tenaga Listrik (JPTL) adalah legalitas yang dibutuhkan perusahaan untuk menjalankan usaha di sektor ketenagalistrikan.",
    items: [
      "Legalitas PJT, PJL, PJK, dll: Legalitas untuk Penyalur Tenaga, Jasa Konsultan, dll.",
      "Konsultasi klasifikasi usaha: Penyesuaian bidang usaha dengan regulasi.",
      "Pendampingan sertifikasi: Proses dari awal hingga penerbitan sertifikat.",
    ],
  },
  {
    title: "Sertifikasi ISO",
    slug: "sertifikasi-iso",
    icon: BookMarked,
    description:
      "Sertifikasi ISO adalah pengakuan internasional terhadap sistem manajemen perusahaan yang memenuhi standar mutu, lingkungan, dan keselamatan kerja.",
    items: [
      "ISO 9001, 14001, 45001: Mutu (9001), Lingkungan (14001), Kesehatan & Keselamatan Kerja (45001).",
      "Audit internal & eksternal: Proses evaluasi sistem manajemen sebelum sertifikasi.",
      "Sertifikasi lembaga resmi: Dikeluarkan oleh lembaga bersertifikasi internasional.",
    ],
  },
  {
    title: "Audit & Laporan Keuangan",
    slug: "audit-laporan-keuangan",
    icon: FileBarChart2,
    description:
      "Layanan audit dan penyusunan laporan keuangan sesuai standar PSAK untuk keperluan pajak, tender, atau legalitas perusahaan.",
    items: [
      "Audit tahunan PSAK: Pemeriksaan laporan keuangan sesuai standar akuntansi Indonesia.",
      "Laporan tender / izin: Disiapkan untuk memenuhi syarat lelang atau perizinan.",
      "Dikerjakan KAP resmi: Ditangani oleh Kantor Akuntan Publik terdaftar.",
    ],
  },
  {
    title: "Pengurusan NPWP, OSS & NIB",
    slug: "pengurusan-npwp-oss-nib",
    icon: Banknote,
    description:
      "Layanan legalitas yang mencakup pendaftaran NPWP, NIB, dan perizinan usaha melalui sistem Online Single Submission (OSS).",
    items: [
      "NPWP Badan / Perorangan: Pembuatan nomor pajak untuk entitas bisnis atau individu.",
      "NIB & Izin Usaha OSS-RBA: Nomor Induk Berusaha dan izin usaha berbasis risiko.",
      "Sertifikat Standar & Update Data: Persyaratan tambahan dan perubahan data OSS.",
    ],
  },
  {
    title: "Konsultasi & Pajak UMKM",
    slug: "konsultasi-pajak-umkm",
    icon: Banknote,
    description:
      "Layanan yang ditujukan untuk pelaku UMKM dalam hal perpajakan, dari registrasi hingga pelaporan dan penyelesaian pajak.",
    items: [
      "Registrasi NPWP & EFIN: Untuk keperluan pelaporan pajak online.",
      "Pelaporan SPT PPh 21/23/PPN: Penyusunan dan pelaporan Surat Pemberitahuan Tahunan/Masa.",
      "Pemutihan & e-Bupot: Bantuan dalam menyelesaikan tunggakan dan penerbitan bukti potong elektronik.",
    ],
  },
];

export default layananData;
