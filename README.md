
## DOCUMENTATION

## Quazar Triangles

An interactive React + Vite web app to visualize triangles, calculate area using Heron’s formula, and dynamically measure side lengths & height.

🚀 Deployment

Live app: https://quazar-triangles.vercel.app

Source code:  https://github.com/San1611/Quazar_Triangles

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
