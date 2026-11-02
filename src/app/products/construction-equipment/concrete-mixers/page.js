import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'Portable Mixer', description: 'Portable concrete mixers for small-scale construction, flooring, and repair work.', image: '/images/products/construction-equipment/concrete-mixers/transit-mixer-truck-concrete.jpg', specs: ['Capacity: 140–280L', 'Power: Electric/Diesel', 'Type: Tilting'] },
    { name: 'Mobile Mixer', description: 'Self-loading mobile concrete mixers for medium construction projects with on-site batching.', image: '/images/products/construction-equipment/concrete-mixers/mobile-concrete-batching-plant.jpg', specs: ['Capacity: 1–4 cu m', 'Type: Self-Loading', 'Drive: Diesel'] },
    { name: 'Reversible Drum Mixer', description: 'Reversible drum concrete mixers for consistent mixing and efficient discharge of concrete.', image: '/images/products/construction-equipment/concrete-mixers/reversible-drum-mixer-concrete.jpg', specs: ['Capacity: 350–1000L', 'Drum: Reversible', 'Discharge: Both Sides'] },
    { name: 'Tilting Drum Mixer', description: 'Manual tilting drum mixers for small batches of concrete, mortar, and plaster.', image: '/images/products/construction-equipment/concrete-mixers/reversible-drum-mixer-concrete1.jpg', specs: ['Capacity: 140–500L', 'Tilt: Manual', 'Power: Electric'] },
    { name: 'Pan Mixer', description: 'Planetary pan mixers for homogeneous mixing of concrete, mortar, and refractory materials.', image: '/images/products/construction-equipment/concrete-mixers/pan-type-concrete-mixer.jpg', specs: ['Capacity: 100–750L', 'Type: Planetary', 'Mixing: Homogeneous'] },
    { name: 'Transit Mixer', description: 'Truck-mounted transit mixers for transporting ready-mix concrete from batching plants to sites.', image: '/images/products/construction-equipment/concrete-mixers/transit-mixer-truck-concrete.jpg', specs: ['Capacity: 6–12 cu m', 'Drum: Rotating', 'Chassis: Heavy Duty'] },
];

export default function ConcreteMixersPage() {
    return (
        <ProductListing title="Concrete Mixers" description="Concrete mixing equipment from portable tilting mixers to transit mixers for all project scales." benefits={['All Capacities', 'Electric & Diesel', 'Bulk Supply', 'Spare Parts Support']} products={products} categoryBackLink="/products" />
    );
}
