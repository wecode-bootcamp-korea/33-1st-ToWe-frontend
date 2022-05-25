import React from 'react';

const BestProduct = ({ imgData }) => {
  return (
    <li className="itemList">
      <img alt={`${imgData.name}`} className="item" src={`${imgData.url}`} />
      <div className="itemDesc">
        <span> {imgData.name} </span>
        <span> {imgData.price} 원 </span>
      </div>
    </li>
  );
};

export default BestProduct;
