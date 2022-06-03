import React from 'react';
import './OrderHistory.scss';

const OrderHistory = ({ history }) => {
  const { thumbnail_img, product_name, status, quantity } = history;
  return (
    <div className="orderHistory">
      <div className="orderList">
        <div className="imgName">
          <img
            className="productimg"
            src={`${thumbnail_img}`}
            alt="Productimg"
          />
        </div>
        <div className="amountPrice">
          <div className="productName">{product_name}</div>
          <div className="amount">{quantity}</div>
          <div className="status">{status}</div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
