import React from 'react';
import './Login.scss';
import '../../styles/variables.scss';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';

const Login = () => {
  return (
    <>
      <Nav />
      <div className="Login">
        <div className="loginWrapper">
          <div className="loginField">
            <div className="loginHeader">
              <span className="loginTitle">로그인</span>
            </div>
            <div className="contentBox">
              <div className="row">
                <span className="inputTitle">아이디 또는 이메일</span>
                <input className="loginInputBox" type="text"></input>
              </div>
              <div className="row">
                <span className="inputTitle">비밀번호</span>
                <input className="loginInputBox" type="password"></input>
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
                <button className="loginBtn">로그인하기</button>
              </div>
              <div className="btnWrapper">
                <button className="signUpBtn">회원 가입하기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
