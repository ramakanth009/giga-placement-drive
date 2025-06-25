// ===================================================================
// 9. SCHEMA MARKUP GENERATOR
// src/utils/schemaGenerator.js
// ===================================================================

export class SchemaGenerator {
  static generateCourseSchema(courseData) {
    return {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": courseData.name,
      "description": courseData.description,
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Gigaversity",
        "url": "https://gigaversity.in"
      },
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "online",
        "courseworkDuration": courseData.duration,
        "instructor": {
          "@type": "Person",
          "name": courseData.instructor
        },
        "courseSchedule": {
          "@type": "Schedule",
          "duration": courseData.duration,
          "repeatFrequency": "Weekly"
        }
      },
      "offers": {
        "@type": "Offer",
        "price": courseData.price,
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "validFrom": new Date().toISOString(),
        "priceValidUntil": new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString()
      },
      "aggregateRating": courseData.rating ? {
        "@type": "AggregateRating",
        "ratingValue": courseData.rating.value,
        "reviewCount": courseData.rating.count,
        "bestRating": "5"
      } : undefined
    };
  }

  static generateOrganizationSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Gigaversity",
      "alternateName": "Gigaversity Tech Education",
      "description": "India's Premier Tech Education Platform",
      "url": "https://gigaversity.in",
      "logo": "https://gigaversity.in/assets/logo.png",
      "image": "https://gigaversity.in/assets/campus.jpg",
      "foundingDate": "2020",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "minValue": "50",
        "maxValue": "100"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Tech Park, Whitefield",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "postalCode": "560066",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-XXXXXXXXXX",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      },
      "sameAs": [
        "https://linkedin.com/company/gigaversity",
        "https://twitter.com/gigaversity",
        "https://youtube.com/gigaversity",
        "https://instagram.com/gigaversity"
      ]
    };
  }

  static generateFAQSchema(faqs) {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  }
}