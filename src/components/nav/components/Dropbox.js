import { Link, useNavigate } from 'react-router-dom';
import './Dropbox.scss';

const Dropbox = ({ category, link }) => {
  const navigate = useNavigate();

  const goPages = itemList => {
    const lowerList = itemList.toLowerCase();
    if (
      lowerList === `best\n10` ||
      lowerList === `board` ||
      lowerList === `character` ||
      lowerList === `brand` ||
      lowerList === `ourstory` ||
      lowerList === `q&a` ||
      lowerList === `gallery`
    ) {
      navigate(`/${lowerList}`);
    } else {
      navigate(
        lowerList === 'all' ? '/itemList' : `/itemList?category=${lowerList}`
      );
    }
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
