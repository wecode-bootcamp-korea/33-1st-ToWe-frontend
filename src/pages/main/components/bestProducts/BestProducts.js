import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import BestProduct from './BestProduct';
import './BestProducts.scss';

const BestProducts = () => {
  const [imgList, setImgList] = useState([]);
  const navigate = useNavigate();

  const goToBest10 = () => {
    navigate(`/best10`);
  };

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
            <BestProduct imgData={imgData} key={imgData.id} id={imgData.id} />
          ))}
        </ul>
      </div>
      <div className="more" onClick={goToBest10}>
        more <FaAngleRight className="arrowRightBtn" />
      </div>
      <div className="line" />
    </section>
  );
};

export default BestProducts;
