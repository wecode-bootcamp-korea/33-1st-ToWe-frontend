import React, { useState, useEffect } from 'react';
import BestProducts from './components/bestProducts/BestProducts';
import Carousel from './components/carousel/Carousel';
import Collaboration from './components/collaboration/Collaboration';
import Instagram from './components/instagram/Instagram';
import OurStory from './components/ourStory/OurStory';
import WallPaper from './components/wallpaper/WallPaper';
import './Main.scss';

const Main = () => {
  const [scrollFadeIn, setScrollFadeIn] = useState(false);
  const [scrollFadeIn2, setScrollFadeIn2] = useState(false);
  const [scrollFadeIn3, setScrollFadeIn3] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleScroll = () => {
    window.scrollY >= 2200 ? setScrollFadeIn(true) : setScrollFadeIn(false);
    window.scrollY >= 3500 ? setScrollFadeIn2(true) : setScrollFadeIn2(false);
    window.scrollY >= 5000 ? setScrollFadeIn3(true) : setScrollFadeIn3(false);
  };

  return (
    <div className="main">
      <Carousel />
      <BestProducts />
      <Collaboration />
      <OurStory scrollFadeIn={scrollFadeIn} />
      <WallPaper scrollFadeIn2={scrollFadeIn2} />
      <Instagram scrollFadeIn3={scrollFadeIn3} />
    </div>
  );
};

export default Main;
