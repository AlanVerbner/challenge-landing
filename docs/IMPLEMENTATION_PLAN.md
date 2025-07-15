# MiniTel-Lite "CODE: OVERRIDE" Implementation Plan

## Overview
Implementation plan for a static 1980s terminal-style website based on PRD.md requirements. Target delivery: single-page site with retro CRT effects and TCP client instructions.

## Phase 1: Project Setup
**Duration: 1-2 hours**

### 1.1 Initialize Project Structure
```
code-override/
├── src/
│   ├── _data/
│   │   └── site.json           # Global configuration
│   ├── _includes/
│   │   ├── layouts/
│   │   │   └── base.njk       # Base template
│   │   └── partials/
│   │       ├── header.njk      # Navigation
│   │       └── footer.njk      # Footer content
│   ├── assets/
│   │   ├── css/
│   │   │   └── terminal.css    # Main styles
│   │   ├── js/
│   │       └── terminal.js     # Interactive effects
│   ├── pages/
│   │   ├── index.md            # MAIN section
│   │   ├── instructions.md      # INSTRUCTIONS section
│   │   └── faq.md              # FAQ section
├── dist/                        # Built site
├── .eleventy.js                # Eleventy config
├── package.json                 # NPM dependencies
└── README.md                   # Development guide
```

### 1.2 Install Dependencies
```bash
npm init -y
npm install --save-dev @11ty/eleventy postcss postcss-cli cssnano
```

### 1.3 Configure Build Scripts
Add to package.json:
```json
{
  "scripts": {
    "start": "eleventy --serve",
    "build": "eleventy",
    "build:prod": "NODE_ENV=production eleventy"
  }
}
```

## Phase 2: Visual Foundation
**Duration: 2-3 hours**

### 2.1 CSS Terminal Styling
Create `src/assets/css/terminal.css`:
- [ ] Set color palette: background #000000, foreground #33FF33
- [ ] Implement IBM VGA 8x16 font with Courier New fallback
- [ ] Add CRT scanline animation (@keyframes scanline)
- [ ] Implement caret blink effect (500ms interval)
- [ ] Typewriter text reveal effect
- [ ] Responsive layout (max-width 960px, centered)

### 2.2 Base Layout Template
Create `src/_includes/layouts/base.njk`:
- [ ] HTML5 boilerplate with viewport meta
- [ ] Link to terminal.css
- [ ] Include header.njk for navigation
- [ ] Include footer.njk for credits
- [ ] Add skip-link for accessibility

### 2.3 Navigation Structure
Create `src/_includes/partials/header.njk`:
- [ ] Fixed top bar with reverse video styling
- [ ] Navigation links: [MAIN] [INSTRUCTIONS] [FAQ]
- [ ] Highlight active section

## Phase 3: Content Implementation
**Duration: 3-4 hours**

### 3.1 MAIN Section (index.md)
- [ ] Write 200-word lore section about 1983 NORAD scenario
- [ ] Implement animated intro sequence
- [ ] Add PRESS ANY KEY_ prompt with JavaScript listener
- [ ] Create faux boot-up animation
- [ ] Add BEGIN MISSION anchor link to INSTRUCTIONS

### 3.2 INSTRUCTIONS Section (instructions.md)
- [ ] Objective summary paragraph
- [ ] Step-by-step guide:
  - [ ] Command snippet: `nc demo.minitel-lite.xyz 7321`
  - [ ] Base64 HELLO frame: `0003 AQQ==`
  - [ ] Copy secret from server response
- [ ] Embed HTML form for secret submission
- [ ] ASCII art flow diagram

### 3.3 FAQ Section (faq.md)
- [ ] Convert 10 placeholder Q&As to final copy
- [ ] Ensure consistent formatting with terminal styling
- [ ] Add anchor links for each question

### 3.4 Content Configuration
Create `src/_data/site.json`:
```json
{
  "title": "CODE: OVERRIDE",
  "description": "MiniTel-Lite Emergency Protocol",
  "form_endpoint": "https://forms.google.com/XXX",
  "server_host": "demo.minitel-lite.xyz",
  "server_port": 7321
}
```

## Phase 4: Interactive Features
**Duration: 2-3 hours**

### 4.1 JavaScript Effects (terminal.js)
- [ ] Typewriter effect for text reveal
- [ ] Caret blinking implementation
- [ ] Navigation state management
- [ ] Form validation (secret format)
- [ ] "Skip animation" button for accessibility
- [ ] Respect prefers-reduced-motion media query

### 4.2 Form Handling
- [ ] Create HTML form with POST to configurable endpoint
- [ ] Add client-side validation
- [ ] Success/error message display
- [ ] Rate limiting indication

### 4.3 Mobile Detection
- [ ] Add JavaScript to detect mobile devices
- [ ] Display desktop-optimized message
- [ ] Provide responsive fallback

## Phase 5: Build & Deployment
**Duration: 1-2 hours**

### 5.1 Build Configuration
Create `.eleventy.js`:
- [ ] Configure input/output directories
- [ ] Set up collections for pages
- [ ] Add filters for date formatting
- [ ] Configure passthrough for assets

### 5.2 Production Optimization
- [ ] Minify CSS and JS (cssnano)
- [ ] Optimize bundle size (<200KB total)
- [ ] Enable gzip compression
- [ ] Cache-busting for assets

### 5.3 GitHub Actions Workflow
Create `.github/workflows/deploy.yml`:
- [ ] Build on push to main
- [ ] Deploy to gh-pages branch
- [ ] Cache node_modules
- [ ] Verify build artifacts

## Phase 6: Testing & Quality Assurance
**Duration: 2-3 hours**

### 6.1 Cross-browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### 6.2 Performance Testing
- [ ] Run Lighthouse audit
- [ ] Verify first contentful paint <2s on 3G
- [ ] Check bundle size <200KB
- [ ] Validate static asset caching

### 6.3 Accessibility Testing
- [ ] WCAG 2.1 AA color contrast
- [ ] Keyboard navigation
- [ ] Screen reader compatibility
- [ ] Reduced motion compliance

### 6.4 User Testing
- [ ] Test onboarding flow (target: <5 minutes)
- [ ] Verify retro terminal aesthetic (90% user recognition)
- [ ] Test form submission pathway

## Phase 7: Final Polish
**Duration: 1 hour**

### 7.1 Content Review
- [ ] Finalize all placeholder text
- [ ] Verify all links work
- [ ] Test form endpoint
- [ ] Review ASCII diagrams

### 7.2 Launch Checklist
- [ ] Update form endpoint URL
- [ ] Verify server connectivity
- [ ] Create README.md with setup instructions
- [ ] Tag release version

## Technical Specifications

### Asset Limits
- Total assets: ≤ 200KB (gzip)
- CSS: ≤ 5KB
- JS: ≤ 5KB minified
- No external fonts or analytics

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Performance Targets
- First contentful paint: ≤ 2s (3G)
- Time to interactive: ≤ 3s
- Lighthouse score: >90

### Security Considerations
- No user secrets stored client-side
- HTTPS-only form submission
- CSP headers for inline scripts
- No eval() or dangerous functions

## Post-Launch Monitoring
- [ ] Monitor form submissions
- [ ] Track 404 errors
- [ ] Monitor page load performance
- [ ] Collect user feedback

## Estimated Timeline
- **Total development time: 12-18 hours**
- **Can be completed in 2-3 days with focused work**
- **Parallel development possible for CSS and content**
