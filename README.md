#  WanderWay

A responsive tour and travel website built with React to practice component decomposition, props drilling, and CSS inside React.

---

## What it demonstrates

| Concept | Where it shows up |
|---|---|
| Component Decomposition | 5 separate components: Navbar, Hero, Destinations, WhyChooseUs, Footer |
| Props Drilling | Data defined in `App.jsx` and passed down to each component as props |
| CSS in React | Separate `.css` file per component, no global stylesheet |
| List Rendering | Destination cards and feature boxes rendered with `.map()` and `key` |
| Responsive Design | Mobile layout handled with CSS media queries in each component |

---

## Features

- Sticky navbar with smooth scroll links
- Full-screen hero section with background image
- Destination cards with image, name, country, and rating
- Why Choose Us section with 3 feature boxes
- Footer with quick links and contact info
- Responsive across mobile and desktop

---

## How to Run

```bash
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

---

## Deployed

[Live Demo](https://tour-and-travel-beta-one.vercel.app/)

---

## Files

```
tour-and-travel/
├── App.jsx
├── Navbar.jsx / Navbar.css
├── Hero.jsx / Hero.css
├── Destinations.jsx / Destinations.css
├── WhyChooseUs.jsx / WhyChooseUs.css
├── Footer.jsx / Footer.css
└── index.html
```
