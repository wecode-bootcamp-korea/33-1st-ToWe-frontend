import React, { useEffect, useState } from 'react';
import ProductCategory from './components/ProductCategory.js';
import ListItem from './components/ListItem.js';
import LitsFilter from './components/ListFilter.js';
import API from '../../config.js';
import './BestProducts';

const ItemList = () => {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    fetch(`${API.products}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setListItems(data);
      });
  }, []);

  return (
    <div className="listContainer">
      <div className="listTitle">전체상품</div>
      <ProductCategory />
      <LitsFilter />
      <ListItem listItems={listItems} />
    </div>
  );
};

export default ItemList;
