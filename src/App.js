import React, { useEffect } from "react"
import "./App.scss"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"

import Aos from "aos"
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div className='wrapper'>
      <Header />
      <Hero />
      <Footer />
    </div>
  )
}

export default App
