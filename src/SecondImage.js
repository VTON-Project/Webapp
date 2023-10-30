import React, { useState } from "react";

function SecondImage() {
  const [file, setFile] = useState();
  const [text, showText] = useState(false);

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
    showText(true);
  }

  return (
    <div className="App">
      {!text && <h2>Add Image:</h2>}
      <input type="file" onChange={handleChange} />
      <img alt="" src={file} width="50" height="50" />
    </div>
  );
}

export default SecondImage;
