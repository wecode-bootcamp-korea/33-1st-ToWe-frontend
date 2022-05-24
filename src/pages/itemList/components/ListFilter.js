import React, { useState } from 'react';
import './ListFilter.scss';
import { FiSliders } from 'react-icons/fi';

const LitsFilter = () => {
  const [age, setAge] = useState(false);
  const [price, setPrice] = useState(false);

  const ageToggle = () => {
    setAge(!age);
  };
  const prriceToggle = () => {
    setPrice(!price);
  };

  return (
    <div className="listFilter">
      <div onClick={ageToggle} className="filterAge">
        <span>연령별보기</span>
        <FiSliders className="filterIcon" />
        <div className={age ? `ageFilter` : `toggle`}>
          <p>1.5+</p>
          <p>4+</p>
          <p>6+</p>
          <p>13+</p>
        </div>
      </div>
      <div onClick={prriceToggle} className="filterPrice">
        <span>가격별보기</span>
        <FiSliders className="filterIcon" />
        <div className={price ? `priceFilter` : `toggle`}>
          <p>1만원 이상</p>
          <p>1만원~3만원</p>
          <p>3만원~5만원</p>
          <p>5만원 이상</p>
        </div>
      </div>
    </div>
  );
};

export default LitsFilter;
