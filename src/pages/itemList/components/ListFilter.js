import './ListFilter.scss';
import { FiSliders } from 'react-icons/fi';

const LitsFilter = () => {
  return (
    <div className="listFilter">
      <div className="filterAge">
        <span>연령별보기</span>
        <FiSliders className="filterIcon" />
        <div className="ageFilter">
          <p>1.5+</p>
          <p>4+</p>
          <p>6+</p>
          <p>13+</p>
        </div>
      </div>
      <div className="filterPrice">
        <span>가격별보기</span>
        <FiSliders className="filterIcon" />
        <div className="priceFilter">
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
