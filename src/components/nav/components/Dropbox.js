import { useNavigate } from 'react-router-dom';
import './Dropbox.scss';

const Dropbox = ({ category }) => {
  const navigate = useNavigate();

  const goPages = itemList => {
    // navigate(itemList);
    const lowerList = itemList.toLowerCase();
    console.log(lowerList);
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
