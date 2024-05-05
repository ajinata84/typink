import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Forum from "./routes/forum/Forum.tsx";
import ForumCategory from "./routes/forum/ForumCategory.tsx";
import ForumRead from "./routes/forum/ForumRead.tsx";
import Literature from "./routes/literature/Literature.tsx";
import LiteratureCategory from "./routes/literature/LiteratureCategory.tsx";
import LiteratureRead from "./routes/literature/LiteratureRead.tsx";
import Auth from "./routes/Auth.tsx";
import Home from "./routes/Home.tsx";
import Profile from "./routes/Profile.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";

import '../app/globals.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/forum",
    element: <Forum />,
  },
  {
    path: "/forum/:category",
    element: <ForumCategory />,
  },
  {
    path: "/forum/:category/:id",
    element: <ForumRead />,
  },
  {
    path: "/literature",
    element: <Literature />,
  },
  {
    path: "/literature/:category",
    element: <LiteratureCategory />,
  },
  {
    path: "/literature/:category/:id",
    element: <LiteratureRead />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="typink-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
