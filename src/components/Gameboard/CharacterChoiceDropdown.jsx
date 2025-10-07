import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context";
import MarkerList from "./MarkerList";

const CharacterChoicesDropdown = ({ posX, posY }) => {
  const auth = useContext(AuthContext);
  const [characters, setCharacters] = useState([]);
  const [markers, setMarkers] = useState([]);

  async function handleSelect(characterId) {
    const response = await fetch("http://localhost:3000/moves", {
      method: "POST",
      body: JSON.stringify({
        position_x: posX,
        position_y: posY,
        characterId: characterId,
        gameplayId: Number(auth.user.gameplayId),
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (response.ok) {
      const marker = await response.json();
      setMarkers([...markers, marker]);
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

      {markers.map((marker) => (
        <MarkerList key={marker.id} marker={marker}></MarkerList>
      ))}
    </>
  );
};

export default CharacterChoicesDropdown;
