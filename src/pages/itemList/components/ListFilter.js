import './ListFilter.scss';

const LitsFilter = ({ onSort, SORT_MENU, sortColorClick, sortColor }) => {
  return (
    <div className="listFilter">
      {SORT_MENU.map(sortMenu => {
        return (
          <div
            key={sortMenu.id}
            onClick={() => {
              sortColorClick(sortMenu.id);
              onSort(sortMenu.value);
            }}
            className={
              sortColor === sortMenu.id ? `filterBtnActive` : `filterBtn`
            }
          >
            {sortMenu.name}
            <div className="sortLine" />
          </div>
        );
      })}
    </div>
  );
};

export default LitsFilter;
