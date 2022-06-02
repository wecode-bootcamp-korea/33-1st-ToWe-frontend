import React from 'react';
import './Order.scss';

const Order = () => {
  return (
    <div className="order">
      <div className="imgName">
        <img classname="productimg" src="" alt="Productimg" />
        <div className="productName">레고</div>
      </div>
      <div className="amountPrice">
        <div className="amount">3</div>
        <div className="price">30000원</div>
      </div>
    </div>
  );
};

export default Order;
