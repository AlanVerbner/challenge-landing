Product Requirements Document (PRD)
Project Name: MiniTel-Lite “CODE: OVERRIDE” Static Site
Version: 0.9 – Draft – 15 Jul 2025
Author: Walter the Robot

⸻

1  Executive Summary

Build a static single-page website that looks and behaves like an early-1980s monochrome terminal.
Its purpose is to:
	1.	Immerse visitors in the “CODE: OVERRIDE” lore: a last-ditch war-game scenario where players must obtain a secret phrase from a MiniTel-Lite server to avert nuclear conflict.
	2.	Provide clear instructions for connecting to the TCP server (HELLO ➜ secret) and submitting the secret via an embedded HTML form.
	3.	Offer a concise FAQ (10 Qs/A’s) to reduce support requests.

The site will be hosted on any static web host (GitHub Pages, Netlify, S3, etc.)—no server-side code and no build step beyond asset bundling.

⸻

2  Goals & Success Metrics

Goal	Success Metric
Retro immersion	90 % of test users describe the look as “old-school terminal” in UX survey
Clear onboarding	≥ 80 % of first-time users can connect and retrieve the secret in ≤ 5 minutes following on-page instructions
Zero backend	Site passes Lighthouse “Static” audit (no network calls beyond assets)
Accessibility	WCAG 2.1 AA contrast & keyboard-only nav compliance


⸻

3  User Personae
	1.	Player-Recruit — curious developer learning low-level networking; wants to “hack the terminal” vibe.
	2.	Instructor/Judge — needs a canonical reference link to share with cohorts.
	3.	Spectator — casual visitor; scrolls lore only.

⸻

4  Key Lore (“CODE: OVERRIDE”)

Year 1983. NORAD’s early-warning mainframe misreads training data as a live missile launch. A mysterious comms back-channel—MiniTel-Lite—carries the only override code. Retrieve it before the warheads fly.

NOTE: The landing screen dramatizes this in green monochrome text with flickering CRT-style cursor. A blinking PRESS ANY KEY_ starts a faux boot-up animation before revealing the site menu.

⸻

5  Information Architecture & Navigation

┌───────────────────────────────┐
│  CODE: OVERRIDE                     │
├───────────────────────────────┤
│  [MAIN]  [INSTRUCTIONS] [FAQ] │  <- fixed top bar, highlighted in reverse video
└───────────────────────────────┘

5.1 MAIN (Landing)
	•	Animated intro as above.
	•	Full lore section (≈ 200 words).
	•	Prominent “BEGIN MISSION” link (anchors to INSTRUCTIONS).

5.2 INSTRUCTIONS
	•	Objective summary (obtain secret, submit form).
	•	Step-by-step guide:
	1.	Use provided telnet-style command snippet (nc demo.minitel-lite.xyz 7321).
	2.	Send Base64-encoded HELLO frame (0003 AQQ==, explained inline).
	3.	Copy secret from server response.
	4.	Send the code through this [form](http://www.google.com) to let our command to deactivate the bomb.
	•	Static HTML form posts to a pre-configured Google Forms / Getform endpoint (configurable via data-attribute).
	•	ASCII art flow diagram of packet journey (optional SVG).

5.3 FAQ (10 items)
	1.	What is MiniTel-Lite? — Lorem ipsum…
	2.	Protocol description? — Lorem ipsum…
	3.	Does the site store my secret? — Lorem ipsum…
	4.	Can I play on Windows? — Lorem ipsum…
	5.	Why Base64? — Lorem ipsum…
	6.	What happens after I submit? — Lorem ipsum…
	7.	Is this related to WarGames (1983)? — Lorem ipsum…
	8.	Can I view the source? — Lorem ipsum…
	9.	Is there a leaderboard? — Lorem ipsum…
	10.	Who built this? — Lorem ipsum…

(Replace lorem ipsum with final copy before launch.)

⸻

6  Visual & UX Requirements

Attribute	Spec
Palette	Two tones only: background #000000, foreground text #33FF33 (ANSI green).
Typeface	IBM VGA 8x16 or fallback Courier New, monospace.
Effects	CSS @keyframes for scanline flicker, caret blink (500 ms), and slow text reveal (typewriter).
Layout	Max-width 960 px, centered; all content in <pre>-styled blocks to preserve spacing.
Interactivity	Pure vanilla JS (≤ 5 KB minified) only for menu state, typewriter, form validation.
No images	ASCII/SVG only to stay ~80s.
Offline support	Optional Service Worker to cache CSS/JS for offline demo.


⸻

7  Functional Requirements

ID	Requirement
F-01	Render identical in latest Chrome, Firefox, Safari, Edge.
F-02	First contentful paint ≤ 2 s on 3G fast.
F-03	Provide downloadable secret_retriever.py sample client zipped (link).
F-04	External links open in new tab with [>] icon.
F-05	Form submission pathway configurable via environment variable at build time (FORM_ENDPOINT).
F-06	No third-party fonts or analytics.
F-07	All assets ≤ 200 KB total (gzip).


⸻

8  Non-Functional Requirements

Category	Requirement
Security	No user secrets stored client-side; form submission uses POST over HTTPS to third-party endpoint.
Accessibility	ARIA roles for menu, form; focus outlines preserved; simulated “terminal” effects disabled when prefers-reduced-motion.
Portability	Site must build via a single npm run build script producing plain HTML/CSS/JS in dist/.
Maintainability	All content (lore, FAQ) in Markdown files; static-site generator (Eleventy) converts to HTML.
If the site is accessed through a mobile device, a message is displayed indicating that the site is optimized for desktop use.

⸻

9  Technical Approach
	1.	Stack: Eleventy (11ty) for content → HTML; PostCSS for minimal styling.
	2.	Folder structure

src/
  _data/site.json     // global config
  assets/css/
  pages/index.md      // MAIN
  pages/instructions.md
  pages/faq.md
  js/
    main.js           // 2–3 KB


	3.	Build: npm scripts → eleventy --output dist.
	4.	Deployment: GitHub Actions pushes dist/ to gh-pages branch.

⸻

11  Risks & Mitigations

Risk	Impact	Mitigation
Retro typewriter slows accessibility readers	Medium	Provide “Skip animation” button & respect prefers-reduced-motion.
Users expect in-browser TCP	Low	Set clear expectation: use external client; browser cannot open raw sockets.
Form spam	Medium	Enable CAPTCHAv3 on endpoint; rate-limit at backend.

⸻

End of Document
