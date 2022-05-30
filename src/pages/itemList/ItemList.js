import React, { useEffect, useState } from 'react';
import ProductCategory from './components/ProductCategory.js';
import ListItem from './components/ListItem.js';
import LitsFilter from './components/ListFilter.js';
import './ItemList.scss';
import { useLocation, useNavigate } from 'react-router-dom';

const ItemList = () => {
  const [listItems, setListItems] = useState([]);
  const [category, setCategory] = useState('ALL');

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch(
      `http://10.58.3.254:8000/products${
        location.search === '?category=all' ? '' : location.search
      }`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(data => {
        setListItems(data.results);
      });
  }, [location.search]);

  const onCategory = value => {
    const lowerValue = value.toLowerCase();
    navigate(`?category=${lowerValue}`);
    setCategory(value);
  };

  const onCategory2 = value => {
    const lowerValue = value.toLowerCase();
    navigate(`?category=${lowerValue}`);
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
