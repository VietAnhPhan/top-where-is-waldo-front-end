import { createBrowserRouter } from "react-router";
import Home from "./components/Home/Home";
import Gameboard from "./components/Gameboard/Gameboard";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";

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
      try {
        const response = await fetch(
          `http://localhost:3000/moves?gameplayId=${user.gameplayId}&userId=${user.userId}`
        );

        if (response.ok) {
          const markers = await response.json();
          return markers;
        }
      } catch (err) {
        console.log(`There is ${err}`);
      }
    },
    errorElement: <p>There is an error</p>,
  },
  {
    path: "/leader-board",
    element: <LeaderBoard></LeaderBoard>,
    loader: async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/users?gameplay=true&gameplayfinished=true`
        );

        if (response.ok) {
          const users = await response.json();
          const rankedUsers = users.map((user) => {
            return {
              ...user,
              duration:
                (new Date(user.finished_at) - new Date(user.created_at)) /
                1000 /
                60,
            };
          });
          rankedUsers.sort((user1, user2) => {
            return user1.duration - user2.duration;
          });
          return rankedUsers;
        }
      } catch (err) {
        console.log(`There is ${err}`);
      }
    },
  },
]);

export default router;
