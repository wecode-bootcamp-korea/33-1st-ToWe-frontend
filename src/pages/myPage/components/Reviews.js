import React from 'react';
import Review from './Review';
import './Reviews.scss';

const Reviews = ({ userData }) => {
  const { reviews } = userData;
  console.log('reviews-----------------');
  console.log(reviews);

  return (
    <div className="Reviews">
      <div className="myEssay">내가 쓴글</div>
      <div className="reviewContents">
        {reviews.map(contents => (
          <Review contents={contents} key={contents.review_id} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
