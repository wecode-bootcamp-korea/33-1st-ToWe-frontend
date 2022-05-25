import React, { useEffect, useState } from 'react';
import CarouselImg from './CarouselImg';
import './Carousel.scss';

const Carousel = () => {
  const [imgList, setImgList] = useState([]);
  const [curImg, setCurImg] = useState(0);

  useEffect(() => {
    fetch('/data/CAROUSEL_DATA.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setImgList(data);
      });
  }, []);

  const moveToImg = targetNum => {
    setCurImg(targetNum);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (curImg < imgList.length - 1) {
        return setCurImg(curImg => curImg + 1);
      } else if (curImg === imgList.length - 1) {
        return setCurImg(0);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [curImg]); // [] or [curImg] ??
  return (
    <section className="carousel">
      <div className="carouselWrapper">
        {imgList.map(imgData => (
          <CarouselImg key={imgData.id} imgData={imgData} curImg={curImg} />
        ))}
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
      {new Array(4).fill().map((_, i) => (
        <span
          key={i}
          className={`btn ${curImg === i ? 'active' : null}`}
          onClick={() => moveToImg(i)}
        />
      ))}
    </>
  );
};
export default Carousel;
