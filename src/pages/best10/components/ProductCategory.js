import { useState } from 'react';
import './ProductCategory.scss';
import ProductCategoryMap from './ProductCategoryMap.js';

const ProductCategory = () => {
  const [filterColor, setFilterColor] = useState(0);

  const filterColorClick = categoryFilter => {
    setFilterColor(categoryFilter);
  };

  return (
    <div>
      <div className="filterTap">
        {FILTER_MENU.map(filterMenu => (
          <ProductCategoryMap
            filterMenus={filterMenu}
            filterColor={filterColor}
            filterColorClick={filterColorClick}
            key={filterMenu.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;

const FILTER_MENU = [
  { id: 0, name: '전체' },
  { id: 1, name: '레고' },
  { id: 2, name: '인형' },
  { id: 3, name: '퍼즐' },
  { id: 4, name: '자동차' },
];
