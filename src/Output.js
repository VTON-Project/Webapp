import React, { useState } from 'react'
import logo from './img/logo.jpg'
function Output() {
  const [image,setImage]=useState(false)
  const handleSubmit=(e)=>{
    setImage(true)
  }
  return (
    <>
      {!image &&<form  onSubmit={handleSubmit}><button type='submit'>Result</button></form>}
      {image &&<img src={logo} alt="Logo" width={600} height={400} />}
    </>
  )
}

export default Output