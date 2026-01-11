import { useNavigate } from 'react-router-dom';
import Hero from '../components/common/Hero';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import { services } from '../constants/mockData';

export default function ServicesPage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero
        variant="small"
        title="Layanan Kami"
        subtitle="Solusi Hukum Perceraian Komprehensif"
        description="Berbagai layanan untuk memenuhi setiap kebutuhan hukum perceraian Anda"
      />

      {/* Services Section */}
      <section className="section-padding bg-white">
        <Container>
          {services.map((service, index) => (
            <Card
              key={service.id}
              variant={index % 2 === 0 ? 'elevated' : 'default'}
              className="mb-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-6xl flex items-center justify-center">
                  {service.icon}
                </div>
                <div className="md:col-span-2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-bold text-solusi-blue-900 mb-3">Apa yang Termasuk:</h4>
                      <ul className="space-y-2">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700">
                            <span className="text-solusi-blue-600 font-bold mt-1">✓</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-solusi-blue-900 mb-3">Proses:</h4>
                      <ol className="space-y-2">
                        {service.process.map((step, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700">
                            <span className="text-solusi-blue-600 font-bold">{idx + 1}.</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg mb-8">
                    <h4 className="font-bold text-solusi-blue-900 mb-3">Manfaat Utama:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-success font-bold">◆</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">Estimasi Biaya</p>
                      <p className="text-lg font-bold text-solusi-blue-900">{service.cost}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">Timeline</p>
                      <p className="text-lg font-bold text-solusi-blue-900">{service.timeline}</p>
                    </div>
                  </div>

                  <Button
                    onClick={() => navigate('/contact')}
                    variant="primary"
                  >
                    Hubungi untuk Konsultasi
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </Container>
      </section>

      {/* Comparison Section */}
      <section className="section-padding bg-gray-50">
        <Container>
          <SectionTitle
            title="Perbandingan Layanan"
            subtitle="Pilih layanan yang paling sesuai untuk kebutuhan Anda"
          />
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-solusi-blue-900 text-white">
                  <th className="p-4 text-left font-bold">Fitur</th>
                  <th className="p-4 text-center font-bold">Konsultasi</th>
                  <th className="p-4 text-center font-bold">Mediasi</th>
                  <th className="p-4 text-center font-bold">Litigasi</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="p-4 font-semibold">Biaya</td>
                  <td className="p-4 text-center">Rendah</td>
                  <td className="p-4 text-center">Sedang</td>
                  <td className="p-4 text-center">Tinggi</td>
                </tr>
                <tr className="border-b border-gray-300 bg-white">
                  <td className="p-4 font-semibold">Timeline</td>
                  <td className="p-4 text-center">1 bulan</td>
                  <td className="p-4 text-center">2-4 bulan</td>
                  <td className="p-4 text-center">1-3 tahun</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="p-4 font-semibold">Tingkat Konflik</td>
                  <td className="p-4 text-center">Minimal</td>
                  <td className="p-4 text-center">Sedang</td>
                  <td className="p-4 text-center">Tinggi</td>
                </tr>
                <tr className="border-b border-gray-300 bg-white">
                  <td className="p-4 font-semibold">Privasi</td>
                  <td className="p-4 text-center">Tinggi</td>
                  <td className="p-4 text-center">Tinggi</td>
                  <td className="p-4 text-center">Rendah</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Tingkat Keberhasilan</td>
                  <td className="p-4 text-center">100%</td>
                  <td className="p-4 text-center">85%</td>
                  <td className="p-4 text-center">Bervariasi</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <Container>
          <SectionTitle
            title="Pertanyaan yang Sering Diajukan"
            subtitle="Dapatkan jawaban atas pertanyaan umum tentang layanan kami"
          />
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'Berapa biaya untuk konsultasi awal?',
                a: 'Konsultasi awal adalah gratis untuk kasus sederhana. Untuk kasus yang lebih kompleks, kami menawarkan biaya yang kompetitif dan transparan.',
              },
              {
                q: 'Apakah Anda menawarkan layanan konsultasi online?',
                a: 'Ya, kami menawarkan konsultasi via video call, telepon, atau meeting langsung di kantor kami.',
              },
              {
                q: 'Bagaimana jika saya tidak punya uang untuk membayar sekarang?',
                a: 'Kami menawarkan paket pembayaran yang fleksibel dan mungkin ada opsi pembiayaan yang tersedia. Hubungi kami untuk mendiskusikan pilihan Anda.',
              },
              {
                q: 'Apakah konsultasi saya dijamin rahasia?',
                a: 'Ya, semua komunikasi dengan kami dilindungi oleh kerahasiaan advokat-klien dan privasi data Anda adalah prioritas kami.',
              },
            ].map((faq, idx) => (
              <Card key={idx}>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">{faq.q}</h4>
                <p className="text-gray-700 leading-relaxed">{faq.a}</p>
              </Card>
            ))}
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
            Hubungi kami hari ini untuk konsultasi gratis dan pelajari layanan mana yang paling cocok untuk Anda.
          </p>
          <Button
            onClick={() => navigate('/contact')}
            className="bg-white text-solusi-blue-900 hover:bg-gray-100"
            size="lg"
          >
            Hubungi Kami Sekarang
          </Button>
        </Container>
      </section>
    </main>
  );
}
