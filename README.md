# simple-dashboard-tanstack-router 🚀

A minimal, file-based routing example project for building a modern dashboard interface using React and **TanStack Router**. This project emphasizes clean structure, nested layouts, and component styling with shadcn/ui.

---

## ✨ Features

- **File-Based Routing:** Routes are automatically generated based on the file structure inside `src/routes`, enabling type-safe and intuitive navigation.
  - **Nested Layouts:** Utilizes the `_root.tsx` file for the main application shell and other parent routes (like `profile.tsx` or `task.tsx`) for nested layouts using the `<Outlet />` component.
  - **Dynamic Routes:** Includes an example of a dynamic route (`task.$taskId.tsx`).
- **Modern UI:** Built with **shadcn/ui** components and **Tailwind CSS** for a clean, professional look.
- **Simple State:** Manages state locally within components using standard React hooks (e.g., `useState`).

---

## 🛠️ Tech Stack

- **Framework:** React 18+
- **Routing:** [TanStack Router](https://tanstack.com/router)
- **Styling:** Tailwind CSS
- **Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Language:** TypeScript

---
