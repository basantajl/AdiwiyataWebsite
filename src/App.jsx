import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Gallery from "./Pages/Gallery"
import HariBesar from "./Pages/Haribesar"
import Navbar from "./Components/Navbar"
import "./App.css"

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/hari-besar" element={<HariBesar />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
