import React from "react"
import "../Style/Home.css"

const Home = () => {
  return (
    <div className="home-container">
      <h3>Halo Selamat datang di website adiwiyata</h3>
      <h2>Informasi tentang Adiwiyata.</h2>
      <span></span>
      <div className="video-container">
        <iframe
          width="1000"
          height="500"
          src="https://www.youtube.com/embed/6Fx4yHyZ0uc?rel=0" // Ganti dengan URL video yang valid
          title="Embedded Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default Home
