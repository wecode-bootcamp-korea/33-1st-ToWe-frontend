import './ListItemContenst.scss';

const ListItemContenst = ({ listItem }) => {
  const { name, price, itemImg } = listItem;
  return (
    <div className="listItems">
      <img className="listItemsImg" alt="Items" src={itemImg} />
      <p className="listItemName">{name}</p>
      <p className="listItemPrice">{price}</p>
    </div>
  );
};

export default ListItemContenst;
