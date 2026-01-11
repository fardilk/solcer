import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Hero from '../components/common/Hero';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import { articles } from '../constants/mockData';

export default function ArticlesPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Get unique categories
  const categories = Array.from(new Set(articles.map(a => a.category)));

  // Filter articles
  const filteredArticles = articles.filter(article => {
    const matchesCategory = !selectedCategory || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Find article detail
  const article = articles.find(a => a.slug === slug);

  // Article Detail View
  if (slug && article) {
    return (
      <main className="min-h-screen">
        {/* Hero with Image */}
        <section className="relative h-96 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <Container className="absolute bottom-0 left-0 right-0 flex flex-col justify-end h-full pb-8">
            <span className="inline-block w-fit px-3 py-1 bg-white text-solusi-blue-900 text-sm font-semibold rounded-full mb-4">
              {article.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {article.title}
            </h1>
            <div className="flex gap-6 text-white text-sm">
              <span>📅 {article.date}</span>
              <span>⏱️ {article.readTime} min read</span>
              <span>✍️ {article.author}</span>
            </div>
          </Container>
        </section>

        {/* Article Content */}
        <section className="section-padding bg-white">
          <Container>
            <div className="max-w-3xl mx-auto">
              <article className="prose prose-lg max-w-none">
                {article.content.split('\n\n').map((paragraph, idx) => {
                  if (paragraph.startsWith('1. ') || paragraph.startsWith('2. ') || paragraph.match(/^\d+\. /)) {
                    // Numbered list
                    const items = paragraph.split('\n').filter(line => line.trim());
                    return (
                      <ol key={idx} className="list-decimal list-inside space-y-3 my-6">
                        {items.map((item, i) => (
                          <li key={i} className="text-gray-700">
                            {item.replace(/^\d+\.\s*/, '')}
                          </li>
                        ))}
                      </ol>
                    );
                  }
                  if (paragraph.startsWith('- ')) {
                    // Bullet list
                    const items = paragraph.split('\n').filter(line => line.trim());
                    return (
                      <ul key={idx} className="list-disc list-inside space-y-3 my-6">
                        {items.map((item, i) => (
                          <li key={i} className="text-gray-700">
                            {item.replace(/^-\s*/, '')}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={idx} className="text-gray-700 leading-relaxed my-6">
                      {paragraph}
                    </p>
                  );
                })}
              </article>

              {/* Author Bio */}
              <Card variant="elevated" className="mt-12 bg-blue-50">
                <h3 className="font-bold text-gray-900 mb-2">Tentang Penulis</h3>
                <p className="text-gray-700">
                  <strong>{article.author}</strong> adalah tim ahli di Solusi Icerai yang berdedikasi untuk memberikan informasi hukum yang akurat dan berguna kepada klien dan pembaca kami.
                </p>
              </Card>

              {/* Related Articles */}
              <div className="mt-16">
                <SectionTitle
                  title="Artikel Terkait"
                  align="left"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {articles
                    .filter(a => a.id !== article.id && a.category === article.category)
                    .slice(0, 2)
                    .map(relatedArticle => (
                      <Card
                        key={relatedArticle.id}
                        variant="elevated"
                        onClick={() => navigate(`/articles/${relatedArticle.slug}`)}
                        className="cursor-pointer"
                      >
                        <img
                          src={relatedArticle.image}
                          alt={relatedArticle.title}
                          className="w-full h-40 object-cover rounded-lg mb-4"
                        />
                        <h3 className="font-bold text-gray-900 mb-2">
                          {relatedArticle.title}
                        </h3>
                        <p className="text-gray-700 text-sm mb-4">
                          {relatedArticle.excerpt}
                        </p>
                        <div className="text-sm text-gray-600">
                          {relatedArticle.date} • {relatedArticle.readTime} min read
                        </div>
                      </Card>
                    ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-16 bg-solusi-blue-50 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Butuh Konsultasi Hukum?
                </h3>
                <p className="text-gray-700 mb-6">
                  Hubungi kami untuk mendiskusikan situasi spesifik Anda dengan pengacara berpengalaman kami.
                </p>
                <Button
                  onClick={() => navigate('/contact')}
                  variant="primary"
                >
                  Hubungi Kami
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
    );
  }

  // Articles Listing View
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero
        variant="small"
        title="Artikel & Panduan"
        subtitle="Pelajari tentang Hukum Perceraian"
        description="Artikel informatif dan panduan dari para ahli hukum kami"
      />

      {/* Filter & Search Section */}
      <section className="section-padding bg-gray-50">
        <Container>
          {/* Search Bar */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Cari artikel..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-solusi-blue-600"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-8">
            <Button
              onClick={() => setSelectedCategory(null)}
              variant={!selectedCategory ? 'primary' : 'secondary'}
              size="sm"
            >
              Semua
            </Button>
            {categories.map(category => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'primary' : 'secondary'}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Results Count */}
          <p className="text-gray-600 mb-8">
            Menampilkan <strong>{filteredArticles.length}</strong> artikel
          </p>
        </Container>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-white">
        <Container>
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map(article => (
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
                  {article.featured && (
                    <span className="inline-block px-2 py-1 bg-warning text-white text-xs font-bold rounded mb-2">
                      FEATURED
                    </span>
                  )}
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
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                Tidak ada artikel yang cocok dengan pencarian Anda.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory(null);
                }}
                variant="secondary"
                className="mt-6"
              >
                Reset Filter
              </Button>
            </div>
          )}
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-solusi-blue-900 text-white">
        <Container as="section" className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Tetap Terinformasi
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Berlangganan newsletter kami untuk mendapatkan artikel hukum terbaru dan tips langsung di inbox Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button
              variant="primary"
              className="bg-white text-solusi-blue-900 hover:bg-gray-100"
            >
              Berlangganan
            </Button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            Kami tidak akan pernah membagikan email Anda. Privasi Anda dijamin.
          </p>
        </Container>
      </section>
    </main>
  );
}
