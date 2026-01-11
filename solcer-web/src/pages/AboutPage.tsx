import { useNavigate } from 'react-router-dom';
import Hero from '../components/common/Hero';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import { testimonials } from '../constants/mockData';

export default function AboutPage() {
  const navigate = useNavigate();

  const team = [
    {
      id: 1,
      name: 'Budi Santoso, S.H., LL.M.',
      role: 'Founder & Senior Partner',
      specialization: 'Litigasi Perceraian, Harta Gono-Gini',
      bio: 'Budi adalah pendiri Solusi Icerai dengan lebih dari 20 tahun pengalaman di bidang hukum keluarga. Beliau telah menangani ribuan kasus perceraian dan masalah hukum keluarga lainnya.',
    },
    {
      id: 2,
      name: 'Siti Nurhaliza, S.H.',
      role: 'Senior Attorney',
      specialization: 'Mediasi, Hak Asuh Anak',
      bio: 'Siti adalah mediator bersertifikat dengan spesialisasi dalam kasus hak asuh anak dan mediasi perceraian. Pendekatan empatisnya telah membantu banyak keluarga mencapai kesepakatan damai.',
    },
    {
      id: 3,
      name: 'Rinto Wijaya, S.H.',
      role: 'Attorney',
      specialization: 'Perlindungan Kekerasan Rumah Tangga',
      bio: 'Rinto memiliki keahlian khusus dalam menangani kasus kekerasan rumah tangga dan perlindungan hak-hak korban. Beliau berkomitmen untuk memberikan dukungan hukum yang cepat dan efektif.',
    },
  ];

  const values = [
    {
      title: 'Integritas',
      description: 'Kami beroperasi dengan kejujuran dan transparansi penuh dalam setiap aspek layanan kami.',
    },
    {
      title: 'Komitmen',
      description: 'Kami berkomitmen pada kesuksesan setiap klien dan memberikan dedikasi penuh untuk kasus Anda.',
    },
    {
      title: 'Keahlian',
      description: 'Kami memiliki pengetahuan mendalam tentang hukum perceraian dan hukum keluarga Indonesia.',
    },
    {
      title: 'Empati',
      description: 'Kami memahami tantangan emosional yang dihadapi klien dan memberikan dukungan yang penuh perhatian.',
    },
    {
      title: 'Inovasi',
      description: 'Kami terus meningkatkan dan mengembangkan layanan kami untuk memenuhi kebutuhan klien yang berkembang.',
    },
    {
      title: 'Aksesibilitas',
      description: 'Kami berkomitmen untuk membuat layanan hukum berkualitas tinggi dapat diakses oleh semua orang.',
    },
  ];

  const whyChooseUs = [
    {
      title: 'Pengalaman Mendalam',
      icon: '📚',
      description: 'Dengan lebih dari 15 tahun pengalaman dalam hukum perceraian, tim kami memahami nuansa dan kompleksitas setiap kasus. Kami telah menangani 5,000+ kasus dengan tingkat kepuasan klien 98%.',
    },
    {
      title: 'Tim Multidisiplin',
      icon: '👥',
      description: 'Kami memiliki pengacara spesialis di berbagai bidang: perceraian, harta gono-gini, hak asuh anak, dan permasalahan keluarga lainnya.',
    },
    {
      title: 'Pendekatan Holistik',
      icon: '🎯',
      description: 'Kami tidak hanya fokus pada aspek hukum, tetapi juga mempertimbangkan kesejahteraan emosional dan finansial klien.',
    },
    {
      title: 'Biaya Transparan',
      icon: '💰',
      description: 'Tidak ada biaya tersembunyi. Kami memberikan penawaran layanan yang jelas dan dapat diprediksi sejak awal.',
    },
    {
      title: 'Tersedia 24/7',
      icon: '⏰',
      description: 'Tim kami siap membantu klien kapan saja, terutama dalam situasi darurat yang memerlukan respons cepat.',
    },
    {
      title: 'Mediasi & Negosiasi',
      icon: '🤝',
      description: 'Kami mengedepankan solusi damai dan negosiasi sebelum proses litigasi untuk meminimalkan konflik.',
    },
  ];

  const statistics = [
    { number: '5000+', label: 'Klien yang Telah Kami Bantu' },
    { number: '15+', label: 'Tahun Melayani Keluarga Indonesia' },
    { number: '98%', label: 'Tingkat Kepuasan Klien' },
    { number: '6 bulan', label: 'Waktu Rata-rata Penyelesaian' },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero
        variant="small"
        title="Tentang Kami"
        subtitle="Firma Hukum Perceraian Terpercaya Indonesia"
      />

      {/* Story Section */}
      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              title="Sejarah Kami"
              align="center"
            />
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Solusi Icerai didirikan pada tahun 2009 dengan visi sederhana: memberikan representasi hukum berkualitas tinggi untuk individu yang menghadapi perceraian. Apa yang dimulai sebagai praktik satu pengacara telah berkembang menjadi firma dengan tim profesional yang berdedikasi.
              </p>
              <p>
                Pada 2015, kami membuka kantor kedua di Surabaya, memperluas jangkauan kami ke seluruh Jawa Timur. Pada 2020, kami meluncurkan program konsultasi online untuk menjangkau klien di seluruh Indonesia, memastikan bahwa layanan berkualitas tinggi dapat diakses di mana pun Anda berada.
              </p>
              <p>
                Hingga saat ini, kami telah membantu lebih dari 5,000 klien menavigasi proses perceraian mereka dengan sukses. Setiap kasus membentuk pengalaman dan keahlian kami, dan setiap klien adalah prioritas utama kami.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-blue-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card variant="elevated">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Misi Kami</h3>
              <p className="text-gray-700 leading-relaxed">
                Memberikan layanan hukum perceraian yang terjangkau, profesional, dan berorientasi pada klien, memastikan setiap individu memiliki akses ke representasi hukum berkualitas tinggi untuk melindungi hak-hak mereka.
              </p>
            </Card>
            <Card variant="elevated">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Visi Kami</h3>
              <p className="text-gray-700 leading-relaxed">
                Menjadi firma hukum pilihan pertama untuk perceraian dan hukum keluarga di Indonesia, dikenal karena keahlian mendalam, integritas moral, dan kepedulian autentik terhadap kesejahteraan klien kami.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <Container>
          <SectionTitle
            title="Nilai-Nilai Inti Kami"
            subtitle="Prinsip yang memandu setiap keputusan dan tindakan kami"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index}>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50">
        <Container>
          <SectionTitle
            title="Mengapa Memilih Kami?"
            subtitle="Keunggulan yang membedakan kami dari firma hukum lainnya"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} variant="elevated">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Statistics Section */}
      <section className="section-padding bg-blue-900 text-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {statistics.map((stat, index) => (
              <div key={index}>
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <Container>
          <SectionTitle
            title="Tim Kami"
            subtitle="Profesional berpengalaman yang siap membantu Anda"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.id} variant="elevated">
                <div className="w-full h-48 bg-blue-50 rounded-lg mb-4"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold text-sm mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 mb-3 font-medium">
                  Spesialisasi: {member.specialization}
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {member.bio}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <Container>
          <SectionTitle
            title="Testimoni Klien"
            subtitle="Cerita nyata dari klien yang telah kami bantu"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id}>
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-900 text-white">
        <Container as="section" className="text-center">
          <h2 className="text-4xl font-bold mb-6">
            Siap Bekerja Sama?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Hubungi kami hari ini untuk konsultasi gratis dan ketahui bagaimana kami dapat membantu Anda.
          </p>
          <Button
            onClick={() => navigate('/contact')}
            className="bg-white text-blue-900 hover:bg-gray-100"
            size="lg"
          >
            Hubungi Kami Sekarang
          </Button>
        </Container>
      </section>
    </main>
  );
}
