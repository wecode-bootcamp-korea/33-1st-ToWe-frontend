import React from 'react';

const EmptyItem = () => {
  return (
    <div className="emptyItem">
      <div className="emptyPage"></div>
      <span>Shopping cart is empty</span>
      <span>You have no items in your shopping cart.</span>
      {/* <span>Click here to continue shopping.</span> */}
    </div>
  );
};

export default EmptyItem;
