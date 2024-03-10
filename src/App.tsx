import { ThemeProvider } from "./components/theme-provider";
import Auth from "./routes/Auth";


function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="typink-theme">
      <Auth />
    </ThemeProvider>
  );
}

export default App;
