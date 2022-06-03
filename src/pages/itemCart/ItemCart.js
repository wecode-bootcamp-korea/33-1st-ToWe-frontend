import React, { useState, useEffect } from 'react';
import ItemComponent from './component/ItemComponent.js';
import EmptyItem from './component/EmptyItem';
import API from '../../config.js';
import './ItemCart.scss';
import { useNavigate } from 'react-router-dom';

const ItemCart = () => {
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API.carts}`, {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(result => {
        // result.result.shift();
        setListValue(result.result);
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
  };

  const onRemove = id => {
    let listRemove = listValue.filter(listValue => listValue.cart_id !== id);
    setListValue(listRemove);

    fetch(`${API.carts}`, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        cart_id: id,
      }),
    }).then(res => res.json());
  };

  const itemEmpty = listValue.length === 0;

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
                <div className="cartInfoTitle">Product Detail</div>
                <div className="cartQuantityTitle">Quantity</div>
                <div className="cartPriceTitle">Price</div>
                <div className="cartDeliveryTitle">Delivery Fee</div>
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
                    <p>₩ 3,000</p>
                    <span>Free for purchases over ₩ 50,000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="cartPriceWrapper">
              <div className="cartPriceInfo">
                <div className="priceDetail">
                  <div className="productPriceTotal">
                    <div className="textRight">
                      <div className="productPriceTitle">Total Price</div>
                      <div className="productPrice">
                        ₩ {sum.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <div className="deliveryPriceTotal">
                    <div className="textRight">
                      <div className="deliveryPriceTitle">Delivery Fee</div>
                      <div className="deliveryPrice">
                        {sum > 50000 ? 'Free' : '₩ 3,000'}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="totalPriceDiv">
                  <div className="textRight">
                    <div className="totalPriceTitle">Total</div>
                    <div className="totalPrice">
                      ₩ {totalPrice(sum).toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cartBtnWrapper">
              <button
                onClick={() => {
                  navigate('/order');
                }}
              >
                CHECK OUT
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemCart;
