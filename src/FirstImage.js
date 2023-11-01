import React, { useState } from "react";
import logo from "./img/logo.jpg";
import guts from "./img/guts.jpg";
function FirstImage() {
  const [file, setFile] = useState();
  const [file1, setFile1] = useState();
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
    setShow(true);
  }
  function handleChange1(e) {
    setFile1(URL.createObjectURL(e.target.files[0]));
    setShow1(true);
  }
  const [image, setImage] = useState(false);
  const handleSubmit = (e) => {
    setImage(true);
  };
  return (
    <div className="App">
        {/* <div className="box"> */}
          <div className="main">
            {!image && (
              <form onSubmit={handleSubmit}>
                <button type="submit">Result</button>
              </form>
            )}
            {image && show && show1 && (
              <img src={logo} alt={guts} width={600} height={400} />
            )}
          </div>
          <div className="box">
            <input type="file" onChange={handleChange} />
            <img alt="" src={file} width="50" height="50" />
            <input type="file" onChange={handleChange1} />
            <img alt="" src={file1} width="50" height="50" />
          </div>
        </div>
      // </div>
  );
}

export default FirstImage;
