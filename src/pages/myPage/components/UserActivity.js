import React from 'react';

const UserActivity = ({ activity }) => {
  return (
    <div className="breakDown">
      <div className="componentTitle">{activity.content}</div>
      <div className="nothing">{activity.content}이 없습니다.</div>
    </div>
  );
};

export default UserActivity;
