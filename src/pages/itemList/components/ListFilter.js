import './ListFilter.scss';

const LitsFilter = () => {
  return (
    <div className="listFilter">
      <div className="filterAge">
        <select className="select">
          <option>연령별보기</option>
          <option>1.5+</option>
          <option>4+</option>
          <option>6+</option>
          <option>13+</option>
        </select>
      </div>
      <div className="filterPrice">
        <select className="select">
          <option>가격별보기</option>
          <option>1만원이하</option>
          <option>1~3만원</option>
          <option>3~5만원</option>
          <option>5만원이상</option>
        </select>
      </div>
    </div>
  );
};

export default LitsFilter;
