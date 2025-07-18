import { RouteConfig } from "@/types/globalInterfaces";
import { lazy } from "react";

// ================================================================== PUBLIC ROUTE
const AuthLayout = lazy(() => import("@/layouts/AuthLayout"));
const LoginPage = lazy(() => import("@/views/auth/Login"));
const RegisterPage = lazy(() => import("@/views/auth/Register"));
const Landing = lazy(()=> import("@/views/Landing"))

// ================================================================== PRIVATE ROUTE
const AppLayout = lazy(() => import("@/layouts/AppLayout"));
const Users = lazy(() => import("@/views/admin/users/Users"));

// ================================================================== FALBACK ROUTE
const NotFound = lazy(() => import("@/views/404/NotFound"));


export const publicRoutes: RouteConfig[] = [
  {
    path: "/",
    element: <Landing />,
    layout: null
  },
  {
    path: "/auth/login",
    element: <LoginPage />,
    layout: <AuthLayout />
  },
  {
    path: "/auth/register",
    element: <RegisterPage />,
    layout: <AuthLayout />
  }
];

export const privateRoutes: RouteConfig[] = [
  {
    path: "/",
    element: <Users />,
    layout: <AppLayout />,
  }
];

export const fallbackRoutes: RouteConfig[] = [
  {
    path: "*",
    element: <NotFound />,
  },
];
