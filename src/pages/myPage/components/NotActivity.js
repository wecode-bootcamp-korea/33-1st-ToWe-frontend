import React from 'react';
import './NotActivity.scss';

const NotActivity = ({ activity }) => {
  return (
    <div className="UserActivity">
      <div className="componentTitle">{activity.content}</div>
      <div className="nothing">{activity.content}이 없습니다.</div>
    </div>
  );
};

export default NotActivity;
