'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X, ChevronDown, ChevronRight, Shield, Zap, Power, Settings, Sun, Lightbulb, PenTool, Droplet, Hammer, Wrench } from 'lucide-react';
import GlassSurface from '../ui/GlassSurface';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
    const [mounted, setMounted] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);
    const productsButtonRef = useRef(null);
    const hoverTimeoutRef = useRef(null);
    const pathname = usePathname();

    // Close menus on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsProductsDropdownOpen(false);
    }, [pathname]);

    const productCategories = [
        { name: 'Electrical', href: '/products#electrical', icon: <Zap className="w-4 h-4" /> },
        { name: 'Hardware', href: '/products#hardware', icon: <Wrench className="w-4 h-4" /> },
        { name: 'Construction Chemicals & Paints', href: '/products#construction-chemicals', icon: <Droplet className="w-4 h-4" /> },
        { name: 'Structural Steel', href: '/products#structural-steel', icon: <Settings className="w-4 h-4" /> },
        { name: 'Safety', href: '/products#safety', icon: <Shield className="w-4 h-4" /> },
        { name: 'Construction Equipment', href: '/products#construction-equipment', icon: <Hammer className="w-4 h-4" /> },
        { name: 'Pipes, Pipe Fittings & Valves', href: '/products#pipes-fittings', icon: <PenTool className="w-4 h-4" /> },
    ];

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    useEffect(() => {
        setMounted(true);

        // Detect mobile view
        const checkMobileView = () => {
            setIsMobileView(window.innerWidth < 1024);
        };

        checkMobileView();
        window.addEventListener('resize', checkMobileView);

        return () => window.removeEventListener('resize', checkMobileView);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 50;
            if (scrolled !== isScrolled) {
                setIsScrolled(scrolled);
                // Only auto-close dropdown on scroll for desktop hover behavior
                // On mobile, the user explicitly tapped to open it, so don't close on scroll
                if (scrolled && !isMobileView) {
                    setIsProductsDropdownOpen(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrolled, isMobileView]);

    // Update dropdown position when button is hovered (desktop only)
    useEffect(() => {
        if (isProductsDropdownOpen && productsButtonRef.current && !isMobileView) {
            const rect = productsButtonRef.current.getBoundingClientRect();
            setDropdownPosition({
                top: rect.bottom + 20,
                left: rect.left - 100,
            });
        }
    }, [isProductsDropdownOpen, isMobileView]);

    // Keyboard handling and scroll lock for mobile menu
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                if (isProductsDropdownOpen) {
                    setIsProductsDropdownOpen(false);
                } else if (isMobileMenuOpen) {
                    setIsMobileMenuOpen(false);
                }
            }
        };

        document.addEventListener('keydown', handleEscape);

        // Only lock scroll for mobile menu, NOT for desktop products dropdown hover
        if (isMobileMenuOpen) {
            const scrollY = window.scrollY;
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';

            return () => {
                document.removeEventListener('keydown', handleEscape);
                document.body.style.overflow = '';
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.width = '';
                window.scrollTo(0, scrollY);
            };
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isMobileMenuOpen, isProductsDropdownOpen]);

    const handleMouseEnter = () => {
        if (window.innerWidth < 1024) return;
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
            hoverTimeoutRef.current = null;
        }
        setIsProductsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        if (window.innerWidth < 1024) return;
        hoverTimeoutRef.current = setTimeout(() => {
            setIsProductsDropdownOpen(false);
        }, 300);
    };

    // Portal-based dropdown
    const ProductsDropdownPortal = () => {
        if (!mounted || !isProductsDropdownOpen) return null;

        const dropdownContent = (
            <>
                {/* Backdrop for mobile - click to close */}
                <div
                    className="fixed inset-0 z-[9998] lg:hidden"
                    onClick={() => setIsProductsDropdownOpen(false)}
                    aria-hidden="true"
                ></div>

                <div
                    className="fixed z-[9999] animate-in fade-in slide-in-from-top-2 duration-200"
                    style={isMobileView ? {
                        top: '5rem',
                        left: '50%',
                        transform: 'translateX(-50%)',
                    } : {
                        top: dropdownPosition.top,
                        left: dropdownPosition.left,
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="w-[95vw] max-w-[520px] lg:w-[520px] max-h-[80vh] lg:max-h-none overflow-y-auto overflow-x-hidden bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 relative thin-scrollbar overscroll-contain">
                        {/* Close Button - Mobile Only */}
                        <button
                            onClick={() => setIsProductsDropdownOpen(false)}
                            className="lg:hidden absolute top-3 right-3 p-2 rounded-lg hover:bg-gray-100/50 transition-colors z-20"
                            aria-label="Close products menu"
                        >
                            <X className="w-5 h-5 text-gray-600" />
                        </button>

                        {/* Background Logo Pattern */}
                        <div
                            className="absolute top-1/2 -translate-y-1/2 -right-12 w-[480px] h-[480px] opacity-[0.08] pointer-events-none"
                            style={{
                                backgroundImage: 'url(/royal-crown-transparent.png)',
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center right',
                            }}
                        />

                        <div className="p-6 relative z-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                                {/* Products Column */}
                                <div>
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Product Categories</h3>
                                    <div className="space-y-1">
                                        {productCategories.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                onClick={() => setIsProductsDropdownOpen(false)}
                                                className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-primary-50 text-gray-700 hover:text-primary-600 transition-all group"
                                            >
                                                <span className="text-gray-400 group-hover:text-primary-500">{item.icon}</span>
                                                <span className="font-medium text-sm">{item.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* Product enquiry column */}
                                <div>
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Product Enquiries</h3>
                                    {/* CTA */}
                                    <div className="mt-6 p-4 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl">
                                        <p className="text-sm text-gray-600 mb-3">Need help finding the right product?</p>
                                        <Link
                                            href="/contact"
                                            onClick={() => setIsProductsDropdownOpen(false)}
                                            className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700"
                                        >
                                            Contact Us <ChevronRight className="w-4 h-4 ml-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* View All Link */}
                            <div className="mt-6 pt-4 border-t border-gray-200/50">
                                <Link
                                    href="/products"
                                    onClick={() => setIsProductsDropdownOpen(false)}
                                    className="flex items-center justify-center text-sm font-semibold text-primary-600 hover:text-primary-700 py-2"
                                >
                                    View All Products <ChevronRight className="w-4 h-4 ml-1" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );

        return createPortal(dropdownContent, document.body);
    };

    // Navbar content (shared between glass and non-glass versions)
    const NavbarContent = () => (
        <div className="flex items-center justify-between h-full w-full px-6 lg:px-8">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group flex-shrink-0">
                <div className="w-20 h-16 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                    <Image src="/royal-crown-transparent.png" alt="Royal Electricals & Hardware crown" width={1448} height={1086} className="object-contain w-full h-full" priority />
                </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 flex-shrink-0">
                <Link
                    href="/"
                    className={`font-bold transition-colors duration-200 relative group py-2 ${isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-gray-700 hover:text-primary-600'}`}
                >
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-700 group-hover:w-full transition-all duration-300"></span>
                </Link>

                {/* Products Dropdown Trigger */}
                <div
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <button
                        ref={productsButtonRef}
                        className={`flex items-center space-x-1 font-bold transition-colors duration-200 relative group py-2 ${isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-gray-700 hover:text-primary-600'}`}
                    >
                        <span>Products</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-700 group-hover:w-full transition-all duration-300"></span>
                    </button>
                </div>

                {navLinks.slice(1).map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`font-bold transition-colors duration-200 relative group py-2 ${isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-gray-700 hover:text-primary-600'}`}
                    >
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-700 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                ))}

                <Link
                    href="/contact"
                    className="px-5 py-2.5 bg-gradient-to-r from-secondary-500 to-secondary-700 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 text-sm"
                >
                    Get Quote
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100/50 transition-colors"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
            >
                {isMobileMenuOpen ? (
                    <X className="w-6 h-6 text-gray-900" />
                ) : (
                    <Menu className="w-6 h-6 text-gray-900" />
                )}
            </button>
        </div>
    );

    return (
        <>
            {/* Main Navbar - Always visible, glass effect on scroll (desktop) and always (mobile) */}
            <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-[110] w-[95%] max-w-6xl transition-all duration-300">
                {isScrolled || isMobileView ? (
                    // Glass effect navbar when scrolled OR on mobile
                    <GlassSurface
                        width="100%"
                        height={80}
                        borderRadius={44}
                        brightness={98}
                        opacity={0.85}
                        blur={11}
                        displace={4}
                        backgroundOpacity={0.3}
                        saturation={1.1}
                        className="shadow-2xl"
                    >
                        <NavbarContent />
                    </GlassSurface>
                ) : (
                    // Transparent navbar at top (desktop only, when not scrolled)
                    <div className="w-full h-20">
                        <NavbarContent />
                    </div>
                )}
            </nav>

            {/* Portal-based Dropdown */}
            <ProductsDropdownPortal />

            {/* Backdrop for mobile menu - click outside to close */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 z-[105] lg:hidden transition-opacity duration-75"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-hidden="true"
                ></div>
            )}

            {/* Mobile Menu - Dropdown near burger icon */}
            {isMobileMenuOpen && (
                <div className="fixed top-20 right-4 w-52 z-[108] lg:hidden transition-all duration-75" style={{ touchAction: 'auto' }}>
                    {/* Custom Glass Effect Dropdown */}
                    <div className="bg-white/25 backdrop-blur-xl rounded-xl shadow-2xl border border-white/30 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="p-3">
                            <h2 id="mobile-menu-title" className="sr-only">Navigation Menu</h2>

                            {/* Compact Navigation Menu */}
                            <nav className="flex flex-col space-y-1">
                                <Link
                                    href="/"
                                    onClick={(e) => {
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="block text-sm font-semibold text-gray-900 hover:text-primary-600 transition-colors py-2.5 px-3 rounded-lg hover:bg-white/40 active:scale-[0.98]"
                                >
                                    Home
                                </Link>

                                {/* Products - Opens Desktop-Style Dropdown */}
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setIsMobileMenuOpen(false);
                                        // Delay opening dropdown to let mobile menu scroll-lock cleanup finish
                                        // Without this, the body scroll position restoration fires a scroll event
                                        setTimeout(() => {
                                            setIsProductsDropdownOpen(true);
                                        }, 150);
                                    }}
                                    className="block w-full text-left text-sm font-semibold text-gray-900 hover:text-primary-600 transition-colors py-2.5 px-3 rounded-lg hover:bg-white/40 active:scale-[0.98] flex items-center justify-between"
                                >
                                    <span>Products</span>
                                    <ChevronRight className="w-4 h-4" />
                                </button>

                                <Link
                                    href="/about"
                                    onClick={(e) => {
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="block text-sm font-semibold text-gray-900 hover:text-primary-600 transition-colors py-2.5 px-3 rounded-lg hover:bg-white/40 active:scale-[0.98]"
                                >
                                    About
                                </Link>

                                <Link
                                    href="/contact"
                                    onClick={(e) => {
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="block text-sm font-semibold text-gray-900 hover:text-primary-600 transition-colors py-2.5 px-3 rounded-lg hover:bg-white/40 active:scale-[0.98]"
                                >
                                    Contact
                                </Link>

                                <Link
                                    href="/contact"
                                    onClick={(e) => {
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="block w-full px-4 py-2.5 bg-gradient-to-r from-secondary-500 to-secondary-700 text-white rounded-full font-semibold text-center text-sm hover:shadow-lg active:scale-[0.98] transition-all duration-200 mt-2"
                                >
                                    Get Quote
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
