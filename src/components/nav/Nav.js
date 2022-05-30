import { useState, useRef, useEffect } from 'react';
import NavMenu from './components/NavMenu';
import './Nav.scss';
import { FaSearch, FaShoppingCart, FaUserAlt, FaBars } from 'react-icons/fa';

const Nav = () => {
  const [navId, setNavId] = useState('');
  const [inputToggle, setInputToggle] = useState(true);
  const [logo, setLogo] = useState(true);

  const hoverOn = idNav => {
    setNavId(idNav);
  };
  const hoverOff = () => {
    setNavId('');
  };

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  });

  const toggle = () => {
    setInputToggle(!inputToggle);
  };

  const logoToggle = () => {
    setLogo(!logo);
  };

  return (
    <nav>
      <div className="navbar" onMouseLeave={hoverOff}>
        <div className="navbarMenu">
          <img
            onMouseEnter={logoToggle}
            onMouseLeave={logoToggle}
            className="navLogo"
            src={logo ? `images/logo2.png` : `images/logo1.png`}
            alt="logoImg"
          />
          <ul className="navbarMenuItems">
            {NAV_TITLES.map(navTitle => (
              <NavMenu
                hoverOn={hoverOn}
                navTitle={navTitle}
                key={navTitle.id}
                navId={navId}
              />
            ))}
          </ul>
        </div>
        <div className="navarIconbox">
          <FaSearch className="navarIcon" onClick={toggle} />
          <input
            type="text"
            ref={inputRef}
            className={inputToggle ? `navbarInput` : `navbarInputOn`}
          />
          <FaUserAlt className="navarIcon" />
          <FaShoppingCart className="navarIcon" />
        </div>
        <FaBars className="navbarToggleBtn" />
      </div>
    </nav>
  );
};

export default Nav;

const NAV_TITLES = [
  { id: 0, title: 'TOWE STORY', category: ['BRAND', 'CHARICTOR', 'OURSTORY'] },
  {
    id: 1,
    title: 'STORE',
    category: ['CAR', 'LOGO', 'DOLL', 'PUZZLE', 'ALL', 'BEST 10'],
  },
  { id: 2, title: 'BOARD', category: ['Q&A', 'NOTICE'] },
  { id: 3, title: 'GALLERY', category: [] },
];
