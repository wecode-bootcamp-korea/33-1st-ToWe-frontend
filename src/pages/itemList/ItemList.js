import React from 'react';
import './ItemList.scss';

const ItemList = () => {
  return (
    <div className="listContainer">
      <div className="listTitle">전체상품</div>
      <ul className="listCategory">
        <li className="listCategorys">전체</li>
        <li className="listCategorys">레고</li>
        <li className="listCategorys">인형</li>
        <li className="listCategorys">퍼즐</li>
        <li className="listCategorys">자동차</li>
        <li className="listCategorys">기타</li>
      </ul>
      <div className="listFilter">필터</div>
      <div className="listItem">
        <div className="listItems">1</div>
        <div className="listItems">2</div>
        <div className="listItems">3</div>
        <div className="listItems">4</div>
        <div className="listItems">5</div>
      </div>
    </div>
  );
};

export default ItemList;
