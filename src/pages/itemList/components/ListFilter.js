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
            <div className="sortLine" />
          </p>
        );
      })}
    </div>
  );
};

export default LitsFilter;

const SORT_MENU = [
  { id: 0, name: 'LOW PRICE' },
  { id: 1, name: 'HIGH PRICE' },
  { id: 2, name: 'LOW AGE' },
  { id: 3, name: 'HIGH AGE' },
];
