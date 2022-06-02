import React from 'react';
import Review from './Review';
import './Reviews.scss';

const Reviews = ({ user }) => {
  return (
    <div className="reviews">
      <div className="myEssay">My reviews</div>
      <div className="reviewContents">
        {user.length !== 0 &&
          user.map(contents => (
            <Review contents={contents} key={contents.review_id} />
          ))}
      </div>
    </div>
  );
};

export default Reviews;
