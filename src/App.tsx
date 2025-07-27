import { Suspense, useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { DataContext } from "@/context/DataContext";
import { RouteConfig } from "./types/globalInterfaces";
import { LOCAL_STORAGE_KEYS } from "./helpers/localStorageKeys";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes/Routes";
import { getToken } from "./helpers/token-storage";
import ContainerLayout from "./layouts/ContainerLayout";

const renderRoutes = (routes: RouteConfig[], role: string | null): React.ReactNode[] => {
  return routes
    .filter(route => {
      if (!route.roles) return true;
      return role && route.roles.includes(role);
    })
    .map((route, index) => {
      const key = route.path || `route-${index}`;
      const children = route.children ? renderRoutes(route.children, role) : null;

      if (route.layout) {
        return (
          <Route key={key} path={route.path} element={route.layout}>
            <Route index element={route.element} />
            {children}
          </Route>
        );
      }
      return (
        <Route key={key} path={route.path} element={route.element}>
          {children}
        </Route>
      );
    });
};


const AppRouter = () => {
  const { token } = useContext(DataContext);
  const role = "ADMIN";

  const activeRoutes = token || getToken(LOCAL_STORAGE_KEYS.ADMIN_TOKEN) ? [...privateRoutes, ...publicRoutes] : publicRoutes;

  const routes = createRoutesFromElements(renderRoutes(activeRoutes, role));
  const router = createBrowserRouter(routes);

  return (
    <ContainerLayout>
      <ToastContainer />
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </ContainerLayout>
  );
};

export default AppRouter;
