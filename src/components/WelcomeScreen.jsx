'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function WelcomeScreen() {
    const [isVisible, setIsVisible] = useState(true);
    const [isFading, setIsFading] = useState(false);
    const [shouldRender, setShouldRender] = useState(true);
    const hasStartedDismiss = useRef(false);

    useEffect(() => {
        // Check if the welcome screen has already been shown in this session
        const hasBeenShown = sessionStorage.getItem('welcomeScreenShown');

        if (hasBeenShown) {
            setIsVisible(false);
            setShouldRender(false);
            return;
        }

        // Mark the welcome screen as shown immediately
        sessionStorage.setItem('welcomeScreenShown', 'true');

        // Dismiss function — only runs once
        const startDismiss = () => {
            if (hasStartedDismiss.current) return;
            hasStartedDismiss.current = true;

            const fadeTimer = setTimeout(() => {
                setIsFading(true);
                const removeTimer = setTimeout(() => {
                    setIsVisible(false);
                    setShouldRender(false);
                }, 800);

                return () => clearTimeout(removeTimer);
            }, 1200);

            return () => clearTimeout(fadeTimer);
        };

        // Guaranteed fallback — never stay visible longer than 3 seconds
        // This catches edge cases where 'load' never fires (SPA navigation, back button, etc.)
        const maxTimeout = setTimeout(() => {
            startDismiss();
        }, 3000);

        // Primary trigger — page load event
        const handleLoad = () => {
            startDismiss();
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => {
            clearTimeout(maxTimeout);
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    // Don't render anything if it should not be shown
    if (!shouldRender) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-800 ease-out ${isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
            style={{
                background: 'linear-gradient(135deg, #FBF8EC 0%, #F8F1D8 25%, #ffffff 50%, #FBEAE8 75%, #FDF3F2 100%)',
            }}
        >
            {/* Subtle animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute -top-1/2 -left-1/2 w-full h-full opacity-30 animate-pulse"
                    style={{
                        background: 'radial-gradient(circle at center, #B68B22 0%, transparent 70%)',
                        animationDuration: '3s',
                    }}
                />
                <div
                    className="absolute -bottom-1/2 -right-1/2 w-full h-full opacity-20 animate-pulse"
                    style={{
                        background: 'radial-gradient(circle at center, #C8423D 0%, transparent 70%)',
                        animationDuration: '4s',
                        animationDelay: '1s',
                    }}
                />
            </div>

            {/* Logo and Text Container */}
            <div className="relative z-10 flex flex-col items-center justify-center">
                {/* Logo with subtle animation */}
                <div className="relative mb-8 animate-logo-entrance">
                    <div
                        className="absolute inset-0 blur-2xl opacity-40"
                        style={{
                            background: 'radial-gradient(circle, #B68B22 0%, transparent 70%)',
                        }}
                    />
                    <Image
                        src="/royal-crown-transparent.png"
                        alt="Royal Electricals & Hardware Logo"
                        width={1448}
                        height={1086}
                        className="relative z-10 drop-shadow-xl w-40 sm:w-52 h-auto"
                        priority
                    />
                </div>

                {/* Company Name */}
                <h1 className="text-xl md:text-3xl font-bold tracking-wide animate-text-entrance text-center px-6">
                    <span
                        className="bg-clip-text text-transparent"
                        style={{
                            backgroundImage: 'linear-gradient(135deg, #C8423D 0%, #B68B22 50%, #C8423D 100%)',
                        }}
                    >
                        Royal Electricals & Hardware
                    </span>
                </h1>

                {/* Subtle loading indicator */}
                <div className="mt-10 flex space-x-2 animate-text-entrance" style={{ animationDelay: '0.3s' }}>
                    <div
                        className="w-2 h-2 rounded-full animate-bounce"
                        style={{
                            backgroundColor: '#B68B22',
                            animationDelay: '0ms',
                        }}
                    />
                    <div
                        className="w-2 h-2 rounded-full animate-bounce"
                        style={{
                            backgroundColor: '#B68B22',
                            animationDelay: '150ms',
                        }}
                    />
                    <div
                        className="w-2 h-2 rounded-full animate-bounce"
                        style={{
                            backgroundColor: '#B68B22',
                            animationDelay: '300ms',
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
