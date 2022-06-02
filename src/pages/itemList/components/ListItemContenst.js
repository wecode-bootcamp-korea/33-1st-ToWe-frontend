import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import './ListItemContenst.scss';

const ListItemContenst = ({
  id,
  name,
  price,
  categoey,
  itemImg,
  hoverImg,
  age,
  like,
  onLike,
  categoryPage,
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
      {like ? (
        <FaHeart onClick={() => onLike(id)} className="likeIcon" />
      ) : (
        <FaRegHeart
          onClick={() => {
            onLike(id);
          }}
          className="likeIcon"
        />
      )}
      <div className="likeBack" />
      <p onClick={goToDetail} className="listItemName">
        {name}
      </p>
      <p onClick={goToDetail} className="listItemPrice">
        ₩{price}
      </p>
    </div>
  );
};

export default ListItemContenst;
