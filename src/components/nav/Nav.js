import { useState, useRef, useEffect } from 'react';
import NavMenu from './components/NavMenu';
import { FaSearch, FaShoppingCart, FaUserAlt, FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const [navId, setNavId] = useState('');
  const [inputToggle, setInputToggle] = useState(true);
  const [logo, setLogo] = useState(true);
  const [navbar, setNavber] = useState(false);
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  //로그인, 장바구니 토큰 받기
  // useEffect(() => {
  //   fetch('http://10.58.0.181:8000/users', {
  //     method: 'GET',
  //     headers: {
  //       Authorization: localStorage.getItem('TOKEN') || '',
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(result => {
  //       if (result.access_token) {
  //         navigate(`/mypage`);
  //       } else {
  //         navigate(`/signup`);
  //       }
  //     });
  // }, []);

  useEffect(() => {
    navigate(search);
  }, [search]);

  const searchBtn = e => {
    e.preventDefault();
    const string = `/products?category=&search=${e.target.search.value}`;
    setSearch(string);
    e.target.search.value = '';
  };

  const goTomypage = () => {
    localStorage.getItem('TOKEN') ? navigate(`/mypage`) : navigate(`/signup`);
  };

  const goTocart = () => {
    localStorage.getItem('TOKEN') ? navigate(`/mypage`) : navigate(`/signup`);
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
          <FaSearch className="navarIcon" onClick={toggle} />
          <input
            type="text"
            ref={inputRef}
            name="search"
            className={inputToggle ? `navbarInput` : `navbarInputOn`}
          />
          <FaUserAlt
            onSubmit={() => {
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
  { id: 0, title: 'TOWE STORY', category: ['BRAND', 'CHARICTOR', 'OURSTORY'] },
  {
    id: 1,
    title: 'STORE',
    category: ['CAR', 'LOGO', 'DOLL', 'PUZZLE', 'ALL', `BEST\n10`],
  },
  { id: 2, title: 'BOARD', category: ['Q&A', 'NOTICE'] },
  { id: 3, title: 'GALLERY', category: ['GALLERY'] },
];
