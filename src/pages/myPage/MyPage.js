import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NotActivity from './components/NotActivity.js';
import Input from './components/Input.js';
import Reviews from './components/Reviews.js';
import API from '../../config.js';
import './MyPage.scss';

const MyPage = () => {
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const logOut = () => {
    navigate('/');
    localStorage.clear();
  };

  useEffect(() => {
    fetch(`${API.users}/detail`, {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(result => setUserData(result.result));
  }, []);

  return (
    <div className="myPage">
      <div className="myPageContainer">
        <div className="userActivity">
          <Reviews user={userData} />
          {NOTHING_ACTIVITY.map(activity => (
            <NotActivity activity={activity} key={activity.id} />
          ))}
        </div>
        <div className="profile">
          <div className="profileTitle">
            <div className="title">User Information</div>
            <div className="logOut" onClick={logOut}>
              Logout
            </div>
          </div>
          <div className="profileImage">
            <img src="/images/profile.jpg" alt="profileimg" />
          </div>
          <div className="userInformation">
            <div className="userInfor">
              <div className="contentBox">
                {USER_INFORMATION.map(data => (
                  <Input key={data.id} userData={data} inputData={userData} />
                ))}
              </div>
              <div className="agree">
                Agree to receive marketing information
                <div className="checkBox">
                  <input type="checkBox" className="email" /> email
                  <input type="checkBox" className="message" /> message
                </div>
              </div>
            </div>
          </div>
          <button className="exit">Account withdrawal</button>
          <button className="save">To save your changes</button>
        </div>
      </div>
    </div>
  );
};

export default MyPage;

const USER_INFORMATION = [
  {
    id: 0,
    title: 'email',
    name: 'email',
  },
  {
    id: 1,
    title: 'name',
    name: 'name',
  },
  {
    id: 2,
    title: 'address',
    name: 'address',
  },
  {
    id: 3,
    title: 'phone_number',
    name: 'phone_number',
  },
  {
    id: 4,
    title: 'point',
    name: 'point',
  },
];

const NOTHING_ACTIVITY = [
  {
    id: 0,
    content: 'coupons',
  },
  {
    id: 1,
    content: 'Restocking Notification breakdowns',
  },
  {
    id: 2,
    content: 'Questions',
  },
  {
    id: 3,
    content: 'Order Historys',
  },
];
