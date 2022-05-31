import React, { useEffect, useState } from 'react';
import ProductCategory from './components/ProductCategory.js';
import ListItem from './components/ListItem.js';
import LitsFilter from './components/ListFilter.js';
import './ItemList.scss';

const ItemList = () => {
  const [listItems, setListItems] = useState([]);
  const [category, setCategory] = useState('ALL');

  useEffect(() => {
    fetch('data/LIST_ITEMS.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setListItems(data);
      });
  }, []);

  const onCategory = value => {
    setCategory(value);
  };

  const onLike = id => {
    setListItems(
      listItems.map(listItem =>
        listItem.id === id ? { ...listItem, like: !listItem.like } : listItem
      )
    );
  };

  return (
    <div className="listContainer">
      <div className="listTitle">{category}</div>
      <ProductCategory onCategory={onCategory} FILTER_MENU={FILTER_MENU} />
      <LitsFilter />
      <ListItem listItems={listItems} onLike={onLike} />
    </div>
  );
};

export default ItemList;

const FILTER_MENU = [
  { id: 0, name: 'ALL' },
  { id: 1, name: 'PUZZLE' },
  { id: 2, name: 'DOLL' },
  { id: 3, name: 'LEGO' },
  { id: 4, name: 'CAR' },
];
