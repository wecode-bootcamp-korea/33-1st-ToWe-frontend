import './ProductCategoryMap.scss';

const ProductCategoryMap = ({ filterMenus, filterClick }) => {
  const { name, option } = filterMenus;
  return (
    <ul
      className="listCategory"
      onClick={() => {
        filterClick(option);
      }}
    >
      <li>{name}</li>
    </ul>
  );
};

export default ProductCategoryMap;
