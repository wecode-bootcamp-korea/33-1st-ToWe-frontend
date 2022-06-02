import React from 'react';
import Login from '../Login';

const LoginInputComponent = ({ logininput }) => {
  const { id, title, type, holder } = logininput;

  return (
    <div className="row">
      <span className="inputTitle">{logininput.title}</span>
      <input
        className="loginInputBox"
        type={logininput.type}
        placeholder={logininput.holder}
        onChange={handleInput}
      />
    </div>
  );
};

export default LoginInputComponent;
