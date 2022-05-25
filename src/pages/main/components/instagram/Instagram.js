import React, { useEffect, useState, useRef } from 'react';
import './Instagram.scss';
import SliderImg from './SliderImg';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Instagram = () => {
  const [imgList, setImgList] = useState([]);
  const [curIndex, setCurIndex] = useState(4);

  const TATAL_SLIDES = 3;
  const transitionTime = 500;
  const transitionStyle = `transform ${transitionTime}ms ease-in-out`;
  const [transition, setTransition] = useState(transitionStyle);

  useEffect(() => {
    fetch('http://localhost:3000/data/SLIDER_DATA.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setImgList(data);
      });
  }, []);

  const slideRef = useRef('');
  const replaceSlide = () => {
    setCurIndex(8);
    setTimeout(() => {
      setTransition('');
      setCurIndex(4);
    }, transitionTime);
  };

  // console.log('transition>>', transition);

  useEffect(() => {
    slideRef.current.style.transition = transition;
    slideRef.current.style.transform = `translateX(-${curIndex * 25}%)`;
    // console.log(slideRef.current.style.transition);
  }, [curIndex]);

  // 정방향 이동함수
  const moveToNextSlide = () => {
    if (curIndex > TATAL_SLIDES * 2) {
      replaceSlide();
    } else {
      setCurIndex(curIndex => curIndex + 1);
      setTransition(transitionStyle);
    }
  };

  const moveToPrevSlide = () => {
    if (curIndex === 0) {
      setCurIndex(TATAL_SLIDES);
    } else {
      setCurIndex(curIndex => curIndex - 1);
    }
  };

  // console.log(curIndex);
  return (
    <div className="instagram">
      <h2 className="title">INSTAGRAM</h2>
      <div className="description">#토위 #TOWE STORY #TOWE #TOY SHOP #REGO</div>
      <div className="slider">
        <div className="slide" ref={slideRef}>
          {imgList.map((imgData, i) => {
            return <SliderImg key={imgData.id} imgData={imgData} />;
          })}
        </div>
        <div className="arrowLeft" onClick={moveToPrevSlide}>
          <FaAngleLeft />
        </div>
        <div className="arrowRight" onClick={moveToNextSlide}>
          <FaAngleRight />
        </div>
      </div>
      <div className="space" />
    </div>
  );
};

export default Instagram;
