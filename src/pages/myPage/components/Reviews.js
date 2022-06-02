import React from 'react';
import Review from './Review';
import './Reviews.scss';

const Reviews = ({ user }) => {
  const { reviews } = user;

  return (
    <div className="Reviews">
      <div className="myEssay">My reviews</div>
      <div className="reviewContents">
        {reviews &&
          reviews.map(contents => (
            <Review contents={contents} key={contents.review_id} />
          ))}
      </div>
    </div>
  );
};

export default Reviews;
