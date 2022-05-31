import './NavMenu.scss';
import Dropbox from './Dropbox.js';

const NavMenu = ({ navTitle, navId, hoverOn, onCategory }) => {
  const { id, title, category } = navTitle;

  return (
    <li
      className="navbarMenuItem"
      onMouseEnter={() => {
        hoverOn(id);
      }}
    >
      {title}
      <div className="bottomLine" />
      <ul className="dropBoxs">
        {navId === id &&
          category.map((category, i) => (
            <Dropbox category={category} key={i} onCategory={onCategory} />
          ))}
      </ul>
    </li>
  );
};

export default NavMenu;
