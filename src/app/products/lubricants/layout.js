import { ProductSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';

export async function generateMetadata() {
  return {
    title: 'Industrial Lubricants | Hydraulic Oils & Greases | Royal Electricals & Hardware',
    description: 'High performance industrial lubricants, hydraulic oils, gear oils, and specialty greases for heavy machinery and engineering applications.',
    openGraph: {
      title: 'Industrial Lubricants | Royal Electricals & Hardware',
      description: 'High performance industrial lubricants, hydraulic oils, gear oils.',
      images: ['/images/Products_preview/Lubricants.jpg'],
    },
  };
}

export default function LubricantsLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.royalelectrical.in/' },
        { name: 'Products', url: 'https://www.royalelectrical.in/products' },
        { name: 'Lubricants', url: 'https://www.royalelectrical.in/products/lubricants' }
      ]} />
      <ProductSchema 
        name="Industrial Lubricants Collection"
        description="High performance industrial lubricants, hydraulic oils, gear oils, and specialty greases for heavy machinery."
        image="https://www.royalelectrical.in/images/Products_preview/Lubricants.jpg"
        brand="Castrol & Shell via Royal Electricals & Hardware"
      />
      {children}
    </>
  );
}
