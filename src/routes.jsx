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
    loader: async () => {
      const user = JSON.parse(localStorage.getItem("user"));

      const response = await fetch(
        `http://localhost:3000/moves?gameplayId=${user.gameplayId}&userId=${user.userId}`
      );

      if (response.ok) {
        const markers = await response.json();
        return markers;
      }
    },
  },
]);

export default router;
