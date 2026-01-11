export interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: number;
  featured: boolean;
  image: string;
}

export interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  icon: string;
  details: string[];
  process: string[];
  benefits: string[];
  cost: string;
  timeline: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  rating: number;
  avatar?: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "5 Langkah Persiapan Awal Sebelum Mengajukan Perceraian",
    slug: "5-langkah-persiapan-perceraian",
    excerpt: "Memahami langkah-langkah penting sebelum memulai proses perceraian dapat membantu Anda merasa lebih siap dan percaya diri.",
    content: `Perceraian adalah keputusan besar yang memerlukan persiapan yang matang. Berikut adalah lima langkah penting untuk mempersiapkan diri sebelum mengajukan perceraian:

1. Konsultasi dengan Pengacara
Langkah pertama yang sangat penting adalah berkonsultasi dengan pengacara berpengalaman di bidang hukum perceraian. Pengacara akan membantu Anda memahami hak-hak Anda dan proses yang akan datang.

2. Kumpulkan Dokumen Penting
Pastikan Anda memiliki semua dokumen penting termasuk sertifikat pernikahan, akta kelahiran anak-anak, dokumen properti, rekening bank, dan dokumen asuransi.

3. Pahami Hak-Hak Anda
Ketahui apa yang berhak Anda dapatkan dalam proses perceraian, termasuk harta gono-gini, hak asuh anak, dan tunjangan.

4. Atur Keuangan Anda
Persiapkan rencana keuangan pribadi Anda untuk setelah perceraian, termasuk kebutuhan hidup dan pembayaran untuk pengacara.

5. Siapkan Diri Secara Emosional
Perceraian adalah proses yang emosional. Pertimbangkan untuk mencari dukungan dari terapis atau kelompok pendukung untuk membantu Anda melalui proses ini.`,
    category: "Tips & Panduan",
    author: "Tim Solusi Icerai",
    date: "2026-01-10",
    readTime: 5,
    featured: true,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
  {
    id: 2,
    title: "Memahami Harta Gono-Gini dalam Hukum Perceraian Indonesia",
    slug: "harta-gono-gini-perceraian",
    excerpt: "Pelajari apa itu harta gono-gini dan bagaimana cara membaginya secara adil dalam proses perceraian.",
    content: `Harta gono-gini adalah aset bersama yang diakumulasi selama pernikahan. Pemahaman tentang harta gono-gini sangat penting dalam proses perceraian.

Definisi Harta Gono-Gini
Harta gono-gini adalah semua harta benda yang diperoleh selama pernikahan berlangsung, baik yang diperoleh oleh satu pihak maupun kedua belah pihak.

Apa yang Termasuk Harta Gono-Gini
- Rumah dan properti yang dibeli selama pernikahan
- Kendaraan
- Rekening bank dan tabungan
- Investasi dan saham
- Harta dari bisnis bersama

Proses Pembagian
Pembagian harta gono-gini harus dilakukan secara adil dan transparan. Pihak ketiga seperti penilai profesional mungkin diperlukan untuk menentukan nilai aset yang kompleks.

Faktor yang Mempengaruhi Pembagian
- Kontribusi masing-masing pihak
- Kebutuhan masing-masing pihak
- Kesepakatan bersama
- Keputusan pengadilan (jika diperlukan)`,
    category: "Harta Gono-Gini",
    author: "Tim Solusi Icerai",
    date: "2026-01-08",
    readTime: 7,
    featured: true,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
  {
    id: 3,
    title: "Mediasi vs Litigasi: Mana yang Lebih Baik untuk Anda?",
    slug: "mediasi-vs-litigasi",
    excerpt: "Bandingkan dua pendekatan utama dalam penyelesaian perceraian dan temukan mana yang paling sesuai untuk situasi Anda.",
    content: `Ketika menghadapi perceraian, Anda memiliki dua jalur utama: mediasi atau litigasi. Mari kita bandingkan kedua pendekatan ini.

Apa itu Mediasi?
Mediasi adalah proses di mana pihak ketiga yang netral membantu kedua belah pihak mencapai kesepakatan tentang masalah perceraian.

Keuntungan Mediasi:
- Lebih cepat (2-4 bulan)
- Lebih murah
- Lebih privat
- Mempertahankan hubungan baik
- Lebih fleksibel

Apa itu Litigasi?
Litigasi adalah proses hukum formal di mana kasus dibawa ke pengadilan dan hakim membuat keputusan.

Keuntungan Litigasi:
- Perlindungan hukum yang kuat
- Keputusan yang mengikat secara hukum
- Cocok untuk kasus kompleks
- Melindungi hak-hak Anda jika pasangan tidak kooperatif

Perbandingan Biaya
- Mediasi: Rp 5-15 juta
- Litigasi: Rp 20-50+ juta

Kapan Memilih Mediasi:
- Kedua belah pihak bersedia berkompromi
- Hubungan yang relatif baik
- Keinginan untuk proses yang cepat dan privat

Kapan Memilih Litigasi:
- Ketidaksepakatan yang signifikan
- Keperluan perlindungan hukum yang kuat
- Kasus yang sangat kompleks`,
    category: "Mediasi & Negosiasi",
    author: "Tim Solusi Icerai",
    date: "2026-01-05",
    readTime: 8,
    featured: false,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
];

export const services: Service[] = [
  {
    id: 1,
    title: "Konsultasi Hukum Perceraian",
    slug: "konsultasi-hukum",
    description: "Konsultasi mendalam dengan pengacara berpengalaman tentang hak-hak dan opsi Anda.",
    icon: "📋",
    details: [
      "Penilaian kasus secara menyeluruh",
      "Penjelasan hak dan kewajiban Anda",
      "Strategi hukum yang disesuaikan",
      "Estimasi biaya yang jelas",
    ],
    process: [
      "Jadwalkan konsultasi",
      "Persiapkan dokumen penting",
      "Konsultasi dengan pengacara",
      "Terima rekomendasi strategi",
    ],
    benefits: [
      "Pemahaman yang jelas tentang proses",
      "Keputusan yang tepat dan berdasarkan informasi",
      "Perlindungan hak-hak Anda",
      "Perencanaan yang lebih baik",
    ],
    cost: "Rp 500,000 - Rp 2,000,000 per sesi",
    timeline: "1-2 jam",
  },
  {
    id: 2,
    title: "Mediasi Perceraian",
    slug: "mediasi-perceraian",
    description: "Proses penyelesaian yang damai dengan bantuan mediator netral.",
    icon: "🤝",
    details: [
      "Fasilitasi diskusi produktif",
      "Negosiasi dengan pihak lain",
      "Penyusunan perjanjian",
      "Dukungan hukum penuh",
    ],
    process: [
      "Penilaian awal",
      "Sesi mediasi terpisah",
      "Sesi mediasi bersama",
      "Penyusunan kesepakatan",
      "Persetujuan pengadilan",
    ],
    benefits: [
      "Penyelesaian lebih cepat",
      "Biaya yang lebih rendah",
      "Solusi yang adil untuk kedua belah pihak",
      "Privasi terjaga",
      "Hubungan yang lebih baik ke depannya",
    ],
    cost: "Rp 5,000,000 - Rp 15,000,000",
    timeline: "2-4 bulan",
  },
  {
    id: 3,
    title: "Litigasi Perceraian",
    slug: "litigasi-perceraian",
    description: "Representasi legal penuh di pengadilan untuk perlindungan maksimal hak-hak Anda.",
    icon: "⚖️",
    details: [
      "Persiapan dokumen pengadilan",
      "Representasi di pengadilan",
      "Penyelidikan dan pengumpulan bukti",
      "Negosiasi dengan pihak lain",
    ],
    process: [
      "Pengajuan gugatan",
      "Penyampaian dokumen",
      "Sidang awal",
      "Pertukaran bukti",
      "Sidang meritum",
      "Putusan pengadilan",
    ],
    benefits: [
      "Perlindungan hukum yang kuat",
      "Keputusan yang mengikat hukum",
      "Representasi profesional penuh",
      "Perlindungan aset maksimal",
    ],
    cost: "Rp 20,000,000 - Rp 50,000,000+",
    timeline: "1-3 tahun",
  },
  {
    id: 4,
    title: "Penyelesaian Harta Gono-Gini",
    slug: "penyelesaian-aset",
    description: "Spesialisasi dalam pembagian aset yang adil dan komprehensif.",
    icon: "💼",
    details: [
      "Analisis finansial menyeluruh",
      "Penentuan nilai aset",
      "Negosiasi pembagian",
      "Penyusunan dokumen aset",
    ],
    process: [
      "Pendaftaran semua aset",
      "Penilaian profesional",
      "Kalkulasi pembagian",
      "Negosiasi dan kesepakatan",
      "Finalisasi dokumen",
    ],
    benefits: [
      "Pembagian yang adil",
      "Perlindungan dari penipuan aset",
      "Pengurangan konflik",
      "Solusi tax-efficient",
    ],
    cost: "Rp 3,000,000 - Rp 10,000,000",
    timeline: "1-6 bulan",
  },
  {
    id: 5,
    title: "Hak Asuh Anak dan Penetapan Hak Akses",
    slug: "hak-asuh-anak",
    description: "Memastikan kesejahteraan anak dengan pengaturan hak asuh yang terbaik.",
    icon: "👨‍👩‍👧‍👦",
    details: [
      "Penilaian kebutuhan anak",
      "Negosiasi pengaturan hak asuh",
      "Penetapan jadwal kunjungan",
      "Perhitungan tunjangan anak",
    ],
    process: [
      "Evaluasi situasi keluarga",
      "Pertemuan dengan kedua orang tua",
      "Penilaian kebutuhan anak",
      "Penyusunan rencana hak asuh",
      "Persetujuan pengadilan",
    ],
    benefits: [
      "Kepastian pengaturan untuk anak",
      "Stabilitas dan keamanan anak",
      "Komunikasi yang jelas",
      "Perlindungan kepentingan anak",
    ],
    cost: "Rp 2,000,000 - Rp 8,000,000",
    timeline: "1-6 bulan",
  },
  {
    id: 6,
    title: "Perlindungan dari Kekerasan Dalam Rumah Tangga",
    slug: "perlindungan-kekerasan",
    description: "Layanan khusus untuk kasus kekerasan dengan respons cepat 24/7.",
    icon: "🛡️",
    details: [
      "Penilaian risiko keamanan",
      "Permohonan perlindungan darurat",
      "Representasi hukum penuh",
      "Dukungan pasca-perlindungan",
    ],
    process: [
      "Konsultasi darurat",
      "Pengajuan permohonan perlindungan",
      "Sidang mendesak",
      "Penerbitan perintah perlindungan",
      "Monitoring kepatuhan",
    ],
    benefits: [
      "Perlindungan hukum segera",
      "Keamanan fisik terjamin",
      "Dukungan holistik",
      "Koneksi dengan layanan bantuan",
    ],
    cost: "Gratis hingga Rp 2,000,000 (bantuan tersedia)",
    timeline: "Segera (24-48 jam)",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Tim Solusi Icerai sangat profesional dan memahami situasi kami dengan baik. Mereka memberikan solusi yang adil dan proses yang lancar.",
    author: "Ibu Siti R.",
    role: "Jakarta",
    rating: 5,
  },
  {
    id: 2,
    quote: "Proses mediasi yang mereka fasilitasi membantu kami mencapai kesepakatan tanpa harus ke pengadilan. Sangat merekomendasikan!",
    author: "Bapak Ahmad P.",
    role: "Surabaya",
    rating: 5,
  },
  {
    id: 3,
    quote: "Pengacara kami sangat detail dalam menangani kasus yang kompleks. Hasilnya melebihi ekspektasi kami.",
    author: "Ibu Dewi K.",
    role: "Bandung",
    rating: 5,
  },
  {
    id: 4,
    quote: "Mereka memahami kebutuhan emosional saya selama proses perceraian. Tidak hanya profesional, tapi juga empati.",
    author: "Bapak Rudi S.",
    role: "Jakarta",
    rating: 5,
  },
  {
    id: 5,
    quote: "Biaya transparan, proses jelas, dan hasil yang memuaskan. Tim yang sangat bertanggung jawab.",
    author: "Ibu Maya L.",
    role: "Yogyakarta",
    rating: 5,
  },
];

export const caseStudies = [
  {
    id: 1,
    title: "Penyelesaian Harta Gono-Gini Kompleks",
    situation: "Klien dengan pernikahan 20+ tahun memiliki aset bisnis dan properti yang kompleks.",
    approach: "Analisis mendalam terhadap nilai aset, negosiasi langsung, dan mediasi.",
    result: "Penyelesaian adil dalam 6 bulan dengan klien menerima 45% dari total aset.",
    duration: "6 bulan",
    outcome: "Sangat Memuaskan",
  },
  {
    id: 2,
    title: "Kasus Hak Asuh Anak yang Sensitif",
    situation: "Kedua orang tua memiliki pandangan berbeda tentang pendidikan dan kesejahteraan anak.",
    approach: "Evaluasi menyeluruh kebutuhan anak, sesi mediasi bersama, penyusunan rencana co-parenting.",
    result: "Pengaturan hak asuh yang fleksibel dengan jadwal yang menguntungkan kedua belah pihak.",
    duration: "3 bulan",
    outcome: "Sangat Memuaskan",
  },
  {
    id: 3,
    title: "Litigasi Perceraian Bersengketa",
    situation: "Kasus yang sangat bersengketa dengan banyak ketidaksepakatan tentang aset dan hak asuh.",
    approach: "Strategi litigasi komprehensif, pengumpulan bukti yang solid, representasi di pengadilan.",
    result: "Putusan pengadilan yang menguntungkan klien dengan perlindungan maksimal.",
    duration: "2 tahun",
    outcome: "Menguntungkan",
  },
  {
    id: 4,
    title: "Mediasi Perceraian Tanpa Perselisihan",
    situation: "Pasangan yang sudah sepakat untuk bercerai tapi perlu bantuan dalam pengurusan prosedur.",
    approach: "Konsultasi, mediasi untuk finalisasi detail, persiapan dokumen pengadilan.",
    result: "Perceraian selesai dengan mulus dalam 2 bulan tanpa konflik.",
    duration: "2 bulan",
    outcome: "Sangat Memuaskan",
  },
];
