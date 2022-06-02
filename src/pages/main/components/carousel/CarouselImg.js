import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CarouselImg = ({ imgData, currentImage }) => {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/itemdetail/${imgData.id}`);
  };

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
        onClick={goToDetail}
        ref={carousellRef}
      />
    </div>
  );
};

export default CarouselImg;
