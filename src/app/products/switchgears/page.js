'use client';

import Link from 'next/link';
import { ArrowLeft, Power, ToggleLeft, Gauge, ShieldCheck, Cog, Zap, ChevronRight } from 'lucide-react';

export default function SwitchgearsPage() {
    const subcategories = [
        {
            name: 'MCB & RCCB',
            description: 'Miniature circuit breakers and residual current devices for protection.',
            icon: <ToggleLeft className="w-8 h-8" />,
            color: 'from-primary-500 to-primary-700',
            href: '/products/switchgears/mcb-rccb',
        },
        {
            name: 'MCCB & ACB',
            description: 'Moulded case and air circuit breakers for higher ratings.',
            icon: <Power className="w-8 h-8" />,
            color: 'from-secondary-500 to-secondary-700',
            href: '/products/switchgears/mccb-acb',
        },
        {
            name: 'Contactors & Relays',
            description: 'Power contactors and control relays for motor control applications.',
            icon: <Cog className="w-8 h-8" />,
            color: 'from-primary-500 to-primary-700',
            href: '/products/switchgears/contactors-relays',
        },
        {
            name: 'Starters & Drives',
            description: 'DOL starters, star-delta starters, and variable frequency drives.',
            icon: <Gauge className="w-8 h-8" />,
            color: 'from-secondary-500 to-secondary-700',
            href: '/products/switchgears/starters-drives',
        },
        {
            name: 'Switches & Isolators',
            description: 'Load break switches, isolators, and changeover switches.',
            icon: <Zap className="w-8 h-8" />,
            color: 'from-primary-500 to-primary-700',
            href: '/products/switchgears/switches-isolators',
        },
        {
            name: 'Surge Protection',
            description: 'SPDs and lightning arresters for equipment protection.',
            icon: <ShieldCheck className="w-8 h-8" />,
            color: 'from-primary-500 to-primary-700',
            href: '/products/switchgears/surge-protection',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-8">
                    <Link href="/products" className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Products
                    </Link>
                </div>

                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl mb-6 shadow-lg">
                        <Power className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        <span className="text-primary-600">Switchgears</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Complete range of electrical switchgear and protection devices from leading manufacturers for reliable power distribution and control.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {subcategories.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="group relative bg-white rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden"
                        >
                            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.color} opacity-10 rounded-bl-full -mr-6 -mt-6 transition-transform group-hover:scale-150 duration-500`}></div>
                            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} text-white mb-4 shadow-md`}>
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.description}</p>
                            <div className="flex items-center text-primary-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                                View Products <ChevronRight className="w-4 h-4 ml-1" />
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Authorized Dealer For</h2>
                    <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                        <span className="text-2xl font-bold text-gray-400">Siemens</span>
                        <span className="text-2xl font-bold text-gray-400">Schneider</span>
                        <span className="text-2xl font-bold text-gray-400">ABB</span>
                        <span className="text-2xl font-bold text-gray-400">L&T</span>
                        <span className="text-2xl font-bold text-gray-400">Havells</span>
                    </div>
                </div>

                <div className="text-center">
                    <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl p-12 text-white">
                        <h2 className="text-3xl font-bold mb-4">Need Switchgear Components?</h2>
                        <p className="text-primary-200 mb-8 max-w-2xl mx-auto">
                            We supply switchgear and protection components for your project. Share your product list to request availability and pricing.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/products" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-900 rounded-full font-semibold hover:bg-gray-100 transition-all">
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                All Products
                            </Link>
                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-all">
                                Get Technical Support
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
