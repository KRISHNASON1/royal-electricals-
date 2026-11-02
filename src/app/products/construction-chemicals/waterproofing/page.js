import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'Crystalline Waterproofing', description: 'Integral crystalline waterproofing compounds that become part of the concrete structure for permanent protection.', image: '/images/products/construction-chemicals/waterproofing/crystalline-waterproofing-admixture.jpg', specs: ['Type: Integral', 'Application: Brush/Spray', 'Coverage: 1–1.5 kg/sqm'] },
    { name: 'Bituminous Coating', description: 'Cold-applied bituminous waterproofing coatings for foundations, basements, and below-grade structures.', image: '/images/products/construction-chemicals/waterproofing/bituminous-waterproofing-membrane.jpg', specs: ['Type: Solvent/Water Based', 'Thickness: 2–3mm', 'UV Stable Options'] },
    { name: 'Waterproof Membrane', description: 'Self-adhesive and torch-applied waterproofing membranes for roofs, terraces, and wet areas.', image: '/images/products/construction-chemicals/waterproofing/waterproofing-membrane-liquid-applied.jpg', specs: ['Type: APP/SBS Modified', 'Thickness: 3–4mm', 'Life: 15–25 Years'] },
    { name: 'Terrace Waterproofing', description: 'Elastomeric coatings and systems for terrace and flat roof waterproofing with crack-bridging capability.', image: '/images/products/construction-chemicals/waterproofing/terrace-waterproofing.jpg', specs: ['Elongation: >300%', 'Reflective: Optional', 'Coverage: 1.5–2 kg/sqm'] },
    { name: 'Bathroom Waterproofing', description: 'Flexible liquid waterproofing for bathrooms, showers, and wet rooms before tiling.', image: '/images/products/construction-chemicals/waterproofing/bathroom-waterproofing.jpg', specs: ['Type: Acrylic/Cementitious', 'Drying: 4–6 Hours', 'Coats: 2–3'] },
    { name: 'Foundation Waterproofing', description: 'Below-grade waterproofing systems for foundations, retaining walls, and underground structures.', image: '/images/products/construction-chemicals/waterproofing/foundation-waterproofing.jpg', specs: ['Type: Membrane/Coating', 'Hydrostatic: Yes', 'Standard: BS 8102'] },
];

export default function WaterproofingPage() {
    return (
        <ProductListing title="Waterproofing" description="Complete waterproofing solutions for buildings, terraces, basements, and wet areas using advanced polymer, bituminous, and cementitious technologies." benefits={['10+ Year Life', 'Crack Bridging', 'Eco-Friendly Options', 'Product Selection']} products={products} categoryBackLink="/products" />
    );
}
