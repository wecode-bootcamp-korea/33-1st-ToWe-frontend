import React from 'react';
import './WallPaper.scss';

const WallPaper = () => {
  return (
    <div className="wallPaper">
      <h2 className="title">WALLPAPER</h2>
      <div className="description">
        일주일마다 선물처럼 배경화면이 공개됩니다. <br /> 아래 이미지 클릭시,
        배경화면 섹션으로 이동합니다.
      </div>
      <img alt="toy" className="wallpaperImg" src="/images/avocadotoy.jpg" />
      <div className="line" />
    </div>
  );
};

export default WallPaper;
