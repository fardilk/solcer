import { useNavigate } from 'react-router-dom';
import Hero from '../components/common/Hero';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import { services, testimonials, articles, caseStudies } from '../constants/mockData';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Percayakan Masalah Perceraian Anda kepada Para Ahli"
        subtitle="SolusIcerai - Konsultan Hukum Perceraian"
        description="Konsultasi hukum profesional untuk proses perceraian yang lancar dan adil"
        cta={{
          label: 'Mulai Konsultasi Gratis',
          onClick: () => navigate('/contact'),
        }}
      />

      {/* About Preview Section */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Tentang Kami</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Solusi Icerai adalah firma hukum terkemuka yang berspesialisasi dalam layanan perceraian dan hukum keluarga di Indonesia. Dengan pengalaman lebih dari 15 tahun, kami telah membantu ribuan klien melalui proses perceraian mereka dengan profesionalisme dan kepedulian.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Kami percaya bahwa setiap klien layak mendapatkan representasi legal yang kuat dan solusi yang disesuaikan dengan situasi unik mereka.
              </p>
              <Button href="/about" variant="secondary">
                Pelajari Lebih Lanjut
              </Button>
            </div>
            <div className="bg-solusi-blue-50 rounded-lg h-96"></div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <Container>
          <SectionTitle
            title="Layanan Kami"
            subtitle="Solusi hukum perceraian komprehensif untuk memenuhi kebutuhan Anda"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <Card key={service.id} variant="elevated">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Button
                  href="/services"
                  variant="tertiary"
                  size="sm"
                >
                  Pelajari Lebih Lanjut
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <Container>
          <SectionTitle
            title="Testimoni Klien"
            subtitle="Dengarkan pengalaman klien kami yang telah kami bantu"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
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

      {/* Case Studies Section */}
      <section className="section-padding bg-gray-50">
        <Container>
          <SectionTitle
            title="Studi Kasus"
            subtitle="Contoh nyata kesuksesan kami dalam menangani berbagai jenis kasus"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.slice(0, 4).map((caseStudy, index) => (
              <Card key={caseStudy.id} variant="elevated">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {caseStudy.title}
                  </h3>
                  <span className="bg-solusi-blue-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Kasus {index + 1}
                  </span>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-solusi-blue-900">Situasi:</p>
                    <p className="text-gray-700">{caseStudy.situation}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-solusi-blue-900">Pendekatan:</p>
                    <p className="text-gray-700">{caseStudy.approach}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-solusi-blue-900">Hasil:</p>
                    <p className="text-gray-700">{caseStudy.result}</p>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 pt-4 border-t">
                    <span>⏱️ {caseStudy.duration}</span>
                    <span className="text-green-600 font-semibold">{caseStudy.outcome}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Articles Section */}
      <section className="section-padding bg-white">
        <Container>
          <SectionTitle
            title="Artikel & Panduan"
            subtitle="Pelajari lebih lanjut tentang hukum perceraian melalui artikel kami"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(0, 3).map((article) => (
              <Card
                key={article.id}
                variant="elevated"
                onClick={() => navigate(`/articles/${article.slug}`)}
                className="cursor-pointer"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <span className="inline-block px-3 py-1 bg-blue-100 text-solusi-blue-900 text-sm font-semibold rounded-full mb-3">
                  {article.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{article.date}</span>
                  <span>{article.readTime} min read</span>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button href="/articles" variant="secondary">
              Lihat Semua Artikel
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-solusi-blue-900 text-white">
        <Container as="section" className="text-center">
          <h2 className="text-4xl font-bold mb-6">
            Siap Memulai?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Hubungi kami hari ini untuk konsultasi gratis dan pelajari bagaimana kami dapat membantu Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate('/contact')}
              className="bg-white text-solusi-blue-900 hover:bg-gray-100"
              size="lg"
            >
              Hubungi Kami Sekarang
            </Button>
            <Button
              onClick={() => navigate('/services')}
              variant="tertiary"
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              Pelajari Layanan Kami
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
