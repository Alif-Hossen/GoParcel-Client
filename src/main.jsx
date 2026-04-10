import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom"; // router-dom চেক করে নিন

import "./index.css";
import { router } from "./routes/Router.jsx";
import AuthProvider from "./contexts/AuthContext/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast"; // এখানে { } যোগ করা হয়েছে

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {/* Toaster এখানে রাখলে পুরো অ্যাপে কাজ করবে */}
        <Toaster />
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
);
