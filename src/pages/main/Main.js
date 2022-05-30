import React, { useState, useEffect, useRef } from 'react';
import BestProducts from './components/bestProducts/BestProducts';
import Carousel from './components/carousel/Carousel';
import Instagram from './components/instagram/Instagram';
import OurStory from './components/ourStory/OurStory';
import WallPaper from './components/wallpaper/WallPaper';
import './Main.scss';

const Main = () => {
  const [scrollFadeIn, setScrollFadeIn] = useState(false);
  const [scrollFadeIn2, setScrollFadeIn2] = useState(false);
  const [scrollFadeIn3, setScrollFadeIn3] = useState(false);
  // const [target, setTarget] = useState(null);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleScroll = () => {
    window.scrollY >= 1400 ? setScrollFadeIn(true) : setScrollFadeIn(false);
    window.scrollY >= 2800 ? setScrollFadeIn2(true) : setScrollFadeIn2(false);
    window.scrollY >= 4200 ? setScrollFadeIn3(true) : setScrollFadeIn3(false);
  };
  // const 타겟? = useRef(null);

  // // 옵션 정의
  // const options = {
  //   root: null, // 뷰포트 이용
  //   rootMargin: '0px',
  //   threshold: 0.3,
  // };

  // // 콜백함수 정의
  // const callback = entries => {
  //   entries.forEach(entry => {
  //     if (entry.isIntersecting) {
  //       setScrollFadeIn(true);
  //     } else {
  //       setScrollFadeIn(false);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   let observer;
  //   if (target) {
  //     observer = new IntersectionObserver(callback, options);
  //     observer.observe(target);
  //     // return () => observer && observer.disconnect();
  //   }
  // }, [target]);

  return (
    <div className="main">
      <Carousel />
      <BestProducts />
      {/* ref={target} ?? */}
      <OurStory scrollFadeIn={scrollFadeIn} />
      <WallPaper scrollFadeIn2={scrollFadeIn2} />
      <Instagram scrollFadeIn3={scrollFadeIn3} />
    </div>
  );
};

export default Main;
