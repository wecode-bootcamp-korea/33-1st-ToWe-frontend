import React from 'react';
import './Input.scss';

const Input = ({ userData, inputData }) => {
  const { name, title } = userData;
  return (
    <div className="Input">
      <span className="inputTitle">{title}</span>
      <input
        className="userInforInputBox"
        // FIXME: mockdata 사용할때
        // defaultValue={inputData ? inputData?.[name] : ''}
        // FIXME : 백과 통신할때
        defaultValue={inputData ? inputData?.result[name] : ''}
      />
    </div>
  );
};
export default Input;
