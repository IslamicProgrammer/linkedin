import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';
import { selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          className="sidebar__img"
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.displayName[0].toUpperCase()}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who wived you</p>
          <p className="sidebar__statNumber">134,5</p>
        </div>
        <div className="sidebar__stat">
          <p>Wives on Post</p>
          <p className="sidebar__statNumber">134,5</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recents</p>
        {recentItem('reactjs')}
        {recentItem('javascript')}
        {recentItem('web')}
        {recentItem('developer')}
      </div>
    </div>
  );
};

export default Sidebar;
