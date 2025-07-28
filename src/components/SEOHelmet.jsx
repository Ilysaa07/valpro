import { Helmet } from 'react-helmet-async';

const SEOHelmet = ({ 
  title = "Valpro Intertech | Konsultan Legalitas & Perizinan Usaha Bandung",
  description = "Valpro Intertech: Konsultan legalitas terpercaya di Bandung. Kami ahli dalam pendirian PT & CV, pengurusan izin usaha, sertifikasi ISO, dan konsultasi pajak. Percepat legalitas bisnis Anda bersama kami!",
  keywords = "konsultan legalitas, pendirian pt, pendirian cv, izin usaha, sertifikasi iso, konsultasi pajak, jasa legalitas bandung, perizinan usaha bandung, urus pt bandung, valpro intertech",
  canonical = "https://valprointertech.com",
  ogTitle,
  ogDescription,
  ogImage = "https://valprointertech.com/assets/metalogo.png",
  ogUrl = "https://valprointertech.com",
  twitterTitle,
  twitterDescription,
  twitterImage,
  structuredData,
  additionalStructuredData
}) => {
  // Default organization structured data
  const defaultOrganizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Valpro Intertech",
    "url": "https://valprointertech.com",
    "logo": "https://valprointertech.com/assets/metalogo.png",
    "description": "Konsultan legalitas terpercaya di Bandung untuk pendirian PT & CV, pengurusan izin usaha, sertifikasi ISO, dan konsultasi pajak",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bandung",
      "addressRegion": "Jawa Barat",
      "addressCountry": "ID"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "Indonesian"
    },
    "sameAs": [
      "https://www.instagram.com/valprointertech",
      "https://www.facebook.com/valprointertech",
      "https://www.tiktok.com/@valprointertech"
    ],
    "foundingDate": "2012",
    "numberOfEmployees": "10-50",
    "areaServed": {
      "@type": "Country",
      "name": "Indonesia"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Valpro Intertech" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:site_name" content="Valpro Intertech" />
      <meta property="og:locale" content="id_ID" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle || ogTitle || title} />
      <meta name="twitter:description" content={twitterDescription || ogDescription || description} />
      <meta name="twitter:image" content={twitterImage || ogImage} />
      <meta name="twitter:site" content="@valprointertech" />
      <meta name="twitter:creator" content="@valprointertech" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      
      {/* Default Organization Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(defaultOrganizationData)}
      </script>
      
      {/* Custom Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Additional Structured Data */}
      {additionalStructuredData && additionalStructuredData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHelmet;

