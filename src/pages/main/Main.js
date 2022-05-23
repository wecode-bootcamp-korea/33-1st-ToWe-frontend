import React from 'react';
import BestProducts from './components/bestProducts/BestProducts';
import Carousel from './components/carousel/Carousel';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <Carousel />
      <BestProducts />
    </div>
  );
};

export default Main;
