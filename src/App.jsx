import "./App.css";

import { useEffect, useState } from "react";

import gameplayImage from "./assets/characters/ap6qmdr.jpg";

function App() {
  useEffect(() => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = drawImageActualSize;
    img.srcset = gameplayImage;

    function drawImageActualSize() {
      ctx.width = this.naturalWidth;
      ctx.height = this.naturalHeight;

      ctx.drawImage(this, 0, 0, this.width, this.height);
    }
  });

  return (
    <div className="">
      <canvas id="canvas" width={2000} height={2000}></canvas>
    </div>
  );
}

export default App;
