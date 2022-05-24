import React from 'react';

const SliderImg = ({ imgData }) => {
  return <img className="slideImg" src={`${imgData.image}`} alt="toy" />;
};

export default SliderImg;
