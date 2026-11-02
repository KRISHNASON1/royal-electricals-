'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Package, Zap, Shield, Cpu, Cable, Lightbulb, Wrench, Settings, Box, BrainCircuit, Hammer, BatteryCharging } from 'lucide-react';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const StackingCardsShowcase = () => {
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const cardsRefs = useRef([]);
  const ctaRef = useRef(null);
  const exploreButtonRef = useRef(null);
  const isUnmountingRef = useRef(false);
  const backgroundLinesRef = useRef(null);
  const mobileBackgroundRef = useRef(null);
  const [isMobileView, setIsMobileView] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobileView(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 12 products for desktop (4 stacks of 3)
        const products = [
    {
      id: 1,
      title: 'Power & Hand Tools',
      image: '/images/Products_preview/PowerTools&HandTools.jpg',
      color: 'from-primary-500 to-primary-700',
      link: '/products/hardware/power-hand-tools'
    },
    {
      id: 2,
      title: 'Lugs & Glands',
      image: '/images/Products_preview/Lugs&Glands.jpg',
      color: 'from-secondary-500 to-secondary-700',
      link: '/products/electrical/lugs-glands'
    },
    {
      id: 3,
      title: 'Switchgears',
      image: '/images/Products_preview/Switchgears.jpg',
      color: 'from-primary-500 to-primary-700',
      link: '/products/electrical/switchgears'
    },
    {
      id: 4,
      title: 'Tarpaulin',
      image: '/images/Products_preview/Tarpaulin.jpg',
      color: 'from-secondary-500 to-secondary-700',
      link: '/products/hardware/tarpaulin'
    },
    {
      id: 5,
      title: 'Nuts, Bolts & Fasteners',
      image: '/images/Products_preview/NutsBolts&Fasteners.jpg',
      color: 'from-primary-500 to-primary-700',
      link: '/products/hardware/fasteners'
    },
    {
      id: 6,
      title: 'Waterproofing',
      image: '/images/Products_preview/waterProofing.jpg',
      color: 'from-secondary-500 to-secondary-700',
      link: '/products/construction-chemicals/waterproofing'
    },
    {
      id: 7,
      title: 'Wood Coating',
      image: '/images/Products_preview/woodPainting.jpg',
      color: 'from-primary-400 to-primary-600',
      link: '/products/construction-chemicals/wood-coatings'
    },
    {
      id: 8,
      title: 'TMT Bars',
      image: '/images/Products_preview/TMTBars.jpg',
      color: 'from-secondary-600 to-secondary-800',
      link: '/products/structural-steel/tmt-bars'
    },
    {
      id: 9,
      title: 'Fall Protection',
      image: '/images/Products_preview/FallProtection.jpg',
      color: 'from-primary-600 to-primary-800',
      link: '/products/safety-ppe/fall-protection'
    },
    {
      id: 10,
      title: 'Earth Moving Equipment',
      image: '/images/Products_preview/EarthMovingEquipment.jpg',
      color: 'from-primary-500 to-primary-700',
      link: '/products/construction-equipment/earth-moving'
    },
    {
      id: 11,
      title: 'CPVC Pipes & Fittings',
      image: '/images/Products_preview/CPVCPipes&Fittings.jpg',
      color: 'from-secondary-500 to-secondary-700',
      link: '/products/pipes-fittings/cpvc'
    },
    {
      id: 12,
      title: 'Flanges & Gaskets',
      image: '/images/Products_preview/Flanges&Gaskets.jpg',
      color: 'from-gray-600 to-gray-800',
      link: '/products/pipes-fittings/flanges-gaskets'
    }
  ];

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return;

    // Reset unmounting flag
    isUnmountingRef.current = false;

    let scrollTriggerInstance = null;

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      const cardsPerStack = isMobile ? 1 : 3;
      const totalCards = isMobile ? 8 : 12;
      const totalStacks = Math.ceil(totalCards / cardsPerStack);
      const stackGap = 25; // 25px vertical gap between stacks

      // Uneven offset for 3-card stacks (desktop)
      const unevenOffsets = [
        { x: -8, y: -2, rotation: -3 },  // Left card
        { x: 0, y: 0, rotation: 0 },     // Center card
        { x: 8, y: 2, rotation: 3 }      // Right card
      ];

      // Set initial positions for all cards
      cardsRefs.current.slice(0, totalCards).forEach((card, index) => {
        if (!card) return;

        const stackNumber = Math.floor(index / cardsPerStack);
        const positionInStack = index % cardsPerStack;

        // Desktop: Calculate horizontal position with uneven offset
        const baseX = isMobile ? 0 : positionInStack * 430; // Card width + gap (increased spacing)
        const offset = isMobile ? { x: 0, y: 0, rotation: 0 } : unevenOffsets[positionInStack];

        gsap.set(card, {
          x: baseX + offset.x,
          y: stackNumber === 0 ? offset.y : window.innerHeight,
          rotateZ: stackNumber === 0 ? offset.rotation : 0,
          opacity: 1,
          scale: 1,
          zIndex: stackNumber === 0 ? 100 : index,
          transformOrigin: 'center center',
          force3D: true
        });
      });

      // Set initial CTA state (hidden above viewport)
      gsap.set(ctaRef.current, {
        y: -window.innerHeight,
        opacity: 0,
        scale: 0.9,
        force3D: true
      });

      // Create master timeline with ScrollTrigger
      // Mobile: reduced scroll length and simpler scrub for smoother performance
      const masterTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: isMobile ? 1 : 0.5, // Higher scrub value on mobile = less frequent updates = smoother
          start: 'top top',
          end: isMobile ? '+=300%' : '+=400%', // Shorter scroll distance on mobile
          anticipatePin: 1,
          invalidateOnRefresh: true,
          pinSpacing: true,
          fastScrollEnd: true,
          onRefresh: (self) => {
            scrollTriggerInstance = self;
          }
        },
        smoothChildTiming: true
      });

      // Store the ScrollTrigger instance
      scrollTriggerInstance = masterTimeline.scrollTrigger;

      // Animation for each stack
      for (let stackIndex = 1; stackIndex < totalStacks; stackIndex++) {
        const stackStartIndex = stackIndex * cardsPerStack;
        const stackEndIndex = Math.min(stackStartIndex + cardsPerStack, totalCards);

        // Label for this stack phase
        const label = `stack${stackIndex}`;
        masterTimeline.add(label, stackIndex * 1);

        // Compress previous stacks
        for (let prevStackIndex = 0; prevStackIndex < stackIndex; prevStackIndex++) {
          const prevStartIndex = prevStackIndex * cardsPerStack;
          const prevEndIndex = Math.min(prevStartIndex + cardsPerStack, totalCards);

          for (let i = prevStartIndex; i < prevEndIndex; i++) {
            if (!cardsRefs.current[i]) continue;

            const positionInStack = i % cardsPerStack;
            const stackLevel = stackIndex - prevStackIndex;
            const offset = isMobile ? { x: 0, y: 0, rotation: 0 } : unevenOffsets[positionInStack];
            const baseX = isMobile ? 0 : positionInStack * 380;

            masterTimeline.to(
              cardsRefs.current[i],
              {
                x: baseX + offset.x,
                y: -stackLevel * stackGap + offset.y,
                rotateZ: offset.rotation,
                scale: 1 - stackLevel * 0.08,
                zIndex: prevStackIndex,
                duration: 1,
                ease: 'none',
                force3D: true
              },
              label
            );
          }
        }

        // Bring in new stack from bottom
        for (let i = stackStartIndex; i < stackEndIndex; i++) {
          if (!cardsRefs.current[i]) continue;

          const positionInStack = i % cardsPerStack;
          const offset = isMobile ? { x: 0, y: 0, rotation: 0 } : unevenOffsets[positionInStack];
          const baseX = isMobile ? 0 : positionInStack * 380;

          masterTimeline.fromTo(
            cardsRefs.current[i],
            {
              y: window.innerHeight,
              opacity: 1,
              scale: 0.9,
              rotateZ: 0,
              force3D: true
            },
            {
              x: baseX + offset.x,
              y: offset.y,
              rotateZ: offset.rotation,
              opacity: 1,
              scale: 1,
              zIndex: 100,
              duration: 1,
              ease: 'none',
              force3D: true
            },
            label
          );
        }
      }

      // Exit animation - all cards scroll up
      const exitLabel = 'exit';
      masterTimeline.add(exitLabel, totalStacks * 1);

      masterTimeline.to(
        cardsRefs.current.slice(0, totalCards),
        {
          y: -window.innerHeight,
          duration: 1,
          ease: 'none',
          stagger: 0.03,
          force3D: true
        },
        exitLabel
      );

      // CTA reveal from top - comes down after cards exit
      masterTimeline.fromTo(
        ctaRef.current,
        {
          y: -window.innerHeight,
          opacity: 0,
          scale: 0.9,
          force3D: true
        },
        {
          y: 150,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: isMobile ? 'power2.out' : 'back.out(1.7)', // Simpler easing on mobile
          force3D: true,
          onComplete: () => {
            // Skip fancy button animations on mobile
            if (isMobile || isUnmountingRef.current) return;

            if (exploreButtonRef.current) {
              const accentGlowElement = exploreButtonRef.current.querySelector('.accent-glow');
              const glowElement = exploreButtonRef.current.querySelector('.button-glow');

              // Create a timeline to sync button scale with accent glow
              const pulseTimeline = gsap.timeline();

              // Button pulse and accent glow appear together
              pulseTimeline.to(exploreButtonRef.current, {
                scale: 1.15,
                duration: 0.4,
                ease: 'power2.inOut',
              }, 0);

              // Accent glow appears as button scales up
              if (accentGlowElement) {
                pulseTimeline.to(accentGlowElement, {
                  opacity: 0.5,
                  duration: 0.2,
                  ease: 'power2.inOut',
                }, 0);
              }

              // Regular glow effect
              if (glowElement) {
                pulseTimeline.to(glowElement, {
                  opacity: 0.5,
                  duration: 0.1,
                  ease: 'power2.inOut',
                }, 0);
              }

              // Button scales back down
              pulseTimeline.to(exploreButtonRef.current, {
                scale: 1,
                duration: 0.4,
                ease: 'power2.inOut',
              });

              // Accent glow fades but stays visible
              if (accentGlowElement) {
                pulseTimeline.to(accentGlowElement, {
                  opacity: 0.5,
                  duration: 0.4,
                  ease: 'power2.inOut',
                  onComplete: () => {
                    // Then continuous subtle pulsing
                    if (!isUnmountingRef.current && accentGlowElement) {
                      gsap.to(accentGlowElement, {
                        opacity: 0.5,
                        duration: 1,
                        yoyo: true,
                        repeat: -1,
                        ease: 'sine.inOut',
                      });
                    }
                  }
                });
              }

              // Regular glow fades
              if (glowElement) {
                pulseTimeline.to(glowElement, {
                  opacity: 0,
                  duration: 0.4,
                  ease: 'power2.inOut',
                });
              }

              // Continuous subtle floating animation
              gsap.to(exploreButtonRef.current, {
                y: -8,
                duration: 2.5,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1,
              });
            }
          },
        },
        exitLabel + '+=0.5'
      );

      // Hold CTA visible for a moment before scroll unlocks
      masterTimeline.to(ctaRef.current, {
        y: 150,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        force3D: true
      });

      // Background image scroll animation - synced with card animations
      // Desktop background
      if (backgroundLinesRef.current && !isMobile) {
        const img = backgroundLinesRef.current.querySelector('img');
        if (img) {
          // Wait for image to load to get actual height
          const setupImageAnimation = () => {
            const imageHeight = img.naturalHeight;
            const viewportHeight = window.innerHeight;

            // Calculate travel distance for precise sync
            // Start with bottom 40% of image visible
            const startY = -imageHeight * 0.53;
            const endY = -imageHeight * -0.2;

            // Set initial state - image partially visible at start
            gsap.set(img, {
              y: startY,
              opacity: 1,
              force3D: true
            });

            // Create timeline synced to main scroll
            const imageTimeline = gsap.timeline({
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: '+=400%',
                scrub: 0.5,
                invalidateOnRefresh: true
              }
            });

            // Move from partially visible to completely off-screen at bottom
            imageTimeline.to(img, {
              y: endY,
              duration: 1,
              ease: 'none',
              force3D: true
            });
          };

          if (img.complete) {
            setupImageAnimation();
          } else {
            img.addEventListener('load', setupImageAnimation);
          }
        }
      }

      // Mobile background - animation for mobileBackgound1.png
      // Added directly to master timeline to work properly with pinned section
      if (mobileBackgroundRef.current && isMobile) {
        const mobileImg = mobileBackgroundRef.current.querySelector('img');
        if (mobileImg) {
          const setupMobileImageAnimation = () => {
            const imageHeight = mobileImg.naturalHeight;

            const startY = -imageHeight * 0.28;
            const endY = -imageHeight * -0.1;

            // Set initial state
            gsap.set(mobileImg, {
              y: startY,
              opacity: 1,
              force3D: true
            });

            // Get total duration of existing master timeline
            const totalDuration = masterTimeline.duration();

            // Add background scroll spanning the entire master timeline
            masterTimeline.fromTo(mobileImg, {
              y: startY,
              force3D: true
            }, {
              y: endY,
              duration: totalDuration,
              ease: 'none',
              force3D: true
            }, 0);
          };

          if (mobileImg.complete && mobileImg.naturalHeight > 0) {
            setupMobileImageAnimation();
          } else {
            mobileImg.addEventListener('load', setupMobileImageAnimation);
          }
        }
      }

    }, sectionRef);

    return () => {
      // Set unmounting flag
      isUnmountingRef.current = true;

      // Kill the ScrollTrigger instance first
      if (scrollTriggerInstance) {
        try {
          scrollTriggerInstance.kill(true);
        } catch (e) {
          // Ignore errors during cleanup
        }
      }

      // Kill all GSAP animations on specific elements
      cardsRefs.current.forEach(card => {
        if (card) {
          try {
            gsap.killTweensOf(card);
          } catch (e) {
            // Ignore errors during cleanup
          }
        }
      });

      if (ctaRef.current) {
        try {
          gsap.killTweensOf(ctaRef.current);
        } catch (e) {
          // Ignore errors during cleanup
        }
      }

      if (exploreButtonRef.current) {
        try {
          gsap.killTweensOf(exploreButtonRef.current);
        } catch (e) {
          // Ignore errors during cleanup
        }
      }

      if (cardsContainerRef.current) {
        try {
          gsap.killTweensOf(cardsContainerRef.current);
        } catch (e) {
          // Ignore errors during cleanup
        }
      }

      if (backgroundLinesRef.current) {
        try {
          gsap.killTweensOf(backgroundLinesRef.current);
          const img = backgroundLinesRef.current.querySelector('img');
          if (img) {
            gsap.killTweensOf(img);
            img.removeEventListener('load', () => { });
          }
        } catch (e) {
          // Ignore errors during cleanup
        }
      }



      // Revert the GSAP context
      try {
        ctx.revert();
      } catch (e) {
        // Ignore errors during cleanup
      }

      // Clear all remaining ScrollTriggers
      try {
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.vars && trigger.vars.trigger === sectionRef.current) {
            trigger.kill(true);
          }
        });
      } catch (e) {
        // Ignore errors during cleanup
      }
    };
  }, []);

  // Responsive handler
  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white"
      aria-label="Product Showcase"
    >
      {/* Skip link for accessibility */}
      <a
        href="#after-stacking-showcase"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[1000] focus:px-4 focus:py-2 focus:bg-white focus:text-primary-600 focus:rounded-lg focus:shadow-lg"
      >
        Skip product showcase
      </a>

      {/* Scroll-Synced Background Image - Desktop */}
      <div
        ref={backgroundLinesRef}
        className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block"
        style={{ backgroundColor: '#FBF8EC' }}
      >
        <img
          src="/background.png"
          alt=""
          className="absolute w-full h-auto object-cover"
          style={{ willChange: 'transform' }}
        />
      </div>

      {/* Scroll-Synced Background Image - Mobile */}
      <div
        ref={mobileBackgroundRef}
        className="absolute inset-0 overflow-hidden pointer-events-none md:hidden"
        style={{ backgroundColor: '#FBF8EC' }}
      >
        <img
          src="/mobileBackgound1.png"
          alt=""
          className="absolute w-full h-auto object-cover"
          style={{ willChange: 'transform' }}
        />
      </div>

      {/* Animated Background — hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-2/3 -right-48 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative h-screen flex items-start justify-center px-4 sm:px-6 lg:px-8 pt-[168px] md:pt-72">
        {/* Cards Container with Perspective */}
        <div
          ref={cardsContainerRef}
          className="relative w-full max-w-7xl mx-auto"
          style={{
            perspective: '2000px',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Cards */}
          {products
            .filter((_, index) => !isMobileView || index < 8) // Only show 8 cards on mobile
            .map((product, index) => (
              <div
                key={product.id}
                ref={(el) => (cardsRefs.current[index] = el)}
                className="group absolute inset-0 mx-auto w-full md:w-auto"
                style={{
                  transformStyle: 'preserve-3d',
                  willChange: 'transform'
                }}
              >
                <a href={product.link} className="glass-card block cursor-pointer h-[420px] w-full max-w-md md:max-w-xs mx-auto md:ml-12 rounded-3xl shadow-2xl overflow-hidden">
                  <div className="relative h-full w-full">
                    {/* Background Image with Parallax — no hover scale on mobile */}
                    <div
                      className="absolute inset-0 bg-cover bg-center md:transition-transform md:duration-700 md:group-hover:scale-110"
                      style={{ backgroundImage: `url(${product.image})` }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-30 md:group-hover:opacity-40 md:transition-opacity md:duration-300`}></div>
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-end p-8 text-white">
                      <div className="md:transform md:transition-transform md:duration-300 md:group-hover:translate-y-[-4px]">
                        <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                        
                        <div className="inline-flex items-center text-sm font-semibold bg-white/10 md:backdrop-blur-sm rounded-full px-4 py-2 md:group-hover:bg-white/20 md:transition-all md:duration-300">
                          <span>View Products</span>
                          <ArrowRight className="w-4 h-4 ml-2 md:group-hover:translate-x-1 md:transition-transform" />
                        </div>
                      </div>
                    </div>

                    {/* Shine effect on hover — desktop only */}
                    <div className="hidden md:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                  </div>
                </a>
              </div>
            ))}

          {/* CTA Button (slides down from top after cards exit) */}
          <div
            ref={ctaRef}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ willChange: 'transform, opacity' }}
          >
            <Link
              href="/products"
              ref={exploreButtonRef}
              className="pointer-events-auto group relative"
            >
              {/* Accent glow - continuous pulsing — desktop only */}
              <div className="accent-glow hidden md:block absolute -inset-2 bg-primary-500 rounded-full opacity-0 blur-2xl transition-all duration-300 group-hover:opacity-70 group-hover:blur-3xl"></div>

              {/* Animated glow background — desktop only */}
              <div className="button-glow hidden md:block absolute -inset-1 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-600 rounded-full opacity-0 blur-xl transition-all duration-300 group-hover:opacity-100 animate-gradient-xy"></div>

              {/* Main button */}
              <div className="relative px-10 py-5 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white rounded-full font-bold text-xl shadow-2xl overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary-500/50">
                {/* Shimmer effect — desktop only */}
                <div className="hidden md:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                </div>

                {/* Particles effect on hover — desktop only */}
                <div className="hidden md:block absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="particle absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-particle-1"></div>
                  <div className="particle absolute top-1/2 left-1/3 w-1 h-1 bg-white rounded-full animate-particle-2"></div>
                  <div className="particle absolute top-3/4 left-2/3 w-1 h-1 bg-white rounded-full animate-particle-3"></div>
                  <div className="particle absolute top-1/3 left-3/4 w-1 h-1 bg-white rounded-full animate-particle-4"></div>
                </div>

                {/* Border animation — desktop only */}
                <div className="hidden md:block absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 rounded-full border-2 border-white/50 animate-ping-slow"></div>
                </div>

                {/* Button content */}
                <div className="relative flex items-center space-x-3">
                  <span className="relative">
                    Explore More Products
                    {/* Underline animation */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                  </span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 group-hover:rotate-[-10deg]" />

                  {/* Sparkle on hover — desktop only */}
                  <span className="hidden md:block absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    ✨
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Anchor for skip link */}
      <div id="after-stacking-showcase"></div>
    </section>
  );
};

export default StackingCardsShowcase;
