import React from "react";
import { useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Notfound } from "../pages/Notfound";
import { About } from "../pages/About";
import MainLayout from "../layouts/mainlayout/MainLayout";
export default function Routes() {
  let routes = [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/*",
          element: <Notfound />,
        },
      ],
    },
  ];
  return useRoutes(routes);
}
