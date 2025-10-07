import { useEffect, useState } from "react";
import gameboardImage from "../../assets/characters/ap6qmdr.jpg";
import TargetBox from "./Targetbox";
import CharacterChoicesDropdown from "./CharacterChoiceDropdown";

const Gameboard = () => {
  const [coord, setCoord] = useState({ x: 0, y: 0 });
  const [hasStarted, setHasStarted] = useState(false);

  function handleClick(e) {
    const nativeEvent = e.nativeEvent;
    const x = nativeEvent.offsetX;
    const y = nativeEvent.offsetY;
    setCoord({ x, y });
    setHasStarted(true);
  }

  useEffect(() => {
    async function startFetching() {}

    startFetching();
  });

  return (
    <div className="gameBoard flex justify-center">
      <div className="gameboard">
        <img
          id="gameboardImage"
          src={gameboardImage}
          alt=""
          onClick={handleClick}
        />
        {hasStarted && (
          <>
            <TargetBox posX={coord.x} posY={coord.y}></TargetBox>
            <CharacterChoicesDropdown
              posX={coord.x}
              posY={coord.y}
            ></CharacterChoicesDropdown>
          </>
        )}
      </div>
    </div>
  );
};

export default Gameboard;
