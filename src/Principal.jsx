import React from 'react'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Form from './Components/Form/Form'

function Principal() {
  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Contact />
    </>
  )
}

export default Principal