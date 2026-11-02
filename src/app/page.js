'use client';

import { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import StackingCardsShowcase from '@/components/home/StackingCardsShowcase';
import BrandsShowcase from '@/components/home/BrandsShowcase';
import ClientsShowcase from '@/components/home/ClientsShowcase';
import WhyChooseRoyal from '@/components/home/WhyChooseRoyal';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <FeaturedProducts />
      <StackingCardsShowcase />
      <div className="reveal">
        <BrandsShowcase />
      </div>
      <div className="reveal">
        <ClientsShowcase />
      </div>
      <div className="reveal">
        <WhyChooseRoyal />
      </div>
      <div className="reveal">
        <CTASection />
      </div>
    </>
  );
}
