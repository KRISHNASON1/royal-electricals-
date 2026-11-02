import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'Arc Welding Machine', description: 'Manual metal arc welding machines for general-purpose welding of mild steel and alloy steels.', image: '/images/products/construction-equipment/welding-machines/arc-welding-machine-mma.jpg', specs: ['Current: 200–600A', 'Duty Cycle: 60%', 'Type: Transformer/Inverter'] },
    { name: 'MIG Welding Machine', description: 'Gas metal arc welding machines for high-speed, clean welding of steel and aluminum.', image: '/images/products/construction-equipment/welding-machines/mig-welding-machine-wire-feed.jpg', specs: ['Current: 200–500A', 'Wire Feed: Auto', 'Gas: CO2/Argon Mix'] },
    { name: 'TIG Welding Machine', description: 'Gas tungsten arc welding machines for precision welding of stainless steel, aluminum, and exotic metals.', image: '/images/products/construction-equipment/welding-machines/tig-welding-machine-argon.jpg', specs: ['Current: 200–400A', 'AC/DC: Both', 'Gas: Pure Argon'] },
    { name: 'Spot Welding Machine', description: 'Resistance spot welding machines for joining sheet metal and wire mesh in manufacturing.', image: '/images/products/construction-equipment/welding-machines/spot-welding-machine.jpg', specs: ['Capacity: 2+2mm', 'Power: 16–100 kVA', 'Type: Pedestal/Portable'] },
    { name: 'Plasma Cutter', description: 'Plasma arc cutting machines for precision cutting of steel, stainless steel, and aluminum plates.', image: '/images/products/construction-equipment/welding-machines/plasma-cutting-machine.jpg', specs: ['Cut: Up to 40mm', 'Type: Air Plasma', 'Duty Cycle: 60%'] },
    { name: 'Welding Accessories', description: 'Welding consumables, electrodes, wires, helmets, and accessories for all welding processes.', image: '/images/products/construction-equipment/welding-machines/arc-welding-machine-mma1.jpg', specs: ['Electrodes: All Types', 'Wire: MIG/TIG', 'Safety Gear: Complete'] },
];

export default function WeldingMachinesPage() {
    return (
        <ProductListing title="Welding Machines" description="Complete range of welding equipment for arc, MIG, TIG, spot welding, and plasma cutting applications." benefits={['All Processes', 'Consumables Available', 'Product Selection', 'Spare Parts Available']} products={products} categoryBackLink="/products" />
    );
}
