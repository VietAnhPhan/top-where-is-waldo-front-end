import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../Context";
import { getFullDate } from "../../helpers";

function Home(props) {
  let navigate = useNavigate();
  const auth = useContext(AuthContext);

  async function handleStartgame() {
    if (!auth.userId) {
      const userRespone = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
      });

      const user = await userRespone.json();

      const gameplayResponse = await fetch("http://localhost:3000/gameplays", {
        method: "POST",
        body: JSON.stringify({
          userId: user.id,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });

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

      if (userRespone.ok && gameplayResponse.ok && gamerecordResponse.ok) {
        const userStorage = {
          userId: user.id,
          gameplayId: gameplay.id,
          startTime: getFullDate(),
        };
        localStorage.setItem("userId", JSON.stringify(userStorage));
        auth.setUserId(user.id);
        navigate("/gameboard");
      } else {
        throw new Error("Can not start the game");
      }
    }

    if (auth.userId) {
      navigate("/gameboard");
    }
  }
  return (
    <div className="flex justify-center items-center h-full">
      <title>{`Homepage | ${props.sitename}`}</title>
      <button className="button-solid" onClick={handleStartgame}>
        Play now
      </button>
    </div>
  );
}

export default Home;
