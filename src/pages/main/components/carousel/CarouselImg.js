import React from 'react';

const CarouselImg = ({ imgData, curImg }) => {
  return (
    <div
      className={`carouselImg ${imgData.id === curImg ? 'active' : 'hidden'}`}
    >
      <img src={`${imgData.url}`} alt="mainToyImg" className="active" />
      <div className="itemDesc">
        <h3>BEST</h3>
        <span className="title">{imgData.name}</span>
        <span className="titleEn">{imgData.NameEn}</span>
        <div className="line" />
        <span className="titlePrice">{imgData.price}</span>
      </div>
    </div>
  );
};

export default CarouselImg;
