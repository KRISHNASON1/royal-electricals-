import ProductListing from '@/components/products/ProductListing';

export default function FireSafetyPage() {
    const products = [
        {
            name: 'ABC Powder Extinguisher',
            description: 'Multipurpose dry chemical powder extinguishers for Class A, B, and C fires.',
            image: '/images/Products_preview/Abrasives.jpg', // Fire extinguisher
            specs: ['ISI Marked', '4kg / 6kg / 9kg', 'Squeeze Grip'],
        },
        {
            name: 'CO2 Fire Extinguisher',
            description: 'Carbon Dioxide extinguishers for electrical fires and sensitive equipment.',
            image: '/images/Products_preview/Abrasives.jpg', // Industrial setting
            specs: ['Seamless Cylinder', '4.5kg Capacity', 'Non-Corrosive'],
        },
        {
            name: 'Fire Blanket',
            description: 'Fiberglass fire blankets for smothering small fires and kitchen safety.',
            image: '/images/Products_preview/Abrasives.jpg', // Placeholder
            specs: ['Heat Resistant > 500°C', 'Quick Release Tabs', 'Compact Box'],
        },
        {
            name: 'Hydrant Valve',
            description: 'Single headed hydrant landing valves for fire fighting water systems.',
            image: '/images/Products_preview/Abrasives.jpg', // Valves
            specs: ['Stainless Steel / Gunmetal', '63mm dia', 'Flanged Inlet'],
        },
    ];

    const benefits = [
        'ISI / BIS Approved',
        'Product Selection',
        'Bulk Supply',
        'Expert Consultation'
    ];

    return (
        <ProductListing
            title="Fire Safety Equipment"
            description="Top-grade fire fighting equipment to protect life and property. From extinguishers to hydrant systems, we provide certified solutions for all fire hazards."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/safety-ppe"
        />
    );
}
