import React, { useState } from 'react';
import './ProductCategory.scss';

const ProductCategory = () => {
  // const [filterNum, setFilterNum] = useState(0);
  // const [listCategory, setListCategory] = useState(true);

  // const filterChange = () => {};

  return (
    <ul className="listCategory">
      <li className="listCategorys">전체</li>
      <li className="listCategorys">레고</li>
      <li className="listCategorys">인형</li>
      <li className="listCategorys">퍼즐</li>
      <li className="listCategorys">자동차</li>
    </ul>
  );
};

export default ProductCategory;
