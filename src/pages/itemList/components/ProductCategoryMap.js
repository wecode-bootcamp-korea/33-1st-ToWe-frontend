import './ProductCategoryMap.scss';

const ProductCategoryMap = ({
  filterMenus,
  filterColor,
  filterColorClick,
  onCategory,
}) => {
  const { id, name } = filterMenus;
  return (
    <ul className="listCategory">
      <li
        onClick={() => {
          filterColorClick(id);
          onCategory(name);
        }}
        className="filterHover"
      >
        {name}
        <div className="filterLine" />
      </li>
    </ul>
  );
};

export default ProductCategoryMap;
