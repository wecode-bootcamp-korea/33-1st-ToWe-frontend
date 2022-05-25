import React from 'react';

const SliderImg = ({ imgData }) => {
  return (
    <img className="slideImg" src={`${imgData.url}`} alt={`${imgData.name}`} />
  );
};

export default SliderImg;
