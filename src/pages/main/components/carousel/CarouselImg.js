import React, { useRef, useEffect } from 'react';

const CarouselImg = ({ imgData, currentImage }) => {
  useEffect(() => {
    carousellRef.current.style['z-index'] = '1';
  }, []);

  const carousellRef = useRef('');

  return (
    <div
      className={`carouselImg ${
        imgData.id === currentImage ? 'active' : 'hidden'
      }`}
    >
      <img
        src={`${imgData.url}`}
        alt="mainToyImg"
        className="active"
        ref={carousellRef}
      />
    </div>
  );
};

export default CarouselImg;
