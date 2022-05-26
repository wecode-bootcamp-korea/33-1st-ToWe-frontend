import React, { useState } from 'react';
import './Nav.scss';
import { FaSearch, FaShoppingCart, FaUserAlt, FaBars } from 'react-icons/fa';

const Nav = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="navbarMenu">
          <h1 className="navbarTiele">ToWeStory</h1>
          <ul className="navbarMenuItems">
            <li className="navbarMenuItem">ToWe</li>
            <li className="navbarMenuItem">스토어</li>
            <li className="navbarMenuItem">게시판</li>
            <li className="navbarMenuItem">갤러리</li>
          </ul>
        </div>
        <div className="navarIconbox">
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
