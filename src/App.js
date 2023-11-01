import React from "react";
import FirstImage from "./FirstImage";
import Header from "./Header";
import Slider from "../src/Slider/Slider";
import Home from '../src/Home'
import { Route, Routes } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <>
      <Routes>
        <Route
          exact path="/"
          element={
            <div>
              <Header></Header>
              <Slider />
            </div>
          }
        ></Route>
          <Route
          path="/home"
          element={
            <div>
              <Home></Home>
            </div>
          }
        ></Route>
        <Route
          path="/vton"
          element={
            <div>
              <FirstImage></FirstImage>
            </div>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
