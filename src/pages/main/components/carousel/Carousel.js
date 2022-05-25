import React, { useEffect, useState } from 'react';
import CarouselImg from './CarouselImg';
import './Carousel.scss';

const Carousel = () => {
  const [imgList, setImgList] = useState([]);
  const [curImg, setCurImg] = useState(0);

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
    setCurImg(targetNum);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (curImg < imgList.length - 1) {
        return setCurImg(curImg => curImg + 1);
      } else if (curImg === imgList.length - 1) {
        return setCurImg(0);
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [curImg]);

  return (
    <section className="carousel">
      <div className="carouselWrapper">
        {imgList.map(imgData => {
          return (
            <CarouselImg key={imgData.id} imgData={imgData} curImg={curImg} />
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
