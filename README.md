# Pharmacy First Website

A modern, responsive website for Pharmacy First built with Lit Web Components and Tailwind CSS.

## 🏥 About

Professional pharmacy website for Pharmacy First located at 31 Bridge Street, Loughborough LE11 1NH. The site provides information about services, contact details, and opening hours.

## 🛠️ Technology Stack

- **Lit** - Modern web components framework
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **PostCSS** - CSS processing

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone/download the project
cd pharmacy-first-website

# Install dependencies
npm install

# Start development server
npm run dev
```

The website will be available at `http://localhost:3000`

### Building for Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Content Management

All website content is managed through the `content.json` file. This allows you to update:

- Pharmacy information (name, address, contact details)
- Opening hours
- Services and descriptions
- Call-to-action buttons
- Testimonials
- Footer links

### Updating Content

1. Open `content.json`
2. Modify the relevant sections
3. Save the file
4. The website will automatically reload in development mode

### Content Structure

```json
{
  "pharmacy": {
    "name": "Pharmacy First",
    "address": { ... },
    "contact": { ... },
    "hours": { ... }
  },
  "services": [ ... ],
  "callToActions": [ ... ],
  "testimonials": [ ... ]
}
```

## 🎨 Customization

### Colors
Colors can be modified in `tailwind.config.js`:

```javascript
colors: {
  primary: { ... },
  pharmacy: {
    green: '#10b981',
    blue: '#3b82f6', 
    navy: '#1e40af'
  }
}
```

### Styling
Additional CSS can be added to `src/styles.css` using Tailwind's `@layer` directives.

## 📱 Features

- **Responsive Design** - Works on all devices
- **SEO Optimized** - Meta tags and structured data
- **Accessible** - WCAG compliant design
- **Fast Loading** - Optimized assets and code splitting
- **Component-based** - Modular, maintainable code

## 📞 Contact Information

- **Phone**: 01509262821
- **Email**: pharmacy.fak57@nhs.net
- **Address**: 31 Bridge Street, Loughborough LE11 1NH

## 🕒 Opening Hours

- **Monday - Friday**: 9:00 AM - 6:45 PM
- **Saturday**: 9:00 AM - 1:00 PM
- **Sunday**: Closed

## 🚀 Deployment

The built website can be deployed to any static hosting service:

- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Azure Static Web Apps

## 🔧 Development

### Project Structure

```
src/
├── components/          # Lit web components
│   ├── pharmacy-header.js
│   ├── pharmacy-hero.js
│   ├── pharmacy-services.js
│   ├── pharmacy-cta.js
│   ├── pharmacy-about.js
│   ├── pharmacy-contact.js
│   └── pharmacy-footer.js
├── styles.css          # Global styles
└── app.js              # Main application
```

### Adding New Components

1. Create a new file in `src/components/`
2. Import it in `src/app.js`
3. Add the component to the main template

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📊 SEO & Analytics

The website includes:
- Structured data for local business
- Open Graph meta tags
- Twitter Card meta tags
- Descriptive meta descriptions
- Semantic HTML structure

## 🆘 Support

For technical support or content updates, contact your web developer or refer to this documentation.

## 📄 License

© 2024 Pharmacy First. All rights reserved.