import React from 'react';
import './OurStory.scss';

const OurStory = ({ scrollFadeIn }) => {
  return (
    <div className={`ourStory ${scrollFadeIn === true ? 'active' : ''}`}>
      <h2 className="title">TOWE STORY</h2>
      <div className="description">
        다양한 장난감으로 만드는 우리들의 이야기
        <br />
        'TOWE STORY TEAM' 입니다 :)
        <br />
      </div>
      <img alt="toy" className="ourStoryImg" src="/images/ourStory_toy.jpg" />
      <div className="line" />
    </div>
  );
};

export default OurStory;
