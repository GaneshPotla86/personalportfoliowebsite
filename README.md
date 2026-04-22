# 🚀 Ganesh Potla — Portfolio Website

A modern, animated personal portfolio built with **React.js + Tailwind CSS + Framer Motion**.

---

## ✨ Features

- ⚡ Vite-powered fast development
- 🎨 Framer Motion animations throughout
- 💎 Glassmorphism card design
- 🌙 Dark mode toggle
- 📱 Fully responsive (mobile + desktop)
- 🖼️ Profile photo upload (click the photo to change)
- ⌨️ Typing animation in hero section
- 🔍 Scroll-reveal animations
- 📜 Smooth scrolling navigation
- 📬 Animated contact form with success state

---

## 🗂️ Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf          ← ADD YOUR RESUME HERE
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Certificates.jsx
│   │   ├── Resume.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js   ← EDIT YOUR INFO HERE
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## 🛠️ Setup & Installation

### Prerequisites
- Node.js v18+ installed
- npm or yarn

### Step 1 — Install dependencies

```bash
npm install
```

### Step 2 — Start dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Step 3 — Build for production

```bash
npm run build
```

Output goes to the `dist/` folder.

---

## ✏️ Customization

### Update your personal info
Edit `src/data/portfolioData.js`:

```js
export const personalInfo = {
  name: 'Your Name',
  email: 'your@email.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  location: 'Your City, Country',
  resumeUrl: '/resume.pdf',   // place your PDF in /public/resume.pdf
  ...
}
```

### Add/edit projects
In `portfolioData.js`, update the `projects` array with your own project details.

### Add/edit certificates
In `portfolioData.js`, update the `certificates` array.

### Change profile photo
- Click the profile image in the Hero section to upload your photo live, OR
- Replace the placeholder `div` in `Hero.jsx` with an `<img>` tag pointing to your photo.

### Add your resume PDF
Place your resume at `public/resume.pdf` — the download button will automatically use it.

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-detects Vite — click **Deploy**
5. Your site is live! 🎉

### Deploy to Netlify

1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com) → Add new site → Deploy manually
3. Drag and drop the `dist/` folder
4. Done! 🎉

Or connect your GitHub repo for automatic deployments on every push.

---

## 📦 Tech Stack

| Technology | Purpose |
|---|---|
| React.js 18 | UI framework |
| Vite | Build tool & dev server |
| Tailwind CSS 3 | Utility-first styling |
| Framer Motion | Animations |
| React Icons | Icon library |
| React Type Animation | Typing effect |
| React Scroll | Smooth scrolling |

---

## 📄 License

MIT — feel free to use and customize for your own portfolio!

---

Made with ❤️ by Ganesh Potla
