import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'Equal Angle', description: 'Equal leg mild steel angles for structural framing, brackets, and general fabrication.', image: '/images/products/structural-steel/ms-angles/equal-angle.jpg', specs: ['Size: 20x20–200x200mm', 'Thickness: 3–20mm', 'Standard: IS 2062'] },
    { name: 'Unequal Angle', description: 'Unequal leg steel angles for special structural and fabrication requirements.', image: '/images/products/structural-steel/ms-angles/unequal-angle.jpg', specs: ['Size: Various', 'Thickness: 3–16mm', 'Length: 6m/12m'] },
    { name: 'L-Angle', description: 'L-shaped mild steel angles for construction support, frames, and general structural use.', image: '/images/products/structural-steel/ms-angles/mild-steel-angle-equal-leg.jpg', specs: ['Size: 25x25–150x150mm', 'Grade: E250/E350', 'Finish: Hot Rolled'] },
    { name: 'Slotted Angle', description: 'Pre-punched slotted angles for easy bolt-together shelving, racks, and storage structures.', image: '/images/products/structural-steel/ms-angles/slotted-angle.jpg', specs: ['Size: 35x35–50x50mm', 'Slot: Standard', 'Finish: Painted/GI'] },
    { name: 'Mild Steel Angle', description: 'General purpose MS angles for fabrication, support structures, and framework construction.', image: '/images/products/structural-steel/ms-angles/mild-steel-angle.jpg', specs: ['Grade: IS 2062', 'Weight: As per IS', 'Length: 6m Standard'] },
];

export default function MSAnglesPage() {
    return (
        <ProductListing title="MS Angles" description="Mild steel angles in all sizes and grades for structural, fabrication, and construction applications." benefits={['IS 2062 Certified', 'All Sizes', 'Mill TC Available', 'Standard Lengths']} products={products} categoryBackLink="/products" />
    );
}
