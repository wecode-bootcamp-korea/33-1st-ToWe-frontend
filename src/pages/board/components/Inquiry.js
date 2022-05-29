import React from 'react';
import Content from './Content';

const Inquiry = () => {
  return (
    <div>
      <div className="boardTitle">Inquiry</div>
      <div className="boardContents">
        {INQUIRY_DATA.map(inquiryData => (
          <Content key={inquiryData.id} inquiryData={inquiryData} />
        ))}
      </div>
    </div>
  );
};

export default Inquiry;

const INQUIRY_DATA = [
  {
    id: 0,
    writing: '장난감이 안 움직여요',
    date: '2022-05-28',
  },
  {
    id: 1,
    writing: '이벤트 안내',
    date: '2022-05-29',
  },
  {
    id: 2,
    writing: '교환/환불/반품 정책 안내',
    date: '2022-05-28',
  },
];
