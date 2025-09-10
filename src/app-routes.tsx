import type { RouteObject } from "react-router-dom";
import home from "./pages/home";
import services from "./pages/services";
import pricing from "./pages/pricing";
import contact from "./pages/contact";

const routes: RouteObject[] = [
  { path: "home", element: <home /> },
  { path: "services", element: <services /> },
  { path: "pricing", element: <pricing /> },
  { path: "contact", element: <contact /> },
];
export default routes;
