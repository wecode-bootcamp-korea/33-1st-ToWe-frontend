import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../../components/nav/Nav.js';

import UserActivity from './components/UserActivity.js';
import Input from './components/Input.js';
import './MyPage.scss';

const MyPage = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
    localStorage.clear();
  };

  const [inputValue, setInputValue] = useState();

  useEffect(() => {
    fetch('/data/user.json', {
      method: 'GET',
      headers: {
        Authorization: 'token',
      },
    })
      .then(res => res.json())
      .then(result => setInputValue(result));
  }, []);

  return (
    <>
      <Nav />
      <div className="myPage">
        <div className="myPageContainer">
          <div className="components">
            {USER_ACTIVITY.map(activity => (
              <UserActivity activity={activity} key={activity.id} />
            ))}
          </div>
          <div className="profile">
            <div className="profileTitle">
              <div className="title">회원정보</div>
              <div className="logOut" onClick={goToMain}>
                로그아웃
              </div>
            </div>
            <div className="profileImage">
              <img src="/images/profile.jpg" alt="프로필사진" />
            </div>
            <div className="userInformation">
              <div className="userInfor">
                <div className="contentBox">
                  {inputValue &&
                    USER_INFORMATION.map(userData => (
                      <Input
                        key={userData.id}
                        userData={userData}
                        inputValue={inputValue}
                      />
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
    </>
  );
};

export default MyPage;

const USER_INFORMATION = [
  {
    id: 0,
    title: '이메일',
    name: 'email',
  },
  {
    id: 1,
    title: '이름',
    name: 'name',
  },
  {
    id: 2,
    title: '주소',
    name: 'address',
  },
  {
    id: 3,
    title: '휴대폰',
    name: 'phone_number',
  },
];

const USER_ACTIVITY = [
  {
    id: 0,
    content: '주문 내역',
  },
  {
    id: 1,
    content: '내가 쓴 글',
  },
  {
    id: 2,
    content: '쿠폰 내역',
  },
  {
    id: 3,
    content: '재입고 알림 내역',
  },
];
