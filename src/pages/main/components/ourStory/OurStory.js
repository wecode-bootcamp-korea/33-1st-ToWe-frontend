import React from 'react';
import './OurStory.scss';

const OurStory = () => {
  return (
    <div className="ourStory">
      <h2 className="title">OUR STORY</h2>
      <div className="description">
        [무직 ; unemployed] 직장을 벗어나 원하는 일을 하는 자유로운 삶을
        지향합니다. <br />
        자의든 타의든 이 시대의 모든 무직을 응원합니다. 우리는 무직이고,
        뮤직이고 또 무적이니까요.
      </div>
      <img alt="toy" className="ourStoryImg" src="/images/ourStory_toy.jpg" />
      <div className="line" />
    </div>
  );
};

export default OurStory;
