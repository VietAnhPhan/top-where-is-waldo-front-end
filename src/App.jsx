import "./App.css";
import { RouterProvider } from "react-router";
import router from "./routes";
import { AuthContext } from "./Context";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
 
  useEffect(() => {
    if (!user.markers) {
      async function fetchMarkers() {
        const response = await fetch(
          `http://localhost:3000/moves?gameplayId=${Number(
            user.gameplayId
          )}&userId=${Number(user.userId)}`
        );

        if (response.ok) {
          const markers = await response.json();
          setUser({
            ...user,
            markers: markers,
          });
        }
      }
      fetchMarkers();
    }
  });

  return (
    <>
      <AuthContext value={{ user, setUser }}>
        <RouterProvider router={router}></RouterProvider>
      </AuthContext>
    </>
  );
}

export default App;
