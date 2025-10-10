import "./App.css";

import { AuthContext } from "./Context";
import { useContext, useState } from "react";
import { Header } from "./header/header";
import { Outlet } from "react-router";

function App() {
  const auth = useContext(AuthContext);
  const [user, setUser] = useState(auth);
  // console.log(user);
  return (
    <>
      <AuthContext value={{ user, setUser }}>
        <Header></Header>
        <Outlet></Outlet>
      </AuthContext>
    </>
  );
}

export default App;
