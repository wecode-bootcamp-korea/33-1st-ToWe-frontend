import React from 'react';

const SignUpComponent = ({ input }) => {
  // const { id, title } = input;

  return (
    <div className="row">
      <span className="inputTitle">{input.title} *</span>
      <input className="signUpInputBox" type={input.type} />
    </div>
  );
};

export default SignUpComponent;
