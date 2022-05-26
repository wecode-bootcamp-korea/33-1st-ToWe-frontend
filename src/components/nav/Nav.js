import React from 'react';
import './Nav.scss';
import { FaSearch, FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import CategoryBar from './components/CategoryBar';

const Nav = () => {
  return (
    <div className="nav">
      <div className="navBar">
        <div className="navBasic">
          <div className="title">
            <div className="bigTitle">To We</div>
            <div className="smallTitle">ㅡㅡㅡㅡㅡㅡ studio ㅡㅡㅡㅡㅡㅡ</div>
          </div>
          <div className="navMenu">
            <span className="teamInfor">
              팀이름
              <CategoryBar />
            </span>
            <span className="store">
              스토어
              <CategoryBar />
            </span>
            <span className="board">
              게시판
              <CategoryBar />
            </span>
            <span className="gallery">
              갤러리
              <CategoryBar />
            </span>
          </div>
          <div className="navIcons">
            <FaSearch />
            <FaUserAlt />
            <FaShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
