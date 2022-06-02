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
  // let token = localStorage.getItem('TOKEN') || '';

  const itemEmpty = listValue.length === 0;

  // 장바구니 합계 가격
  const totalPrice = sum => {
    if (sum > 50000) {
      return sum;
    } else {
      return sum + 3000;
    }
  };

  return (
    <div className="itemCart">
      <div className="cartWrapper">
        <div className="cartHeader">
          <div className="cartTitle">
            Shopping cart
            <span className="cartAmount">({listValue.length})</span>
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
                    <p>3,000원</p>
                    <span>50,000원 이상 구매 시 무료</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="cartPriceWrapper">
              <div className="cartPriceInfo">
                <div className="priceDetail">
                  <div className="productPriceTotal">
                    <div className="textRight">
                      <div className="productPriceTitle">상품 합계</div>
                      <div className="productPrice">
                        {sum.toLocaleString()} 원
                      </div>
                    </div>
                  </div>
                  <div className="deliveryPriceTotal">
                    <div className="textRight">
                      <div className="deliveryPriceTitle">배송비</div>
                      <div className="deliveryPrice">
                        {sum > 50000 ? '무료' : '3,000 원'}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="totalPriceDiv">
                  <div className="textRight">
                    <div className="totalPriceTitle">합계</div>
                    <div className="totalPrice">
                      {totalPrice(sum).toLocaleString()} 원
                    </div>
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
