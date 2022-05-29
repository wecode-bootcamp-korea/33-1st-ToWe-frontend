import React, { useEffect, useState } from 'react';
import ProductCategory from './components/ProductCategory.js';
import ListItem from './components/ListItem.js';
import LitsFilter from './components/ListFilter.js';
import './ItemList.scss';

const ItemList = () => {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    fetch('/data/LIST_ITEMS.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setListItems(data);
      });
  }, []);

  const onLike = id => {
    setListItems(
      listItems.map(listItem =>
        listItem.id === id ? { ...listItem, like: !listItem.like } : listItem
      )
    );
  };

  return (
    <div className="listContainer">
      <div className="listTitle">ALL PRODUCTS</div>
      <ProductCategory />
      <LitsFilter />
      <ListItem listItems={listItems} onLike={onLike} />
    </div>
  );
};

export default ItemList;
