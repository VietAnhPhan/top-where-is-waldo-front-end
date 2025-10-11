import "./header.css";

import { useContext, useRef } from "react";
import { AuthContext } from "../Context";
import RestartPopup from "../components/Popup/RestartPopup";
import { Link } from "react-router";

export const Header = () => {
  const auth = useContext(AuthContext);
  const dialogRef = useRef();

  async function handleRestart() {
    const gameplayResponse = await fetch("http://localhost:3000/gameplays", {
      method: "POST",
      body: JSON.stringify({
        userId: auth.user.userId,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (gameplayResponse.ok) {
      const gameplay = await gameplayResponse.json();

      const gamerecordResponse = await fetch(
        "http://localhost:3000/gamerecords",
        {
          method: "POST",
          body: JSON.stringify({
            gameplayId: gameplay.id,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      if (gamerecordResponse.ok) {
        const user = JSON.parse(localStorage.getItem("user"));
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...user,
            gameplayId: gameplay.id,
            isFinished: false,
          })
        );

        auth.setUser({ ...user, gameplayId: gameplay.id, isFinished: false });
      }
    }
  }

  function handleOpenPopup() {
    dialogRef.current.showModal();
  }
  return (
    <>
      <header className="mb-8">
        <ul className="flex justify-center items-center flex-wrap gap-x-12">
          <li
            className="hover:cursor-pointer bg-white px-4 py-2 rounded text-sky-800 font-medium"
            onClick={handleOpenPopup}
          >
            Restart
          </li>
          <li className="px-4 py-2 rounded text-white text-5xl">
            <Link to="/gameboard">Where's Waldo</Link>
          </li>
          <li className="bg-white px-4 py-2 rounded text-sky-800 font-medium">
            <Link to="/leader-board">Leader board</Link>
          </li>
          <li className="bg-white px-4 py-2 rounded text-sky-800 font-medium">
            <Link to="/gameboard">Back to game</Link>
          </li>
        </ul>
      </header>
      <RestartPopup
        dialogRef={dialogRef}
        onRestart={handleRestart}
      ></RestartPopup>
    </>
  );
};
