import React from 'react';
import Order from './Order.js';
import './Orders.scss';

const Orders = ({ order }) => {
  return (
    <div className="orders">
      <div className="orderTitle">Order Historys</div>
      <div className="orderHistory">
        {/* {order.length !== 0 &&
          order.map(history => (
            <Order history={history} key={history.product_op_id} />
          ))} */}
        <Order />
      </div>
    </div>
  );
};

export default Orders;
