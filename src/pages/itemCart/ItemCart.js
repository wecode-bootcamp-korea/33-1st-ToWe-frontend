import React, { useState, useEffect } from 'react';
import './ItemCart.scss';
import ItemComponent from './component/ItemComponent';

const ItemCart = () => {
  useEffect(() => {
    fetch('http://10.58.7.40:8000/carts', {
      method: 'GET',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwiZXhwIjoxNjU0MjQyODAzfQ.X7nAVf0LLSNGdd0hqpTvZ0YCnaEe6UQlYcI5bQRnQYw',
      },
    })
      .then(res => res.json())
      .then(result => setListValue(result.result));
    //result.result <- 객체 안의 배열로 들어가는 어쩌구
  }, []);
  const [listValue, setListValue] = useState([]);
  // const [sum, setSum] = useState(0);

  // useEffect(() => {
  //   const arr = listValue.map(list => list.price);
  //   const result = 0;
  //   const reduce2 = arr.reduce((a, b) => a + b, result);
  //   setSum(reduce2);
  // }, [listValue]);
  //total_price 총가격
  // 수량
  const sum = listValue.reduce(
    (acc, cur) => acc + Number(cur.price) * cur.quantity,
    0
  );

  const increase = (id, quantity, price) => {
    const newList = [...listValue].map(itemlist =>
      itemlist.cart_id === id
        ? {
            ...itemlist,
            quantity: itemlist.quantity + 1,
          }
        : { ...itemlist }
    );

    setListValue(newList);
    // const a = sum + price;
    // setSum(a);
  };

  const decrease = (id, quantity, price) => {
    if (quantity === 0) return alert('수량은 0개 미만으로 선택할 수 없습니다!');
    const newList = [...listValue].map(itemlist =>
      itemlist.cart_id === id
        ? {
            ...itemlist,
            quantity: itemlist.quantity - 1,
          }
        : { ...itemlist }
    );

    setListValue(newList);
    // const a = quantity !== 1 ? sum - price : sum;
    // setSum(a);
  };

  //삭제기능
  // useEffect(id => {}, []);

  const onRemove = id => {
    let listRemove = listValue.filter(listValue => listValue.cart_id !== id);
    setListValue(listRemove);

    fetch('http://10.58.7.40:8000/carts', {
      method: 'DELETE',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwiZXhwIjoxNjU0MjQyODAzfQ.X7nAVf0LLSNGdd0hqpTvZ0YCnaEe6UQlYcI5bQRnQYw',
      },
      body: JSON.stringify({
        cart_id: id,
      }),
    }).then(res => res.json());
  };

  return (
    <div className="itemCart">
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
                  <div className="productPriceCount">
                    {sum.toLocaleString()}원
                  </div>
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
