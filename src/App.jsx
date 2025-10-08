import "./App.css";
import { RouterProvider } from "react-router";
import router from "./routes";
import { AuthContext } from "./Context";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  return (
    <>
      <AuthContext value={{ user, setUser }}>
        <RouterProvider router={router}></RouterProvider>
      </AuthContext>
    </>
  );
}

export default App;
