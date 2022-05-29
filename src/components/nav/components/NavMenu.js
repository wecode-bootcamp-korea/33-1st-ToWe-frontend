import './NavMenu.scss';
import Dropbox from './Dropbox.js';

const NavMenu = ({ navTitle, navId, hoverOn }) => {
  const { id, title, category } = navTitle;

  return (
    <li
      className="navbarMenuItem"
      onMouseEnter={() => {
        hoverOn(id);
      }}
    >
      {title}
      <ul className="dropBoxs">
        {navId === id &&
          category.map((category, i) => (
            <Dropbox category={category} key={i} />
          ))}
      </ul>
    </li>
  );
};

export default NavMenu;
