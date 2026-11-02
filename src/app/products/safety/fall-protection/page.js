import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'Full Body Harness', description: 'Five-point full body safety harness for fall protection during work at height.', image: '/images/products/safety/fall-protection/full-body-safety-harness.jpg', specs: ['Points: 5', 'Capacity: 140kg', 'Standard: EN 361'] },
    { name: 'Safety Lanyard', description: 'Shock-absorbing safety lanyards for connecting harness to anchorage points.', image: '/images/products/safety/fall-protection/safety-lanyard-shock-absorber.jpg', specs: ['Length: 1.5–2m', 'Type: Shock Absorbing', 'Hook: Scaffold/Snap'] },
    { name: 'Retractable Lifeline', description: 'Self-retracting lifelines for continuous fall protection with automatic locking mechanism.', image: '/images/products/safety/fall-protection/retractable-fall-arrester-lifeline.jpg', specs: ['Length: 6–20m', 'Cable: Steel/Web', 'Lock: Automatic'] },
    { name: 'Safety Net', description: 'Construction safety nets for fall arrest and debris containment on building sites.', image: '/images/products/safety/fall-protection/safety-net-construction.jpg', specs: ['Mesh: 100x100mm', 'Material: HDPE/Nylon', 'Standard: EN 1263'] },
    { name: 'Roof Anchor', description: 'Permanent and temporary roof anchors for safe rooftop work and maintenance access.', image: '/images/products/safety/fall-protection/anchor-point-fall-protection.jpg', specs: ['Type: Fixed/Portable', 'Load: 22kN', 'Users: 1–3'] },
    { name: 'Carabiner', description: 'Self-locking steel and aluminum carabiners for connecting fall protection components.', image: '/images/products/safety/fall-protection/Carabiner.png', specs: ['Gate: Auto-Lock', 'Strength: 22–25kN', 'Material: Steel/Aluminum'] },
];

export default function FallProtectionPage() {
    return (
        <ProductListing title="Fall Protection" description="Complete fall protection systems including harnesses, lanyards, lifelines, and anchor points for safe work at height." benefits={['EN Certified', 'All Height Ranges', 'Product Selection', 'Bulk Supply']} products={products} categoryBackLink="/products" fitImages={true} />
    );
}
