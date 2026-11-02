import ProductListing from '@/components/products/ProductListing';

export default function FallProtectionPage() {
    const products = [
        {
            name: 'Full Body Harness',
            description: 'Ergonomic full body harness with dorsal D-ring and adjustable thigh straps for work at height.',
            image: '/images/Products_preview/Abrasives.jpg', // Construction worker high up
            specs: ['EN 361 Certified', 'Dual Color Webbing', 'Corrosion Resistant Fittings'],
        },
        {
            name: 'Double Lanyard with Absorber',
            description: 'Twin-leg twisted rope lanyard with energy absorber to limit impact force during a fall.',
            image: '/images/Products_preview/Abrasives.jpg', // Rope/gear
            specs: ['EN 355 Compliant', 'Scaffold Hooks', 'Shock Absorption < 6kN'],
        },
        {
            name: 'Retractable Fall Arrester',
            description: 'Self-retracting lifeline (SRL) with galvanized wire rope for vertical mobility and instant locking.',
            image: '/images/Products_preview/Abrasives.jpg', // Industrial gear
            specs: ['10m - 30m Length options', 'Swivel Snap Hook', 'High Impact Casing'],
        },
        {
            name: 'Safety Nets',
            description: 'Heavy duty knotted safety nets for personnel safety and debris containment at construction sites.',
            image: '/images/Products_preview/Abrasives.jpg', // Building construction
            specs: ['High Tenacity Polypropylene', 'UV Stabilized', 'Border Rope Reinforced'],
        },
    ];

    const benefits = [
        'Certified Safety Gear',
        'Product Specifications',
        'Product Selection',
        'Fast Replacement'
    ];

    return (
        <ProductListing
            title="Fall Protection Equipment"
            description="Essential gear for working at heights. Our fall protection systems are engineered to prevent accidents and ensure 100% tie-off compliance in construction and industrial sectors."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/safety-ppe"
        />
    );
}
