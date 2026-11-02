'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, Download, Phone, Plus } from 'lucide-react';
import { addToCart } from '@/lib/cart';
import Toast from '@/components/shared/Toast';
import Image from 'next/image';

export default function ProductListing({ title, description, benefits, products, categoryBackLink, fitImages = false }) {
    const [toast, setToast] = useState(null);
    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Breadcrumb / Back Link */}
                <div className="mb-8">
                    <Link
                        href={categoryBackLink}
                        className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors font-medium"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Category
                    </Link>
                </div>

                {/* Hero Section */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-bl-full -mr-16 -mt-16 opacity-50"></div>

                    <div className="relative z-10 max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            {title}
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            {description}
                        </p>

                        {/* Key Benefits */}
                        {benefits && (
                            <div className="flex flex-wrap gap-4 mb-8">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center bg-green-50 px-4 py-2 rounded-full text-green-700 text-sm font-semibold border border-green-100">
                                        <Check className="w-4 h-4 mr-2" />
                                        {benefit}
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="flex flex-wrap gap-4">
                            <a href="#products" className="px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors">
                                View Products
                            </a>
                            <Link href="/contact" className="px-6 py-3 bg-white text-gray-700 border border-gray-200 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center">
                                <Phone className="w-4 h-4 mr-2" />
                                Request Quote
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Products Grid */}
                <div id="products" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                            <div className={`h-64 overflow-hidden relative flex items-center justify-center ${fitImages || product.fitImage ? 'bg-white' : 'bg-gray-100'}`}>
                                <Image
                                    src={product.image || '/images/Products_preview/PowerTools&HandTools.jpg'}
                                    alt={`${product.name} - supplied by Royal Electricals & Hardware`}
                                    fill
                                    className={`${fitImages || product.fitImage ? 'object-contain group-hover:scale-125' : 'object-cover group-hover:scale-110'} transition-transform duration-500`}
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {product.description}
                                </p>

                                <div className="space-y-2 mb-6">
                                    {product.specs?.map((spec, i) => (
                                        <div key={i} className="flex items-center text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></span>
                                            {spec}
                                        </div>
                                    ))}
                                </div>

                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => {
                                            const added = addToCart(product);
                                            if (added) {
                                                setToast({ productName: product.name });
                                            } else {
                                                // Product already in cart - could show different notification
                                                alert(`${product.name} is already in your enquiry list`);
                                            }
                                        }}
                                        className="w-12 h-12 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold transition-colors group"
                                        title="Add to enquiry"
                                    >
                                        <Plus className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    </button>
                                    <Link
                                        href={`/contact?product=${encodeURIComponent(product.name)}&desc=${encodeURIComponent(product.description)}&specs=${encodeURIComponent(product.specs?.join(', ') || '')}`}
                                        className="flex-1 px-6 py-3 flex items-center justify-center bg-gray-900 hover:bg-primary-600 text-white rounded-xl font-semibold transition-colors"
                                    >
                                        Enquire Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Catalog Download CTA */}
                <div className="mt-20 bg-primary-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                        </svg>
                    </div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">Download Full Catalog</h2>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            Explore Royal Electricals &amp; Hardware's product range and contact details in our downloadable catalogue.
                        </p>
                        <a
                            href="/Royal-Electricals-Catalog.pdf"
                            download="Royal-Electricals-Catalog.pdf"
                            className="inline-flex items-center px-8 py-4 bg-white text-primary-900 rounded-full font-bold hover:bg-gray-100 transition-colors"
                        >
                            <Download className="w-5 h-5 mr-2" />
                            Download PDF
                        </a>
                    </div>
                </div>

            </div>

            {/* Toast Notification */}
            {toast && (
                <Toast
                    productName={toast.productName}
                    message="Added to enquiry"
                    onClose={() => setToast(null)}
                />
            )}
        </div>
    );
}
