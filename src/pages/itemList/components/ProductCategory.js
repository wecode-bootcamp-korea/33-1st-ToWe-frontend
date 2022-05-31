import { useState } from 'react';
import './ProductCategory.scss';
import ProductCategoryMap from './ProductCategoryMap.js';

const ProductCategory = ({ onCategory }) => {
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
            onCategory={onCategory}
            key={filterMenu.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;

const FILTER_MENU = [
  { id: 0, name: 'ALL' },
  { id: 1, name: 'PUZZLE' },
  { id: 2, name: 'DOLL' },
  { id: 3, name: 'LEGO' },
  { id: 4, name: 'CAR' },
];
