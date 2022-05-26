import React from 'react';

const Input = ({ id }) => {
  return (
    <div className="row">
      <span className="inputTitle">{id.title} </span>
      <input className="userInforInputBox" />
    </div>
  );
};
export default Input;
