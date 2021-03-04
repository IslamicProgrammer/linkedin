import React, { useState } from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from '../HeaderOption/HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import TextsmsIcon from '@material-ui/icons/Textsms';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice';
import { auth } from '../../firebase/firebase';

const Header = () => {
  const [openSub, setOpenSub] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logOutHandler = () => {
    dispatch(logout());
    setOpenSub(false);
    auth.signOut();
  };

  return (
    <div className="header">
      {user ? (
        <>
          <div className="header__left">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="linkedin"
              class="svg-inline--fa fa-linkedin fa-w-14"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="#0e76a8"
                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
              ></path>
            </svg>

            <div className="header__search">
              <SearchIcon />
              <input type="text" />
            </div>
          </div>
          <div className="header__right">
            <HeaderOption Icon={HomeIcon} title="Home" />
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
            <HeaderOption Icon={TextsmsIcon} title="Messages" />
            <HeaderOption Icon={NotificationsIcon} title="Notifications" />
            <HeaderOption
              avatar={user.photoUrl}
              openSub={openSub}
              setOpenSub={setOpenSub}
              avatar={true}
            />
            {openSub ? (
              <div
                onClick={logOutHandler}
                style={openSub ? { display: 'block' } : { display: 'none' }}
                className="avatar__submenu"
              >
                <span>Log out</span>
                <ExitToAppIcon />
              </div>
            ) : (
              ''
            )}
          </div>
        </>
      ) : (
        <h3>Login or Register to App</h3>
      )}
    </div>
  );
};

export default Header;
