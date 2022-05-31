import React, { useEffect, useState } from 'react';
import ProductCategory from './components/ProductCategory.js';
import ListItem from './components/ListItem.js';
import LitsFilter from './components/ListFilter.js';
import './ItemList.scss';
import { useLocation, useNavigate } from 'react-router-dom';

const ItemList = () => {
  const [category, setCategory] = useState('ALL');
  const [listItems, setListItems] = useState([]);
  const [query, setQuery] = useState(6);

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

  const onCategory = name => {
    const lowerValue = name.toLowerCase();
    navigate(`?category=${lowerValue}`);
    setCategory(name);
  };

  const onLike = id => {
    setListItems(
      listItems.map(listItem =>
        listItem.id === id ? { ...listItem, like: !listItem.like } : listItem
      )
    );
  };

  // 더보기 버튼 만들기
  const getBynIndex = () => {
    setQuery(query => query + 3);
    const limit = query;
    const offset = 0;
    const queryString = `?offset=${offset}&limit=${limit}`;
    navigate(queryString);
    console.log(queryString);
  };

  return (
    <div className="listContainer">
      <div className="listTitle">{category}</div>
      <ProductCategory onCategory={onCategory} />
      <LitsFilter />
      <ListItem listItems={listItems} onLike={onLike} />
      <button
        onClick={() => {
          getBynIndex(3);
        }}
      >
        버튼
      </button>
    </div>
  );
};

export default ItemList;
