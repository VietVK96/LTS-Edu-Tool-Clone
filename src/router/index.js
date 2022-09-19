import { Outlet } from "react-router-dom";
import NotFoundPage from "../page/not-found/NotFound";
import AccountManager from "../page/home/AccountManager";
import MainLayout from "../layout/MainLayout";
import PermissionPage from "../page/manager/permission/Permission";
import BlogTypePage from "../page/manager/blogType/BlogType";

export const routes = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { index: true, element: <AccountManager /> },
          { path: "/manager/permission", element: <PermissionPage /> },
          { path: "/manager/blog-type", element: <BlogTypePage /> },
        ],
      },

      { path: "*", element: <NotFoundPage /> },
    ],
  },
];
