import React from 'react';
import './ItemComponent.scss';

const ItemComponent = ({ itemlist, decrease, increase, onRemove }) => {
  const { cart_id, product_name, price, quantity, thumbnail_url } = itemlist;

  // const [amount, setAmount] = useState(1);

  // const decrease = () => {
  //   if (amount > 0) {
  //     setAmount(amount - 1);
  //   } else {
  //     setAmount(0);
  //   }
  // };

  // const increase = () => {
  //   setAmount(amount + 1);
  // };

  return (
    <div className="itemComponent">
      <div className="deliveryGroupItemList">
        <div className="cartInfoDiv">
          <div className="product">
            <img className="img" src={`${thumbnail_url}`} />
            <div className="text">
              <div className="name">{product_name}</div>
              <div
                className="deleteBtnWrapper"
                onClick={() => {
                  onRemove(cart_id);
                }}
              >
                삭제하기
              </div>
            </div>
          </div>
          <div className="quantityDiv">
            <div className="quatity">
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
          <div className="cartPrice">
            {(price * quantity).toLocaleString()} 원
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemComponent;
