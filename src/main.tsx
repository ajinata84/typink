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

import "../app/globals.css";
import EditProfile from "./routes/EditProfile.tsx";
import LiteratureChapter from "./routes/literature/LiteratureChapter.tsx";
import { Toaster } from "./components/ui/toaster.tsx";
import ForumCreate from "./routes/forum/ForumCreate.tsx";
import LiteratureCreate from "./routes/literature/LiteratureCreate.tsx";
import ChapterCreate from "./routes/literature/ChapterCreate.tsx";

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
    path: "/profile/:id",
    element: <Profile />,
  },
  {
    path: "/profile/edit",
    element: <EditProfile />,
  },
  {
    path: "/forum",
    element: <Forum />,
  },
  {
    path: "/forum/create",
    element: <ForumCreate />,
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
    path: "/novel/create",
    element: <LiteratureCreate />,
  },
  {
    path: "/novel/create-chapter",
    element: <ChapterCreate />,
  },
  {
    path: "/novels/category/:genreid",
    element: <LiteratureCategory />,
  },
  {
    path: "/read/:id",
    element: <LiteratureRead />,
  },
  {
    path: "/read/:id/:chapterId",
    element: <LiteratureChapter />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="typink-theme">
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  </React.StrictMode>
);
