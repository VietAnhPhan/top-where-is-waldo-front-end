import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context";
import MarkerList from "./MarkerList";

const CharacterChoicesDropdown = ({ posX, posY, finishedRef }) => {
  const auth = useContext(AuthContext);
  const [characters, setCharacters] = useState([]);
  const [markers, setMarkers] = useState([]);

  async function handleSelect(characterId) {
    const moveResponse = await fetch("http://localhost:3000/moves", {
      method: "POST",
      body: JSON.stringify({
        position_x: posX,
        position_y: posY,
        characterId: characterId,
        gameplayId: Number(auth.user.gameplayId),
        range: 100,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (moveResponse.ok) {
      const marker = await moveResponse.json();
      // if (!marker.isFinished) {
      //   finishedRef.current = true;
      //   return;
      // }
      setMarkers([...markers, marker]);
    }

    const gampelayResponse = await fetch(
      `http://localhost:3000/gameplays/${auth.user.gameplayId}`,
      {
        method: "GET",
      }
    );

    if (gampelayResponse.ok) {
      const gameplay = await gampelayResponse.json();

      if (gameplay.isFinished) {
        finishedRef.current = true;
        const user = JSON.parse(localStorage.getItem("user"));
        localStorage.setItem(
          "user",
          JSON.stringify({ ...user, isFinished: true })
        );
        return;
      }
    }
  }

  useEffect(() => {
    async function startFetching() {
      const rs = await fetch("http://localhost:3000/characters", {
        method: "GET",
      });

      if (rs.ok) {
        const result = await rs.json();
        setCharacters(result);
      }

      //   characterChoices.forEach((characterChoice) => {
      //     const characterChoiceLi = document.createElement("li");
      //     characterChoiceLi.textContent = characterChoice.name;
      //     characterChoiceLi.addEventListener("click", () => {
      //       alert(characterChoice.id);
      //     });
      //     characterChoicesDropdown.appendChild(characterChoiceLi);
      //   });
    }

    startFetching();
  }, []);

  return (
    <>
      {characters.length > 0 && (
        <ul
          className="character-choices"
          style={{ left: posX + 50, top: posY + 50 }}
        >
          {characters.map((character) => (
            <li key={character.id} onClick={() => handleSelect(character.id)}>
              {character.name}
            </li>
          ))}
        </ul>
      )}

      <MarkerList markers={markers}></MarkerList>
    </>
  );
};

export default CharacterChoicesDropdown;
