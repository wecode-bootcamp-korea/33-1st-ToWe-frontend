import React from 'react';
import './BestProducts.scss';

const BestProducts = () => {
  return (
    <section className="bestProducts">
      <h2 className="title">BEST PRODUCTS</h2>
      <div className="description">ToWe의 베스트 제품을 소개합니다.</div>
      <div className="itemContainer">
        <ul className="items">
          <li className="itemList">
            <img alt="img01" className="item" src="./images/cartoy.jpg" />
            <div className="itemDesc">
              <span> 아이템이름 </span>
              <span> 10,000 원 </span>
            </div>
          </li>
          <li className="itemList">
            <img alt="img02" className="item" src="./images/cartoy.jpg" />
            <div className="itemDesc">
              <span> 아이템이름 </span>
              <span> 10,000 원 </span>
            </div>
          </li>
          <li className="itemList">
            <img alt="img03" className="item" src="./images/cartoy.jpg" />{' '}
            <div className="itemDesc">
              <span> 아이템이름 </span>
              <span> 10,000 원 </span>
            </div>
          </li>
          <li className="itemList">
            <img alt="img04" className="item" src="./images/cartoy.jpg" />{' '}
            <div className="itemDesc">
              <span> 아이템이름 </span>
              <span> 10,000 원 </span>
            </div>
          </li>
          <li className="itemList">
            <img alt="img05" className="item" src="./images/cartoy.jpg" />{' '}
            <div className="itemDesc">
              <span> 아이템이름 </span>
              <span> 10,000 원 </span>
            </div>
          </li>
          <li className="itemList">
            <img alt="img06" className="item" src="./images/cartoy.jpg" />{' '}
            <div className="itemDesc">
              <span> 아이템이름 </span>
              <span> 10,000 원 </span>
            </div>
          </li>
        </ul>
      </div>
      <div className="more">더 보러가기</div>
      <div className="line" />
    </section>
  );
};

export default BestProducts;
