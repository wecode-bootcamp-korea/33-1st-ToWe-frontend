import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/itemdetail/${id}`);
  };

  return (
    <div className="listItems" onMouseOver={mouseOver} onMouseOut={mouseOut}>
      <img
        className={changeImg ? `listItemsImg` : `listItemsImg2`}
        alt="Items"
        src={changeImg ? itemImg : hoverImg}
        onClick={goToDetail}
      />
      <p className="listItemName">{name}</p>
      <p className="listItemPrice">{price}원</p>
    </div>
  );
};

export default ListItemContenst;
