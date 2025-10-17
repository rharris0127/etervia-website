# Etervia Website

A modern, responsive website for Etervia - the adaptive wellness technology platform that combines AI-driven personalization with measurable health outcomes.

## Overview

This website serves as the primary marketing presence for Etervia during the MVP phase, targeting B2C health and wellness enthusiasts. The site features a professional design that builds trust and credibility while effectively communicating Etervia's unique value proposition.

## Key Features

### Professional Design
- Modern, clean aesthetic following Etervia brand guidelines
- Fresh Pear green color palette (#A4D233) throughout
- Responsive design optimized for all devices
- Smooth animations and micro-interactions

### Enhanced Hero Section
- Dynamic two-column layout with compelling messaging
- Data visualization showing fitness success rates (73% with AI coaching vs 23% going solo)
- Clear call-to-action buttons for early access signup
- Trust indicators and benefit statements

### Comprehensive Content
- Detailed explanation of AI-driven adaptive wellness approach
- Team section with professional photos and credentials
- Science-backed methodology explanations
- Blog section for thought leadership content

### Conversion Optimization
- Multiple early access signup opportunities
- Streamlined email capture forms
- Professional success confirmation states
- Privacy-focused messaging

### Legal Compliance
- Complete Terms and Conditions page
- Comprehensive Privacy Policy with plain language summaries
- HIPAA considerations for future B2B expansion

## Technology Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS with custom Etervia brand components
- **UI Components**: Custom component library with shadcn/ui base
- **Icons**: Lucide React
- **Deployment**: Optimized for modern hosting platforms

## Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation
```bash
# Clone the repository
git clone [repository-url]
cd etervia-website

# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build
```

### Development Commands
```bash
# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview

# Lint code
pnpm run lint
```

## Project Structure

```
src/
├── components/
│   ├── ui/                 # Base UI components
│   ├── TermsConditions.jsx # Legal terms page
│   └── PrivacyPolicy.jsx   # Privacy policy page
├── assets/
│   ├── hero-background.png      # Hero section background
│   ├── accountability-chart.png # Success rate visualization
│   ├── wellness-icons.png       # Wellness iconography
│   └── team-slide.webp         # Team photos
├── App.jsx                 # Main application component
├── App.css                 # Custom styles and animations
└── main.jsx               # Application entry point
```

## Brand Guidelines Implementation

### Colors
- Primary: Fresh Pear Green (#A4D233)
- Secondary: Darker Green (#94C225)
- Accent: Light Green (#B8E04A)
- Text: Professional grays and blacks

### Typography
- Primary: Wix Madefor Display
- Fallback: Inter, system fonts
- Hierarchy: Clear heading structure with appropriate weights

### Visual Elements
- Clean, modern card layouts
- Subtle gradients and shadows
- Professional hover effects
- Accessibility-compliant contrast ratios

## Content Strategy

### Target Audience
Primary focus on B2C health and wellness enthusiasts who are:
- Tech-savvy and interested in AI-driven solutions
- Frustrated with one-size-fits-all fitness approaches
- Looking for measurable, science-backed results
- Willing to try innovative health technology

### Key Messaging
- "End of Wellness Silos" - unified platform approach
- AI-powered personalization and adaptation
- Science-backed methodology with expert team
- Measurable outcomes and real results

### Conversion Goals
- Early access email signups
- Brand awareness and credibility building
- Education about adaptive wellness benefits
- Foundation for future B2B expansion

## SEO Optimization

### Technical SEO
- Semantic HTML structure
- Optimized meta tags and descriptions
- Fast loading times with optimized assets
- Mobile-first responsive design

### Content SEO
- Keyword-optimized content for wellness and AI fitness
- Blog section ready for content marketing
- Clear information architecture
- Internal linking structure

## Performance

### Optimization Features
- Vite build optimization
- Image compression and lazy loading
- CSS and JavaScript minification
- Modern browser targeting

### Metrics
- Lighthouse scores optimized for performance, accessibility, and SEO
- Fast loading times across all devices
- Smooth animations with reduced motion support

## Deployment

### Production Build
The website is optimized for deployment on modern hosting platforms:
- Static site generation ready
- CDN-friendly asset optimization
- Environment variable support for configuration

### Hosting Recommendations
- Vercel (recommended for React apps)
- Netlify
- AWS S3 + CloudFront
- Any static hosting service

## Legal Considerations

### Privacy Compliance
- Comprehensive privacy policy with plain language summaries
- GDPR considerations for future international expansion
- Clear data collection and usage policies

### Terms of Service
- Complete terms and conditions
- Health disclaimers and liability limitations
- Intellectual property protections

## Future Enhancements

### Planned Features
- User authentication system for app launch
- Integration with actual early access backend
- A/B testing framework for conversion optimization
- Advanced analytics and tracking

### Scalability Considerations
- Modular component architecture
- Easy content management system integration
- Support for multiple languages
- B2B section expansion capability

## Contributing

### Development Guidelines
- Follow React best practices
- Maintain brand consistency
- Ensure accessibility compliance
- Test across multiple devices and browsers

### Code Style
- ESLint configuration for consistent formatting
- Component-based architecture
- Clear naming conventions
- Comprehensive commenting for complex logic

## Support

For technical issues or questions about the website:
- Review this documentation
- Check the issue tracker
- Contact the development team

## License

This project is proprietary to Etervia, Inc. All rights reserved.

---

**Etervia, Inc.**  
The adaptive wellness engine that links engagement to measurable clinical outcomes.  
www.etervia.com
