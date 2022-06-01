import React, { useState } from 'react';
import './Login.scss';
import '../../styles/variables.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [inputValue, setInputValue] = useState({
    id: '',
    pw: '',
  });

  const { id, pw } = inputValue;
  const navigator = useNavigate();

  const LoginTest = () => {
    fetch('http://10.58.5.168:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          alert('이메일과 비밀번호를 다시 한번 확인해주세요!');
        }
      })
      .then(result => {
        navigator('/main');
        localStorage.setItem('token', result.token);
      });
  };

  const passwordCondition =
    /^(?=.*[a-zA-Z])(?=.*[!@#$%^~*+=-])(?=.*[0-9]).{8,}$/;
  const isValidLogin =
    id.includes('@') &&
    id.includes('.') &&
    passwordCondition.test(inputValue.pw);

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
          <form>
            <div className="contentBox">
              <div className="row">
                <span className="inputTitle">아이디 또는 이메일</span>
                <input
                  className="loginInputBox"
                  type="text"
                  placeholder="이메일을 입력해주세요."
                  name="id"
                  value={id}
                  onChange={handleInput}
                />
              </div>
              <div className="row">
                <span className="inputTitle">비밀번호</span>
                <input
                  className="loginInputBox"
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                  name="pw"
                  value={pw}
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
                  disabled={!isValidLogin}
                >
                  로그인하기
                </button>
              </div>
              <div className="btnWrapper">
                <button className="signUpBtn">회원 가입하기</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
