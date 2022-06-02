import Dropbox from './Dropbox.js';
import './NavMenu.scss';

const NavMenu = ({ navTitle, navId, hoverOn }) => {
  const { id, title, category, link } = navTitle;

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
            <Dropbox category={category} key={i} />
          ))}
      </ul>
    </li>
  );
};

export default NavMenu;
