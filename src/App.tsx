import { ThemeProvider } from "./components/theme-provider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Forum from "./routes/forum/Forum.tsx";
import ForumCategory from "./routes/forum/ForumCategory.tsx";
import ForumRead from "./routes/forum/ForumRead.tsx";
import Literature from "./routes/literature/Literature.tsx";
import LiteratureCategory from "./routes/literature/LiteratureCategory.tsx";
import LiteratureRead from "./routes/literature/LiteratureRead.tsx";
import Auth from "./routes/Auth.tsx";
import Home from "./routes/Home.tsx";
import Profile from "./routes/Profile.tsx";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="typink-theme">
      <Router>
        <Routes>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/forum">
            <Forum />
          </Route>
          <Route path="/forum/:category">
            <ForumCategory />
          </Route>
          <Route path="/forum/:category/:id">
            <ForumRead />
          </Route>
          <Route path="/literature">
            <Literature />
          </Route>
          <Route path="/literature/:category">
            <LiteratureCategory />
          </Route>
          <Route path="/literature/:category/:id">
            <LiteratureRead />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
