import React from 'react';

const Input = ({ userData, inputValue }) => {
  const { name, title } = userData;
  return (
    <div className="row">
      <span className="inputTitle">{title}</span>
      <input
        className="userInforInputBox"
        defaultValue={inputValue ? inputValue?.[name] : ''} // mockdata 사용할때
        // defaultValue={inputValue ? inputValue?.result[name] : ''}  백과 통신할때
      />
    </div>
  );
};
export default Input;
