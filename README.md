# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

MyELib Frontend

Frontend for the MyELib Library Management System – Under Development

 Planned Features

Dashboard: Total books, members, overdue

Book Management: Add, edit, delete, and search books

Borrow/Return: Issue and return books with due dates


Role-Based Access: Librarian & Borrower views

Tech Stack

React + Vite (frontend framework)

Tailwind CSS (styling, responsive design)

Axios (API calls), React Router (navigation)

React Hook Form (forms), Recharts (charts), React Hot Toast (alerts)



🚀 Setup (When Ready)
npm create vite@latest myelib-frontend -- --template react
cd myelib-frontend
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install axios react-router-dom react-hook-form recharts react-hot-toast
npm run dev


Create .env file:

VITE_API_URL=http://localhost:5000

Roadmap

 Setup project, Tailwind, routing

 Dashboard 

 Book & member management

 Borrow/return flow

 Responsive UI + testing