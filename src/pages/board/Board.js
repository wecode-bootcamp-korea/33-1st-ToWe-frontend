import React, { useState } from 'react';
import TabMenu from './components/TabMenu';
import './Board.scss';

const Board = () => {
  const [tabTitle, setTabTitle] = useState('Notice');

  const tabClick = string => {
    setTabTitle(string);
  };

  return (
    <div className="board">
      <div className="tabMenu">
        <ul className="tabTitles">
          {TAB_TITLE.map((tabTitle, id) => {
            return (
              <li
                key={tabTitle + id}
                className="tabTitle"
                onClick={() => tabClick(tabTitle)}
              >
                {tabTitle}
              </li>
            );
          })}
        </ul>
        <div className="tabContent">
          <TabMenu boardData={DATA[tabTitle]} />
        </div>
      </div>
      <div className="pageChange">1 2 3 4 5</div>
    </div>
  );
};

const DATA = {
  Notice: {
    title: 'Notice',
    contents: [
      {
        id: 0,
        title: 'Notice',
        writing: '당일 출고 시간 안내',
        date: '2022-05-30',
      },
      {
        id: 1,
        title: 'Notice',
        writing: '이벤트 안내',
        date: '2022-05-29',
      },
      {
        id: 2,
        title: 'Notice',
        writing: '교환/환불/반품 정책 안내',
        date: '2022-05-28',
      },
    ],
  },
  Inquiry: {
    title: 'Inquiry',
    contents: [
      {
        id: 0,
        title: 'Inquiry',
        writing: '장난감이 안 움직여요',
        date: '2022-05-31',
      },
      {
        id: 1,
        title: 'Inquiry',
        writing: '장난감이 움직여요',
        date: '2022-05-29',
      },
      {
        id: 2,
        title: 'Inquiry',
        writing: '장난감이 너무 무서워요',
        date: '2022-05-28',
      },
    ],
  },
  Review: {
    title: 'Review',
    contents: [
      {
        id: 0,
        title: 'Review',
        writing: '장난감이 멋있어용',
        date: '2022-05-30',
      },
      {
        id: 1,
        title: 'Review',
        writing: '장난감이 맜있어용',
        date: '2022-05-29',
      },
      {
        id: 2,
        title: 'Review',
        writing: '장난감 색상이 예뻐요',
        date: '2022-05-28',
      },
    ],
  },
};

const TAB_TITLE = ['Notice', 'Inquiry', 'Review'];

export default Board;
