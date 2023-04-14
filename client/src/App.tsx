import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./data/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
