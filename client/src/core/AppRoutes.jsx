import { lazy } from "react";
import MainLayout from "../layouts/MainLayout";
import ScrollToTop from "../lib/ScrollToTop";
import AppSuspense from "../lib/AppSuspense";

const Home = lazy(() => import("../pages/home/Home"));
const PostListPage = lazy(() => import("../pages/posts/PostListPage.jsx"));
const SinglePost = lazy(() => import("../pages/posts/SinglePost.jsx"));
const Compose = lazy(() => import("../pages/posts/Compose.jsx"));
const Login = lazy(() => import("../pages/auth/Login.jsx"));
const Register = lazy(() => import("../pages/auth/Register.jsx"));

const lazyLoad = (Component) => {
  return (
    <AppSuspense>
      <Component />
    </AppSuspense>
  );
};

export const routes = [
  {
    element: (
      <ScrollToTop>
        <MainLayout />
      </ScrollToTop>
    ),
    children: [
      {
        path: "/",
        element: lazyLoad(Home),
      },
      {
        path: "/posts",
        element: lazyLoad(PostListPage),
      },
      {
        path: "/:slug",
        element: lazyLoad(SinglePost),
      },
      {
        path: "/compose",
        element: lazyLoad(Compose),
      },
      {
        path: "/login",
        element: lazyLoad(Login),
      },
      {
        path: "/register",
        element: lazyLoad(Register),
      },
    ],
  },
];
