import { useState, useRef, useEffect } from 'react';
import NavMenu from './components/NavMenu';
import './Nav.scss';
import { FaSearch, FaShoppingCart, FaUserAlt, FaBars } from 'react-icons/fa';

const Nav = () => {
  const [navId, setNavId] = useState('');
  const [inputToggle, setInputToggle] = useState(true);

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

  return (
    <nav>
      <div className="navbar" onMouseLeave={hoverOff}>
        <div className="navbarMenu">
          <h1 className="navbarTitle">ToWeStory</h1>
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
  { id: 0, title: 'ToWe', category: ['브랜드', '캐릭터', 'ToWeStory'] },
  {
    id: 1,
    title: '스토어',
    category: ['레고', '인형', '퍼즐', '자동차', '베스트30', '전체상품'],
  },
  { id: 2, title: '게시판', category: ['Q&A', '공지사항'] },
  { id: 3, title: '겔러리', category: [] },
];
