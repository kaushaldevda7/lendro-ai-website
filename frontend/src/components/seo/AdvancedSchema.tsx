import React from 'react';

interface AdvancedSchemaProps {
  type: 'article' | 'product' | 'service' | 'organization' | 'faq' | 'breadcrumb';
  data: any;
}

export default function AdvancedSchema({ type, data }: AdvancedSchemaProps) {
  const generateSchema = () => {
    const baseContext = "https://schema.org";
    
    switch (type) {
      case 'article':
        return {
          "@context": baseContext,
          "@type": "BlogPosting",
          "headline": data.title,
          "description": data.description,
          "image": data.image || "https://lendro.ai/og-image.png",
          "author": {
            "@type": "Person",
            "name": data.author || "Lendro.AI Team"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Lendro.AI",
            "logo": {
              "@type": "ImageObject",
              "url": "https://lendro.ai/lendro-logo.svg"
            }
          },
          "datePublished": data.datePublished,
          "dateModified": data.dateModified || data.datePublished,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data.url
          },
          "articleSection": data.category,
          "wordCount": data.wordCount,
          "keywords": data.keywords
        };

      case 'service':
        return {
          "@context": baseContext,
          "@type": "Service",
          "name": data.name,
          "description": data.description,
          "provider": {
            "@type": "Organization",
            "name": "Lendro.AI",
            "url": "https://lendro.ai"
          },
          "serviceType": "Financial Technology",
          "category": "AI Lending Solutions",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "AI Lending Services",
            "itemListElement": data.features?.map((feature: string, index: number) => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": feature
              }
            }))
          },
          "areaServed": "Global",
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://lendro.ai",
            "serviceSmsNumber": "+1-855-LENDRO1"
          }
        };

      case 'product':
        return {
          "@context": baseContext,
          "@type": "SoftwareApplication",
          "name": data.name,
          "description": data.description,
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": data.price || "Contact for pricing",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          "manufacturer": {
            "@type": "Organization",
            "name": "Lendro.AI"
          },
          "softwareVersion": data.version || "1.0",
          "releaseNotes": data.releaseNotes,
          "screenshot": data.screenshots,
          "featureList": data.features
        };

      case 'faq':
        return {
          "@context": baseContext,
          "@type": "FAQPage",
          "mainEntity": data.faqs?.map((faq: any) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        };

      case 'breadcrumb':
        return {
          "@context": baseContext,
          "@type": "BreadcrumbList",
          "itemListElement": data.items?.map((item: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          }))
        };

      default:
        return null;
    }
  };

  const schema = generateSchema();

  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
} 