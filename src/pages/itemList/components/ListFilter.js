import { useState } from 'react';
import './ListFilter.scss';

const LitsFilter = () => {
  const [sortColor, setSortColor] = useState();

  const sortColorClick = filterNum => {
    setSortColor(filterNum);
  };

  return (
    <div className="listFilter">
      {SORT_MENU.map(sortMenu => {
        return (
          <p
            key={sortMenu.id}
            onClick={() => {
              sortColorClick(sortMenu.id);
            }}
            className={
              sortColor === sortMenu.id ? `filterBtnActive` : `filterBtn`
            }
          >
            {sortMenu.name}
          </p>
        );
      })}
    </div>
  );
};

export default LitsFilter;

const SORT_MENU = [
  { id: 0, name: '낮은가격' },
  { id: 1, name: '높은가격' },
  { id: 2, name: '낮은연령' },
  { id: 3, name: '높은연령' },
];
