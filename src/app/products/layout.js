import { BreadcrumbSchema } from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Industrial Products Catalog | Royal Electricals & Hardware',
  description: 'Browse our extensive catalogue of electrical components, hardware, safety equipment, structural steel, power tools, and industrial supplies.',
};

export default function ProductsLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.royalelectrical.in/' },
        { name: 'Products', url: 'https://www.royalelectrical.in/products' }
      ]} />
      {children}
    </>
  );
}
