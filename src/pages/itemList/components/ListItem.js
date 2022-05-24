import { useState } from 'react';
import './ListItem.scss';
import ListItemContenst from './ListItemContenst.js';

const ListItem = ({ listItems }) => {
  const [tapId, setTapId] = useState(1);

  const clickHandler = id => {
    setTapId(id);
  };

  return (
    <div className="listItem">
      {listItems.map(listItem => (
        <ListItemContenst listItem={listItem} key={listItem.id} />
      ))}
    </div>
  );
};

export default ListItem;
