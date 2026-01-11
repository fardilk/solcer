import { useState } from 'react';
import Hero from '../components/common/Hero';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Konsultasi Awal',
    message: '',
    caseType: 'Sederhana',
    urgent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: (e.target as HTMLInputElement).checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Konsultasi Awal',
        message: '',
        caseType: 'Sederhana',
        urgent: false,
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero
        variant="small"
        title="Hubungi Kami"
        subtitle="Kami Siap Membantu Anda"
      />

      {/* Quick Contact Info */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card>
              <div className="text-4xl mb-4">📞</div>
              <h3 className="font-bold text-gray-900 mb-2">Telepon</h3>
              <a href="tel:+622112345678" className="text-solusi-blue-600 hover:text-solusi-blue-900 font-semibold">
                +62 21 1234 5678
              </a>
              <p className="text-sm text-gray-600 mt-2">Senin-Jumat 9:00-17:00</p>
            </Card>

            <Card>
              <div className="text-4xl mb-4">📧</div>
              <h3 className="font-bold text-gray-900 mb-2">Email</h3>
              <a href="mailto:info@solusicerai.com" className="text-solusi-blue-600 hover:text-solusi-blue-900 font-semibold break-all">
                info@solusicerai.com
              </a>
              <p className="text-sm text-gray-600 mt-2">Respon dalam 24 jam</p>
            </Card>

            <Card>
              <div className="text-4xl mb-4">📍</div>
              <h3 className="font-bold text-gray-900 mb-2">Kantor Jakarta</h3>
              <p className="text-gray-700 text-sm">
                Jl. Sudirman No. 123<br/>
                Jakarta Pusat, 12190
              </p>
            </Card>

            <Card className="bg-red-50 border-red-200">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="font-bold text-red-900 mb-2">Darurat 24/7</h3>
              <a href="tel:+622187654321" className="text-red-600 hover:text-red-900 font-semibold">
                +62 21 8765 4321
              </a>
              <p className="text-sm text-red-700 mt-2">Respons cepat</p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <SectionTitle
                title="Kirim Pesan Anda"
                subtitle="Kami akan menghubungi Anda dalam 24 jam"
                align="left"
              />

              {submitted ? (
                <div className="bg-green-50 border-2 border-success p-6 rounded-lg text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-green-900 mb-2">Terima Kasih!</h3>
                  <p className="text-green-700 mb-4">
                    Kami telah menerima pesan Anda. Tim kami akan menghubungi Anda dalam 24 jam.
                  </p>
                  <p className="text-sm text-green-600">
                    Nomor referensi: REF-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-semibold text-gray-900 mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-solusi-blue-600"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-semibold text-gray-900 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-solusi-blue-600"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-gray-900 mb-2">
                        Nomor Telepon *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-solusi-blue-600"
                        placeholder="+62 21 XXXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-900 mb-2">
                      Topik *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-solusi-blue-600"
                    >
                      <option>Konsultasi Awal</option>
                      <option>Perceraian Tanpa Perselisihan</option>
                      <option>Perceraian Bersengketa</option>
                      <option>Mediasi</option>
                      <option>Hak Asuh Anak</option>
                      <option>Harta Gono-Gini</option>
                      <option>Kasus Darurat</option>
                      <option>Pertanyaan Lainnya</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-semibold text-gray-900 mb-2">
                        Kompleksitas Kasus
                      </label>
                      <select
                        name="caseType"
                        value={formData.caseType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-solusi-blue-600"
                      >
                        <option>Sederhana</option>
                        <option>Sedang</option>
                        <option>Kompleks</option>
                      </select>
                    </div>
                    <div className="flex items-end">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name="urgent"
                          checked={formData.urgent}
                          onChange={handleChange}
                          className="w-4 h-4 rounded"
                        />
                        <span className="font-semibold text-gray-900">Ini adalah kasus mendesak</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-900 mb-2">
                      Pesan *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-solusi-blue-600"
                      placeholder="Jelaskan situasi Anda dan pertanyaan yang Anda miliki..."
                    ></textarea>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg text-sm text-gray-700">
                    <p>
                      <strong>Privasi Anda penting bagi kami.</strong> Semua informasi yang Anda berikan dijaga ketat dan dilindungi oleh kerahasiaan advokat-klien.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                  >
                    Kirim Pesan
                  </Button>
                </form>
              )}
            </div>

            {/* Office & Hours */}
            <div>
              <SectionTitle
                title="Informasi Kantor"
                align="left"
              />

              <Card variant="elevated" className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Kantor Jakarta</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="font-semibold text-gray-900">Alamat</p>
                    <p className="text-gray-700">
                      Jl. Sudirman No. 123<br/>
                      Jakarta Pusat, 12190<br/>
                      Indonesia
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Jam Operasional</p>
                    <p className="text-gray-700">
                      Senin - Jumat: 09:00 - 17:00<br/>
                      Sabtu: Berdasarkan Janji Temu<br/>
                      Minggu: Tutup
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Kontak</p>
                    <p className="text-gray-700">
                      <a href="tel:+622112345678" className="text-solusi-blue-600 hover:text-solusi-blue-900">
                        +62 21 1234 5678
                      </a>
                      <br/>
                      <a href="mailto:info@solusicerai.com" className="text-solusi-blue-600 hover:text-solusi-blue-900">
                        info@solusicerai.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center text-gray-500">
                  [Peta Google akan ditampilkan di sini]
                </div>
              </Card>

              <Card variant="elevated" className="bg-red-50 border-red-200">
                <h3 className="text-xl font-bold text-red-900 mb-4">⚠️ Kasus Mendesak?</h3>
                <p className="text-red-800 mb-4">
                  Jika Anda menghadapi situasi darurat atau memerlukan bantuan segera, hubungi nomor darurat kami:
                </p>
                <a
                  href="tel:+622187654321"
                  className="inline-block px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition"
                >
                  📞 +62 21 8765 4321
                </a>
                <p className="text-sm text-red-700 mt-4">
                  Tersedia 24 jam sehari, 7 hari seminggu untuk kasus mendesak
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <Container>
          <SectionTitle
            title="Pertanyaan Tentang Menghubungi Kami"
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'Berapa lama waktu respons untuk pertanyaan saya?',
                a: 'Kami merespons dalam 24 jam untuk pertanyaan umum, dan 1 jam untuk kasus darurat. Tim kami bekerja Senin-Jumat pukul 9-17.',
              },
              {
                q: 'Apakah saya bisa berbicara dengan pengacara langsung?',
                a: 'Ya, setelah konsultasi awal, Anda akan ditugaskan dengan pengacara khusus yang akan menangani kasus Anda.',
              },
              {
                q: 'Bisakah saya berkonsultasi online?',
                a: 'Ya, kami menawarkan konsultasi via video call, telepon, atau pertemuan tatap muka di kantor kami.',
              },
            ].map((faq, idx) => (
              <Card key={idx}>
                <h4 className="font-bold text-gray-900 mb-2">{faq.q}</h4>
                <p className="text-gray-700">{faq.a}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
