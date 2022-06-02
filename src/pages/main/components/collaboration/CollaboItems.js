import React from 'react';

const BestProduct = ({ imgData, id }) => {
  return (
    <li className="itemList">
      <img alt={`${imgData.name}`} className="item" src={`${imgData.url}`} />

      <div className="itemDesc">
        <span> {imgData.name} </span>
        <span> {imgData.price} </span>
      </div>
    </li>
  );
};

export default BestProduct;
