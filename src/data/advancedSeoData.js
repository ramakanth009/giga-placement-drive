// ===================================================================
// 3. COMPREHENSIVE SEO DATA WITH STRUCTURED DATA
// src/data/advancedSeoData.js
// ===================================================================

export const advancedSeoData = {
  homepage: {
    title: "Gigaversity: Product-Based Full-Stack & Data Science Courses",
    description: "Gigaversity is India’s first product-based learning platform offering full-stack and data science courses. Build real startup products with hands-on training.",
    keywords: "Gigaversity, Gigaversity Full-Stack Development Program,Gigaversity Data Science Program, Startup incubator program for students, Real-world project building",
    canonicalUrl: "https://gigaversity.in/",
    // hiddenKeywords: [
    //   "best coding bootcamp india",
    //   "tech career transformation",
    //   "programming institute bangalore",
    //   "software development training",
    //   "online tech education platform",
    //   "coding course with placement",
    //   "tech skills training center"
    // ],
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
    title: "Full Stack Development Course by Gigaversity | Build Real Products",
    description: "Master full-stack development in 9 months with live classes, real startup product building, 1:1 mentorship, and hands-on experience across industries.",
    keywords: "Full Stack Development Course,Full Stack Developer Program,Full Stack Web Development course,Full Stack Development Projects,Full-stack development program with AI,Best Full Stack Course Online in India,Course for full-stack developers,",
    canonicalUrl: "https://gigaversity.in/fullstack",
    // hiddenKeywords: [
    //   "mern stack developer course",
    //   "react nodejs mongodb course",
    //   "javascript full stack training",
    //   "web development certification",
    //   "frontend backend developer course",
    //   "full stack programming bootcamp",
    //   "react developer training program"
    // ],
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

  "virtual-placement-fullstack": {
    title: "Full Stack Virtual Placement Drive | Remote MERN Stack Jobs | Gigaversity",
    description: "Participate in Gigaversity's Full Stack Virtual Placement Drive. Get access to remote MERN stack developer jobs, online hiring, and virtual placement opportunities.",
    keywords: "fullstack virtual placement, virtual placement drive for full stack, remote full stack developer jobs, online placement for MERN stack, virtual hiring for web developers",
    canonicalUrl: "https://gigaversity.in/fullstack/virtual-placement",
    // hiddenKeywords: [
    //   "fullstack virtual placement",
    //   "virtual placement drive for full stack",
    //   "remote full stack developer jobs",
    //   "online placement for MERN stack",
    //   "virtual hiring for web developers"
    // ],
    searchTerms: [
      "fullstack virtual placement",
      "virtual placement drive for full stack",
      "remote full stack developer jobs",
      "online placement for MERN stack",
      "virtual hiring for web developers"
    ],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "Full Stack Virtual Placement Drive",
      "description": "Virtual placement drive for full stack developers (MERN stack) at Gigaversity.",
      "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "location": {
        "@type": "VirtualLocation",
        "url": "https://gigaversity.in/fullstack/virtual-placement"
      },
      "organizer": {
        "@type": "Organization",
        "name": "Gigaversity"
      }
    },
    ogImage: "https://gigaversity.in/assets/og-fullstack-virtual-placement.jpg",
    breadcrumbs: [
      { name: "Home", url: "https://gigaversity.in/" },
      { name: "Full Stack Development", url: "https://gigaversity.in/fullstack" },
      { name: "Virtual Placement", url: "https://gigaversity.in/fullstack/virtual-placement" }
    ]
  },

  datascience: {
    title: "Gigaversity 9 Month Data Science Course with Real-World Projects",
    description: "Join India’s leading 9-month Data Science program. Learn from experts, build real startup projects, and become job-ready with hands-on industry experience.",
    keywords: "Data Science Program, Data science course, Data Science Projects, Data science program for freshers, Industry-ready data science course, Career in Data Science, Data science jobs",
    canonicalUrl: "https://gigaversity.in/datascience",
    // hiddenKeywords: [
    //   "python data science course",
    //   "machine learning bootcamp",
    //   "data analytics training",
    //   "AI artificial intelligence course",
    //   "data scientist certification",
    //   "python ML course",
    //   "data science career program"
    // ],
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
  },

  "virtual-placement-datascience": {
    title: "Data Science Virtual Placement Drive | Remote Data Scientist Jobs | Gigaversity",
    description: "Join Gigaversity's Data Science Virtual Placement Drive. Access remote data scientist jobs, online ML engineer placements, and virtual hiring for data analysts.",
    keywords: "data science virtual placement, virtual placement drive for data science, remote data scientist jobs, online placement for ML engineers, virtual hiring for data analysts",
    canonicalUrl: "https://gigaversity.in/datascience/virtual-placement",
    // hiddenKeywords: [
    //   "data science virtual placement",
    //   "virtual placement drive for data science",
    //   "remote data scientist jobs",
    //   "online placement for ML engineers",
    //   "virtual hiring for data analysts"
    // ],
    searchTerms: [
      "data science virtual placement",
      "virtual placement drive for data science",
      "remote data scientist jobs",
      "online placement for ML engineers",
      "virtual hiring for data analysts"
    ],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "Data Science Virtual Placement Drive",
      "description": "Virtual placement drive for data science and ML engineers at Gigaversity.",
      "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "location": {
        "@type": "VirtualLocation",
        "url": "https://gigaversity.in/datascience/virtual-placement"
      },
      "organizer": {
        "@type": "Organization",
        "name": "Gigaversity"
      }
    },
    ogImage: "https://gigaversity.in/assets/og-datascience-virtual-placement.jpg",
    breadcrumbs: [
      { name: "Home", url: "https://gigaversity.in/" },
      { name: "Data Science", url: "https://gigaversity.in/datascience" },
      { name: "Virtual Placement", url: "https://gigaversity.in/datascience/virtual-placement" }
    ]
  },

  products: {
    title: "Resume Builder - Create Professional Resumes Online | Gigaversity",
    description: "Build your resume online with Gigaversity's free resume builder. Choose from modern templates, use AI suggestions, and download your resume instantly.",
    keywords: "resume builder, online resume maker, AI resume builder, free resume templates, best resume builder for jobs, CV maker, professional resume, resume download",
    canonicalUrl: "https://gigaversity.in/products",
    // hiddenKeywords: [
    //   "resume builder",
    //   "online resume maker",
    //   "AI resume builder",
    //   "free resume templates",
    //   "best resume builder for jobs"
    // ],
    searchTerms: [
      "resume builder",
      "online resume maker",
      "AI resume builder",
      "free resume templates",
      "best resume builder for jobs"
    ],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Gigaversity Resume Builder",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR"
      }
    },
    ogImage: "https://gigaversity.in/assets/og-resume-builder.jpg",
    breadcrumbs: [
      { name: "Home", url: "https://gigaversity.in/" },
      { name: "Resume Builder", url: "https://gigaversity.in/products" }
    ]
  },

  aboutus: {
    title: "Gigaversity: India’s 1st Product-Based Learning Platform",
    description: "Gigaversity empowers Indian students with hands-on tech skills. Our 9-month Full-Stack & Data Science programs build real projects and industry-ready skills.",
    keywords: "product-based learning, Skill Development Platform India, About gigaversity, Our mission, Our vision, Meet the team ",
    canonicalUrl: "https://gigaversity.in/aboutus",
    // hiddenKeywords: [
    //   "about gigaversity",
    //   "our mission",
    //   "our vision",
    //   "meet the team",
    //   "why choose us"
    // ],
    searchTerms: [
      "about gigaversity",
      "our mission",
      "our vision",
      "meet the team",
      "why choose us"
    ],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Gigaversity",
      "description": "About Gigaversity, our mission, vision, and team."
    },
    ogImage: "https://gigaversity.in/assets/og-aboutus.jpg",
    breadcrumbs: [
      { name: "Home", url: "https://gigaversity.in/" },
      { name: "About Us", url: "https://gigaversity.in/aboutus" }
    ]
  },

  contactus: {
    title: "Contact Us - Gigaversity | Get in Touch & Support",
    description: "Contact Gigaversity for support, queries, or partnership opportunities. Reach out via our contact form or find our location details here.",
    keywords: "contact gigaversity, customer support, get in touch, location, contact form, tech education support",
    canonicalUrl: "https://gigaversity.in/contactus",
    // hiddenKeywords: [
    //   "contact gigaversity",
    //   "customer support",
    //   "get in touch",
    //   "location",
    //   "contact form"
    // ],
    searchTerms: [
      "contact gigaversity",
      "customer support",
      "get in touch",
      "location",
      "contact form"
    ],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Gigaversity",
      "description": "Contact Gigaversity for support, queries, or partnership opportunities."
    },
    ogImage: "https://gigaversity.in/assets/og-contactus.jpg",
    breadcrumbs: [
      { name: "Home", url: "https://gigaversity.in/" },
      { name: "Contact Us", url: "https://gigaversity.in/contactus" }
    ]
  },

  campus: {
    title: "Campus - Gigaversity | State of the Art Learning Environment",
    description: "Explore Gigaversity's campus, infrastructure, and facilities designed for innovation, collaboration, and student success.",
    keywords: "campus tour, infrastructure, campus facilities, learning environment, student life, gigaversity campus",
    canonicalUrl: "https://gigaversity.in/campus",
    // hiddenKeywords: [
    //   "campus tour",
    //   "infrastructure",
    //   "campus facilities",
    //   "learning environment",
    //   "student life"
    // ],
    searchTerms: [
      "campus tour",
      "infrastructure",
      "campus facilities",
      "learning environment",
      "student life"
    ],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollegeOrUniversity",
      "name": "Gigaversity Campus",
      "description": "Gigaversity campus, infrastructure, and facilities."
    },
    ogImage: "https://gigaversity.in/assets/og-campus.jpg",
    breadcrumbs: [
      { name: "Home", url: "https://gigaversity.in/" },
      { name: "Campus", url: "https://gigaversity.in/campus" }
    ]
  },

  // Dedicated SEO for blog
  blog: {
    title: "Gigaversity Blog - Tech Insights, Tutorials & Career Advice",
    description: "Read the latest articles, guides, and expert insights on tech careers, project-based learning, full stack, data science, and more at the Gigaversity Blog.",
    keywords: "gigaversity blog, tech blog, programming tutorials, project learning, tech careers, full stack blog, data science blog, coding tips, software development articles",
    canonicalUrl: "https://gigaversity.in/blog",
    // hiddenKeywords: [
    //   "gigaversity blog",
    //   "tech blog",
    //   "programming tutorials",
    //   "project-based learning articles",
    //   "career advice for developers",
    //   "full stack blog",
    //   "data science blog"
    // ],
    searchTerms: [
      "tech blog",
      "project learning blog",
      "full stack tutorials",
      "data science articles",
      "career advice for programmers"
    ],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Gigaversity Blog",
      "description": "Tech insights, tutorials, and career advice from Gigaversity.",
      "url": "https://gigaversity.in/blog"
    },
    ogImage: "https://gigaversity.in/assets/og-blog.jpg",
    breadcrumbs: [
      { name: "Home", url: "https://gigaversity.in/" },
      { name: "Blog", url: "https://gigaversity.in/blog" }
    ]
  },

  // Dynamic SEO for blog posts with enhanced structured data
  getBlogAdvancedSEO: (blogPost) => {
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
  }
};