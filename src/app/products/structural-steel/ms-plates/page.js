import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'HR Plate', description: 'Hot rolled mild steel plates for structural fabrication, pressure vessels, and heavy construction.', image: '/images/products/structural-steel/ms-plates/hr-plate.jpg', specs: ['Thickness: 3–100mm', 'Width: 1250–2500mm', 'Grade: IS 2062/SA 516'] },
    { name: 'CR Sheet', description: 'Cold rolled steel sheets for precision applications, automotive, and appliance manufacturing.', image: '/images/products/structural-steel/ms-plates/cr-sheet.jpg', specs: ['Thickness: 0.3–3mm', 'Finish: Bright Annealed', 'Standard: IS 513'] },
    { name: 'GP Sheet', description: 'Galvanized plain steel sheets for roofing, ductwork, and general sheet metal fabrication.', image: '/images/products/structural-steel/ms-plates/gp-sheet.jpg', specs: ['Thickness: 0.3–2mm', 'Coating: Zinc', 'Width: 1000–1250mm'] },
    { name: 'GC Sheet', description: 'Galvanized corrugated roofing sheets for industrial sheds, warehouses, and fencing.', image: '/images/products/structural-steel/ms-plates/gc-sheet.jpg', specs: ['Thickness: 0.35–0.80mm', 'Profile: Corrugated', 'Length: Custom'] },
    { name: 'Chequered Plate', description: 'Anti-slip chequered steel plates for staircase treads, walkways, and platform flooring.', image: '/images/products/structural-steel/ms-plates/chequered-plate.jpg', specs: ['Thickness: 3–12mm', 'Pattern: Diamond', 'Anti-Slip: Yes'] },
    { name: 'Perforated Sheet', description: 'Perforated metal sheets with round, square, or custom hole patterns for screening and decorative use.', image: '/images/products/structural-steel/ms-plates/perforated-sheet.jpg', specs: ['Material: MS/GI/SS', 'Hole: Round/Square', 'Open Area: 20–60%'] },
];

export default function MSPlatesPage() {
    return (
        <ProductListing title="MS Plates & Sheets" description="Structural steel plates and sheets in HR, CR, GP, GC, and specialty profiles for construction and fabrication." benefits={['IS 2062 Certified', 'All Thicknesses', 'Standard Sizes Available', 'Delivery Available']} products={products} categoryBackLink="/products" />
    );
}
