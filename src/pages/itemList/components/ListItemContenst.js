import { useState } from 'react';
import './ListItemContenst.scss';

const ListItemContenst = ({
  id,
  name,
  price,
  categoey,
  itemImg,
  hoverImg,
  age,
}) => {
  const [changeImg, setChangeImg] = useState(true);

  const mouseOver = () => {
    setChangeImg(false);
  };
  const mouseOut = () => {
    setChangeImg(true);
  };

  return (
    <div className="listItems" onMouseOver={mouseOver} onMouseOut={mouseOut}>
      <img
        className="listItemsImg"
        alt="Items"
        src={changeImg ? itemImg : hoverImg}
      />
      <p className="listItemName">{name}</p>
      <p className="listItemPrice">{price}</p>
    </div>
  );
};

export default ListItemContenst;
