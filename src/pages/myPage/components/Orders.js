import React from 'react';
import OrderHistory from './OrderHistory.js';
import './Orders.scss';

const Orders = ({ order }) => {
  return (
    <div className="orders">
      <div className="orderTitle">Order Historys</div>
      <div className="shoppingHistory">
        {order.length !== 0 &&
          order.map(history => (
            <OrderHistory history={history} key={history.product_op_id} />
          ))}
      </div>
    </div>
  );
};

export default Orders;
