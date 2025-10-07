import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context";

const CharacterChoicesDropdown = ({ posX, posY }) => {
  const [characters, setCharacters] = useState([]);
  const auth = useContext(AuthContext);

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

    // if (response.ok) {
    // }
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
    </>
  );
};

export default CharacterChoicesDropdown;
