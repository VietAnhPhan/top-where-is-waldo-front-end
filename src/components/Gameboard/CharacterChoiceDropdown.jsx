import { useEffect, useState } from "react";

const CharacterChoicesDropdown = ({ posX, posY }) => {
  const [characters, setCharacters] = useState([]);

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
            <li key={character.id}>{character.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CharacterChoicesDropdown;
