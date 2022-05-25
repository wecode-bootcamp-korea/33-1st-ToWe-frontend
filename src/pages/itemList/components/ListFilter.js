import './ListFilter.scss';

const LitsFilter = () => {
  return (
    <div className="listFilter">
      <p className="filterBtn">낮은가격</p>
      <p className="filterBtn">높은가격</p>
      <p className="filterBtn">낮은연령</p>
      <p className="filterBtn">높은연령</p>
    </div>
  );
};

export default LitsFilter;
