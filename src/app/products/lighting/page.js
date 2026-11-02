'use client';

import Link from 'next/link';
import { ArrowLeft, Lightbulb, Sun, Factory, Building, Flashlight, ChevronRight } from 'lucide-react';

export default function LightingPage() {
    const subcategories = [
        {
            name: 'LED Lights',
            description: 'Energy-efficient LED bulbs, tubes, and panels for general lighting.',
            icon: <Lightbulb className="w-8 h-8" />,
            color: 'from-primary-400 to-primary-600',
            href: '/products/lighting/led-lights',
        },
        {
            name: 'Industrial Lighting',
            description: 'High bay lights, floodlights, and factory lighting solutions.',
            icon: <Factory className="w-8 h-8" />,
            color: 'from-gray-600 to-gray-800',
            href: '/products/lighting/industrial-lighting',
        },
        {
            name: 'Street Lighting',
            description: 'Outdoor street lights and area lighting fixtures.',
            icon: <Sun className="w-8 h-8" />,
            color: 'from-primary-500 to-primary-700',
            href: '/products/lighting/street-lighting',
        },
        {
            name: 'Commercial Lighting',
            description: 'Office, retail, and hospitality lighting solutions.',
            icon: <Building className="w-8 h-8" />,
            color: 'from-secondary-500 to-secondary-700',
            href: '/products/lighting/commercial-lighting',
        },
        {
            name: 'Emergency Lighting',
            description: 'Exit signs, emergency lights, and battery backup systems.',
            icon: <Flashlight className="w-8 h-8" />,
            color: 'from-secondary-500 to-secondary-700',
            href: '/products/lighting/emergency-lighting',
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
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-500 rounded-3xl mb-6 shadow-lg">
                        <Lightbulb className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        <span className="text-primary-600">Lighting</span> Solutions
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Complete range of energy-efficient lighting products for residential, commercial, industrial, and outdoor applications.
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
                        <span className="text-2xl font-bold text-gray-400">Philips</span>
                        <span className="text-2xl font-bold text-gray-400">Havells</span>
                        <span className="text-2xl font-bold text-gray-400">Crompton</span>
                        <span className="text-2xl font-bold text-gray-400">Syska</span>
                        <span className="text-2xl font-bold text-gray-400">Wipro</span>
                    </div>
                </div>

                <div className="text-center">
                    <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-12 text-white">
                        <h2 className="text-3xl font-bold mb-4">Need Lighting Design Support?</h2>
                        <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
                            Our lighting experts can help you with lux calculations, product selection, and energy-efficient solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/products" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 rounded-full font-semibold hover:bg-gray-100 transition-all">
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                All Products
                            </Link>
                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-all border border-primary-400">
                                Get Lighting Design
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
