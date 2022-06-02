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
        localStorage.setItem('token', result.token);
        navigator('/main');
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

  const goToSignUp = () => {
    navigator('/signup');
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginField">
          <div className="loginHeader">
            <span className="loginTitle">Sign In</span>
          </div>
          <form>
            <div className="contentBox">
              <div className="row">
                <span className="inputTitle">EMAIL</span>
                <input
                  className="loginInputBox"
                  type="text"
                  placeholder="Email"
                  name="id"
                  value={id}
                  onChange={handleInput}
                />
              </div>
              <div className="row">
                <span className="inputTitle">PASSWORD</span>
                <input
                  className="loginInputBox"
                  type="password"
                  placeholder="Password"
                  name="pw"
                  value={pw}
                  onChange={handleInput}
                />
              </div>
              <div className="findPw">
                <a href="/findPassword" className="textLink1">
                  Forgot Your Password?
                </a>
              </div>
              <div className="btnWrapper">
                <button
                  className="loginBtn"
                  type="button"
                  onClick={LoginTest}
                  disabled={!isValidLogin}
                >
                  SIGN IN
                </button>
              </div>
              <div className="btnWrapper">
                <button className="signUpBtn" onClick={goToSignUp}>
                  CREATE ACCOUNT
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
