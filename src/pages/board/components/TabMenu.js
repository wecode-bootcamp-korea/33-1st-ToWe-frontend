import React from 'react';
import Content from './Content';

const TabMenu = ({ boardData }) => {
  return (
    <div>
      <div>
        <div className="boardTitle">{boardData.title}</div>
        <div className="boardContents">
          {boardData.contents.map(data => (
            <Content key={data.id} data={boardData.contents[data.id]} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabMenu;
