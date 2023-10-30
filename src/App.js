import React from "react";
import FirstImage from "./FirstImage";
import SecondImage from "./SecondImage";
import Output from "./Output";
import "./App.css";
function App() {
  return (
    <>
      <div className="cont">
        <h1>Output</h1>
        <div className="box">
          <FirstImage></FirstImage>
        </div>
      </div>
    </>
  );
}

export default App;
