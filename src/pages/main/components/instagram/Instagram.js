import React, { useEffect, useState } from 'react';
import './Instagram.scss';
import SliderImg from './SliderImg';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

// import './data/SLIDER_DATA.json';

const Instagram = () => {
  const [imgList, setImgList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/SLIDER_DATA.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setImgList(data);
      });
  }, []);

  const slideHandler = () => {
    console.log('h');
  };

  return (
    <div className="instagram">
      <h2 className="title">INSTAGRAM</h2>
      <div className="description">#토위 #TOWE #TOY SHOP #REGO</div>
      <div className="slider">
        <div className="slide">
          {imgList.map(imgData => {
            return <SliderImg key={imgData.id} imgData={imgData} />;
          })}
        </div>
        <div className="arrowLeft" onClick={slideHandler}>
          <FaAngleLeft />
        </div>
        <div className="arrowRight" onClick={slideHandler}>
          <FaAngleRight />
        </div>
      </div>
      <div className="space" />
    </div>
  );
};

export default Instagram;
