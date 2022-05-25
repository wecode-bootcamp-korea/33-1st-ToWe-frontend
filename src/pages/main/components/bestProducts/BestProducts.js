import React, { useState, useEffect } from 'react';
import BestProduct from './BestProduct';
import './BestProducts.scss';

const BestProducts = () => {
  const [imgList, setImgList] = useState([]);

  useEffect(() => {
    fetch('/data/BEST_PRODUCTS.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setImgList(data);
      });
  }, []);

  return (
    <section className="bestProducts">
      <h2 className="title">BEST PRODUCTS</h2>
      <div className="description">ToWe의 베스트 제품을 소개합니다.</div>
      <div className="itemContainer">
        <ul className="items">
          {imgList.map(imgData => (
            <BestProduct imgData={imgData} key={imgData.id} />
          ))}
        </ul>
      </div>
      <div className="more">더 보러가기</div>
      <div className="line" />
    </section>
  );
};

export default BestProducts;
