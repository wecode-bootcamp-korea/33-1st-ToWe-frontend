import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NotActivity from './components/NotActivity.js';
import Input from './components/Input.js';
import Reviews from './components/Reviews.js';
import './MyPage.scss';

const MyPage = () => {
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const logOut = () => {
    navigate('/');
    localStorage.clear();
  };

  useEffect(() => {
    fetch('/data/USER.json', {
      method: 'GET',
      headers: {
        Authorization: 'token',
      },
    })
      .then(res => res.json())
      .then(result => setUserData(result));
  }, []);

  return (
    <div className="MyPage">
      <div className="myPageContainer">
        <div className="userActivity">
          <Reviews user={userData} />
          {NOTHING_ACTIVITY.map(activity => (
            <NotActivity activity={activity} key={activity.id} />
          ))}
        </div>
        <div className="profile">
          <div className="profileTitle">
            <div className="title">회원정보</div>
            <div className="logOut" onClick={logOut}>
              로그아웃
            </div>
          </div>
          <div className="profileImage">
            <img src="/images/profile.jpg" alt="프로필사진" />
          </div>
          <div className="userInformation">
            <div className="userInfor">
              <div className="contentBox">
                {userData &&
                  USER_INFORMATION.map(data => (
                    <Input key={data.id} userData={data} inputData={userData} />
                  ))}
              </div>
              <div className="agree">
                마케팅 정보 수신 동의
                <div className="checkBox">
                  <input type="checkBox" className="email" /> 이메일
                  <input type="checkBox" className="message" /> 문자 메시지
                </div>
              </div>
            </div>
          </div>
          <button className="exit">탈퇴하기</button>
          <button className="save">변경 사항 저장하기</button>
        </div>
      </div>
    </div>
  );
};

export default MyPage;

const USER_INFORMATION = [
  {
    id: 0,
    title: 'email',
    name: 'email',
  },
  {
    id: 1,
    title: 'name',
    name: 'name',
  },
  {
    id: 2,
    title: 'address',
    name: 'address',
  },
  {
    id: 3,
    title: 'phone_number',
    name: 'phone_number',
  },
];

const NOTHING_ACTIVITY = [
  {
    id: 0,
    content: 'coupon',
  },
  {
    id: 1,
    content: '재입고 알림 내역',
  },
  {
    id: 2,
    content: '문의 사항',
  },
  {
    id: 3,
    content: '주문 내역',
  },
];
