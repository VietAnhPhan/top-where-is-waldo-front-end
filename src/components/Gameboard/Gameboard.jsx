import { useContext, useEffect, useRef, useState } from "react";
import gameboardImage from "../../assets/characters/ap6qmdr.jpg";
import TargetBox from "./Targetbox";
import CharacterChoicesDropdown from "./CharacterChoiceDropdown";
import MarkerList from "./MarkerList";
import { AuthContext } from "../../Context";
import { useLoaderData } from "react-router";
import EnterNamePopup from "../Popup/EnterNamePopup";

const Gameboard = () => {
  const auth = useContext(AuthContext);

  const markers = useLoaderData();
  const [coord, setCoord] = useState({ x: 0, y: 0 });
  const [hasStarted, setHasStarted] = useState(false);
  const dialogRef = useRef(null);
  const finishedRef = useRef(false);

  function handleClick(e) {
    if (!finishedRef.current) {
      const nativeEvent = e.nativeEvent;
      const x = nativeEvent.offsetX;
      const y = nativeEvent.offsetY;
      setCoord({ x, y });
      setHasStarted(true);
      return;
    }

    handleOpen();
  }

  function handleOpen() {
    dialogRef.current.showModal();
  }

  useEffect(() => {
    // async function startFetching() {}

    // startFetching();
    if (auth.user.isFinished) {
      handleOpen();
    }
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
        {hasStarted && !auth.user.isFinished && (
          <>
            <TargetBox posX={coord.x} posY={coord.y}></TargetBox>
            <CharacterChoicesDropdown
              finishedRef={finishedRef}
              posX={coord.x}
              posY={coord.y}
            ></CharacterChoicesDropdown>
          </>
        )}

        {markers && <MarkerList markers={markers}></MarkerList>}
        <EnterNamePopup dialogRef={dialogRef}></EnterNamePopup>
      </div>
    </div>
  );
};

export default Gameboard;
