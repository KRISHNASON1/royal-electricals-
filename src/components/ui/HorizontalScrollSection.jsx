'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Users, TrendingUp, CheckCircle, Factory, Building, Zap, Fuel, Hammer } from 'lucide-react';
import BubbleSurface from '@/components/ui/BubbleSurface';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const HorizontalScrollSection = () => {
    const targetRef = useRef(null);
    const scrollRef = useRef(null);
    const [scrollRange, setScrollRange] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Mobile stacking refs
    const mobileSectionRef = useRef(null);
    const mobileCardsRefs = useRef([]);

    // Detect mobile viewport
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Desktop: Update viewport width and scroll range calculation
    useEffect(() => {
        if (isMobile) return;

        const updateScrollCalc = () => {
            if (scrollRef.current && targetRef.current) {
                const scrollWidth = scrollRef.current.scrollWidth;
                const clientWidth = window.innerWidth;
                const cardWidth = 800; // card width on desktop
                // Subtract half-card offset so the last card ends centered
                const centerOffset = (clientWidth - cardWidth) / 2;
                setScrollRange(scrollWidth - clientWidth + centerOffset);
            }
        };

        updateScrollCalc();
        // Small delay to ensure DOM is fully rendered
        const timeout = setTimeout(updateScrollCalc, 100);
        window.addEventListener('resize', updateScrollCalc);
        return () => {
            window.removeEventListener('resize', updateScrollCalc);
            clearTimeout(timeout);
        };
    }, [isMobile]);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Transform maps vertical scroll to horizontal translation
    // Ends at 0.85 so the last card "dwells" centered before scroll unlocks
    const x = useTransform(scrollYProgress, [0, 0.85], [0, -scrollRange]);

    // Mobile: GSAP stacking card animation
    useEffect(() => {
        if (!isMobile || !mobileSectionRef.current) return;

        const ctx = gsap.context(() => {
            const totalCards = cards.length;
            const stackGap = 20;

            // Set initial positions
            mobileCardsRefs.current.forEach((card, index) => {
                if (!card) return;
                gsap.set(card, {
                    y: index === 0 ? 0 : window.innerHeight,
                    opacity: 1,
                    scale: 1,
                    zIndex: index === 0 ? 100 : index,
                    force3D: true,
                });
            });

            // Create master timeline with ScrollTrigger
            const masterTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: mobileSectionRef.current,
                    pin: true,
                    scrub: 0.5,
                    start: 'top top',
                    end: `+=${totalCards * 100}%`,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    pinSpacing: true,
                    fastScrollEnd: true,
                },
            });

            // Animate each card stacking
            for (let i = 1; i < totalCards; i++) {
                const label = `card${i}`;
                masterTimeline.add(label, i * 1);

                // Compress previous cards upward
                for (let prev = 0; prev < i; prev++) {
                    if (!mobileCardsRefs.current[prev]) continue;
                    const stackLevel = i - prev;
                    masterTimeline.to(
                        mobileCardsRefs.current[prev],
                        {
                            y: -stackLevel * stackGap,
                            scale: 1 - stackLevel * 0.05,
                            zIndex: prev,
                            duration: 1,
                            ease: 'none',
                            force3D: true,
                        },
                        label
                    );
                }

                // Bring new card from bottom
                if (mobileCardsRefs.current[i]) {
                    masterTimeline.fromTo(
                        mobileCardsRefs.current[i],
                        {
                            y: window.innerHeight,
                            opacity: 1,
                            scale: 0.95,
                            force3D: true,
                        },
                        {
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            zIndex: 100,
                            duration: 1,
                            ease: 'none',
                            force3D: true,
                        },
                        label
                    );
                }
            }

            // Hold last card centered for a moment
            masterTimeline.to({}, { duration: 0.5 });
        }, mobileSectionRef);

        return () => {
            ctx.revert();
        };
    }, [isMobile]);

    const cards = [
        {
            id: 1, title: 'Our Story', icon: TrendingUp,
            content: (
                <div className="h-full flex flex-col justify-center gap-5">
                    <p className="text-4xl md:text-6xl font-bold text-secondary-600">Since 2000</p>
                    <p className="text-gray-600 text-sm md:text-lg leading-relaxed">Royal Electricals &amp; Hardware is a supplier, trader, and distributor in Taloja MIDC. We bring together trusted electrical and hardware brands to meet our customers' everyday and project requirements.</p>
                    <p className="text-primary-700 font-semibold text-sm md:text-lg">50+ clients. 1000+ products. One dependable supply partner.</p>
                </div>
            )
        },
        {
            id: 2, title: 'Our Brand Relationships', icon: Factory,
            content: (
                <div className="h-full flex flex-col justify-center">
                    <p className="text-gray-600 mb-5 text-sm md:text-lg">Long-standing vendor relationships help us source reliable products and respond to varied requirements.</p>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                        {['Siemens', 'L&T', 'Havells', 'Standard Electricals', 'Anchor/Roma', 'Usha', 'Bajaj', 'Polycab', 'Syska', 'Osram', 'Berger'].map(brand => <span key={brand} className="rounded-lg border border-primary-100 bg-primary-50 px-3 py-2 text-xs md:text-sm font-semibold text-primary-800">{brand}</span>)}
                    </div>
                </div>
            )
        },
        {
            id: 3, title: 'Why Choose Royal?', icon: Shield,
            content: (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5 h-full content-center">
                    {['Competitive pricing', 'Strong distribution network', 'Clear business dealings', 'Warehouse capacity', 'Timely delivery', 'Customer-focused service'].map(text => <li key={text} className="flex items-center gap-3 p-3 md:p-4 rounded-xl bg-primary-50 text-primary-800 font-medium text-xs md:text-base"><CheckCircle className="w-5 h-5 shrink-0" />{text}</li>)}
                </ul>
            )
        },
        {
            id: 4, title: 'Quality Assurance', icon: CheckCircle,
            content: (
                <div className="h-full flex flex-col justify-center gap-5">
                    <p className="text-gray-600 text-sm md:text-lg leading-relaxed">Quality is central to our sourcing and supply. We work with established vendors and focus on dependable products that meet our customers' requirements.</p>
                    <p className="text-gray-600 text-sm md:text-lg leading-relaxed">Our goal is to understand each requirement, arrange the right products, and deliver on schedule. Clear communication and consistent service help us build lasting customer relationships.</p>
                    <span className="self-start bg-secondary-50 text-secondary-700 rounded-full px-4 py-2 font-semibold text-xs md:text-sm">Reliable products. Lasting relationships.</span>
                </div>
            )
        }
    ];

    // ==================== MOBILE: Stacking Cards ====================
    if (isMobile) {
        return (
            <section ref={mobileSectionRef} className="relative min-h-screen bg-gray-50">
                <div className="sticky top-0 h-screen flex flex-col">
                    {/* Section Header */}
                    <div className="flex-none w-full text-center z-10 px-4 py-4 bg-gray-50/80 backdrop-blur-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">
                            Reach For Everything You Need
                        </h2>
                    </div>

                    {/* Stacking Cards Container */}
                    <div className="flex-1 relative px-4 pb-6">
                        {cards.map((card, index) => {
                            const Icon = card.icon;
                            return (
                                <div
                                    key={card.id}
                                    ref={(el) => (mobileCardsRefs.current[index] = el)}
                                    className="absolute inset-x-4 top-[35px] bottom-0"
                                    style={{
                                        willChange: 'transform',
                                    }}
                                >
                                    <div className="bg-white rounded-[1.5rem] p-4 shadow-2xl border border-gray-100 flex flex-col relative overflow-hidden">
                                        {/* Decorative Background Blob */}
                                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary-50 to-transparent rounded-bl-[100px] -mr-10 -mt-10 opacity-60" />

                                        <div className="relative z-10 flex flex-col">
                                            <div className="flex items-center mb-3 border-b border-gray-100 pb-3">
                                                <div className="w-9 h-9 rounded-xl bg-primary-50 flex items-center justify-center mr-2.5 shadow-sm border border-primary-100">
                                                    <Icon className="w-4 h-4 text-primary-600" />
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 tracking-tight">{card.title}</h3>
                                            </div>

                                            <div className="text-gray-600">
                                                {card.content}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }

    // ==================== DESKTOP: Horizontal Scroll ====================
    return (
        <section ref={targetRef} className="relative h-[500vh] bg-gray-50">
            <div className="sticky top-0 flex flex-col h-[100dvh] overflow-hidden">

                {/* Section Header */}
                <div className="flex-none w-full text-center z-10 px-4 py-8 md:py-12 flex flex-col justify-center bg-gray-50/80 backdrop-blur-sm">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
                        Reach For Everything You Need
                    </h2>
                </div>

                {/* Scroll Container */}
                <motion.div
                    ref={scrollRef}
                    style={{ x }}
                    className="flex-1 flex gap-6 md:gap-24 relative z-20 items-center px-[5vw] md:px-[calc(50vw-400px)] w-full py-4 md:py-0"
                >
                    {cards.map((card) => {
                        const Icon = card.icon;
                        return (
                            <div key={card.id} className="w-[85vw] md:w-[800px] flex-shrink-0">
                                <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-10 shadow-2xl border border-gray-100 flex flex-col relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                                    {/* Decorative Background Blob */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-50 to-transparent rounded-bl-[150px] -mr-16 -mt-16 transition-opacity duration-300 opacity-60" />

                                    <div className="relative z-10 flex flex-col">
                                        <div className="flex items-center mb-6 md:mb-8 border-b border-gray-100 pb-4 md:pb-6">
                                            <div className="w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-primary-50 flex items-center justify-center mr-3 md:mr-5 shadow-sm border border-primary-100">
                                                <Icon className="w-5 h-5 md:w-7 md:h-7 text-primary-600" />
                                            </div>
                                            <h3 className="text-xl md:text-3xl font-bold text-gray-900 tracking-tight">{card.title}</h3>
                                        </div>

                                        <div className="text-gray-600">
                                            {card.content}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default HorizontalScrollSection;
