// ===================================================================
// 9. ENHANCED SCHEMA MARKUP GENERATOR
// src/utils/schemaGenerator.js
// ===================================================================

export class SchemaGenerator {
  static generateCourseSchema(courseData) {
    const {
      name,
      description,
      courseCode,
      price,
      currency = "INR",
      startDate,
      endDate,
      duration,
      instructor,
      rating,
      credential,
      slug,
      campus = {
        name: "Gigaversity Campus Hyderabad",
        address: {
          streetAddress: "Hitech City, Madhapur",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          postalCode: "500081",
          addressCountry: "IN"
        }
      }
    } = courseData;

    const baseSchema = {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": name,
      "description": description,
      "provider": {
        "@type": "Organization",
        "name": "Gigaversity",
        "sameAs": "https://gigaversity.in"
      },
      "courseCode": courseCode,
      "educationalCredentialAwarded": credential || `Product Certification in ${name}`,
      "offers": {
        "@type": "Offer",
        "price": price.toString(),
        "priceCurrency": currency,
        "availability": "https://schema.org/InStock",
        "url": `https://gigaversity.in/${slug}`
      }
    };

    // Add course instances for both online and offline modes
    const courseInstances = [];
    
    // Online instance
    courseInstances.push({
      "@type": "CourseInstance",
      "courseMode": "online",
      "startDate": startDate,
      "endDate": endDate,
      "location": {
        "@type": "Place",
        "name": "Online"
      }
    });

    // Offline instance
    courseInstances.push({
      "@type": "CourseInstance",
      "courseMode": "offline", 
      "startDate": startDate,
      "endDate": endDate,
      "location": {
        "@type": "Place",
        "name": campus.name,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": campus.address.streetAddress,
          "addressLocality": campus.address.addressLocality,
          "addressRegion": campus.address.addressRegion,
          "postalCode": campus.address.postalCode,
          "addressCountry": campus.address.addressCountry
        }
      }
    });

    baseSchema.hasCourseInstance = courseInstances;

    // Add duration if provided
    if (duration) {
      baseSchema.hasCourseInstance.forEach(instance => {
        instance.courseworkDuration = duration;
      });
    }

    // Add instructor if provided
    if (instructor) {
      baseSchema.hasCourseInstance.forEach(instance => {
        instance.instructor = {
          "@type": "Person",
          "name": instructor
        };
      });
    }

    // Add rating if provided
    if (rating) {
      baseSchema.aggregateRating = {
        "@type": "AggregateRating",
        "ratingValue": rating.value,
        "reviewCount": rating.count,
        "bestRating": "5"
      };
    }

    return baseSchema;
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
        "streetAddress": "Hitech City, Madhapur",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500081",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-XXXXXXXXXX",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
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

  // Helper method to generate schema for course data from advancedSeoData.js
  static generateCourseSchemaFromSeoData(courseKey, seoData) {
    const courseData = seoData[courseKey];
    if (!courseData) {
      console.warn(`Course data not found for key: ${courseKey}`);
      return null;
    }

    // Map SEO data structure to schema generator format
    const schemaData = {
      name: courseData.title,
      description: courseData.description,
      courseCode: courseKey.toUpperCase() + "-2025",
      price: courseData.price || 125000, // Default price
      startDate: "2025-08-12", // Default start date
      endDate: "2026-05-12", // Default end date  
      slug: courseKey,
      credential: `Product Certification in ${courseData.title}`
    };

    // Override specific values for known courses
    if (courseKey === 'datascience') {
      schemaData.price = 150000;
      schemaData.startDate = "2025-08-10";
      schemaData.endDate = "2026-05-10";
      schemaData.courseCode = "DS-2025";
    }

    return this.generateCourseSchema(schemaData);
  }
}