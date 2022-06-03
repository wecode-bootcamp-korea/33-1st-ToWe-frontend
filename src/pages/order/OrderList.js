import React from 'react';

const OrderList = ({ orderData }) => {
  console.log(orderData);
  return (
    <li className="item">
      <img
        className="itemImg"
        src={`${orderData.thumbnail_url}`}
        alt={orderData.product}
      />
      <div>
        <span className="itemName">{orderData.product}</span>
        <span className="itemDetail">색상: {orderData.color_name}</span>
        <span className="orderInfo">
          {orderData.quantity}개 / {orderData.price} 원
        </span>
      </div>
    </li>
  );
};

export default OrderList;
