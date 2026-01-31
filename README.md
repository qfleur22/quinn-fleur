# Quinn Fleur Portfolio Website

A modern, accessible portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Vibrant neon color scheme with cyberpunk aesthetic
- 📱 Fully responsive design with mobile-first approach
- ♿ WCAG-compliant accessibility features
- 🚀 Built with Next.js 14 and TypeScript
- 🎯 Fast performance and SEO optimized

## Color Palette

- Neon Green: `#00ff9f`
- Neon Cyan: `#00b8ff`
- Neon Blue: `#001eff`
- Neon Purple: `#bd00ff`
- Neon Magenta: `#d600ff`
- Background: Black

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

\`\`\`bash
npm install
\`\`\`

2. Run the development server:

\`\`\`bash
npm run dev
\`\`\`

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
quinn-fleur/
├── app/
│   ├── globals.css          # Global styles and utilities
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Homepage
│   └── resume/
│       └── page.tsx         # Resume/About page
├── components/
│   ├── header.tsx           # Navigation header with mobile menu
│   ├── hero.tsx             # Hero section with animated background
│   ├── skills.tsx           # Skills showcase section
│   ├── projects.tsx         # Project cards section
│   └── footer.tsx           # Footer with contact CTA
└── public/
    └── projects/            # Project images (add your screenshots here)
\`\`\`

## Customization

### Adding Project Images

1. Add your project screenshots to `public/projects/`
2. Update the image paths in `components/projects.tsx`

Recommended image sizes:
- Width: 800-1200px
- Height: 500-800px
- Format: PNG or WebP for best quality

### Updating Project Stats

Edit the `projects` array in `components/projects.tsx` to update:
- Visitor statistics
- Engagement metrics
- Technologies used
- Skills demonstrated
- Project URLs

### Modifying Resume Content

Edit `app/resume/page.tsx` to update:
- Professional summary
- Work experience
- Skills and technologies
- Education
- Community involvement

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean
- Self-hosted with Node.js

## Accessibility Features

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader compatible
- High contrast color scheme
- Focus indicators on all interactive elements

## Technologies Used

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Contact

Email: [quinndelafleur@gmail.com](mailto:quinndelafleur@gmail.com)

## License

© 2025 Quinn Fleur. All rights reserved.
