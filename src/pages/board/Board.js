import React, { useState } from 'react';
// import Nav from '../../components/nav/Nav';
// import tabMenu from './components/tabMenu';
import './Board.scss';
import Notice from './components/Notice';
import Inquiry from './components/Inquiry';
import Review from './components/Review';

const Board = () => {
  const [tabNumber, setTabNumber] = useState(0);

  const tabClick = id => {
    setTabNumber(id);
  };

  return (
    <div className="board">
      <div className="tabMenu">
        <ul className="tabTitles">
          {TAB_TITLE.map((tabTitle, idx) => {
            return (
              <li
                key={tabTitle + idx}
                className="tabTitle"
                onClick={() => tabClick(idx + 1)}
              >
                {tabTitle}
              </li>
            );
          })}
        </ul>
        <div className="tabContent">{MAPPING_OBJ[tabNumber]}</div>
      </div>
      <div className="pageChange">1 2 3 4 5</div>
    </div>
  );
};

const MAPPING_OBJ = {
  1: <Notice id={1} />,
  2: <Inquiry id={2} />,
  3: <Review id={3} />,
};

const TAB_TITLE = ['Notice', 'Inquiry', 'Review'];

export default Board;
