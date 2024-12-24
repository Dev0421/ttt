import React, { useEffect, useState } from "react";
import "./ImageFloatAnimation.css";
import iconImg from '../assets/images/icons/Designer.webp'

const ImageFloatAnimation = ({ settings }) => {
  const { count = 5, speed = 8 } = settings; // Set default values for count and speed

  const [images, setImages] = useState([]);

  // Generate an array of random positions for images
  useEffect(() => {
    const generatedImages = Array.from({ length: count }).map((_, index) => ({
      id: index,
      left: Math.random() * 100, // random horizontal position
      delay: Math.random() * 5, // random delay to stagger animation
    }));
    setImages(generatedImages);
  }, [count]);

  return (
    <div className="image-float-container">
      {images.map((img) => (
        <div
          key={img.id}
          className="floating-image"
          style={{
            left: `${img.left}%`,
            animationDuration: `${speed}s`,
            animationDelay: `${img.delay}s`,
          }}
        >
          <img src={iconImg} alt="Floating" className="float-image"/>
        </div>
      ))}
    </div>
  );
};

export default ImageFloatAnimation;
