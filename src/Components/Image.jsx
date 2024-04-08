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

  return (
    <div className="App">
      {/* <div className="box"> */}
      <div className="main">
          <form onSubmit={handleSubmit}>
            <button type="submit">Generate</button>
          </form>
        {image !== null && (
          <img src={image} height="370" />
        )}
      </div>
      <div className="box">
        <input type="file" onChange={handlePersonChange} />
        <img alt="" src={person !== null ? URL.createObjectURL(person) : undefined} width="200" height="200" />
        <input type="file" onChange={handleClothChange} />
        <img alt="" src={cloth !== null ? URL.createObjectURL(cloth) : undefined} width="200" height="200" />
      </div>
    </div>
    // </div>
  );
}

export default FirstImage;
