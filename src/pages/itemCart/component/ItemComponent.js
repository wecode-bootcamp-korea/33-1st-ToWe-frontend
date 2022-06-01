import React from 'react';
import './ItemComponent.scss';

const ItemComponent = ({ itemlist, decrease, increase, onRemove }) => {
  const { cart_id, product_name, price, quantity, thumbnail_url } = itemlist;
  return (
    <div className="itemComponent">
      <div className="mapWrapper">
        <div className="itemListWrapper">
          <div className="itemInfoDiv">
            <img className="img" src={`${thumbnail_url}`} alt="sdf" />
            <div className="productInfo">
              <div className="productTitle">{product_name}</div>
              <div
                className="deleteBtnDiv"
                onClick={() => {
                  onRemove(cart_id);
                }}
              >
                삭제하기
              </div>
            </div>
          </div>
          <div className="itemQuantityDiv">
            <div className="itemQuantity">
              <div
                className="decreaseBtn"
                onClick={() => {
                  decrease(cart_id, quantity, price);
                }}
              >
                -
              </div>
              <div className="amountBox">{quantity}</div>
              <div
                className="increaseBtn"
                onClick={() => {
                  increase(cart_id, quantity, price);
                }}
              >
                +
              </div>
            </div>
          </div>
          <div className="itemPriceDiv">
            {(price * quantity).toLocaleString()} 원
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemComponent;
