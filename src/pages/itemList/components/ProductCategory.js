import './ProductCategory.scss';

const ProductCategory = ({ filter }) => {
  const check = categoey => {
    filter(categoey);
  };

  return (
    <ul
      // onClick={() => {
      //   check('레고', '인형', '퍼즐', '자동차');
      // }}
      className="listCategory"
    >
      <li className="listCategorys">전체</li>
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
  );
};

export default ProductCategory;
