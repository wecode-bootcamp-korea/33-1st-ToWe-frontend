import React from 'react';
import './Carousel.scss';

const Carousel = () => {
  return (
    <section className="carousel">
      <div className="carousel-content">
        <img src="/images/mainImg.jpg" alt="mainToyImg" />
        <div className="itemDesc">
          <h3>BEST</h3>
          <span className="title">제품이름</span>
          <span className="titleEn">item name</span>
        </div>
      </div>
      {/* <div className="carousel-content">
        <img src="/images/mainImg.jpg" alt="mainToyImg" />
        <div className="itemDesc">
          <h3>BEST</h3>
          <span>제품이름</span>
          <span>item name</span>
        </div>
      </div>
      <div className="carousel-content">
        <img src="/images/mainImg.jpg" alt="mainToyImg" />
        <div className="itemDesc">
          <h3>BEST</h3>
          <span>제품이름</span>
          <span>item name</span>
        </div>
      </div>
      <div className="carousel-content">
        <img src="/images/mainImg.jpg" alt="mainToyImg" />
        <div className="itemDesc">
          <h3>BEST</h3>
          <span>제품이름</span>
          <span>item name</span>
        </div>
      </div> */}
    </section>
  );
};

export default Carousel;
