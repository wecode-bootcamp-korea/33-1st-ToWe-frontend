import React, { useEffect, useState } from 'react';
import ProductCategory from './components/ProductCategory.js';
import ListItem from './components/ListItem.js';
import LitsFilter from './components/ListFilter.js';
import API from '../../config.js';
import { useLocation, useNavigate } from 'react-router-dom';
import './ItemList.scss';

const ItemList = () => {
  const [category, setCategory] = useState('ALL');
  const [listItems, setListItems] = useState([]);
  const [sortColor, setSortColor] = useState('');
  const [query, setQuery] = useState(9);

  const [filterValue, setFilterValue] = useState({
    categoryValue: '',
    sortValue: '',
    offValue: '',
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch(`${API.products}${location.search}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setListItems(data.results);
      });
  }, [location.search]);

  useEffect(() => {
    const queryString = `?${
      filterValue.categoryValue
        ? `${
            filterValue.categoryValue === `all`
              ? ''
              : `category=${filterValue.categoryValue}`
          }`
        : ''
    }${filterValue.sortValue ? `&sort=${filterValue.sortValue}` : ''}${
      filterValue.offValue ? `${filterValue.offValue}` : ''
    }`;
    if (
      filterValue.categoryValue ||
      filterValue.sortValue ||
      filterValue.offValue
    ) {
      navigate(queryString);
    }
  }, [filterValue]);

  const onCategory = name => {
    setFilterValue(prev => {
      return { ...prev, sortValue: '' };
    });
    setFilterValue(prev => {
      return { ...prev, offValue: `` };
    });
    const lowerValue = name.toLowerCase();
    setFilterValue(prev => {
      return { ...prev, categoryValue: lowerValue };
    });
    setCategory(name);
    setQuery(3);
    setSortColor('');
  };

  const getBynIndex = () => {
    setQuery(query => query + 3);
    const limit = query;
    const offset = 0;
    const queryString = `&offset=${offset}&limit=${limit}`;
    setFilterValue(prev => {
      return { ...prev, offValue: queryString };
    });
  };

  const onSort = value => {
    setFilterValue(prev => {
      return { ...prev, sortValue: value };
    });
  };

  const onLike = id => {
    setListItems(
      listItems.map(listItem =>
        listItem.id === id ? { ...listItem, like: !listItem.like } : listItem
      )
    );
  };

  const sortColorClick = id => {
    setSortColor(id);
  };

  return (
    <div className="listContainer">
      <div className="listTitle">{category}</div>
      <ProductCategory onCategory={onCategory} />
      <LitsFilter
        onSort={onSort}
        SORT_MENU={SORT_MENU}
        sortColorClick={sortColorClick}
        sortColor={sortColor}
      />
      <ListItem listItems={listItems} onLike={onLike} />
      <button
        className="plusBtn"
        onClick={() => {
          getBynIndex(0.2);
        }}
      >
        SHOW MORE
      </button>
    </div>
  );
};

export default ItemList;

const SORT_MENU = [
  { id: 0, name: 'LOW PRICE', value: 'price_low' },
  { id: 1, name: 'HIGH PRICE', value: 'price_high' },
  { id: 2, name: 'LOW AGE', value: 'age_low' },
  { id: 3, name: 'HIGH AGE', value: 'age_high' },
];
