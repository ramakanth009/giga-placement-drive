// ===================================================================
// 3. COMPREHENSIVE SEO DATA WITH STRUCTURED DATA
// src/data/advancedSeoData.js
// ===================================================================

export const advancedSeoData = {
  homepage: {
    title: "Gigaversity - #1 Tech Education Platform in India | Full Stack & Data Science Courses",
    description: "Transform your career with India's top-rated tech education platform. Master Full Stack Development and Data Science through hands-on projects, expert mentorship, and guaranteed job placement. Join 10,000+ successful graduates.",
    keywords: "tech education india, full stack development course, data science course, coding bootcamp, programming training, web development course, machine learning course, career change tech, online coding classes, software development institute",
    canonicalUrl: "https://gigaversity.in/",
    hiddenKeywords: [
      "best coding bootcamp india",
      "tech career transformation",
      "programming institute bangalore",
      "software development training",
      "online tech education platform",
      "coding course with placement",
      "tech skills training center"
    ],
    searchTerms: [
      "how to become software developer",
      "career change to tech industry",
      "programming courses for beginners",
      "tech education with job guarantee",
      "online coding bootcamp reviews"
    ],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Gigaversity",
      "description": "India's Premier Tech Education Platform",
      "url": "https://gigaversity.in",
      "logo": "https://gigaversity.in/assets/logo.png",
      "foundingDate": "2020",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN",
        "addressRegion": "Karnataka",
        "addressLocality": "Bangalore"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-XXXXXXXXXX",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"]
      },
      "sameAs": [
        "https://linkedin.com/company/gigaversity",
        "https://twitter.com/gigaversity",
        "https://youtube.com/gigaversity"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Tech Courses",
        "itemListElement": [
          {
            "@type": "Course",
            "name": "Full Stack Development",
            "description": "Complete MERN Stack Development Course",
            "provider": {
              "@type": "Organization",
              "name": "Gigaversity"
            }
          },
          {
            "@type": "Course",
            "name": "Data Science",
            "description": "Comprehensive Data Science and Machine Learning Course",
            "provider": {
              "@type": "Organization",
              "name": "Gigaversity"
            }
          }
        ]
      }
    },
    ogImage: "https://gigaversity.in/assets/og-homepage.jpg",
    breadcrumbs: [
      { name: "Home", url: "https://gigaversity.in/" }
    ]
  },

  fullstack: {
    title: "Full Stack Development Course - Master MERN Stack | 100% Job Guarantee | Gigaversity",
    description: "Become a Full Stack Developer in 6 months. Master React, Node.js, MongoDB, Express.js with real-world projects. 100% job placement assistance. Enroll now for ₹199!",
    keywords: "full stack development course, MERN stack course, react course, nodejs training, web development bootcamp, javascript course, frontend backend development, full stack developer training, web development course with placement",
    canonicalUrl: "https://gigaversity.in/fullstack",
    hiddenKeywords: [
      "mern stack developer course",
      "react nodejs mongodb course",
      "javascript full stack training",
      "web development certification",
      "frontend backend developer course",
      "full stack programming bootcamp",
      "react developer training program"
    ],
    searchTerms: [
      "how to become full stack developer",
      "best full stack course india",
      "mern stack tutorial complete",
      "web development career path",
      "full stack developer salary",
      "react nodejs job opportunities"
    ],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Full Stack Development Course",
      "description": "Complete MERN Stack Development Course with Job Guarantee",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Gigaversity",
        "url": "https://gigaversity.in"
      },
      "courseCode": "FSD-2025",
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "online",
        "courseworkDuration": "P6M",
        "instructor": {
          "@type": "Person",
          "name": "Expert Full Stack Instructors"
        }
      },
      "educationalCredentialAwarded": "Full Stack Development Certificate",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "1250",
        "bestRating": "5"
      },
      "offers": {
        "@type": "Offer",
        "price": "199",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2025-01-01"
      }
    },
    ogImage: "https://gigaversity.in/assets/og-fullstack.jpg",
    breadcrumbs: [
      { name: "Home", url: "https://gigaversity.in/" },
      { name: "Full Stack Development", url: "https://gigaversity.in/fullstack" }
    ]
  },

  datascience: {
    title: "Data Science Course - Master Python, ML, AI | 100% Job Placement | Gigaversity",
    description: "Become a Data Scientist in 6 months. Master Python, Machine Learning, AI, Data Analysis with real projects. Industry mentors, job guarantee. Enroll for ₹199!",
    keywords: "data science course, machine learning course, python course, artificial intelligence training, data analytics course, ML course, data scientist training, python programming course, AI course india",
    canonicalUrl: "https://gigaversity.in/datascience",
    hiddenKeywords: [
      "python data science course",
      "machine learning bootcamp",
      "data analytics training",
      "AI artificial intelligence course",
      "data scientist certification",
      "python ML course",
      "data science career program"
    ],
    searchTerms: [
      "how to become data scientist",
      "best data science course india",
      "python machine learning tutorial",
      "data science career opportunities",
      "data scientist salary india",
      "machine learning job prospects"
    ],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Data Science Course",
      "description": "Comprehensive Data Science and Machine Learning Course",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Gigaversity",
        "url": "https://gigaversity.in"
      },
      "courseCode": "DS-2025",
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "online",
        "courseworkDuration": "P6M",
        "instructor": {
          "@type": "Person",
          "name": "Expert Data Science Instructors"
        }
      },
      "educationalCredentialAwarded": "Data Science Certificate",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "980",
        "bestRating": "5"
      },
      "offers": {
        "@type": "Offer",
        "price": "199",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2025-01-01"
      }
    },
    ogImage: "https://gigaversity.in/assets/og-datascience.jpg",
    breadcrumbs: [
      { name: "Home", url: "https://gigaversity.in/" },
      { name: "Data Science", url: "https://gigaversity.in/datascience" }
    ]
  }
};

