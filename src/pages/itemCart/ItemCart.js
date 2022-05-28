import React from 'react';
import './ItemCart.scss';

const ItemCart = () => {
  return (
    <div className="ItemCart">
      <div className="cartDetail">
        <div className="cartWrapper">
          <div className="cartHeader">
            <span className="cartTitle">
              장바구니<span className="cartSize">(2)</span>
            </span>
          </div>
          <div className="productField">
            <div className="cartInfo">
              <div className="tbTitle">
                <div className="itemListHeader">
                  <span className="info">상품정보</span>
                  <span className="count">수량</span>
                  <span className="price">가격</span>
                </div>
                <span className="deliveryCharge">배송비</span>
              </div>
            </div>
            <div className="cartListDiv">
              <div className="deliveryGroupItemList">
                <div className="cartInfoDiv">
                  <div className="product">
                    <div className="img">
                      <a href="">
                        <img src=""></img>
                      </a>
                    </div>
                    <div className="text">
                      <div className="name">
                        <a href="">조랑말이어쩌구</a>
                      </div>
                      <div className="deleteBtnWrapper">
                        <span>삭제하기</span>
                      </div>
                    </div>
                  </div>
                  <div className="quantityDiv"></div>
                  <div className="cartPrice">15,000원</div>
                </div>
                <div className="deliveryPriceWrapper">
                  <div className="deliveryPrice">3,000원</div>
                  <div className="deliveryConditional">
                    50,000원 이상 구매시 무료
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
