import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'ISMC Channel', description: 'Indian Standard Medium Channel sections for structural columns, beams, and bracket supports.', image: '/images/products/structural-steel/ms-channels/ismc-channel.jpg', specs: ['Size: ISMC 75–400', 'Standard: IS 2062', 'Length: 6m/12m'] },
    { name: 'ISLC Channel', description: 'Indian Standard Light Channel sections for lighter structural applications and supports.', image: '/images/products/structural-steel/ms-channels/islc-channel.jpg', specs: ['Size: ISLC 75–400', 'Weight: Lighter', 'Standard: IS 2062'] },
    { name: 'MC Channel', description: 'Mild steel channels for general fabrication, frames, and structural supports.', image: '/images/products/structural-steel/ms-channels/mc-channel.jpg', specs: ['Size: Various', 'Grade: E250', 'Finish: Hot Rolled'] },
    { name: 'Parallel Flange Channel', description: 'PFC channels with parallel flanges for ease of connection and modern structural designs.', image: '/images/products/structural-steel/ms-channels/ms-parallel-flange-channel.jpg', specs: ['Flange: Parallel', 'Size: PFC 100–300', 'Connection: Easy Bolting'] },
];

export default function MSChannelsPage() {
    return (
        <ProductListing title="MS Channels" description="Structural steel channel sections in ISMC, ISLC, and PFC profiles for construction and fabrication projects." benefits={['IS 2062 Grade', 'All Standard Sizes', 'Standard Sizes Available', 'Delivery Available']} products={products} categoryBackLink="/products" />
    );
}
