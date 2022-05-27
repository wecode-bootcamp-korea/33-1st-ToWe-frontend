import React, { useState } from 'react';
import Dropbox from './components/Dropbox';
import './Nav.scss';
import { FaSearch, FaShoppingCart, FaUserAlt, FaBars } from 'react-icons/fa';

const Nav = () => {
  const NAV_TITLES = [
    { id: 0, title: 'ToWe' },
    { id: 1, title: '스토어' },
    { id: 2, title: '게시판' },
    { id: 3, title: '겔러리' },
  ];
  const DORP_BOXS = [
    { id: 0, title: { name: ['브랜드', '캐릭터', 'ToWeStory'] } },
    {
      id: 1,
      title: {
        name: ['전체상품', '레고', '인형', '퍼즐', '자동차', '베스트30'],
      },
    },
    { id: 2, title: { name: ['공지사항', 'Q&A'] } },
  ];

  return (
    <nav>
      <div className="navbar">
        <div className="navbarMenu">
          <h1 className="navbarTiele">ToWeStory</h1>
          <ul className="navbarMenuItems">
            {NAV_TITLES.map(navTitle => (
              <li key={navTitle.id} className="navbarMenuItem">
                {navTitle.title}
                {DORP_BOXS.map(dropBox => (
                  <Dropbox dropBox={dropBox} key={dropBox.id} />
                ))}
              </li>
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

// const Navbar = () => {
//   const [drop, setDrop] = useState(false);

//   return (
//     <>
//       <nav className="navbar2">
//         <div to="/" className="navbarLogo2">
//           ToWeStory
//         </div>
//         <ul>
//           <li className="itemName">
//             <div>ㅇㅎ</div>
//           </li>
//           <li className="itemName">
//             <div>ㅇㅎ</div>
//           </li>
//           <li className="itemName">
//             <div>ㅇㅎ</div>
//           </li>
//           <li className="itemName">
//             <div>ㅇㅎ</div>
//           </li>
//         </ul>
//         <button className="btn">Sign UP</button>
//       </nav>
//       <ul className="serviceSub">
//         <li className="serviceName">드랍박스</li>
//       </ul>
//     </>
//   );
// };
