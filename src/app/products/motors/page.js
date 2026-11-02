'use client';

import Link from 'next/link';
import { ArrowLeft, Settings, Cog, Fan, Zap, Droplet, ChevronRight } from 'lucide-react';

export default function MotorsPage() {
    const subcategories = [
        {
            name: 'Induction Motors',
            description: 'Three-phase squirrel cage induction motors for general industrial use.',
            icon: <Settings className="w-8 h-8" />,
            color: 'from-primary-500 to-primary-700',
            href: '/products/motors/induction-motors',
        },
        {
            name: 'Geared Motors',
            description: 'Motor and gearbox combinations for reduced speed applications.',
            icon: <Cog className="w-8 h-8" />,
            color: 'from-gray-600 to-gray-800',
            href: '/products/motors/geared-motors',
        },
        {
            name: 'Brake Motors',
            description: 'Motors with integrated electromagnetic brakes for quick stopping.',
            icon: <Fan className="w-8 h-8" />,
            color: 'from-secondary-500 to-secondary-700',
            href: '/products/motors/brake-motors',
        },
        {
            name: 'Crane Duty Motors',
            description: 'Heavy-duty motors designed for crane and hoist applications.',
            icon: <Zap className="w-8 h-8" />,
            color: 'from-primary-500 to-primary-700',
            href: '/products/motors/crane-duty-motors',
        },
        {
            name: 'Submersible Motors',
            description: 'Water-filled and oil-filled motors for pump applications.',
            icon: <Droplet className="w-8 h-8" />,
            color: 'from-secondary-500 to-secondary-700',
            href: '/products/motors/submersible-motors',
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
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-secondary-500 to-primary-600 rounded-3xl mb-6 shadow-lg">
                        <Settings className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Electric <span className="text-primary-600">Motors</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Wide range of electric motors from leading manufacturers for industrial, commercial, and specialized applications.
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
                        <span className="text-2xl font-bold text-gray-400">ABB</span>
                        <span className="text-2xl font-bold text-gray-400">Siemens</span>
                        <span className="text-2xl font-bold text-gray-400">Crompton</span>
                        <span className="text-2xl font-bold text-gray-400">Kirloskar</span>
                        <span className="text-2xl font-bold text-gray-400">Havells</span>
                    </div>
                </div>

                <div className="text-center">
                    <div className="bg-gradient-to-br from-secondary-900 to-secondary-800 rounded-3xl p-12 text-white">
                        <h2 className="text-3xl font-bold mb-4">Need Motor Selection Help?</h2>
                        <p className="text-secondary-200 mb-8 max-w-2xl mx-auto">
                            Share your motor specifications, load, and duty requirements with our sales team to request product availability and pricing.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/products" className="inline-flex items-center justify-center px-8 py-4 bg-white text-secondary-900 rounded-full font-semibold hover:bg-gray-100 transition-all">
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                All Products
                            </Link>
                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-secondary-600 text-white rounded-full font-semibold hover:bg-secondary-700 transition-all">
                                Request Product Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
