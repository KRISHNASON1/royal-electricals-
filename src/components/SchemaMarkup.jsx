export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Royal Electricals & Hardware",
    "url": "https://www.royalelectrical.in",
    "logo": "https://www.royalelectrical.in/royal-crown-transparent.png",
    "description": "Electrical and hardware supplier, trader, and distributor in Taloja MIDC, established in 2000.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. PAP 57, Opposite M.I.D.C. Water Tank, Taloja MIDC",
      "addressLocality": "Taloja MIDC, Raigad",
      "addressRegion": "Maharashtra",
      "postalCode": "410208",
      "addressCountry": "IN"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-8591169113",
        "contactType": "sales",
        "email": "royalelectrical_taloja@rediffmail.com",
        "availableLanguage": ["English", "Hindi"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-22-27401969",
        "contactType": "office",
        "email": "royalelectrical_taloja@rediffmail.com"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProductSchema({ name, description, image, brand }) {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": name,
    "image": image || "https://www.royalelectrical.in/royal-crown-transparent.png",
    "description": description,
    "brand": {
      "@type": "Brand",
      "name": brand || "Royal Electricals & Hardware"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function SpeakableSchema() {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "WebPage",
    "name": "Royal Electricals & Hardware Industrial Supplier",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["#hero-headline", "#about-snippet"]
    },
    "url": "https://www.royalelectrical.in"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function SiteLinksSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Royal Electricals & Hardware",
    "url": "https://www.royalelectrical.in",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.royalelectrical.in/products?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
