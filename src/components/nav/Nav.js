import { useState, useRef, useEffect } from 'react';
import NavMenu from './components/NavMenu';
import API from '../../../src/config.js';
import { FaSearch, FaShoppingCart, FaUserAlt, FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const [navId, setNavId] = useState('');
  const [inputToggle, setInputToggle] = useState(true);
  const [logo, setLogo] = useState(true);
  const [navbar, setNavber] = useState(false);
  const navigate = useNavigate();

  const searchBtn = e => {
    e.preventDefault();
    const string = `/itemList?category=&search=${e.target.search.value}`;
    navigate(string);
    e.target.search.value = '';
  };

  const goTomypage = () => {
    localStorage.getItem('token')
      ? fetch(`${API.users}`, {
          method: 'GET',
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        })
          .then(res => {
            if (res.ok) {
              return res.json();
            }
          })
          .then(() => {
            navigate(`/mypage`);
          })
      : navigate(`/login`);
  };

  const goTocart = () => {
    localStorage.getItem('token')
      ? fetch(`${API.carts}`, {
          method: 'GET',
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        })
          .then(res => {
            if (res.ok) {
              return res.json();
            }
          })
          .then(() => {
            navigate(`/carts`);
          })
      : navigate(`/login`);
  };

  const goToMain = () => {
    navigate('/');
  };

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

  const changNavbar = () => {
    if (window.scrollY >= 100) {
      setNavber(true);
    } else {
      setNavber(false);
    }
  };

  window.addEventListener('scroll', changNavbar);

  return (
    <nav>
      <div
        className={navbar ? `navbar active` : `navbar`}
        onMouseLeave={hoverOff}
      >
        <div className="navbarMenu">
          <img
            onMouseEnter={logoToggle}
            onMouseLeave={logoToggle}
            onClick={goToMain}
            className="navLogo"
            src={logo ? `/images/logo2.png` : `/images/logo1.png`}
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
        <form className="navarIconbox" onSubmit={searchBtn}>
          <FaSearch
            className="navarIcon"
            onClick={() => {
              toggle();
            }}
          />
          <input
            type="text"
            ref={inputRef}
            name="search"
            className={inputToggle ? `navbarInput` : `navbarInputOn`}
          />
          <FaUserAlt
            onClick={() => {
              goTomypage();
            }}
            className="navarIcon"
          />
          <FaShoppingCart
            onClick={() => {
              goTocart();
            }}
            className="navarIcon"
          />
        </form>
        <FaBars className="navbarToggleBtn" />
      </div>
    </nav>
  );
};

export default Nav;

const NAV_TITLES = [
  {
    id: 0,
    title: 'TOWE STORY',
    category: ['BRAND', 'CHARACTER', 'OURSTORY'],
  },
  {
    id: 1,
    title: 'STORE',
    category: ['CAR', 'LEGO', 'DOLL', 'PUZZLE', 'ALL', 'BEST\n10'],
  },
  { id: 2, title: 'BOARD', category: ['Q&A', 'BOARD'] },
  { id: 3, title: 'GALLERY', category: ['GALLERY'] },
];
