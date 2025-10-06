import { useEffect } from "react";
import gameboardImage from "../../assets/characters/ap6qmdr.jpg";

const Gameboard = () => {
  useEffect(() => {
    const img = document.getElementById("gameboardImage");
    const gameBoard = document.querySelector(".gameboard");

    const targetBox = document.createElement("div");
    targetBox.classList.add("targeting-box");

    const characterChoicesDropdown = document.createElement("ul");
    characterChoicesDropdown.classList.add("character-choices");

    const characterChoices = [
      "Captain Calamity Carl",
      "Penelope The Parasol Plume",
      "Buster The Brute Barnett",
      "Sailor Sarah Sunbeam",
      "Jasper The Juggler Jenkins",
    ];

    characterChoices.forEach((characterChoice) => {
      const characterChoiceLi = document.createElement("li");
      characterChoiceLi.textContent = characterChoice;
      characterChoicesDropdown.appendChild(characterChoiceLi);
    });

    function removeElements() {
      if (
        gameBoard.querySelector(".targeting-box") &&
        gameBoard.querySelector(".character-choices")
      ) {
        gameBoard.removeChild(targetBox);
        gameBoard.removeChild(characterChoicesDropdown);
      }
    }

    gameBoard.addEventListener("mouseleave", () => {
      removeElements();
    });

    img.addEventListener("click", (e) => {
      targetBox.style.left = `${e.offsetX - 50}px`;
      targetBox.style.top = `${e.offsetY - 50}px`;

      characterChoicesDropdown.style.left = `${e.offsetX + 50}px`;
      characterChoicesDropdown.style.top = `${e.offsetY + 50}px`;
      console.log(e.offsetX, e.offsetY);
      if (
        !gameBoard.querySelector(".targeting-box") &&
        !gameBoard.querySelector(".character-choices")
      ) {
        gameBoard.appendChild(targetBox);
        gameBoard.appendChild(characterChoicesDropdown);
      }
    });
  });

  return (
    <div className="gameBoard flex justify-center">
      <div className="gameboard">
        <img id="gameboardImage" src={gameboardImage} alt="" />
      </div>
    </div>
  );
};

export default Gameboard;
