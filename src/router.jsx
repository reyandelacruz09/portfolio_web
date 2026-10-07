import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";
import PortfolioPage from "./pages/PortfolioPage";
import AdminPanel from "./components/AdminPanel";

const rootRoute = createRootRoute({
  component: (props) => <Outlet />,
});

const portfolioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: PortfolioPage,
});

const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: AdminPanel,
});

const routeTree = rootRoute.addChildren([portfolioRoute, adminRoute]);

export const router = createRouter({
  routeTree,
  basepath: process.env.PUBLIC_URL || "/",
  defaultPreload: false,
  scrollRestoration: false,
});