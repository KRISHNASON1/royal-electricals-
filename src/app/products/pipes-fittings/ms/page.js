import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'ERW MS Pipe', description: 'Electric resistance welded mild steel pipes for structural, water, and general engineering applications.', image: '/images/products/pipes-fittings/ms/ms-pipe-erw-mild-steel.jpg', specs: ['Size: 15–250mm NB', 'Class: Light/Medium/Heavy', 'Standard: IS 1239'] },
    { name: 'Seamless MS Pipe', description: 'Seamless mild steel pipes for high-pressure boiler, hydraulic, and process piping.', image: '/images/products/pipes-fittings_new/MS Pipes & Fittings/Seamless MS Pipe.png', specs: ['OD: 21–610mm', 'Standard: IS 1239/ASTM', 'Pressure: High'] },
    { name: 'MS Elbow', description: 'Butt-weld and threaded MS elbows for direction changes in steel pipe systems.', image: '/images/products/pipes-fittings_new/MS Pipes & Fittings/MS Elbow.jpeg', specs: ['Angle: 45°/90°', 'Type: BW/Threaded', 'Schedule: 40/80'] },
    { name: 'MS Tee', description: 'Butt-weld and threaded MS tee fittings for branching steel pipe connections.', image: '/images/products/pipes-fittings_new/MS Pipes & Fittings/MS Tee.webp', specs: ['Type: Equal/Reducing', 'Size: 15–300mm', 'Standard: IS/ASTM'] },
    { name: 'MS Reducer', description: 'Concentric and eccentric reducers for pipe size transitions in steel piping systems.', image: '/images/products/pipes-fittings_new/MS Pipes & Fittings/MS Reducer.png', specs: ['Type: Concentric/Eccentric', 'Size: Various', 'Schedule: 40/80'] },
    { name: 'MS Flange', description: 'Mild steel flanges for bolted pipe connections — slip-on, weld neck, and blind types.', image: '/images/products/pipes-fittings_new/MS Pipes & Fittings/ms-flange.jpg', specs: ['Type: SORF/WNRF/Blind', 'Size: 15–600mm', 'Standard: IS 6392/ANSI'] },
];

export default function MSPipesPage() {
    return (
        <ProductListing title="MS Pipes & Fittings" description="Mild steel pipes and fittings for structural, plumbing, process, and general engineering piping applications." benefits={['IS Certified', 'All Schedules', 'Threaded & BW', 'Standard Sizes Available']} products={products} categoryBackLink="/products" fitImages={true} />
    );
}
