'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles } from 'lucide-react';
import GlassSurface from '../ui/GlassSurface';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const FeaturedProducts = () => {
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const cardsRef = useRef([]);
  const headerRef = useRef(null);

  const products = [
    {
      title: 'Cables & Wires',
      description: 'Premium quality cables and wiring solutions from authorized dealers',
      image: '/images/Products_preview/Wires&Cables.jpg',
      color: 'from-primary-500 to-primary-700',
    },
    {
      title: 'LED Lighting',
      description: 'Energy-efficient LED solutions for industrial and commercial spaces',
      image: '/images/Products_preview/LED.jpg',
      color: 'from-primary-500 to-primary-700',
    },
    {
      title: 'Safety Equipment',
      description: 'Complete range of safety gear and industrial protection equipment',
      image: '/images/Products_preview/SafetyGloves.jpg',
      color: 'from-secondary-500 to-secondary-700',
    },
    {
      title: 'Electrical Switchgear',
      description: 'High-quality switchgear and control systems for power distribution',
      image: '/images/Products_preview/Switchgears.jpg',
      color: 'from-primary-500 to-primary-700',
    },
    {
      title: 'Pipes & Fittings',
      description: 'Durable pipes and fittings for industrial plumbing applications',
      image: '/images/Products_preview/PVCPipes&Fittings.jpg',
      color: 'from-secondary-500 to-secondary-700',
    },
    {
      title: 'Power Tools',
      description: 'Professional-grade power tools for construction and maintenance',
      image: '/images/Products_preview/PowerTools&HandTools.jpg',
      color: 'from-primary-500 to-primary-700',
    },
  ];

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return;

    const isMobile = window.innerWidth < 768;
    let scrollTriggerInstances = [];

    const ctx = gsap.context(() => {
      // Animate header on scroll
      const headerAnimation = gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        },
        y: isMobile ? 25 : 50,
        opacity: 0,
      });

      if (headerAnimation.scrollTrigger) {
        scrollTriggerInstances.push(headerAnimation.scrollTrigger);
      }

      // Create stacking cards effect
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const isEven = index % 2 === 0;

        // Initial state — simpler on mobile (no 3D rotation)
        gsap.set(card, {
          scale: 0.9,
          opacity: 0,
          rotationY: isMobile ? 0 : (isEven ? -15 : 15),
          z: isMobile ? 0 : -100 * index,
        });

        // Scroll animation with stacking effect
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 20%',
            scrub: 1.5,
            toggleActions: 'play none none reverse',
          },
        });

        if (tl.scrollTrigger) {
          scrollTriggerInstances.push(tl.scrollTrigger);
        }

        tl.to(card, {
          scale: 1,
          opacity: 1,
          rotationY: 0,
          z: 0,
          duration: 1,
          ease: 'power3.out',
        });

        // Parallax effect on hover — DESKTOP ONLY (mousemove listeners cause overhead on touch)
        if (!isMobile) {
          card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            gsap.to(card, {
              rotationX: rotateX,
              rotationY: rotateY,
              duration: 0.5,
              ease: 'power2.out',
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              rotationX: 0,
              rotationY: 0,
              duration: 0.5,
              ease: 'power2.out',
            });
          });

          // Floating animation for each card — DESKTOP ONLY
          gsap.to(card, {
            y: -10,
            duration: 2 + index * 0.2,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
            delay: index * 0.1,
          });
        }
      });
    }, sectionRef);

    return () => {
      // Kill all ScrollTrigger instances immediately
      scrollTriggerInstances.forEach(trigger => trigger.kill(true));

      // Kill all GSAP animations on cards
      cardsRef.current.forEach(card => {
        if (card) gsap.killTweensOf(card);
      });

      // Kill header animations
      if (headerRef.current) gsap.killTweensOf(headerRef.current);

      // Revert the GSAP context
      ctx.revert();

      // Clear all ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill(true));
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative pt-[98px] md:pt-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Animated Background — hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/2 -right-48 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary-100/50 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700">1000+ Products Available</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Complete Industrial
            <br />
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-700 bg-clip-text text-transparent">
              Material Supply
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Authorized dealers and stockists of leading brands across multiple categories
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
