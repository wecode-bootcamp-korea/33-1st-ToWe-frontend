import React from 'react';
import Review from './Review';
import './Reviews.scss';

const Reviews = ({ user }) => {
  const { reviews } = user;
  console.log(reviews);
  console.log(user);

  return (
    <div className="Reviews">
      <div className="myEssay">내가 쓴글</div>
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
