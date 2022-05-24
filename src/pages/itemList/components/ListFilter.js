import './ListFilter';

const LitsFilter = () => {
  return (
    <>
      <ul className="listCategory">
        <li className="listCategorys">1.5+</li>
        <li className="listCategorys">4+</li>
        <li className="listCategorys">6+</li>
        <li className="listCategorys">13+</li>
      </ul>
      <ul className="listCategory">
        <li className="listCategorys">5만원 이하</li>
        <li className="listCategorys">5~10만원</li>
        <li className="listCategorys">10~20만원</li>
        <li className="listCategorys">20만원 이상</li>
      </ul>
    </>
  );
};

export default LitsFilter;
