'use client';

import Link from 'next/link';
import { ArrowLeft, Shield, Hand, HardHat, Shirt, Eye, Flame, Car, Wind, ChevronRight } from 'lucide-react';

export default function SafetyPPEPage() {
    const subcategories = [
        {
            name: 'Safety Gloves',
            description: 'Industrial and protective gloves for all applications.',
            icon: <Hand className="w-8 h-8" />,
            color: 'from-primary-500 to-primary-700',
            href: '/products/safety-ppe/safety-gloves',
        },
        {
            name: 'Fall Protection',
            description: 'Harnesses, lanyards and fall arrest systems.',
            icon: <HardHat className="w-8 h-8" />,
            color: 'from-primary-500 to-primary-700',
            href: '/products/safety-ppe/fall-protection',
        },
        {
            name: 'Workwear',
            description: 'Industrial uniforms, coveralls and protective clothing.',
            icon: <Shirt className="w-8 h-8" />,
            color: 'from-primary-500 to-primary-700',
            href: '/products/safety-ppe/workwear',
        },
        {
            name: 'Eye Protection',
            description: 'Safety glasses, goggles and face shields.',
            icon: <Eye className="w-8 h-8" />,
            color: 'from-secondary-500 to-secondary-700',
            href: '/products/safety-ppe/eye-protection',
        },
        {
            name: 'Safety Wear',
            description: 'High visibility vests, jackets and safety apparel.',
            icon: <Shield className="w-8 h-8" />,
            color: 'from-primary-500 to-primary-600',
            href: '/products/safety-ppe/safety-wear',
        },
        {
            name: 'Fire Safety',
            description: 'Fire extinguishers, blankets and firefighting equipment.',
            icon: <Flame className="w-8 h-8" />,
            color: 'from-secondary-500 to-secondary-700',
            href: '/products/safety-ppe/fire-safety',
        },
        {
            name: 'Road Safety Equipments',
            description: 'Traffic cones, barriers and road safety gear.',
            icon: <Car className="w-8 h-8" />,
            color: 'from-primary-500 to-primary-700',
            href: '/products/safety-ppe/road-safety',
        },
        {
            name: 'Respiratory Protection',
            description: 'Masks, respirators and breathing apparatus.',
            icon: <Wind className="w-8 h-8" />,
            color: 'from-secondary-500 to-secondary-700',
            href: '/products/safety-ppe/respiratory-protection',
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
                        <Shield className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Safety & <span className="text-primary-600">PPE</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Complete range of personal protective equipment and safety gear for industrial and commercial use.
                    </p>
                </div>

                {/* Subcategories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
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

                {/* View All / CTA Section */}
                <div className="text-center">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
                        <h2 className="text-3xl font-bold mb-4">Need Custom Safety Solutions?</h2>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            We offer comprehensive safety solutions tailored to your industry requirements. Contact us for bulk orders and custom requirements.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/products"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all"
                            >
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                All Products
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-all"
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
