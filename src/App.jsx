import "./App.css";
import { RouterProvider } from "react-router";
import router from "./routes";
import { AuthContext } from "./Context";
import { useContext, useState } from "react";
import { Header } from "./header/header";

function App() {
  const auth = useContext(AuthContext);
  const [user, setUser] = useState(auth);
  // console.log(user);
  return (
    <>
      <AuthContext value={{ user, setUser }}>
        <Header></Header>
        <RouterProvider router={router}></RouterProvider>
      </AuthContext>
    </>
  );
}

export default App;
