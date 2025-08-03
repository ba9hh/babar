import { useState } from "react";
import Home from "./components/Home";
import InGame from "./components/InGame";
import InGameImages from "./components/InGameImages";
import PreGame from "./components/PreGame";
import Test from "./components/test";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/games/:game" element={<PreGame />}/>
        <Route path="/ingame" element={<InGame />}/>
        <Route path="/ingameimages" element={<InGameImages />}/>
        <Route path="/test" element={<Test />}/>
      </Routes>
    </>
  );
}

export default App;
