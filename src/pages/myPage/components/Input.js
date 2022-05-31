import React from 'react';
import './Input.scss';

const Input = ({ userData, inputValue }) => {
  const { name, title } = userData;
  return (
    <div className="Input">
      <span className="inputTitle">{title}</span>
      <input
        className="userInforInputBox"
        // FIXME: mockdata 사용할때
        defaultValue={inputValue ? inputValue?.[name] : ''}
        // FIXME : 백과 통신할때
        // defaultValue={inputValue ? inputValue?.result[name] : ''}
      />
    </div>
  );
};
export default Input;
