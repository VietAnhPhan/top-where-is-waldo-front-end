import "./App.css";
import { RouterProvider } from "react-router";
import router from "./routes";
import { AuthContext } from "./Context";
import { useContext, useState } from "react";

function App() {
  const auth = useContext(AuthContext);
  const [user, setUser] = useState(auth);
  // console.log(user);
  return (
    <>
      <AuthContext value={{ user, setUser }}>
        <RouterProvider router={router}></RouterProvider>
      </AuthContext>
    </>
  );
}

export default App;
