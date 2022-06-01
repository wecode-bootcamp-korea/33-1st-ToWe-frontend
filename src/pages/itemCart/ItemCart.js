import React, { useState, useEffect } from 'react';
import './ItemCart.scss';
import ItemComponent from './component/ItemComponent.js';
import EmptyItem from './component/EmptyItem';

const ItemCart = () => {
  useEffect(() => {
    fetch('/data/ItemList.json', {
      method: 'GET',
      headers: {
        Authorization: 'token',
      },
    })
      .then(res => res.json())
      .then(result => {
        // result.result.shift();
        setListValue(result);
      });
    //result.result <- 객체 안의 배열로 들어가는 어쩌구
  }, []);
  const [listValue, setListValue] = useState([]);

  // http://10.58.0.239:8000/carts
  // eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwiZXhwIjoxNjU0MTM4MDQxfQ.KmzkrPUoXfMAmeYAsSsqv9UvzCLt6I397ifRsVj0U8g
  console.log(listValue);
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

    fetch('/data/ItemList.json', {
      method: 'DELETE',
      headers: {
        Authorization: 'token',
      },
      body: JSON.stringify({
        cart_id: id,
      }),
    }).then(res => res.json());
  };

  // 장바구니가 비어있습니다.

  // const OrderInput = listValue => {
  //   fetch('http://', {
  //     method: 'POST',
  //     headers: {
  //       Authorization: 'token',
  //     },
  //     body: JSON.stringify(listValue),
  //   })
  //     .then(res => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //     })
  //     .then(result => {
  //       navigator('/order');
  //       localStorage.setItem('TOKEN', result.access_token);
  //     });
  // };

  let token = localStorage.getItem('TOKEN') || '';

  // 장바구니가 비어있으면
  // 장바구니가 비어있습니다 페이지 뜨게 하기

  const itemEmpty = listValue.length === 0;
  // const emptyCart = () => {
  //   if (listValue.length === 0) {
  //     <EmptyItem />;
  //   } else {
  //     <ItemComponent />;
  //   }
  // };

  // 장바구니 합계 가격
  const totalPrice = sum => {
    if (sum > 50000) {
      return sum;
    } else {
      return sum + 3000;
    }
  };
  // 상품의 총 합이 5만원 이상이면 배송미 무료해야해
  // 근데 로직을 어떻게 짜야할까?
  // 일단 함수를 만들어.
  // const totalPrice = () => {};

  return (
    <div className="itemCart">
      <div className="cartWrapper">
        <div className="cartHeader">
          <div className="cartTitle">
            장바구니<span className="cartAmount">({listValue.length})</span>
          </div>
        </div>
        {itemEmpty ? (
          <EmptyItem />
        ) : (
          <div>
            <div className="cartListWrapper">
              <div className="cartListHeader">
                <div className="cartInfoTitle">상품 정보</div>
                <div className="cartQuantityTitle">수량</div>
                <div className="cartPriceTitle">가격</div>
                <div className="cartDeliveryTitle">배송비</div>
              </div>
              <div className="cartListBody">
                <div className="cartListComponent">
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
                <div className="cartListDeliveryInfo">
                  <div className="deliveryInfo">
                    <p>3000원</p>
                    <span>50,000원 이상 구매 시 무료</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="cartPriceWrapper">
              <div className="cartPriceInfo">
                <div className="priceDetail">
                  <div className="productPriceTotal">
                    <div className="productPriceTitle">상품 합계</div>
                    <div className="productPrice">
                      {sum.toLocaleString()} 원
                    </div>
                  </div>
                  <div className="deliveryPriceTotal">
                    <div className="deliveryPriceTitle">배송비</div>
                    <div className="deliveryPrice">
                      {sum > 50000 ? '0' : '3000'}원
                    </div>
                  </div>
                </div>
                <div className="totalPriceDiv">
                  <div className="totalPriceTitle">합계</div>
                  <div className="totalPrice">
                    {totalPrice(sum).toLocaleString()} 원
                  </div>
                </div>
              </div>
            </div>
            <div className="cartBtnWrapper">
              <button>주문하기</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemCart;
