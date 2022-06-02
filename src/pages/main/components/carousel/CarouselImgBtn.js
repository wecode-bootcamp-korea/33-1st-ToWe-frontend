import React from 'react';

const CarouselImgBtn = ({ currentImage, moveToImage }) => {
  return (
    <>
      {new Array(4).fill().map((_, i) => (
        <span
          key={i}
          className={`btn ${currentImage === i ? 'active' : null}`}
          onClick={() => moveToImage(i)}
        />
      ))}
    </>
  );
};

export default CarouselImgBtn;
