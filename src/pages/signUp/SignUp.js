import React, { useState } from 'react';
import './SignUp.scss';
import SignUpComponent from './component/SignUpComponent';
import { useNavigate } from 'react-router-dom';

const signUp = () => {
  const [inputValue, setInputValue] = useState({
    email: '',
    name: '',
    pw: '',
    pwCheck: '',
    address: '',
    phone: '',
  });

  const { email, name, pw, pwCheck, address, phone } = inputValue;
  const navigator = useNavigate();

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const goSignUp = () => {
    fetch('http://10.58.5.168:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        name: name,
        password: pw,
        address: address,
        phone_number: phone,
      }),
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          alert('Please check your email and password again!');
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
      alert('Must not be blank');
    }
  };

  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^~*+=-])(?=.*[0-9]).{8,}$/;
  const passwordCondition = passwordRegex.test(inputValue.pw) && pw === pwCheck;
  const emailCondition = email.includes('@') && email.includes('.');

  const isValid = passwordCondition && emailCondition;

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
                goSignUp();
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

export default signUp;

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
    name: 'pw',
    value: pw,
  },
  {
    id: 3,
    title: 'PASSWORD CONFIRMATION',
    type: 'password',
    name: 'pwCheck',
    value: pwCheck,
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
