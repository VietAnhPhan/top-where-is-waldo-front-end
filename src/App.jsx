import "./App.css";
import { RouterProvider } from "react-router";
import router from "./routes";
import { AuthContext } from "./Context";
import { useState } from "react";

function App() {
  const [userId, setUserId] = useState(
    JSON.parse(localStorage.getItem("userId"))
  );
  return (
    <>
      <AuthContext value={{ userId, setUserId }}>
        <RouterProvider router={router}></RouterProvider>
      </AuthContext>
    </>
  );
}

export default App;
