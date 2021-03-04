import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import './HeaderOption.css';

const HeaderOption = ({ avatar, title, Icon, openSub, setOpenSub }) => {
  const user = useSelector(selectUser);

  return (
    <div
      className="headerOption"
      onClick={avatar ? () => setOpenSub(!openSub) : null}
    >
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar src={user.photoUrl} className="headerOption__icon">
          {user?.displayName[0].toUpperCase()}
        </Avatar>
      )}
      <h3 className="headerOption__title">
        {avatar ? user.displayName : title}
      </h3>
    </div>
  );
};

export default HeaderOption;
