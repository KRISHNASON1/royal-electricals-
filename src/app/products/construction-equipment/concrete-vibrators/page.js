import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'Needle Vibrator', description: 'Immersion needle vibrators for consolidating fresh concrete in forms, columns, and beams.', image: '/images/products/construction-equipment/concrete-vibrators/needle-vibrator-concrete-immersion.jpg', specs: ['Needle: 25–60mm', 'Frequency: 12000 VPM', 'Power: Electric/Petrol'], fitImage: true },
    { name: 'Surface Vibrator', description: 'Surface screed vibrators for finishing and leveling concrete slabs and floor surfaces.', image: '/images/products/construction-equipment/concrete-vibrators/surface-vibrator-screed.jpg', specs: ['Length: 2–6m', 'Type: Single/Double Beam', 'Power: Electric/Petrol'] },
    { name: 'Plate Vibrator', description: 'Vibrating plate compactors also used for surface vibration of concrete flatwork.', image: '/images/products/construction-equipment/concrete-vibrators/surface-vibrator-screed3.jpg', specs: ['Plate: 400–600mm', 'Force: 10–25 kN', 'Engine: Petrol/Diesel'], fitImage: true },
    { name: 'External Vibrator', description: 'Bolt-on external vibrators for precast formwork, silos, and hoppers.', image: '/images/products/construction-equipment/concrete-vibrators/surface-vibrator-screed1.jpg', specs: ['Force: 1–50 kN', 'Mounting: Bolt-On', 'Power: Electric/Pneumatic'], fitImage: true },
    { name: 'High Frequency Vibrator', description: 'High-frequency concrete vibrators for precast production and demanding consolidation applications.', image: '/images/products/construction-equipment/concrete-vibrators/surface-vibrator-screed2.jpg', specs: ['Frequency: 12000–18000 VPM', 'Head: 30–65mm', 'Converter: Built-in'] },
];

export default function ConcreteVibratorsPage() {
    return (
        <ProductListing title="Concrete Vibrators" description="Concrete consolidation vibrators including needle, surface, plate, and external types for quality concrete placement." benefits={['All Types', 'Electric & Petrol', 'Spare Needles', 'Bulk Supply']} products={products} categoryBackLink="/products" />
    );
}
