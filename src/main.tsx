import "./index.css";
import "@/locales/i18next.ts";
import AppRouter from "./App.tsx";
import { createRoot } from "react-dom/client";
import ContextProvider from "./context/Context.tsx";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
    <ContextProvider>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ContextProvider>
);
