/**
 * JSON-LD estruturado para a A Casa Barbearia.
 * schema.org/HairSalon (subtype de LocalBusiness)
 * Usado na Home e na página de Contactos.
 */
export function HairSalonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "@id": "https://acasa-barbearia.vercel.app/#hairsalon",
    "name": "A Casa – Barbearia",
    "image": "https://acasa-barbearia.vercel.app/images/logo.png",
    "url": "https://acasa-barbearia.vercel.app",
    "telephone": "+351XXXXXXXXX",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Coimbra",   // actualizar com morada real
      "addressLocality": "Coimbra",
      "addressRegion": "Centro",
      "postalCode": "3000",          // actualizar
      "addressCountry": "PT",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.2026289,
      "longitude": -8.4350211,
    },
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "19:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday"], "opens": "09:00", "closes": "18:00" },
    ],
    "sameAs": [
      "https://www.instagram.com/acasa_barbearia/",
      "https://maps.app.goo.gl/66xdMgbatHhrtvRx9",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
