# Peter Gustafsson Portfolio

![Viking Portfolio Banner](https://via.placeholder.com/1200x300.png?text=Viking+Portfolio) <!-- Replace with a real banner image -->

Welcome to my Viking-themed personal portfolio. This project showcases my skills in modern web development, featuring a dynamic project gallery managed via Contentful, smooth animations, and a responsive, dark-themed design inspired by Norse aesthetics.

## ✨ Features

- **Dynamic Project Management**: Projects are managed through a Contentful CMS, allowing for easy updates without touching the code.
- **Viking-Inspired UI**: A unique dark theme with gold accents, using 'Cinzel' for headings and 'Nunito Sans' for body text.
- **Smooth Animations**: Sections fade in on scroll using `framer-motion` for an engaging user experience.
- **Responsive Design**: Fully responsive layout that looks great on all devices, from mobile phones to desktops.
- **Component-Based Architecture**: Built with React and TypeScript for a scalable and maintainable codebase.

## 🛠️ Tech Stack

- **Frontend**: [React](https://reactjs.org/), [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), CSS Modules
- **CMS**: [Contentful](https://www.contentful.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons)

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. **Clone the repo**
   ```sh
   git clone https://github.com/Sweodin/Viking-porfolio.git
   ```

2. **Install NPM packages**
   ```sh
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env.local` file in the root of the project.
   - Add your Contentful Space ID and Access Token:
     ```
     VITE_CONTENTFUL_SPACE_ID='your_space_id'
     VITE_CONTENTFUL_ACCESS_TOKEN='your_access_token'
     ```

4. **Run the development server**
   ```sh
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.


This is a personal portfolio website for Peter Gustafsson, built with React, TypeScript, and Tailwind CSS.

## Project Structure

```
/peter-gustafsson-portfolio
|-- /public
|   |-- /videos
|       |-- ambient-background.mp4
|-- /src
|   |-- /assets
|   |   |-- /images
|   |-- /components
|   |   |-- /layout
|   |   |   |-- Navbar.tsx
|   |   |   |-- Footer.tsx
|   |   |-- /sections
|   |   |   |-- Welcome.tsx
|   |   |   |-- About.tsx
|   |   |   |-- Skills.tsx
|   |   |   |-- Projects.tsx
|   |   |   |-- Contact.tsx
|   |   |-- /ui
|   |       |-- AnimatedSection.tsx
|   |       |-- Card.tsx
|   |-- /data
|   |   |-- projects.json
|   |-- /hooks
|   |   |-- useOnScreen.ts
|   |-- /styles
|   |   |-- index.css
|   |-- /types
|   |   |-- index.ts
|   |-- App.tsx
|   |-- main.tsx
|-- package.json
|-- tailwind.config.js
|-- postcss.config.js
|-- tsconfig.json
```

## Getting Started

1.  Clone the repository (if applicable).
2.  Install dependencies: `npm install`
3.  Start the development server: `npm run dev`
