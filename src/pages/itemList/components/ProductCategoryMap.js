import './ProductCategoryMap.scss';

const ProductCategoryMap = ({
  filterMenus,
  filterClick,
  filterColor,
  filterColorClick,
}) => {
  const { id, name, option } = filterMenus;
  return (
    <ul
      className="listCategory"
      onClick={() => {
        filterClick(option);
      }}
    >
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
