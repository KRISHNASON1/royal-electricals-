import { BreadcrumbSchema } from '@/components/SchemaMarkup';

export const metadata = {
  title: 'About Royal Electricals & Hardware | Established in 2000',
  description: 'Established in 2000, Royal Electricals & Hardware supplies electrical and hardware products from leading brands in Taloja MIDC. Discover our story and commitment to quality.',
};

export default function AboutLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.royalelectrical.in/' },
        { name: 'About', url: 'https://www.royalelectrical.in/about' }
      ]} />
      {children}
    </>
  );
}
