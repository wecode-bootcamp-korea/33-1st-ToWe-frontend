import React from 'react';
import './NotActivity.scss';

const NotActivity = ({ activity }) => {
  return (
    <div className="UserActivity">
      <div className="componentTitle">{activity.content}</div>
      <div className="nothing">There are no {activity.content}</div>
    </div>
  );
};

export default NotActivity;
