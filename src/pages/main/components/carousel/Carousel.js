import React, { useEffect, useState } from 'react';
import CarouselImg from './CarouselImg';
import './Carousel.scss';

const Carousel = () => {
  const [imgList, setImgList] = useState([]);
  const [curImg, setCurImg] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/data/CAROUSEL_DATA.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setImgList(data);
      });
  }, []);

  const moveToImg = targetNum => {
    setFadeIn(prev => !prev);
    setTimeout(() => {
      setFadeIn(prev => !prev);
      setCurImg(targetNum);
    }, 400);
  };

  return (
    <section className="carousel">
      <div className="carouselWrapper">
        {imgList.map(imgData => {
          return (
            <CarouselImg
              key={imgData.id}
              imgData={imgData}
              curImg={curImg}
              fadeIn={fadeIn}
            />
          );
        })}
      </div>
      <div className="carouselBtns">
        <CarouselImgBtn curImg={curImg} moveToImg={moveToImg} />
      </div>
    </section>
  );
};

const CarouselImgBtn = ({ curImg, moveToImg }) => {
  return (
    <>
      <span
        className={`btn ${curImg === 0 ? 'active' : null}`}
        onClick={() => moveToImg(0)}
      />
      <span
        className={`btn ${curImg === 1 ? 'active' : null}`}
        onClick={() => moveToImg(1)}
      />
      <span
        className={`btn ${curImg === 2 ? 'active' : null}`}
        onClick={() => moveToImg(2)}
      />
      <span
        className={`btn ${curImg === 3 ? 'active' : null}`}
        onClick={() => moveToImg(3)}
      />
    </>
  );
};

export default Carousel;
