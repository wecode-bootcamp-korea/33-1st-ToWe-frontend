import { useEffect, useState } from 'react';
import LitsFilter from './ListFilter.js';
import './ProductCategory.scss';
import ProductCategoryMap from './ProductCategoryMap.js';

const ProductCategory = ({ filter }) => {
  const [firterValue, setFirterValue] = useState('');

  const filterMenus = [
    { id: 0, name: '전체', option: '' },
    { id: 1, name: '레고', option: '레고' },
    { id: 2, name: '인형', option: '인형' },
    { id: 3, name: '퍼즐', option: '퍼즐' },
    { id: 4, name: '자동차', option: '자동차' },
  ];

  const filterClick = e => {
    setFirterValue(e);
  };
  useEffect(() => {
    filter(firterValue);
  });

  return (
    <div>
      <div className="filterTap">
        {filterMenus.map(filterMenu => (
          <ProductCategoryMap
            filterMenus={filterMenu}
            filterClick={filterClick}
            key={filterMenu.id}
          />
        ))}
      </div>
      <LitsFilter />
    </div>
  );
};

export default ProductCategory;
