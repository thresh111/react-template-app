import { createBrowserRouter, RouteObject } from "react-router-dom";

import Home from "@/pages/Home";

// 定义路由对象的类型
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
];

const router = createBrowserRouter(routes);

export default router;
