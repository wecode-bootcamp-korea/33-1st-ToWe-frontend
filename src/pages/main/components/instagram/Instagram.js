import React, { useEffect, useState, useRef } from 'react';
import './Instagram.scss';
import SliderImg from './SliderImg';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Instagram = () => {
  const [imgList, setImgList] = useState([]);
  const [curIndex, setCurIndex] = useState(4);

  const TOTAL_SLIDES = 4; // 실제 슬라이드 개수
  const transitionTime = 500;
  const transitionStyle = `transform ${transitionTime}ms ease-in-out`;
  const [transition, setTransition] = useState(transitionStyle);

  useEffect(() => {
    fetch('/data/SLIDER_DATA.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setImgList(data);
      });
  }, []);

  useEffect(() => {
    slideRef.current.style.transition = transition;
    slideRef.current.style.transform = `translateX(-${curIndex * 25}%)`;
  }, [curIndex]);

  // 슬라이드 함수 transition과 translateX 제어
  const slideRef = useRef('');

  const replaceSlide = () => {
    setCurIndex(TOTAL_SLIDES * 2);
    setTimeout(() => {
      setTransition('');
      setCurIndex(TOTAL_SLIDES);
    }, transitionTime);
  };

  const replaceReverseSlide = () => {
    setCurIndex(0);
    setTimeout(() => {
      setTransition('');
      setCurIndex(TOTAL_SLIDES);
    }, transitionTime);
  };

  // 정방향 이동함수
  const moveToNextSlide = () => {
    if (curIndex > TOTAL_SLIDES * 2 - 2) {
      replaceSlide();
    } else {
      setCurIndex(curIndex => curIndex + 1);
      setTransition(transitionStyle);
    }
  };

  // 반대방향 이동함수
  const moveToPrevSlide = () => {
    if (curIndex === 1) {
      replaceReverseSlide();
    } else {
      setCurIndex(curIndex => curIndex - 1);
      setTransition(transitionStyle);
    }
  };
  console.log(curIndex);

  return (
    <div className="instagram">
      <h2 className="title">INSTAGRAM</h2>
      <div className="description">#토위 #TOWE STORY #TOWE #TOY SHOP #REGO</div>
      <div className="slider">
        <div className="slide" ref={slideRef}>
          {imgList.map(imgData => {
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
