import { useState } from 'react';
import NavMenu from './components/NavMenu';
import './Nav.scss';
import { FaSearch, FaShoppingCart, FaUserAlt, FaBars } from 'react-icons/fa';

const Nav = () => {
  const [navId, setNavId] = useState('');

  const hoverOn = idNav => {
    setNavId(idNav);
  };
  const hoverOff = () => {
    setNavId('');
  };

  return (
    <nav>
      <div className="navbar" onMouseLeave={hoverOff}>
        <div className="navbarMenu">
          <h1 className="navbarTiele">ToWeStory</h1>
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
          <input className="navbarInput" />
          <FaSearch className="navarIcon" />
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
    category: ['전체상품', '레고', '인형', '퍼즐', '자동차', '베스트30'],
  },
  { id: 2, title: '게시판', category: ['공지사항', 'Q&A'] },
  { id: 3, title: '겔러리', category: [] },
];
