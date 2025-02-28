import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { appTheme } from "./styles/theme";
import { AppRoutes } from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={new QueryClient()}>
    <ThemeProvider theme={appTheme}>
      <AppRoutes />
      <GlobalStyles />
    </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
