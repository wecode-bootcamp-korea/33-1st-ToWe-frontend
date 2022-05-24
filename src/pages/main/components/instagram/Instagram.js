import React, { useEffect, useState } from 'react';
import './Instagram.scss';
import SliderImg from './SliderImg';
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
        <div className="arrowLeft">A</div>
        <div className="arrowRight">B</div>
      </div>
    </div>
  );
};

export default Instagram;
