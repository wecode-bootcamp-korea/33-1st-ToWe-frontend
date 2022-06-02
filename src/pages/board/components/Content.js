import React from 'react';

const Content = ({ data }) => {
  return (
    <div className="boardContent">
      <div className="contentInformation">
        <div className="label">{data.title}</div>
        <div className="content">{data.writing}</div>
      </div>
      <div className="date ">{data.date}</div>
    </div>
  );
};

export default Content;
