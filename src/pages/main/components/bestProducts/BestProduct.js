import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BestProduct = ({ imgData, id }) => {
  const [isHover, setIsHover] = useState(0);
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/itemdetail/${id}`);
  };

  return (
    <li className="itemList">
      <img
        alt={`${imgData.name}`}
        className="item"
        src={isHover ? `${imgData.hoverUrl}` : `${imgData.url}`}
        onClick={goToDetail}
        onMouseOver={() => setIsHover(1)}
        onMouseOut={() => setIsHover(0)}
      />

      <div className="itemDesc">
        <span> {imgData.name} </span>
        <span> {imgData.price} 원 </span>
      </div>
    </li>
  );
};

export default BestProduct;