// Dynamic SEO for blog posts with enhanced structured data
export const getBlogAdvancedSEO = (blogPost) => {
  if (!blogPost) return advancedSeoData.blog;
  
  return {
    title: `${blogPost.title} | Expert Tech Insights - Gigaversity Blog`,
    description: blogPost.excerpt || `${blogPost.title} - Expert insights on ${blogPost.categories.join(', ')} from Gigaversity tech education experts.`,
    keywords: `${blogPost.tags ? blogPost.tags.join(', ') : ''}, tech blog, programming tutorials, career advice, ${blogPost.categories.join(', ')}`,
    canonicalUrl: `https://gigaversity.in/blog/${blogPost.slug}`,
    hiddenKeywords: [
      `${blogPost.title} tutorial`,
      `${blogPost.categories.join(' ')} guide`,
      "tech education article",
      "programming career advice",
      "software development tips"
    ],
    searchTerms: blogPost.tags || [],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": blogPost.title,
      "description": blogPost.excerpt,
      "image": blogPost.image,
      "author": {
        "@type": "Organization",
        "name": "Gigaversity"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Gigaversity",
        "logo": {
          "@type": "ImageObject",
          "url": "https://gigaversity.in/assets/logo.png"
        }
      },
      "datePublished": blogPost.date,
      "dateModified": blogPost.date,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://gigaversity.in/blog/${blogPost.slug}`
      }
    },
    articleData: {
      publishedTime: blogPost.date,
      modifiedTime: blogPost.date,
      author: blogPost.author || 'Gigaversity',
      section: blogPost.categories[0],
      tags: blogPost.tags
    },
    ogImage: blogPost.image,
    breadcrumbs: [
      { name: "Home", url: "https://gigaversity.in/" },
      { name: "Blog", url: "https://gigaversity.in/blog" },
      { name: blogPost.title, url: `https://gigaversity.in/blog/${blogPost.slug}` }
    ]
  };
};