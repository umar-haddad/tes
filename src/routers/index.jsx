import { createBrowserRouter } from "react-router-dom";
import Homepage from "../layout/home/Home.jsx";

const router = createBrowserRouter([
  {
    element: <Homepage />,
    path: "/",
  },
]);

export default router;
