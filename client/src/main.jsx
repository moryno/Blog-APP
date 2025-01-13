import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import PostListPage from "./pages/posts/PostListPage.jsx";
import SinglePost from "./pages/posts/SinglePost.jsx";
import Compose from "./pages/posts/Compose.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import "./index.css";
import AppErrorBoundary from "./lib/AppErrorBoundary/index.jsx";
import ScrollToTop from "./lib/ScrollToTop.jsx";
import { ThemeContextProvider } from "./context/ThemeContext.jsx";

const queryClient = new QueryClient();

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    element: (
      <ScrollToTop>
        <MainLayout />
      </ScrollToTop>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posts",
        element: <PostListPage />,
      },
      {
        path: "/:slug",
        element: <SinglePost />,
      },
      {
        path: "/compose",
        element: <Compose />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <QueryClientProvider client={queryClient}>
        <AppErrorBoundary>
          <ThemeContextProvider>
            <RouterProvider router={router} />
          </ThemeContextProvider>
        </AppErrorBoundary>
        <ToastContainer position="bottom-right" />
      </QueryClientProvider>
    </ClerkProvider>
  </StrictMode>
);
