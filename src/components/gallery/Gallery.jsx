import { useState, useEffect } from 'react';
import './gallery.scss';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      url: "/i1.jpeg",
    },
    {
      url: "/i2.jpeg",
    },
    {
      url: "/i3.jpeg",
    },
    {
      url: "/i4.jpeg",
    },
    {
      url: "/i5.jpeg",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery-container">
      <h2>Gallery</h2>
      <div className="carousel">
        <button className="nav-button prev" onClick={prevSlide}>
          &#8249;
        </button>
        <div className="slides">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{
                transform: `translateX(${100 * (index - currentSlide)}%)`
              }}
            >
              <img src={image.url} alt={`Gallery Image`} />
            </div>
          ))}
        </div>
        <button className="nav-button next" onClick={nextSlide}>
          &#8250;
        </button>
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
