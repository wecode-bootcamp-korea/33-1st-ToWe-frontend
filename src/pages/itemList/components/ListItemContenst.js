import { useState } from 'react';
import './ListItemContenst.scss';

const ListItemContenst = ({ listItem }) => {
  const { name, price, itemImg, hoverImg } = listItem;
  const [changeImg, setChangeImg] = useState(true);

  const mouseOver = () => {
    setChangeImg(false);
  };
  const mouseOut = () => {
    setChangeImg(true);
  };

  return (
    <div className="listItems" onMouseOver={mouseOver} onMouseOut={mouseOut}>
      {changeImg ? (
        <img className="listItemsImg" alt="Items" src={itemImg} />
      ) : (
        <img className="listItemsImg" alt="Items" src={hoverImg} />
      )}

      <p className="listItemName">{name}</p>
      <p className="listItemPrice">{price}</p>
    </div>
  );
};

export default ListItemContenst;
