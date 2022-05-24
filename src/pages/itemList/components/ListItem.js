import './ListItem.scss';
import ListItemContenst from './ListItemContenst.js';

const ListItem = ({ listItems }) => {
  return (
    <div className="listItem">
      {listItems.map(listItem => (
        <ListItemContenst listItem={listItem} key={listItem.id} />
      ))}
    </div>
  );
};

export default ListItem;
