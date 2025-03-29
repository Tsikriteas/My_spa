import React from 'react';

function Gallery() {
  return (
    <section id="gallery">
      <h2>Φωτογραφίες του Δωματίου</h2>
      <div className="gallery">
        <img src="path-to-your-photo1.jpg" alt="Room Photo 1" />
        <img src="path-to-your-photo2.jpg" alt="Room Photo 2" />
        <img src="path-to-your-photo3.jpg" alt="Room Photo 3" />
      </div>
    </section>
  );
}

export default Gallery;
