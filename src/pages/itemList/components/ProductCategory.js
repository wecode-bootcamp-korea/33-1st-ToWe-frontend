import { useState } from 'react';
import ProductCategoryMap from './ProductCategoryMap.js';
import './ProductCategory.scss';

const ProductCategory = ({ FILTER_MENU, onCategory }) => {
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
