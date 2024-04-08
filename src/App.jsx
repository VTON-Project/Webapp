import Lines from "./Components/Lines";
import How from "./Components/How";
import Desc from "./Components/Desc";
import Features from "./Components/Features";
import Generate from "./Components/Generate";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router";
import Home from "./Components/AbouUs";
import FirstImage from "./Components/Image";

function App() {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <Desc />
              <Lines />
              <How />
              <Features />
              {/* <Details /> */}
              <Generate />
              <Footer />
            </div>
          }
        ></Route>

        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/generator" element={<Generate></Generate>}></Route>
        <Route path="/features" element={<Features></Features>}></Route>
        <Route path="/vton" element={<FirstImage></FirstImage>}></Route>
      </Routes>
    </>
  );
}

export default App;
