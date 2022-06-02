import React, { useState, useEffect } from 'react';
import CollaboItems from './CollaboItems';
import './Collaboration.scss';

const Collaboration = () => {
  const [imgList, setImgList] = useState([]);

  useEffect(() => {
    fetch('/data/COLLABORATION.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setImgList(data);
      });
  }, []);

  return (
    <section className="collaboration">
      <div className="line" />

      <h2 className="title">COLLABORATION</h2>
      <div className="description">
        TOWE는 다양한 콜라보레이션을 통해 새롭고 즐거운 가치를 만듭니다.
      </div>
      <div className="itemContainer">
        <ul className="items">
          {imgList.map(imgData => (
            <CollaboItems imgData={imgData} key={imgData.id} id={imgData.id} />
          ))}
        </ul>
      </div>

      <div className="line" />
    </section>
  );
};

export default Collaboration;
