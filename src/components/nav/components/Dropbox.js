import { useNavigate } from 'react-router-dom';
import './Dropbox.scss';

const Dropbox = ({ category }) => {
  const navigate = useNavigate();

  const goPages = itemList => {
    const lowerList = itemList.toLowerCase();
    navigate(
      lowerList === 'all'
        ? 'itemList'
        : `itemList/products?category=${lowerList}`
    );
  };
  return (
    <li
      onClick={() => {
        goPages(category);
      }}
      className="dropCategory"
    >
      {category}
    </li>
  );
};

export default Dropbox;
