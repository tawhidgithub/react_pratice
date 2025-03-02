import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/layout";
import Home from "../pages/home/Home";
import PostView from "../pages/post/post";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/post", element: <PostView /> },
    ],
  },
]);

export default Routes;
