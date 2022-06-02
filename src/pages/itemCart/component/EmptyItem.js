import React from 'react';

const EmptyItem = () => {
  return (
    <div className="emptyItem">
      <div className="emptyPage">
        <span>Shopping cart is empty</span>
        <span>You have no items in your shopping cart.</span>
      </div>
    </div>
  );
};

export default EmptyItem;
