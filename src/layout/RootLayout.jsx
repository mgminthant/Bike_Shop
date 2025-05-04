import React from "react";
import Nav from "../components/layout/menubar/Nav";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Outlet />
    </React.Fragment>
  );
}

export default App;
