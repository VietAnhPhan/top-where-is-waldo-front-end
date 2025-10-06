import { createBrowserRouter } from "react-router";
import Home from "./components/Home/Home";
import Gameboard from "./components/Gameboard/Gameboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home sitename="Where is Waldo" />,
  },
  {
    path: "/gameboard",
    element: <Gameboard sitename="Where is Waldo" />,
  },
]);

export default router;
