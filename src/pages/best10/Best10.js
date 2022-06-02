import React, { useEffect, useState } from 'react';
import ListItem from './components/ListItem.js';
import API from '../../config.js';
import './Best10.scss';

const Best10 = () => {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    fetch(`${API.products}?sort=best`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setListItems(data.results);
      });
  }, []);

  return (
    <div className="best10">
      <div className="listTitle">Best 10</div>
      <ListItem listItems={listItems} />
    </div>
  );
};

export default Best10;
