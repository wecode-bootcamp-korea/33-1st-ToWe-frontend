import './ListItem.scss';
import ListItemContenst from './ListItemContenst.js';

const ListItem = ({ listItems }) => {
  return (
    <div className="listItem">
      {listItems.map(listItem => (
        <ListItemContenst
          id={listItem.id}
          name={listItem.name}
          price={listItem.price}
          categoey={listItem.category}
          itemImg={listItem.thumbnail_url}
          hoverImg={listItem.hover_img}
          age={listItem.age}
          key={listItem.id}
        />
      ))}
    </div>
  );
};

export default ListItem;
