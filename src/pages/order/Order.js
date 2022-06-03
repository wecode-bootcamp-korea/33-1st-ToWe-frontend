import React, { useEffect, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import OrderList from './OrderList';
import API from '../../config';
import './Order.scss';
import { useNavigate } from 'react-router-dom';

const Order = () => {
  const [orderList, setOrderList] = useState([]);
  const [sum, setSum] = useState('');
  const [users, setUsers] = useState('');
  console.log(users);
  const navigate = useNavigate();

  // 상품 데이터 받아오는 API
  useEffect(() => {
    fetch(`${API.carts}`, {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(result => {
        setOrderList(result.result);
        setSum(result.sum);
      });
  }, []);

  // 유저 데이터 받아오는 API
  useEffect(() => {
    fetch(`${API.users}/info`, {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(result => {
        setUsers(result.result);
      });
  }, []);

  // POST

  const buyNow = () => {
    fetch(`${API.orders}`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify(orderList),
    })
      .then(res => res.json())
      .then(() => {
        alert('주문이 완료되었습니다.');
      });
  };

  const payment = e => {
    e.preventDefault();
  };

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
          <span className="price">{sum}원</span>
        </div>
      </div>

      {/* 주문자 */}
      <div className="ordererContainer">
        <div className="boldLine" />
        <div className="ordererBox">
          <div className="title">주문자</div>
          <div>
            <span className="orderer">{users.name}</span>
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
          <input type="text" value={`${users.name}`} />
        </div>
        <div className="postBox">
          <span>우편번호</span>
          <input type="text" />
        </div>
        <div className="addressBox">
          <span>주소</span>
          <input type="text" value={`${users.address}`} />
        </div>
        <div className="tellBox">
          <span>연락처</span>
          <div>
            <input type="text" value={`${users.phone_number}`} />
          </div>
        </div>
      </div>

      <div className="boldLine" />

      {/* 결제정보 */}
      <div className="payContainer">
        <div className="title">결제 정보</div>
        <div className="pointBox">
          <span>포인트 (보유 포인트 {users.point}원)</span>
          <form className="pointForm" onClick={payment}>
            <input type="text" value={`${users.point}`} />
            <button>전액 사용</button>
          </form>
        </div>

        <div className="line" />

        <div className="totalBox">
          <div className="totalProduct">
            <span>상품 합계</span>
            <span>{sum}원</span>
          </div>
          <div className="totalDiscount">
            <span>총 할인 금액</span>
            <span> {sum - users.point < 0 ? sum : users.point}</span>
          </div>
        </div>

        <div className="line" />

        <div className="amountPaymentBox">
          <div className="amountPayment">결제 금액</div>
          <div className="amount"> {sum}원</div>
        </div>
      </div>

      {/* 결제하기 */}
      <div
        className="payment"
        onClick={() => {
          buyNow();
          navigate('/');
        }}
      >
        {sum}원 결제하기
      </div>
    </section>
  );
};

export default Order;
