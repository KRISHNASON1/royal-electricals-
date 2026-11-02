'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { MapPin, Phone, Mail, Clock, ArrowRight, User } from 'lucide-react';
import ContactForm from '@/components/shared/ContactForm';
import { getCartCount, formatCartForRequirements } from '@/lib/cart';
import { site } from '@/lib/site';

function ContactContent() {
  const searchParams = useSearchParams();
  const [cartCount, setCartCount] = useState(0);
  const [initialRequirements, setInitialRequirements] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setCartCount(getCartCount());
    const formatted = formatCartForRequirements();
    if (formatted) {
      setInitialRequirements(formatted);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            Get In <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Have a question or need a quote? We're here to help. Reach out to our team and we'll respond within 24 hours.
          </p>
        </div>

        <div className="mb-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 mb-8 group">
            <div className="hidden md:block absolute top-0 right-0 w-1/2 h-full overflow-hidden rounded-r-3xl">
              <iframe
                src={site.map}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Royal Electricals & Hardware Location"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="relative z-10 p-6 sm:p-8 md:p-12">
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <MapPin className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                  </div>
                </div>
                <div className="flex-1 md:max-w-[45%]">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Visit Our Office</h3>
                  <div className="space-y-1 sm:space-y-2 text-white/90 text-base sm:text-lg">
                    <p className="font-semibold">Plot No. PAP 57, Opposite M.I.D.C. Water Tank</p>
                    <p>Taloja MIDC, Raigad - 410208</p>
                    <p>Maharashtra, India</p>
                  </div>
                  <div className="mt-4 sm:mt-6">
                    <a
                      href={site.directions}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-primary-600 rounded-full font-semibold text-sm sm:text-base hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      <span>Get Directions</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden w-full h-48 sm:h-56 overflow-hidden">
            <iframe
              src={site.map}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Royal Electricals & Hardware Location"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        <div id="quote-form" className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            {mounted && cartCount > 0 && !searchParams.get('product') ? (
              <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {cartCount}
                  </div>
                  <span className="text-green-800 font-medium">
                    {cartCount} {cartCount === 1 ? 'product' : 'products'} in your enquiry
                  </span>
                </div>
              </div>
            ) : null}
            <ContactForm initialRequirements={initialRequirements} />
          </div>
          <div className="order-2 lg:order-2">
            <div className="relative bg-gradient-to-br from-primary-50 via-white to-primary-50 rounded-3xl p-8 shadow-xl border border-primary-100/50 h-full flex flex-col overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-100 to-primary-100 rounded-full -mr-32 -mt-32 opacity-40 pointer-events-none blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-secondary-100 to-secondary-100 rounded-full -ml-32 -mb-32 opacity-40 pointer-events-none blur-3xl"></div>

              <div className="relative z-10 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  <span className="bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">Prefer Instant Communication?</span>
                </h2>
                <p className="text-gray-600 font-medium">
                  Connect with our team directly for immediate assistance and quotes.
                </p>
              </div>

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-5 bg-gradient-to-br from-white to-primary-50/30 rounded-2xl border border-primary-100 shadow-sm hover:shadow-lg hover:border-primary-300 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary-600 transition-all duration-300 shadow-sm">
                    <User className="w-6 h-6 text-primary-700 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors tracking-tight">SALES &amp; WHATSAPP</h3>
                  <div className="space-y-2">
                    <a href="tel:+918591169113" className="flex items-center text-gray-600 hover:text-primary-700 transition-colors text-sm font-medium p-1 -ml-1 rounded-lg hover:bg-primary-50/50">
                      <Phone className="w-4 h-4 mr-2 text-primary-400 group-hover:text-primary-600" />
                      +91 85911 69113
                    </a>
                    <a href="mailto:royalelectrical_taloja@rediffmail.com" className="flex items-center text-gray-600 hover:text-primary-700 transition-colors text-xs font-medium break-all p-1 -ml-1 rounded-lg hover:bg-primary-50/50">
                      <Mail className="w-4 h-4 mr-2 text-primary-400 group-hover:text-primary-600" />
                      royalelectrical_taloja@rediffmail.com
                    </a>
                  </div>
                </div>

                <div className="p-5 bg-gradient-to-br from-white to-primary-50/30 rounded-2xl border border-primary-100 shadow-sm hover:shadow-lg hover:border-primary-300 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary-600 transition-all duration-300 shadow-sm">
                    <User className="w-6 h-6 text-primary-700 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors tracking-tight">ROYAL OFFICE</h3>
                  <div className="space-y-2">
                    <a href="tel:02227401969" className="flex items-center text-gray-600 hover:text-primary-700 transition-colors text-sm font-medium p-1 -ml-1 rounded-lg hover:bg-primary-50/50">
                      <Phone className="w-4 h-4 mr-2 text-primary-400 group-hover:text-primary-600" />
                      022-27401969
                    </a>
                    <a href="tel:02227410775" className="flex items-center text-gray-600 hover:text-primary-700 transition-colors text-sm font-medium p-1 -ml-1 rounded-lg hover:bg-primary-50/50">
                      <Phone className="w-4 h-4 mr-2 text-primary-400 group-hover:text-primary-600" />
                      022-27410775
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mb-8">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 pl-1 flex items-center">
                  <span className="w-8 h-0.5 bg-gray-300 mr-2 rounded-full"></span>
                  General Inquiries
                </h3>
                <div className="bg-primary-50/50 rounded-2xl p-4 border border-primary-100/50 space-y-3 backdrop-blur-sm">
                  {[site.email].map((email) => (
                    <a key={email} href={`mailto:${email}`} className="flex items-center group p-3 bg-white/60 hover:bg-white rounded-xl border border-transparent hover:border-primary-100 transition-all duration-200 shadow-sm">
                      <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center mr-3 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                        <Mail className="w-4 h-4" />
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-primary-700 text-sm transition-colors">{email}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="relative z-10 mt-auto">
                <a
                  href="https://wa.me/918591169113?text=Hello%20Royal%20Electricals%20%26%20Hardware%2C%20I%27m%20interested%20in%20your%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-green-200 hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="animate-pulse w-8 h-8 rounded-full bg-primary-500"></div></div>}>
      <ContactContent />
    </Suspense>
  );
}
