import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/theme.ts";
import { GlobalStyle } from "./styles/global.ts";
import { BrowserRouter } from "react-router-dom";
import RouterApp from "./Routes.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TransactionsContextProvider } from "./context/transactionsContext.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={defaultTheme}>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <StrictMode>
        <BrowserRouter>
         <TransactionsContextProvider>
            <RouterApp />
          </TransactionsContextProvider>
        </BrowserRouter>
      </StrictMode>
    </QueryClientProvider>
  </ThemeProvider>
);
