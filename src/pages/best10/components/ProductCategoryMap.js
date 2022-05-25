import './ProductCategoryMap.scss';

const ProductCategoryMap = ({ filterMenus, filterColor, filterColorClick }) => {
  const { id, name } = filterMenus;
  return (
    <ul className="listCategory">
      <li
        onClick={() => {
          filterColorClick(id);
        }}
        className={filterColor === id ? `filterName` : null}
      >
        {name}
      </li>
    </ul>
  );
};

export default ProductCategoryMap;
