import React, { useEffect, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import './Order.scss';
import OrderList from './OrderList';

const Order = () => {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    fetch(`http://10.58.0.239:8000/carts`, {
      method: 'GET',
      headers: {
        Authorization: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwiZXhwIjoxNjU0MTM4MDQxfQ.KmzkrPUoXfMAmeYAsSsqv9UvzCLt6I397ifRsVj0U8g`,
      },
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
      });
  }, []);

  // useEffect(() => {
  //   fetch('/data/ORDER_LIST.json', { method: 'GET' }) // API
  //     .then(res => res.json())
  //     .then(data => {
  //       setOrderList(data.result); // result 체크
  //     });
  // }, []);

  return (
    <section className="order">
      {/* 타이틀 */}
      <h2 className="mainTitle">TO WE STORY</h2>

      <div className="boldLine" />

      {/* 주문상품 컨테이너 */}
      <div className="orderItemContainer">
        <div className="title">주문 상품</div>
        <ul className="itemList">
          {orderList.map(orderData => (
            <OrderList key={orderData.id} orderData={orderData} />
          ))}
        </ul>
        <div className="line" />

        <div className="totalPrice">
          <div>상품 합계</div>
          <span className="price">66,500원</span>
        </div>
      </div>

      {/* 주문자 */}
      <div className="ordererContainer">
        <div className="boldLine" />
        <div className="ordererBox">
          <div className="title">주문자</div>
          <div>
            <span className="orderer">토위</span>
            <FaAngleDown className="more" />
          </div>
        </div>
      </div>

      <div className="boldLine" />

      {/* 배송지 */}
      <div className="addressContainer">
        <div className="title">배송지</div>
        <div className="addressCheckbox">
          <div className="addressDefault">
            <input type="checkbox" id="cb1" />
            <span>기본배송지</span>
          </div>
          <div className="addressNew">
            <input type="checkbox" id="cb1" />
            <span>신규 입력</span>
          </div>
        </div>
        <div className="nameBox">
          <span>이름</span>
          <input type="text" />
        </div>
        <div className="postBox">
          <span>우편번호</span>
          <input type="text" />
        </div>
        <div className="addressBox">
          <span>주소</span>
          <input type="text" />
        </div>
        <div className="tellBox">
          <span>연락처</span>
          <div>
            <input type="text" /> - <input type="text" /> -{' '}
            <input type="text" />
          </div>
        </div>
      </div>

      <div className="boldLine" />

      {/* 결제정보 */}
      <div className="payContainer">
        <div className="title">결제 정보</div>
        <div className="pointBox">
          <span>적립금 (보유 적립금 3,000원)</span>
          <form className="pointForm">
            <input type="text" />
            <button>전액 사용</button>
          </form>
        </div>

        <div className="line" />

        <div className="totalBox">
          <div className="totalProduct">
            <span>상품 합계</span>
            <span>66,500원</span>
          </div>
          <div className="totalDiscount">
            <span>총 할인 금액</span>
            <span> 0원 </span>
          </div>
        </div>

        <div className="line" />

        <div className="amountPaymentBox">
          <div className="amountPayment">결제 금액</div>
          <div className="amount"> 66,500원</div>
        </div>
      </div>

      {/* 결제하기 */}
      <div className="payment">66,500원 결제하기</div>
    </section>
  );
};

export default Order;
