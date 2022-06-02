import React from 'react';
import './Review.scss';

const Review = ({ contents }) => {
  const { product_name, content, created_at } = contents;

  return (
    <div className="Review">
      <div className="nameContent">
        <div className="name">{product_name}</div>
        <div className="content">{content}</div>
      </div>
      <div className="date">{created_at}</div>
    </div>
  );
};

export default Review;
