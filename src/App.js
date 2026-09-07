import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";
import { ContentProvider } from "./content";
import { ThemeProvider } from "./theme";

function App() {
  return (
    <ThemeProvider>
      <ContentProvider>
        <RouterProvider router={router} />
      </ContentProvider>
    </ThemeProvider>
  );
}

export default App;