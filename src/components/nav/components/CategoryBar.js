import React from 'react';

function CategoryBar() {
  return (
    <div>
      <div className="navDetailBar">
        <span>팀소개</span>
        <div className="storeCategory">
          {CATEGORY.map(id => (
            <div calssName="category" key={id.id}>
              {id.name}
            </div>
          ))}
        </div>
        <div className="storeSort">
          {SORT_FILTER.map(id => (
            <div className="bestNew" key={id.id}>
              {id.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryBar;

const CATEGORY = [
  {
    id: 1,
    name: '전체상품',
  },

  {
    id: 2,
    name: '레고',
  },

  {
    id: 3,
    name: '인형',
  },

  {
    id: 4,
    name: '자동차',
  },

  {
    id: 5,
    name: '퍼즐',
  },
];

const SORT_FILTER = [
  {
    id: 1,
    name: '베스트 30',
  },

  {
    id: 2,
    name: '신상품',
  },
  {
    id: 3,
    name: '가격대별',
  },
  {
    id: 4,
    name: '연령별',
  },
];
