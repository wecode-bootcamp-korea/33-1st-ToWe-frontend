import React from 'react';
import BestProducts from './components/bestProducts/BestProducts';
import Carousel from './components/carousel/Carousel';
import Instagram from './components/instagram/Instagram';
import OurStory from './components/ourStory/OurStory';
import WallPaper from './components/wallpaper/WallPaper';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <Carousel />
      <BestProducts />
      <OurStory />
      <WallPaper />
      <Instagram />
    </div>
  );
};

export default Main;
