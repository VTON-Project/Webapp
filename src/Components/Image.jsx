import React, { useState } from "react";

function FirstImage() {
  const [person, setPerson] = useState(null);
  const [cloth, setCloth] = useState(null);
  function handlePersonChange(e) {
    setPerson(e.target.files[0]);
  }
  function handleClothChange(e) {
    setCloth(e.target.files[0]);
  }

  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (person === null || cloth === null) {
      alert("Person and cloth image must be uploaded.");
      return;
    }
    const formData = new FormData();
    formData.set('person', person);
    formData.set('cloth', cloth);

    try {
      const response = await fetch('http://127.0.0.1:5000', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const imageBlob = await response.blob();
        const imageURL = URL.createObjectURL(imageBlob);
        setImage(imageURL);
      }
      else {
        console.error('Failed to upload files.');
      }
    } catch (error) {
      console.error(`Error uploading files: ${error}`);
    }
  };

  const buttonStyle = {
    border: "1px solid #ccc",
    padding: "12px 24px",
    borderRadius: "4px",
    cursor: "pointer",
    color: "white",
    fontSize: "16px",
    backgroundColor: "darkblue",
    marginTop: "20px",
  };

  return (
    <div className="App">
      <div className="main">
        {!image && (
          <form onSubmit={handleSubmit}>
            <button type="submit" style={buttonStyle}>Generate</button>
          </form>
        )}
        {image !== null && (
          <img src={image} height="396" />
        )}
      </div>
      <div className="box">
        <label className="fileInputLabel" style={buttonStyle}>
          Choose Image
          <input type="file" onChange={handlePersonChange} style={{ display: "none" }} />
        </label>
        <img alt="" src={person !== null ? URL.createObjectURL(person) : undefined} width="200" height="200" />
        <label className="fileInputLabel" style={buttonStyle}>
          Choose Clothing
          <input type="file" onChange={handleClothChange} style={{ display: "none" }} />
        </label>
        <img alt="" src={cloth !== null ? URL.createObjectURL(cloth) : undefined} width="200" height="200" />
      </div>
    </div>
    // </div>
  );
}

export default FirstImage;
