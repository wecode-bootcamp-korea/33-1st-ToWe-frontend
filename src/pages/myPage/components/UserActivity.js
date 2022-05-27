import React from 'react';

const UserActivity = ({ id }) => {
  return (
    <div className="breakDown">
      <div className="componentTitle">{id.content}</div>
      <div className="nothing">{id.content}이 없습니다.</div>
    </div>
  );
};

export default UserActivity;
