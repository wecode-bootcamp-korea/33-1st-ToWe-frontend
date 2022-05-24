import LitsFilter from './ListFilter.js';
import './ProductCategory.scss';

const ProductCategory = ({ filter }) => {
  const check = categoey => {
    filter(categoey);
  };

  return (
    <div>
      <ul className="listCategory">
        <li
          onClick={() => {
            check('');
          }}
          className="listCategorys"
        >
          전체
        </li>
        <li
          onClick={() => {
            check('레고');
          }}
          className="listCategorys"
        >
          레고
        </li>
        <li
          onClick={() => {
            check('인형');
          }}
          className="listCategorys"
        >
          인형
        </li>
        <li
          onClick={() => {
            check('퍼즐');
          }}
          className="listCategorys"
        >
          퍼즐
        </li>
        <li
          onClick={() => {
            check('자동차');
          }}
          className="listCategorys"
        >
          자동차
        </li>
      </ul>
      <LitsFilter />
    </div>
  );
};

export default ProductCategory;
