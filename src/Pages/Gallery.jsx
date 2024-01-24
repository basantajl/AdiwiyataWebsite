// src/components/Gallery.js
import React from "react"
import "../Style/Gallery.css"

const Gallery = () => {
  return (
    <div className="Text">
      <h1 className="title">Hallo semuanya</h1>
      <p>ini adalah website bokep pemerintahan lonkey</p>
      <div className="gallery-container">
        <div className="card">
          <div
            className="card-image"
            style={{
              backgroundImage: `url('https://siedoo.com/wp-content/uploads/2019/07/menuju-sekolah-adiwiyata-1200x675.jpg')`, // Ganti 'url_to_your_image.jpg' dengan URL gambar yang ingin Anda gunakan
            }}
          ></div>
          <div className="card-content">
            <h2>What is Adiwiyatra?</h2>
            <p>Lorem ipsun kakakakkakada Hs</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
