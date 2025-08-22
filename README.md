# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


Quazar Triangles

An interactive React + Vite web app to visualize triangles, calculate area using Heron’s formula, and dynamically measure side lengths & height.

🚀 Deployment

Live app: https://quazar-triangles.vercel.app

Source code: https://github.com/<your-username>/quazar-triangles

🛠️ Tech Stack

React (Vite) – for fast frontend dev.

Tailwind CSS – for styling & responsiveness.

SVG + React state – to handle drag-and-drop triangle vertices.

✨ Features

Drag triangle vertices (A, B, C).

Live calculation of:

Side lengths

Area (Heron’s formula)

Height (from base AB)

Quiz panel for quick math practice.

Formula reference section.

📐 Design Decisions

React + Vite chosen for speed, simplicity, and easy deployment.

Tailwind CSS for utility-first styling instead of writing raw CSS.

SVG used instead of Canvas for simpler geometry + text labels.

Component structure: TriangleCanvas (geometry), InfoPanel (metrics), Quiz (interactivity), Formulae (reference), Navbar/Footer (layout).
