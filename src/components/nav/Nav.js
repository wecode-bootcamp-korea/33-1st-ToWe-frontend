import React from 'react';
import './Nav.scss';
import { FaSearch, FaShoppingCart, FaUserAlt } from 'react-icons/fa';

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
            <span className="teamInfor">팀이름</span>
            <span className="store">
              스토어
              <div className="navDetailBar">
                <span>팀소개</span>
                <div className="storeCategory">
                  {category.map(id => (
                    <div calssName="category" key={id.id}>
                      {id.name}
                    </div>
                  ))}
                </div>
                <div className="storeSort">
                  {sortFilter.map(id => (
                    <div className="bestNew" key={id.id}>
                      {id.name}
                    </div>
                  ))}
                </div>
                <div className="duckToy" />
              </div>
            </span>
            <span>게시판</span>
            <span>나중에 추가</span>
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

const category = [
  {
    id: 1,
    name: '전체상품',
  },

  {
    id: 2,
    name: '레고',
  },

  {
    id: 3,
    name: '인형',
  },

  {
    id: 4,
    name: '자동차',
  },

  {
    id: 5,
    name: '퍼즐',
  },
];

const sortFilter = [
  {
    id: 1,
    name: '베스트 30',
  },

  {
    id: 2,
    name: '신상품',
  },
];
