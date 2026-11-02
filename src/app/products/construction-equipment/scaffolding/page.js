import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'Cup Lock Scaffolding', description: 'Cuplock system scaffolding for high-rise construction with fast assembly and versatile configurations.', image: '/images/products/construction-equipment/scaffolding/cuplock-scaffolding-system.jpg', specs: ['System: Cuplock', 'Height: Up to 60m', 'Load: 3–10 kN/m²'] },
    { name: 'H-Frame Scaffolding', description: 'H-frame scaffolding for low to medium height construction, painting, and maintenance work.', image: '/images/products/construction-equipment/scaffolding/h-frame-scaffolding-steel.jpg', specs: ['Height: Up to 12m', 'Frame: 1.7x1.2m', 'Assembly: Quick Pin'] },
    { name: 'Scaffolding Planks', description: 'Steel and aluminum scaffolding planks with anti-slip surface for safe working platforms.', image: '/images/products/construction-equipment/scaffolding/scaffolding-plank-walk-board.jpg', specs: ['Length: 2–4m', 'Material: Steel/Aluminum', 'Anti-Slip: Yes'] },
    { name: 'Column Shuttering', description: 'Adjustable column formwork systems for casting concrete columns of various sizes.', image: '/images/products/construction-equipment/scaffolding/shuttering-plate-steel-formwork.jpg', specs: ['Size: 200–900mm', 'Material: Steel/Plywood', 'Reusable: 50+ Times'] },
    { name: 'Slab Shuttering', description: 'Table form and conventional slab shuttering for efficient concrete slab construction.', image: '/images/products/construction-equipment/scaffolding/shuttering-plate-steel-formwork1.jpg', specs: ['Type: Table/Conventional', 'Props: Adjustable', 'Slab: Up to 400mm'] },
    { name: 'Props', description: 'Adjustable steel props for temporary support of slabs, beams, and formwork during construction.', image: '/images/products/construction-equipment/scaffolding/prop-jack-adjustable-support.jpg', specs: ['Height: 1.6–5m', 'Load: 1.5–2.5 Ton', 'Adjustment: Screw Jack'] },
];

export default function ScaffoldingPage() {
    return (
        <ProductListing title="Scaffolding & Shuttering" description="Complete scaffolding and formwork systems for safe construction at height and efficient concrete casting." benefits={['Heavy Load Capacity', 'Quick Assembly', 'Bulk Supply', 'Safety Certified']} products={products} categoryBackLink="/products" />
    );
}
