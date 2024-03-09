import { ThemeProvider } from "./components/theme-provider";
import Layout from "./components/ui/layout";


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="typink-theme">
      <Layout />
    </ThemeProvider>
  );
}

export default App;
