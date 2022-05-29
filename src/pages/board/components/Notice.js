import React from 'react';
import Content from './Content';

const Notice = () => {
  return (
    <div>
      <div>
        <div className="boardTitle">Notice</div>
        <div className="boardContents">
          {NOTICE_DATA.map(noticeData => (
            <Content key={noticeData.id} noticeData={noticeData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notice;

const NOTICE_DATA = [
  {
    id: 0,
    writing: '당일 출고 시간 안내',
    date: '2022-05-30',
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
