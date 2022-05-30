import React, { useState, useEffect } from 'react';
import './ItemCart.scss';
import ItemComponent from './component/ItemComponent';

const ItemCart = () => {
  useEffect(() => {
    fetch('/data/ItemList.json', {
      method: 'GET',
      headers: {
        Authorization: 'token',
      },
    })
      .then(res => res.json())
      .then(result => setListValue(result));
    //result.result <- 객체 안의 배열로 들어가는 어쩌구
  }, []);
  const [listValue, setListValue] = useState([]);
  const [amount, setAmount] = useState(1);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const arr = listValue.map(list => list.price);
    const result = 0;
    const reduce2 = arr.reduce((a, b) => a + b, result);
    setSum(reduce2);
  }, [listValue]);

  // 수량
  const increase = (id, quantity, price) => {
    setAmount(
      listValue.map(itemlist =>
        itemlist.cart_id === id
          ? {
              ...itemlist,
              quantity: itemlist.quantity++,
            }
          : null
      )
    );
    const a = sum + price;
    setSum(a);
  };

  const decrease = (id, quantity, price) => {
    setAmount(
      listValue.map(itemlist =>
        itemlist.cart_id === id
          ? {
              ...itemlist,
              quantity: itemlist.quantity !== 1 ? itemlist.quantity-- : null,
            }
          : null
      )
    );
    const a = quantity !== 1 ? sum - price : sum;
    setSum(a);
  };

  //삭제기능
  // const deleteItems = id => {
  //   const deleteItems = listValue.filter(listValue.cart_id !== id);
  //   setListValue(deleteItems);
  // };
  const onRemove = id => {
    let listRemove = listValue.filter(listValue => listValue.cart_id !== id);
    setListValue(listRemove);
  };

  //백엔드 데이터 통신
  // console.log('test', listValue.price);

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
                  key={itemlist.cart_id}
                  decrease={decrease}
                  increase={increase}
                  onRemove={onRemove}
                />
              ))}
            </div>
            <div className="tbTotal">
              <div className="priceInfoDiv">
                <div className="productPrice">
                  <div className="priceTitle">상품 합계</div>
                  <div className="productPriceCount">{sum}원</div>
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
