# Gigaversity - Virtual Placement Drive Platform

**A React-based educational platform for Full Stack Development and Data Science programs with virtual placement drives and career opportunities.**

## 🚀 Project Overview

Gigaversity is a comprehensive educational platform that offers Master Internship programs in Full Stack Development and Data Science. The platform features curriculum displays, project showcases, blog functionality, placement portals, and career guidance - all built with modern React technologies.

### ✨ Key Features (As Implemented)

- **Interactive Curriculum Display** - Week-by-week curriculum breakdown for different tracks
- **Project Portfolio Showcase** - Real-world project demonstrations with feature highlights
- **Virtual Placement Portal** - Job opportunities and skill assessments
- **Educational Blog System** - Technical articles and learning resources
- **Pre-screening Assessment** - Skills evaluation and testing platform
- **Career Guidance Tools** - Program recommendations and career planning
- **Responsive Design** - Mobile-first approach with MUI components
- **Dynamic Routing** - Multi-page application with React Router

### 🛠️ Tech Stack

- **Frontend Framework**: React 19.0.0
- **UI Library**: Material-UI (MUI) v7.0.1
- **Styling**: @mui/styles with makeStyles (no custom theme)
- **Icons**: @mui/icons-material v7.0.1
- **Routing**: React Router DOM v7.6.2
- **Animations**: Anime.js v4.0.2
- **Carousels**: Swiper v11.2.8, React Slick v0.30.3
- **Charts**: Chart.js v4.4.8
- **Date Handling**: date-fns v4.1.0
- **Build Tool**: Create React App (react-scripts 5.0.1)
- **Testing**: Jest, React Testing Library

## 🏁 Getting Started

### Prerequisites

- **Node.js**: Version 14.0.0 or higher
- **npm**: Version 6.0.0 or higher (comes with Node.js)
- **Git**: For version control

### Installation & Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd gigaversity-4
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

The application will open at `http://localhost:3000`

### Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run test suite
npm test

# Eject from Create React App (not recommended)
npm run eject
```

## 📁 Project Structure

```
gigaversity-4/
├── public/
│   ├── index.html                 # Main HTML template
│   ├── favicon.ico               # Site favicon
│   ├── manifest.json             # PWA manifest
│   ├── site.webmanifest         # Web app manifest
│   └── .htaccess                # Apache server configuration
├── src/
│   ├── components/              # React components
│   │   ├── blog/               # Blog-related components
│   │   ├── common/             # Shared/reusable components
│   │   ├── fullstackcomponents/  # Full-stack program components
│   │   ├── fulltime/           # Full-time program components
│   │   └── homepagecomponets/  # Homepage-specific components
│   ├── pages/                  # Route-level page components
│   │   ├── fullstack/         # Full-stack program pages
│   │   ├── blog/              # Blog pages
│   │   └── privacypolicy/     # Policy pages
│   ├── data/                   # Static data and content
│   │   └── blogData.js        # Blog posts and content data
│   ├── assets/                 # Static assets (images, etc.)
│   ├── styles/                 # Style utilities
│   │   └── makeStylesAdapter.js # MUI makeStyles wrapper
│   ├── utils/                  # Utility functions
│   ├── App.js                  # Main app component with routing
│   ├── index.js               # React app entry point
│   ├── index.css              # Global styles
│   └── globalFonts.css        # Font definitions
├── package.json                # Dependencies and scripts
├── package-lock.json          # Locked dependency versions
├── .gitignore                 # Git ignore rules
└── README.md                  # This file
```

## 🏗️ Architecture Overview

### Routing Structure

The application uses React Router DOM v7 with the following main routes:

- `/` - Homepage with program overview
- `/fullstack` - Full-stack development program
- `/datascience` - Data science program  
- `/fulltime/fullstack` - Full-time full-stack program
- `/fulltime/datascience` - Full-time data science program
- `/blog` - Blog listing page
- `/blog/:slug` - Individual blog posts
- `/about` - About page
- `/contact` - Contact information
- `/register` - Registration form
- `/pre-screening-test` - Assessment platform

### State Management

The application primarily uses React's built-in state management:
- `useState` hooks for component-level state
- Props drilling for data flow between components
- No external state management library (Redux/Zustand) implemented

### Component Architecture

Components follow a hierarchical structure:
- **Pages** - Route-level components that compose multiple sections
- **Common Components** - Reusable UI components across different programs
- **Program-Specific Components** - Components specific to fullstack/datascience programs
- **Layout Components** - Headers, footers, navigation

## 🎨 Styling Approach

### MUI with makeStyles

The project uses Material-UI v7 with the deprecated `@mui/styles` makeStyles approach:

```javascript
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  componentName: {
    // CSS properties
    backgroundColor: '#f5f5f5',
    padding: '20px',
    // No theme usage - direct values only
  }
});
```

### Design System

- **Color Palette**: Custom brand colors without MUI theme
- **Typography**: Montserrat font family from Google Fonts
- **Spacing**: Consistent spacing using direct pixel/rem values
- **Breakpoints**: Responsive design with manual media queries

## 🚀 Deployment

### Production Build

```bash
npm run build
```

Creates optimized production build in `build/` directory.

### Apache Hosting

The project includes `.htaccess` configuration for Apache servers:

- **URL Rewriting**: Handles React Router client-side routing
- **Security Headers**: X-Content-Type-Options, X-Frame-Options, X-XSS-Protection
- **Caching**: Static asset caching for performance
- **Compression**: Gzip compression for text files

### Deployment Platforms

Configured for deployment on:
- **Vercel** (includes .vercel in .gitignore)
- **Apache-based hosting** (GoDaddy, cPanel, etc.)
- **Netlify** (standard React app deployment)

## 🧪 Testing

### Test Setup

- **Testing Library**: @testing-library/react v16.2.0
- **Jest DOM**: @testing-library/jest-dom v6.6.3
- **User Events**: @testing-library/user-event v13.5.0

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Generate coverage report
npm test -- --coverage
```

## 📝 Development Guidelines

### Code Standards

- **ES6+** syntax with functional components
- **Hooks** for state management (useState, useEffect, etc.)
- **Arrow functions** for component definitions
- **Destructuring** for props and state
- **makeStyles** for component styling (no CSS modules or styled-components)

### Component Structure

```javascript
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    padding: '20px',
    backgroundColor: '#f5f5f5'
  }
});

const ComponentName = ({ prop1, prop2 }) => {
  const classes = useStyles();
  const [state, setState] = useState(initialValue);

  return (
    <Box className={classes.container}>
      <Typography variant="h4">
        {prop1}
      </Typography>
    </Box>
  );
};

export default ComponentName;
```

## 🔧 Browser Support

### Production
- \>0.2%
- not dead
- not op_mini all

### Development
- last 1 chrome version
- last 1 firefox version
- last 1 safari version

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For technical support or questions about the platform:
- Create an issue in the repository
- Contact the development team
- Check the documentation in `/docs` folder

---

**Built with ❤️ using React and Material-UI**