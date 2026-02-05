import { createBrowserRouter } from "react-router";
import Home from "../Page/Home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);

export default router;