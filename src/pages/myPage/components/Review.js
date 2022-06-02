import React from 'react';
import './Review.scss';

const Review = ({ contents }) => {
  const { product_name, content, created_at } = contents;

  return (
    <div className="Review">
      <span className="nameContent">
        <span className="name">{product_name}</span>
        <span className="content">{content}</span>
      </span>
      <span className="date">{created_at}</span>
    </div>
  );
};

export default Review;
