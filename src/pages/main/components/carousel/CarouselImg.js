import React from 'react';

const CarouselImg = ({ imgData, currentImage }) => {
  return (
    <div
      className={`carouselImg ${
        imgData.id === currentImage ? 'active' : 'hidden'
      }`}
    >
      <img src={`${imgData.url}`} alt="mainToyImg" className="active" />
    </div>
  );
};

export default CarouselImg;
