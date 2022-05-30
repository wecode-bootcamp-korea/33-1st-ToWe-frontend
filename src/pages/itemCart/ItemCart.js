import React, { useState, useEffect } from 'react';
import './ItemCart.scss';
import ItemComponent from './component/ItemComponent';

const ItemCart = () => {
  const [amount, setAmount] = useState(1);

  // 수량
  const increase = id => {
    setAmount(
      listValue.map(itemlist =>
        itemlist.id === id
          ? { ...itemlist, amount: (itemlist.amount = itemlist.amount + 1) }
          : null
      )
    );
  };

  const decrease = id => {
    setAmount(
      listValue.map(itemlist =>
        itemlist.id === id
          ? {
              ...itemlist,
              amount:
                itemlist.amount !== 0
                  ? (itemlist.amount = itemlist.amount - 1)
                  : null,
            }
          : null
      )
    );
  };

  // 상품 가격 합계

  //백엔드 데이터 통신
  const [listValue, setListValue] = useState([]);
  useEffect(() => {
    fetch('/data/ItemList.json', {
      method: 'GET',
      headers: {
        Authorization: 'token',
      },
    })
      .then(res => res.json())
      .then(result => setListValue(result));
  }, []);

  return (
    <div className="ItemCart">
      <div className="cartDetail">
        <div className="cartWrapper">
          <div className="cartHeader">
            <span className="cartTitle">
              장바구니<span className="cartSize">({listValue.length})</span>
            </span>
          </div>
          <div className="productField">
            <div className="cartInfo">
              <div className="tbTitle">
                <div className="itemListHeader">
                  <div className="info">상품정보</div>
                  <div className="count">수량</div>
                  <div className="price">가격</div>
                  <div className="deliveryCharge">배송비</div>
                </div>
              </div>
            </div>
            <div className="cartListDiv">
              {listValue.map(itemlist => (
                <ItemComponent
                  itemlist={itemlist}
                  key={itemlist.id}
                  decrease={decrease}
                  increase={increase}
                />
              ))}
            </div>
            <div className="tbTotal">
              <div className="priceInfoDiv">
                <div className="productPrice">
                  <div className="priceTitle">상품 합계</div>
                  <div className="productPriceCount">원</div>
                </div>
                <div className="shippingPrice">
                  <div className="shippingTitle">배송비</div>
                  <div className="shippingPriceCount">3,000원</div>
                </div>
              </div>
              <div className="cartTotalDiv">
                <div className="cartTotalTitle">합계</div>
                <div className="cartTotalPrice">18,000원</div>
              </div>
            </div>
          </div>
          <div className="btnWrapper">
            <button className="orderBtn">주문하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;

// const ITEMLIST = [
//   {
//     id: 1,
//     name: '조장랑 스마트톡',
//     amount: 1,
//     price: 15000,
//   },
//   {
//     id: 2,
//     name: '태극랑 에어팟3 케이스',
//     amount: 1,
//     price: 15000,
//   },
//   {
//     id: 3,
//     name: '태극랑 케이스',
//     amount: 1,
//     price: 20000,
//   },
// ];
