import './Dropbox.scss';

const Dropbox = ({ category, onCategory }) => {
  return (
    <li
      className="dropCategory"
      onClick={() => {
        onCategory(category);
      }}
    >
      {category}
    </li>
  );
};

export default Dropbox;
