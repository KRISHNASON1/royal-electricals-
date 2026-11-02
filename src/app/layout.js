import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GSAPCleanup from '@/components/utils/GSAPCleanup';
import WelcomeScreen from '@/components/WelcomeScreen';
import SmoothScroll from '@/components/utils/SmoothScroll';
import { OrganizationSchema, SpeakableSchema, SiteLinksSchema } from '@/components/SchemaMarkup';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  metadataBase: new URL('https://www.royalelectrical.in'),
  title: 'Royal Electricals & Hardware | Electrical & Hardware Solutions Since 2000',
  description: 'Electrical and hardware supplier in Taloja MIDC since 2000. Explore 1000+ products from Siemens, Havells, Polycab, Anchor/Roma and other leading brands. Request a quote.',
  keywords: 'Royal Electricals & Hardware, electrical supplier Taloja, hardware Taloja MIDC, Siemens, Havells, Polycab, Anchor Roma, wires, cables, switchgear, lighting, fans, industrial supplies',
  authors: [{ name: 'Royal Electricals & Hardware' }],
  manifest: '/manifest.json',
  icons: {
    icon: '/royal-crown-transparent.png',
    apple: '/royal-crown-transparent.png',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Royal Electricals & Hardware - Your Trusted Industrial Partner',
    description: 'Electrical & Hardware Solutions Since 2000. Serving 50+ clients with 1000+ products.',
    images: [{ url: '/royal-crown-transparent.png', width: 1448, height: 1086, alt: 'Royal Electricals & Hardware crown' }],
    type: 'website',
    locale: 'en_IN',
    siteName: 'Royal Electricals & Hardware',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Royal Electricals & Hardware - Industrial Materials Supplier',
    description: 'Electrical & Hardware Solutions Since 2000. Taloja MIDC, Maharashtra.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#B68B22',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <OrganizationSchema />
        <SpeakableSchema />
        <SiteLinksSchema />
        <SmoothScroll />
        <WelcomeScreen />
        <GSAPCleanup />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/918591169113?text=Hello%20Royal%20Electricals%20%26%20Hardware%2C%20I%27m%20interested%20in%20your%20products"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></span>
        </a>
      </body>
    </html>
  );
}
