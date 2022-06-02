import React from 'react';
import './Input.scss';

const Input = ({ userData, inputData }) => {
  const { name, title } = userData;
  return (
    <div className="Input">
      <span className="inputTitle">{title}</span>
      <input
        className="userInforInputBox"
        defaultValue={inputData ? inputData?.result[name] : ''}
      />
    </div>
  );
};
export default Input;
