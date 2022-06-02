import React, { useState } from 'react';
import './SignUp.scss';
import SignUpComponent from './component/SignUpComponent';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [inputValue, setInputValue] = useState({
    email: '',
    name: '',
    pw1: '',
    pw2: '',
    address: '',
    phone: '',
  });

  const { email, name, pw1, pw2, address, phone } = inputValue;

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  // 이메일, 비밀번호, 비밀번호 확인,
  // const emailCheck = email => {
  //   if (email === '') {
  //     alert('이메일을 입력해주세요.');
  //   }
  // };

  // 여기는 백엔드 통신
  const GoSignUp = () => {
    fetch('http://10.58.5.168:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        name: name,
        password: pw1,
        address: address,
        phone_number: phone,
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
        navigator('/login');
      });
  };

  const alertName = () => {
    if (
      inputValue.name === '' ||
      inputValue.address === '' ||
      inputValue.phone === ''
    ) {
      alert('빈칸을 입력해주세요');
    }
  };

  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^~*+=-])(?=.*[0-9]).{8,}$/;
  const passwordCondition = passwordRegex.test(inputValue.pw1) && pw1 === pw2;
  const emailCondition = email.includes('@') && email.includes('.');

  const isValid = passwordCondition && emailCondition;

  const INPUT = [
    {
      id: 0,
      title: 'EMAIL ADDRESS',
      type: 'text',
      name: 'email',
      value: email,
    },
    {
      id: 1,
      title: 'NAME',
      type: 'text',
      name: 'name',
      value: name,
    },
    {
      id: 2,
      title: 'PASSWORD',
      type: 'password',
      name: 'pw1',
      value: pw1,
    },
    {
      id: 3,
      title: 'PASSWORD CONFIRMATION',
      type: 'password',
      name: 'pw2',
      value: pw2,
    },
    {
      id: 4,
      title: 'PHONE',
      type: 'text',
      name: 'phone',
      value: phone,
    },
    {
      id: 5,
      title: 'ADDRESS',
      type: 'text',
      name: 'address',
      value: address,
    },
  ];

  return (
    <div className="SignUp">
      <div className="signUpWrapper">
        <div className="signUpField">
          <div className="signUpHeader">
            <span className="signUpTitle">Sign Up</span>
          </div>
          <div className="contentBox">
            {INPUT.map(input => (
              <SignUpComponent
                input={input}
                key={input.id}
                name={input.name}
                value={input.value}
                handleInput={handleInput}
              />
            ))}
          </div>
          <div className="checkboxWrapper">
            <div className="checkbox">
              <input type="checkbox" />
            </div>
            <div className="agreeBox">
              <span className="agreeText">
                Subscribe To Our Email Newsletter
              </span>
            </div>
          </div>
          <div className="btnWrapper">
            <button
              className="signUpBtn"
              type="button"
              onClick={() => {
                GoSignUp();
                alertName();
              }}
              disabled={!isValid}
            >
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
