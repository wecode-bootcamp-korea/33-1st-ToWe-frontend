import React from 'react';

const Content = ({ noticeData, inquiryData, reviewData }) => {
  const { writing, date } = reviewData;

  return (
    <div className="boardContent">
      <div className="contentInformation">
        <div className="label">Notice</div>
        <div className="content">{writing}</div>
      </div>
      <div className="date ">{date}</div>
    </div>
  );
};

export default Content;
