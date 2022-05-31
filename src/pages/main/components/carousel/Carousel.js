import React, { useEffect, useState } from 'react';
import CarouselImg from './CarouselImg';
import CarouselImgBtn from './CarouselImgBtn';
import './Carousel.scss';

const Carousel = () => {
  const [imgList, setImgList] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    fetch('/data/CAROUSEL_DATA.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setImgList(data);
      });
  }, []);

  const moveToImage = targetNum => {
    setCurrentImage(targetNum);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage(currentImage =>
        currentImage < imgList.length - 1 ? currentImage + 1 : 0
      );
    }, 3000);
    return () => clearInterval(timer);
  }, [currentImage, imgList]);

  return (
    <section className="carousel">
      <div className="carouselWrapper">
        {imgList.map(imgData => (
          <CarouselImg
            key={imgData.id}
            imgData={imgData}
            currentImage={currentImage}
          />
        ))}
      </div>
      <div className="carouselBtns">
        <CarouselImgBtn currentImage={currentImage} moveToImage={moveToImage} />
      </div>
    </section>
  );
};

export default Carousel;
