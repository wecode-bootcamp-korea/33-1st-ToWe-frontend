import React from 'react';
import './SignUp.scss';
import SignUpComponent from './component/SignUpComponent';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';

const SignUp = () => {
  const TEST = [
    {
      id: 0,
      title: '이메일',
    },
    {
      id: 1,
      title: '이름',
    },
    {
      id: 2,
      title: '비밀번호',
    },
    {
      id: 3,
      title: '비밀번호 확인',
    },
    {
      id: 4,
      title: '주소',
    },
  ];
  return (
    <>
      <Nav />
      <div className="SignUp">
        <div className="signUpWrapper">
          <div className="signUpField">
            <div className="signUpHeader">
              <span className="signUpTitle">회원가입</span>
            </div>
            <div className="contentBox">
              {TEST.map(test => (
                <SignUpComponent test={test} key={test.id} />
              ))}
              <div className="row">
                <span className="inputTitle">휴대폰 번호 *</span>
                <div className="contentBox">
                  <input className="customerPhone1" />
                  <div className="element">-</div>
                  <input className="customerPhone2" />
                  <div className="element">-</div>
                  <input className="customerPhone3" />
                </div>
              </div>
            </div>
            <div className="checkboxWrapper">
              <div className="checkbox">
                <input type="checkbox" />
              </div>
              <div className="agreeBox">
                <span className="agreeText">모두 동의합니다.</span>
              </div>
            </div>
            <div className="checkboxWrapper">
              <div className="checkbox">
                <input type="checkbox" />
              </div>
              <div className="agreeBox">
                <span className="agreeText">
                  (필수) 이용약관과 개인정보 수집 및 이용에 동의합니다.
                </span>
              </div>
            </div>
            <div className="checkboxWrapper">
              <div className="checkbox">
                <input type="checkbox" />
              </div>
              <div className="agreeBox">
                <label className="agreeText">
                  (필수) 만 14세 이상입니다.
                  <br />
                  <span className="agreeSubText">
                    만 19세 미만의 미성년자가 결제 시 법정대리인이 거래를 취소할
                    수 있습니다.
                  </span>
                </label>
              </div>
            </div>
            <div className="checkboxWrapper">
              <div className="checkbox">
                <input type="checkbox" />
              </div>
              <div className="agreeBox">
                <label className="agreeText">
                  (선택) 이메일 및 SMS 마케팅 정보 수신에 동의합니다.
                  <br />
                  <span className="agreeSubText">
                    회원은 언제든지 회원 정보에서 수신 거부로 변경할 수
                    있습니다.
                  </span>
                </label>
              </div>
            </div>
            <div className="btnWrapper">
              <button className="signUpBtn">가입하기</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
