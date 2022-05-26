import React, { useState } from 'react';
import './Login.scss';
import '../../styles/variables.scss';

const Login = () => {
  const [inputValue, setInputValue] = useState({
    id: '',
    pw: '',
  });

  const { id, pw } = inputValue;

  const LoginTest = () => {
    fetch('', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(result => {});
  };

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <div className="Login">
      <div className="loginWrapper">
        <div className="loginField">
          <div className="loginHeader">
            <span className="loginTitle">로그인</span>
          </div>
          <div className="contentBox">
            <div className="row">
              <span className="inputTitle">아이디 또는 이메일</span>
              <input
                className="loginInputBox"
                type="text"
                placeholder="이메일을 입력해주세요."
                onChange={handleInput}
              />
            </div>
            <div className="row">
              <span className="inputTitle">비밀번호</span>
              <input
                className="loginInputBox"
                type="password"
                placeholder="비밀번호를 입력해주세요."
                onChange={handleInput}
              />
            </div>
            <div className="findPw">
              <a href="/findPassword" className="textLink1">
                비밀번호 찾기
              </a>
              <a href="/findPassword" className="textLink2">
                비회원 주문 조회하기
              </a>
            </div>
            <div className="btnWrapper">
              <button
                className="loginBtn"
                type="button"
                onClick={LoginTest}
                // disabled={
                //   inputId.includes('@') &&
                //   inputPw.length >= 8 &&
                //   inputPw.includes('영어, 숫자, 특수문자 어떻게?') ? 로그인 실행 : alert
                // }
              >
                로그인하기
              </button>
            </div>
            <div className="btnWrapper">
              <button className="signUpBtn">회원 가입하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
