# CODE: OVERRIDE - MiniTel-Lite Emergency Protocol

A retro 1980s terminal-style static website for the "CODE: OVERRIDE" challenge. This project simulates a NORAD emergency protocol scenario where participants must connect to a TCP server, authenticate, and retrieve override codes to prevent nuclear war.

## 🎯 Project Overview

This is a static website built with [Eleventy (11ty)](https://www.11ty.dev/) that recreates the aesthetic of early 1980s monochrome terminals. The site serves as the landing page for a coding challenge where participants must:

1. Develop an application to connect to a MiniTel-Lite TCP server
2. Authenticate using a specific protocol
3. Extract override codes from the server
4. Submit their solution through the website

## 🚀 Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- npm

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser to `http://localhost:8080`

### Build for Production
```bash
npm run build
```

The built site will be in the `dist/` directory.

## 📁 Project Structure

```
landing/
├── src/
│   ├── _data/
│   │   └── site.json          # Global configuration (⚠️ NEEDS COMPLETION)
│   ├── _includes/
│   │   ├── layouts/
│   │   │   └── base.njk      # Base template
│   │   └── partials/
│   │       ├── header.njk     # Navigation header
│   │       └── footer.njk     # Footer
│   ├── assets/
│   │   ├── css/
│   │   │   └── tuicss.min.css # Terminal UI styles
│   │   └── js/
│   │       └── terminal.jsx   # Interactive terminal effects
│   └── pages/
│       ├── index.md           # Main landing page
│       ├── instructions.md    # Challenge instructions
│       └── faq.md            # Frequently asked questions
├── docs/
│   ├── PRD.md                # Product Requirements Document
│   └── IMPLEMENTATION_PLAN.md # Technical implementation plan
├── package.json
└── README.md
```

## ⚙️ Configuration

### Required Configuration in `src/_data/site.json`

The `site.json` file contains global configuration that **NEEDS TO BE COMPLETED** before deployment:

### ⚠️ What You Need to Complete:

1. **`form_endpoint`**: Replace `"https://forms.google.com/XXX"` with your actual Google Forms endpoint URL where participants will submit their solutions.

2. **`url`**: Replace `"https://yourusername.github.io/code-override"` with your actual deployment URL (e.g., GitHub Pages, Netlify, etc.).

3. **`winner_amount`**: Number of winners

4. **`budget`**: Development budget in dollars

5. **`judges`**: Names of the judges evaluating submissions

6. **`server_host`**: TCP server connection details

## 🎨 Design Features

- **Retro Terminal Aesthetic**: Green-on-black monochrome styling
- **CRT Effects**: Scanline animations and text flickering
- **Typewriter Animation**: Progressive text reveal
- **Responsive Design**: Optimized for desktop with mobile fallback
- **Accessibility**: WCAG 2.1 AA compliant with reduced motion support

## 📝 Content Structure

### Main Sections:
1. **Main (/)**: Landing page with mission briefing and lore
2. **Instructions (/instructions/)**: Step-by-step challenge guide
3. **PROTOCOL (/protocol/)**: TCP server connection details
4. **FAQ (/faq/)**: Frequently asked questions

### Key Features:
- Mission narrative set in 1983 NORAD scenario
- Clear instructions for TCP server connection
- Embedded form for solution submission
- Comprehensive FAQ section

## 🚀 Deployment

### GitHub Pages (Recommended)
1. Complete the `site.json` configuration
2. Build the project: `npm run build`
3. Deploy the `dist/` folder to GitHub Pages
4. Update the `url` field in `site.json` with your GitHub Pages URL

### Other Static Hosts
The site is compatible with:
- Netlify
- Vercel
- AWS S3
- Any static hosting service

## 📊 Performance Targets

- **Bundle Size**: < 200KB total (gzip)
- **First Contentful Paint**: < 2s on 3G
- **Browser Support**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Accessibility**: WCAG 2.1 AA compliant

## 🔧 Development

### Available Scripts
- `npm start` - Start development server with live reload
- `npm run build` - Build for production
- `npm run build:prod` - Build with production optimizations

### Technology Stack
- **Static Site Generator**: Eleventy (11ty)
- **Styling**: TuiCSS (Terminal UI CSS framework)
- **JavaScript**: Vanilla JS for terminal effects
- **Template Engine**: Nunjucks (.njk files)

## 🎯 Challenge Flow

1. **Landing**: Users read the mission briefing
2. **Instructions**: Participants learn how to connect to the TCP server
3. **Development**: Users create applications using specified tools
4. **Submission**: Solutions are submitted through the embedded form
5. **Evaluation**: Judges assess code quality and best practices

## 📚 Documentation

- **PRD.md**: Complete product requirements document
- **IMPLEMENTATION_PLAN.md**: Technical implementation guide
- **FAQ**: User-facing frequently asked questions

## 🏆 Challenge Rules

- Participants must use specified development tools
- First 3 valid submissions win
- Code quality and best practices are evaluated
- Public GitHub repository required for source code

## 📞 Support

For questions about the challenge, refer to the FAQ section or contact the organizing team.

---

**Note**: This is a simulation exercise. Do not use real personal information or commit sensitive credentials to your repositories.
