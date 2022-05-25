import React from 'react';

const CarouselImg = ({ imgData, curImg, fadeIn }) => {
  return (
    <div className={`carouselImg ${fadeIn === true ? 'active' : 'hidden'}`}>
      {imgData.id === curImg ? (
        <>
          <img src={`${imgData.image}`} alt="mainToyImg" className="active" />
          <div className="itemDesc">
            <h3>BEST</h3>
            <span className="title">{imgData.name}</span>
            <span className="titleEn">{imgData.price}</span>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default CarouselImg;
