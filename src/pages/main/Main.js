import React from 'react';
import BestProducts from './components/bestProducts/BestProducts';
import Carousel from './components/carousel/Carousel';
import OurStory from './components/ourStory/OurStory';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <Carousel />
      <BestProducts />
      <OurStory />
    </div>
  );
};

export default Main;
