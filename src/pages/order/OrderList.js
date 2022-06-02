import React from 'react';

const OrderList = ({ orderData }) => {
  return (
    <li className="item">
      <img className="itemImg" src={`${orderData.url}`} alt={orderData.name} />
      <div>
        <span className="itemName">{orderData.name}</span>
        <span className="itemDetail">색상:_</span>
        <span className="orderInfo">_개 / {orderData.price} 원</span>
      </div>
    </li>
  );
};

export default OrderList;
