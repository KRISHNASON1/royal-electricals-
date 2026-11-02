'use client';

import Link from 'next/link';
import { ArrowLeft, Zap, Cable, Plug, Radio, Building, Factory, Home, ChevronRight } from 'lucide-react';

export default function WiresCablesPage() {
    const subcategories = [
        {
            name: 'Power Cables',
            description: 'High voltage and low voltage power transmission cables.',
            icon: <Zap className="w-8 h-8" />,
            color: 'from-secondary-500 to-secondary-700',
            href: '/products/wires-cables/power-cables',
        },
        {
            name: 'Control Cables',
            description: 'Multi-core cables for instrumentation and control systems.',
            icon: <Cable className="w-8 h-8" />,
            color: 'from-primary-500 to-primary-700',
            href: '/products/wires-cables/control-cables',
        },
        {
            name: 'Flexible Wires',
            description: 'Single and multi-strand flexible wiring solutions.',
            icon: <Plug className="w-8 h-8" />,
            color: 'from-primary-500 to-primary-700',
            href: '/products/wires-cables/flexible-wires',
        },
        {
            name: 'Communication Cables',
            description: 'Data, networking, and telecommunication cables.',
            icon: <Radio className="w-8 h-8" />,
            color: 'from-secondary-500 to-secondary-700',
            href: '/products/wires-cables/communication-cables',
        },
        {
            name: 'Building Wires',
            description: 'House wiring and electrical installation cables.',
            icon: <Building className="w-8 h-8" />,
            color: 'from-primary-500 to-primary-700',
            href: '/products/wires-cables/building-wires',
        },
        {
            name: 'Industrial Cables',
            description: 'Heavy-duty cables for industrial machinery and plants.',
            icon: <Factory className="w-8 h-8" />,
            color: 'from-gray-600 to-gray-800',
            href: '/products/wires-cables/industrial-cables',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Breadcrumb */}
                <div className="mb-8">
                    <Link
                        href="/products"
                        className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Products
                    </Link>
                </div>

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-3xl mb-6 shadow-lg">
                        <Zap className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Wires & <span className="text-primary-600">Cables</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Premium quality electrical wires and cables from authorized dealers. Complete range for residential, commercial, and industrial applications.
                    </p>
                </div>

                {/* Subcategories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {subcategories.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="group relative bg-white rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden"
                        >
                            {/* Background accent */}
                            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.color} opacity-10 rounded-bl-full -mr-6 -mt-6 transition-transform group-hover:scale-150 duration-500`}></div>

                            {/* Icon */}
                            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} text-white mb-4 shadow-md`}>
                                {item.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                {item.description}
                            </p>

                            {/* Arrow */}
                            <div className="flex items-center text-primary-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                                View Products <ChevronRight className="w-4 h-4 ml-1" />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Featured Brands */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Authorized Dealer For</h2>
                    <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                        <span className="text-2xl font-bold text-gray-400">Polycab</span>
                        <span className="text-2xl font-bold text-gray-400">Havells</span>
                        <span className="text-2xl font-bold text-gray-400">Finolex</span>
                        <span className="text-2xl font-bold text-gray-400">KEI</span>
                        <span className="text-2xl font-bold text-gray-400">RR Kabel</span>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl p-12 text-white">
                        <h2 className="text-3xl font-bold mb-4">Need Bulk Cable Supply?</h2>
                        <p className="text-primary-200 mb-8 max-w-2xl mx-auto">
                            We provide competitive pricing for project-based requirements. Get customized quotations for your electrical projects.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/products"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-900 rounded-full font-semibold hover:bg-gray-100 transition-all"
                            >
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                All Products
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-all"
                            >
                                Request Quote
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
