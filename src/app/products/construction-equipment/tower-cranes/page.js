import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'Tower Crane', description: 'Self-erecting and top-slewing tower cranes for high-rise construction and heavy lifting.', image: '/images/products/construction-equipment/tower-cranes/tower-crane-construction-site.jpg', specs: ['Capacity: 2–25 Ton', 'Height: 30–80m', 'Jib: 30–70m'] },
    { name: 'Mobile Crane', description: 'Truck-mounted and rough terrain mobile cranes for lifting and erection on construction sites.', image: '/images/products/construction-equipment/tower-cranes/mobile-crane-truck-mounted.jpg', specs: ['Capacity: 5–250 Ton', 'Boom: 10–60m', 'Type: Truck/RT'] },
    { name: 'Material Hoist', description: 'Construction material hoists for vertical transportation of materials on building sites.', image: '/images/products/construction-equipment/tower-cranes/material-hoist-construction-lift.jpg', specs: ['Capacity: 500–2000 kg', 'Height: Up to 100m', 'Speed: 30 m/min'] },
    { name: 'Passenger Hoist', description: 'Passenger and material hoists for safe vertical transportation of workers on construction sites.', image: '/images/products/construction-equipment/tower-cranes/electric-wire-rope-hoist.jpg', specs: ['Capacity: 12–32 Persons', 'Speed: 36–96 m/min', 'Safety: Anti-Fall'] },
    { name: 'Chain Pulley Block', description: 'Manual chain pulley blocks for lifting and positioning loads in workshops and warehouses.', image: '/images/products/construction-equipment/tower-cranes/chain-hoist-block-lifting.jpg', specs: ['Capacity: 0.5–20 Ton', 'Lift: 3–12m', 'Type: Manual'], fitImage: true },
    { name: 'Electric Winch', description: 'Electric winches and hoists for pulling, lifting, and positioning heavy loads in industrial settings.', image: '/images/products/construction-equipment/tower-cranes/chain-hoist-block-lifting1.jpg', specs: ['Capacity: 0.5–10 Ton', 'Speed: Variable', 'Power: Electric'] },
];

export default function TowerCranesPage() {
    return (
        <ProductListing title="Tower Cranes & Hoists" description="Lifting equipment including tower cranes, mobile cranes, hoists, and pulley blocks for construction and industrial projects." benefits={['All Capacities', 'Bulk Supply', 'Safety Certified', 'Product Specifications']} products={products} categoryBackLink="/products" />
    );
}
