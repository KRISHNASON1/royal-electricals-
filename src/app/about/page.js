'use client';

import { useState, useEffect } from 'react';
import { Award, Users, Building2, TrendingUp, Shield, CheckCircle, MapPin } from 'lucide-react';
import BubbleSurface from '@/components/ui/BubbleSurface';
import HorizontalScrollSection from '@/components/ui/HorizontalScrollSection';

export default function AboutPage() {
  const [activeStat, setActiveStat] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Trigger stats visibility on mount
  useEffect(() => {
    const timer = setTimeout(() => setStatsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Desktop order: 0 → 1 → 2 → 3 (left to right)
    // Mobile order: 0 → 1 → 3 → 2 (top-left → top-right → bottom-right → bottom-left following S-curve)
    const sequence = isMobile ? [0, 1, 3, 2] : [0, 1, 2, 3];

    // Timings aligned with the dash animation + 0.5s delay
    const timeouts = [
      setTimeout(() => setActiveStat(sequence[0]), 600),  // Item 1 hit
      setTimeout(() => setActiveStat(-1), 1000), // Item 1 reset
      setTimeout(() => setActiveStat(sequence[1]), 1000), // Item 2 hit
      setTimeout(() => setActiveStat(-1), 1400), // Item 2 reset
      setTimeout(() => setActiveStat(sequence[2]), 1400), // Item 3 hit
      setTimeout(() => setActiveStat(-1), 1800), // Item 3 reset
      setTimeout(() => setActiveStat(sequence[3]), 1800), // Item 4 hit
      setTimeout(() => setActiveStat(-1), 2200), // Item 4 reset
    ];

    return () => timeouts.forEach(t => clearTimeout(t));
  }, [isMobile]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section with Wavy Background */}
        <div className="relative text-center mb-10 pb-20">
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 relative z-10">
            About <span className="text-primary-600">Royal Electricals & Hardware</span>
          </h1>
          {/* Subtitle */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed relative z-10 mb-16">
            Supplying electrical and hardware essentials since 2000, with trusted brand relationships,
            a focus on quality, and dependable service from Taloja MIDC.
          </p>

          {/* Wavy Background SVG - Refined to match single large wave */}
          <div className="absolute top-1/2 left-0 right-0 -z-10 w-full h-[800px] overflow-hidden pointer-events-none translate-y-20 animate-fade-in">
            <svg viewBox="0 0 1440 320" className="w-full h-full text-primary-50" preserveAspectRatio="none">
              <path fill="#FBF8EC" fillOpacity="1" d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,213.3C1120,224,1280,224,1360,224L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
          </div>

          {/* Stats - Connected Pill Design */}
          <div className="relative z-10">
            {/* Desktop Wavy Connecting Line (SVG) */}
            <div className="absolute top-[55%] left-0 w-full h-40 -translate-y-1/2 hidden md:block pointer-events-none z-0">
              <svg viewBox="0 0 1200 100" className="w-full h-full" preserveAspectRatio="none">
                <path
                  d="M100,50 C250,50 350,85 600,60 C850,35 950,50 1100,50"
                  fill="none"
                  stroke="#B68B22"
                  strokeWidth="3"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  className="opacity-80"
                  style={{
                    strokeDasharray: '1000',
                    strokeDashoffset: '1000',
                    animation: 'dash 2s ease-out forwards 0.5s'
                  }}
                />
              </svg>
            </div>

            {/* Mobile 2x2 Grid Connecting Line (S-curve through all 4 cards) */}
            <div className="absolute inset-0 md:hidden pointer-events-none z-0">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                preserveAspectRatio="none"
                style={{ position: 'absolute', top: 0, left: 0 }}
              >
                {/* S-curve: card center (25%,25%) → (75%,25%) → (75%,75%) → (25%,75%) */}
                <path
                  d="M25,25 L75,25 L75,75 L25,75"
                  fill="none"
                  stroke="#C8423D"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-70"
                  vectorEffect="non-scaling-stroke"
                  style={{
                    strokeDasharray: '1200',
                    strokeDashoffset: '1200',
                    animation: 'dash 2.5s ease-out forwards 0.5s'
                  }}
                />
              </svg>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-0 relative max-w-6xl mx-auto">
              {[
                { value: '50+', label: 'Major Clients', icon: Users, offset: 'md:translate-y-12', delay: 200 },
                { value: '1000+', label: 'Products', icon: Building2, offset: 'md:translate-y-2', delay: 300 },
                { value: '2000', label: 'Established', icon: TrendingUp, offset: 'translate-y-0', delay: 400 },
              ].map((stat, index) => {
                const Icon = stat.icon;
                const isActive = activeStat === index;

                return (
                  <div key={index}
                    className={`flex flex-col items-center relative ${stat.offset} transition-all duration-700 ease-out`}
                    style={{
                      opacity: statsVisible ? 1 : 0,
                      transform: statsVisible ? 'translateY(0)' : 'translateY(20px)',
                      transitionDelay: `${stat.delay}ms`,
                    }}
                  >
                    {/* Icon circle */}
                    <div className={`
                      w-12 h-12 rounded-full bg-primary-100 border-4 border-white shadow-sm flex items-center justify-center mb-4 relative z-10
                      transition-transform duration-300
                      ${isActive ? 'scale-110 rotate-3' : 'hover:scale-110 hover:rotate-3'}
                    `}>
                      <Icon className="w-5 h-5 text-primary-600" />
                    </div>

                    {/* Stat pill */}
                    <div
                      className={`
                        bg-white border-2 border-white shadow-[0_4px_20px_rgb(0,0,0,0.05)] px-10 py-5 relative z-10
                        rounded-[2rem] w-full max-w-[220px]
                        flex flex-col items-center justify-center
                        group cursor-pointer
                        transition-all duration-300
                        ${isActive
                          ? 'shadow-[0_10px_30px_rgb(182,139,34,0.15)] -translate-y-1'
                          : 'hover:shadow-[0_10px_30px_rgb(182,139,34,0.15)] hover:-translate-y-1'
                        }
                      `}
                      style={{
                        background: 'linear-gradient(180deg, #ffffff 0%, #FBF8EC 100%)'
                      }}
                    >
                      <div className={`
                        text-4xl md:text-5xl font-bold text-primary-500 text-center mb-4
                        transition-transform duration-300
                        ${isActive ? 'scale-105' : 'group-hover:scale-105'}
                      `}>
                        {stat.value}
                      </div>

                      {/* Slider Dot on the bottom */}
                      <div className="w-full h-1.5 bg-primary-100 rounded-full mt-1 relative overflow-hidden">
                        <div className={`
                          absolute top-0 left-1/2 -translate-x-1/2 h-full bg-primary-500 rounded-full transition-all duration-500 ease-out
                          ${isActive ? 'w-full' : 'w-8 group-hover:w-full'}
                        `} />
                        <div className={`
                          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-primary-500 rounded-full shadow-sm
                          transition-transform duration-300
                          ${isActive ? 'scale-110' : 'group-hover:scale-110'}
                        `} />
                      </div>
                    </div>

                    {/* Label */}
                    <div className="text-sm text-gray-800 font-medium mt-4 text-center">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Keyframe animations styles */}
            <style jsx global>{`
                @keyframes fadeUp {
                  from { opacity: 0; transform: translateY(20px); }
                  to { opacity: 1; transform: translateY(0); }
                }
                @keyframes dash {
                  to { stroke-dashoffset: 0; }
                }
             `}</style>
          </div>
        </div>

        {/* Our Story - Parallax Section */}
        {/* Mobile separator lines - top */}
        <div className="md:hidden w-full space-y-1 mb-0 px-0">
          <div className="h-[2px] bg-gradient-to-r from-transparent via-primary-400/40 to-transparent"></div>
          <div className="h-[2px] bg-gradient-to-r from-transparent via-primary-500/60 to-transparent"></div>
        </div>
        <div
          className="mb-20 relative rounded-none md:rounded-3xl overflow-hidden -mx-4 sm:-mx-6 md:mx-0"
        >
          {/* Background image - separate div for better mobile control */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(/images/royal/about-cables.jpg)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          />
          {/* Gold overlay for better text readability and theme consistency */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-primary-900/90 to-gray-950/80" />

          {/* Content */}
          <div className="relative z-10 px-4 py-8 sm:p-10 md:p-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none space-y-3 md:space-y-4">
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                Incorporated in 2000, Royal Electricals &amp; Hardware is a supplier, trader, and distributor
                of electrical and hardware products based in Taloja MIDC. We bring together a wide product
                range from established brands to help customers source the essentials for their projects.
              </p>
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                Our long-standing vendor relationships include Siemens, L&amp;T, Havells, Standard Electricals,
                Anchor/Roma, Usha, Bajaj, Polycab, Syska, Osram, and Berger. Working closely with our suppliers
                helps us respond to varied requirements and arrange dependable product supply.
              </p>
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                Competitive pricing, a strong distribution network, warehouse capacity, and timely delivery
                are central to the way we work. Our quality-focused approach and clear business dealings
                help us build lasting customer relationships, with 50+ clients and 1000+ products in our range.
              </p>
            </div>
          </div>
        </div>
        {/* Mobile separator line - bottom */}
        <div className="md:hidden w-full mb-10 px-0 -mt-20">
          <div className="h-[2px] bg-gradient-to-r from-transparent via-primary-400/40 to-transparent"></div>
        </div>


        {/* Horizontal Scroll Section (Vision, Mission, Industries, Why Us) */}
      </div>

      {/* Full width container for scroll section */}
      <div className="w-full">
        <HorizontalScrollSection />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA */}
        <div className="text-center">
          <BubbleSurface
            width="100%"
            height="auto"
            borderRadius={32}
          >
            <div className="p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Partner With Us?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join 50+ major companies who trust Royal Electricals & Hardware for their material needs
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </BubbleSurface>
        </div>
      </div>
    </div>
  );
}
