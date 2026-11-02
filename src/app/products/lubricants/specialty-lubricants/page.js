import ProductListing from '@/components/products/ProductListing';

export default function SpecialtyLubricantsPage() {
    const products = [
        {
            name: 'Cutting Oil',
            description: 'Neat and soluble cutting oils for machining operations.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['Neat/Soluble', 'Low Staining', 'Bio-Stable'],
        },
        {
            name: 'Rust Preventive Oil',
            description: 'Temporary rust protection for metal storage and transit.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['Indoor/Outdoor', 'Thin/Thick Film', 'Easy Removal'],
        },
        {
            name: 'Chain Lubricant',
            description: 'Specialty oils and greases for chain and conveyor lubrication.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['Drip/Spray Type', 'High Temp Options', 'Food Grade Available'],
        },
        {
            name: 'Release Agent',
            description: 'Mould release agents for rubber and plastic manufacturing.',
            image: '/images/Products_preview/Abrasives.jpg',
            specs: ['Silicone/Non-Silicone', 'Clean Release', 'No Buildup'],
        },
    ];

    const benefits = ['Application Specific', 'Technical Support', 'Multiple Grades', 'Bulk Supply'];

    return (
        <ProductListing
            title="Specialty Lubricants"
            description="Specialized lubricants and fluids for specific industrial applications including metalworking, rust prevention, and more."
            benefits={benefits}
            products={products}
            categoryBackLink="/products/lubricants"
        />
    );
}
