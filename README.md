# Niranjan N — Personal Portfolio Website

A premium, interactive, and fully responsive developer portfolio website designed to showcase projects, skills, education, and achievements. Built using React 19, Vite, Tailwind CSS, TypeScript, and Framer Motion, this portfolio features advanced animations, a glassmorphic aesthetic, custom interactive widgets, and seamless performance.

✨ **Live Site:** [https://portfolio-niranjan-n.vercel.app](https://github.com/NIRANJAN111-DEL/Portfolio) *(Update with your actual URL when live)*  
📄 **Resume:** [Download Resume](public/Niranjan_N_Resume.pdf)

---

## 🚀 Key Features

* **Rich, Premium Aesthetics**: High-end dark mode featuring vibrant gradient accents, glassmorphic panels, glowing blur circles, and subtle micro-animations.
* **Custom Interactive Cursor**: A dynamic cursor tracker that morphs and scales based on hover actions.
* **Animated Page Intros & Transitions**: Smooth scroll experience (via Lenis) combined with physics-based transitions using Framer Motion.
* **Interactive Projects Showcase**: A categorized display of selected works featuring visual browser mocks, live metrics, and direct source links.
* **Academic Timeline**: Clean, structured representation of B.Tech Information Technology coursework, CGPA, and schooling.
* **Achievements & Certifications**: Grid of recognized certifications (NPTEL, Hackathons) with celebratory interactive particle effects (Canvas Confetti).
* **Connect/Contact Section**: Fully functional contact form integrated with EmailJS for direct messaging and phone mapping.

---

## 🛠️ Technology Stack

* **Core**: React 19, TypeScript, Vite
* **Styling**: Tailwind CSS, Vanilla CSS, Custom CSS variables
* **Animations**: Framer Motion, Canvas Confetti
* **Icons**: React Icons (Feather Icons, Simple Icons)

---

## 📂 Project Structure

```text
├── public/
│   ├── Niranjan_N_Resume.pdf  # PDF copy of latest resume
│   ├── favicon.svg            # Site favicon
│   └── robots.txt             # SEO configuration
└── src/
    ├── assets/                # Local images and graphic assets
    ├── components/            # Reusable page components
    │   ├── About.tsx          # Profile & professional summary
    │   ├── Achievements.tsx   # Certifications & confetti trigger
    │   ├── Contact.tsx        # EmailJS form & phone mapping
    │   ├── CustomCursor.tsx   # Cursor follower implementation
    │   ├── Education.tsx      # Academic timeline
    │   ├── Footer.tsx         # Copyright & social shortcuts
    │   ├── Hero.tsx           # Spotlight, tags, and downloads
    │   ├── LoadingScreen.tsx  # Initial loader/entry effect
    │   ├── Navbar.tsx         # Responsive sticky header
    │   ├── Projects.tsx       # Portfolio cases with dashboard previews
    │   └── Skills.tsx         # Competency badges & Core concepts
    ├── App.tsx                # Application shell and state coordinator
    ├── index.css              # Custom global styles & scroll behavior
    └── main.tsx               # DOM entry point
```

---

## 💻 Local Development Setup

To run this project locally, make sure you have [Node.js](https://nodejs.org) installed on your system.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/NIRANJAN111-DEL/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open your browser to `http://localhost:5173` to view the site.

4. **Build for production**:
   ```bash
   npm run build
   ```
   This compiles the project to static assets in the `dist` folder.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
