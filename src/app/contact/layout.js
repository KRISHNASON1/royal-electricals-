import { BreadcrumbSchema } from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Contact Royal Electricals & Hardware | Industrial Materials Quotes',
  description: 'Get a quote for electrical components, hardware, power tools, and industrial supplies. Contact Royal Electricals & Hardware at Plot No. PAP 57, Taloja MIDC, Raigad, Maharashtra.',
};

export default function ContactLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.royalelectrical.in/' },
        { name: 'Contact', url: 'https://www.royalelectrical.in/contact' }
      ]} />
      {children}
    </>
  );
}
