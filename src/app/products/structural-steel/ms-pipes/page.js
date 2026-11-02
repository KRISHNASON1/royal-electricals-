import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'ERW Pipe', description: 'Electric Resistance Welded pipes for water supply, gas lines, and structural applications.', image: '/images/products/structural-steel/ms-pipes/ms-round-pipe-erw.jpg', specs: ['Size: 15mm–250mm NB', 'Standard: IS 1239/IS 3589', 'Class: Light/Medium/Heavy'] },
    { name: 'Seamless Pipe', description: 'Seamless mild steel pipes for high-pressure applications, boilers, and hydraulic systems.', image: '/images/products/structural-steel/ms-pipes/seamless-pipe.jpg', specs: ['OD: 21–610mm', 'Standard: IS 1239/ASTM', 'Pressure: High'] },
    { name: 'Square Tube', description: 'Mild steel square tubes for furniture, frames, structures, and decorative applications.', image: '/images/products/structural-steel/ms-pipes/square-tube.jpg', specs: ['Size: 12x12–200x200mm', 'Thickness: 1–6mm', 'Finish: ERW'] },
    { name: 'Rectangular Tube', description: 'Rectangular hollow section tubes for structural framing, gates, and fabrication work.', image: '/images/products/structural-steel/ms-pipes/rectangular-tube.jpg', specs: ['Size: 20x10–300x200mm', 'Thickness: 1–6mm', 'Standard: IS 4923'] },
    { name: 'Round Tube', description: 'Mild steel round tubes for handrails, scaffolding, and general structural applications.', image: '/images/products/structural-steel/ms-pipes/ms-round-pipe-erw.jpg', specs: ['OD: 12–200mm', 'Thickness: 1–5mm', 'Length: 6m Standard'] },
    { name: 'Scaffolding Pipe', description: 'Heavy-duty scaffolding pipes conforming to IS standards for safe construction scaffolding systems.', image: '/images/products/structural-steel/ms-pipes/scaffolding-pipe-steel.jpg', specs: ['OD: 48.3mm', 'Thickness: 3.2–4mm', 'Standard: IS 1161'] },
];

export default function MSPipesPage() {
    return (
        <ProductListing title="MS Pipes & Tubes" description="Mild steel pipes and tubes in ERW, seamless, and hollow section profiles for structural, plumbing, and industrial applications." benefits={['IS Certified', 'All Sizes', 'Standard Lengths', 'Bulk Supply']} products={products} categoryBackLink="/products" />
    );
}
