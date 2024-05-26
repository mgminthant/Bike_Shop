import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Outlet/>
    </React.Fragment>
  );
}

export default App;
