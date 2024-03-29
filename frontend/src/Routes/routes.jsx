import { createBrowserRouter } from "react-router-dom";
import Feed from "../pages/MyBlog/Feed";
const router = createBrowserRouter([
    {
        path: "/",
        exact: true,
        // element: <Home/>
    },
    {
        path: "/blogs",
        exact: true,
        // element: <Feed/>
    },
    {
        path: "/admin",
        exact: true,
        component: () => import("./pages/Admin")
    },
    {
        path: "/blog/:id",
        exact: true,
        component: () => import("./pages/Blog")
    },
    {
        path: "/blog/:id/edit",
        exact: true,
        component: () => import("./pages/EditBlog")
    },
    {
        path: "/blog/:id/delete",
        exact: true,
        component: () => import("./pages/DeleteBlog")
    },
    {
        path: "/blog/new",
        exact: true,
        component: () => import("./pages/NewBlog")
    },
    {
        path: "*",
        component: () => import("./pages/NotFound")
    }
])