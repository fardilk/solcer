import { Link } from 'react-router-dom';
import { contactInfo } from '../../constants/mockData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 md:py-20" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
      <div className="container-wide">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Column 1: Company */}
          <div>
            <h3 className="text-xl font-bold mb-4">SolusIcerai</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#e8f4f8' }}>
              Firma hukum terkemuka dalam layanan perceraian dan hukum keluarga di Indonesia.
            </p>
            <div className="flex gap-4">
              {/* Social Links */}
              <a href="#" className="transition" style={{ color: '#e8f4f8' }} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = '#e8f4f8'}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="transition" style={{ color: '#e8f4f8' }} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = '#e8f4f8'}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"/>
                </svg>
              </a>
              <a href="#" className="transition" style={{ color: '#e8f4f8' }} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = '#e8f4f8'}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" fill="white"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="white"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Menu Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="transition hover:text-white" style={{ color: '#e8f4f8' }}>Beranda</Link></li>
              <li><Link to="/about" className="transition hover:text-white" style={{ color: '#e8f4f8' }}>Tentang Kami</Link></li>
              <li><Link to="/services" className="transition hover:text-white" style={{ color: '#e8f4f8' }}>Layanan</Link></li>
              <li><Link to="/articles" className="transition hover:text-white" style={{ color: '#e8f4f8' }}>Artikel</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-semibold mb-4">Layanan Kami</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="transition hover:text-white" style={{ color: '#e8f4f8' }}>Konsultasi Hukum</a></li>
              <li><a href="#" className="transition hover:text-white" style={{ color: '#e8f4f8' }}>Mediasi</a></li>
              <li><a href="#" className="transition hover:text-white" style={{ color: '#e8f4f8' }}>Litigasi</a></li>
              <li><a href="#" className="transition hover:text-white" style={{ color: '#e8f4f8' }}>Hak Asuh Anak</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-semibold mb-4">Hubungi Kami</h4>
            <ul className="space-y-2 text-sm">
              <li style={{ color: '#e8f4f8' }}>
                <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition">{contactInfo.phone}</a>
              </li>
              <li style={{ color: '#e8f4f8' }}>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition">{contactInfo.email}</a>
              </li>
              <li style={{ color: '#e8f4f8' }}>
                {contactInfo.address}
              </li>
              <li style={{ color: '#e8f4f8' }} className="pt-2">
                <strong>24/7 Darurat:</strong><br/>
                <a href={`tel:${contactInfo.emergencyPhone}`} className="hover:text-white transition">{contactInfo.emergencyPhone}</a>
              </li>
            </ul>
          </div>

          {/* Column 5: Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="transition hover:text-white" style={{ color: '#e8f4f8' }}>Kebijakan Privasi</a></li>
              <li><a href="#" className="transition hover:text-white" style={{ color: '#e8f4f8' }}>Syarat & Ketentuan</a></li>
              <li><a href="#" className="transition hover:text-white" style={{ color: '#e8f4f8' }}>Kebijakan Cookies</a></li>
              <li><a href="#" className="transition hover:text-white" style={{ color: '#e8f4f8' }}>Disclaimer</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.2)' }}></div>

        {/* Bottom Footer */}
        <div className="mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm" style={{ color: '#e8f4f8' }}>
          <p>&copy; {currentYear} Solusi Icerai. Hak Cipta Dilindungi.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="transition hover:text-white" style={{ color: '#e8f4f8' }}>Kebijakan Privasi</a>
            <span>|</span>
            <a href="#" className="transition hover:text-white" style={{ color: '#e8f4f8' }}>Syarat Layanan</a>
            <span>|</span>
            <a href="#" className="transition hover:text-white" style={{ color: '#e8f4f8' }}>Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
