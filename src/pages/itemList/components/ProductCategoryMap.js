import './ProductCategoryMap.scss';

const ProductCategoryMap = ({ filterMenus, filterColor, filterColorClick }) => {
  const { id, name } = filterMenus;
  return (
    <ul className="listCategory">
      <li
        onClick={() => {
          filterColorClick(id);
        }}
        className={filterColor === id ? `filterName` : `filterHover`}
      >
        {name}
      </li>
    </ul>
  );
};

export default ProductCategoryMap;
