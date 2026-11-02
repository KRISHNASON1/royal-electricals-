'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const productCategories = [
    { name: 'Electrical', href: '/products#electrical' },
    { name: 'Hardware', href: '/products#hardware' },
    { name: 'Construction Chemicals & Paints', href: '/products#construction-chemicals' },
    { name: 'Structural Steel', href: '/products#structural-steel' },
    { name: 'Safety', href: '/products#safety' },
    { name: 'Construction Equipment', href: '/products#construction-equipment' },
    { name: 'Pipes, Pipe Fittings & Valves', href: '/products#pipes-fittings' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
    { name: 'Our Brands', href: '/#brands' },
  ];

  const contacts = [
    { name: 'Sales & WhatsApp', phone: '+91 85911 69113' },
    { name: 'Office', phone: '022-27401969' },
    { name: 'Office', phone: '022-27410775' },
  ];

  const emails = [
    'royalelectrical_taloja@rediffmail.com',
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-950 via-gray-900 to-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info - Order 1 */}
          <div className="col-span-2 lg:col-span-1 order-1">
            <Link href="/" className="inline-flex bg-white rounded-xl p-3 mb-6">
              <Image src="/royal-crown-transparent.png" alt="Royal Electricals & Hardware crown" width={1448} height={1086} className="object-contain w-24 h-[72px]" />
            </Link>
            <p className="hidden lg:block text-gray-400 mb-4 leading-relaxed">
              Electrical &amp; Hardware Solutions Since 2000.
            </p>

            <div className="flex space-x-4">
              <a href="https://wa.me/918591169113" target="_blank" rel="noopener noreferrer" aria-label="Chat with Royal on WhatsApp" className="w-10 h-10 bg-white/10 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"><MessageCircle className="w-5 h-5" /></a>
              <a href="mailto:royalelectrical_taloja@rediffmail.com" aria-label="Email Royal Electricals & Hardware" className="w-10 h-10 bg-white/10 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links - Order 2 (Hidden on Mobile) */}
          <div className="hidden lg:block order-2 lg:order-2">
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-500 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Only: Products - Order 2 */}
          <div className="lg:hidden order-2 space-y-8">
            {/* Products */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Product Categories</h4>
              <ul className="space-y-3">
                {productCategories.map((category) => (
                  <li key={category.name}>
                    <Link
                      href={category.href}
                      className="text-gray-400 hover:text-primary-500 transition-colors duration-200"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Products - Desktop Only - Order 3 */}
          <div className="hidden lg:block lg:order-3">
            <h4 className="text-lg font-semibold mb-6">Product Categories</h4>
            <ul className="space-y-3">
              {productCategories.map((category) => (
                <li key={category.name}>
                  <Link
                    href={category.href}
                    className="text-gray-400 hover:text-primary-500 transition-colors duration-200"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Order 3 (Mobile Right) / Order 4 (Desktop) */}
          <div className="order-3 lg:order-4">
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Plot No. PAP 57, Opposite M.I.D.C. Water Tank, Taloja MIDC, Raigad - 410208, Maharashtra
                </span>
              </li>
              {/* Contact Persons */}
              {contacts.map((contact) => (
                <li key={contact.phone} className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-white font-medium text-sm">{contact.name}</span>
                    <a href={`tel:${contact.phone.replace(/[\s-]/g, '')}`} className="text-gray-400 hover:text-primary-500 transition-colors text-sm">
                      {contact.phone}
                    </a>
                  </div>
                </li>
              ))}
              {/* Emails */}
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                <div className="flex flex-col space-y-1">
                  {emails.map((email) => (
                    <a key={email} href={`mailto:${email}`} className="text-gray-400 hover:text-primary-500 transition-colors text-sm break-all">
                      {email}
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 lg:mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Royal Electricals & Hardware. All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/Royal-Electricals-Catalog.pdf" download className="text-gray-400 hover:text-primary-500 text-sm">Royal Catalogue</a>
              <Link href="/contact" className="text-gray-400 hover:text-primary-500 text-sm">Contact Royal</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
