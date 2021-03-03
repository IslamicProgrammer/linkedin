import React from 'react';
import { Avatar } from '@material-ui/core';
import './Post.css';
import InputOption from '../Feed/InputOption';

import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import { ChatOutlined, SendOutlined, ShareOutlined } from '@material-ui/icons';

const Post = ({ name, photoUrl, description, message }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={photoUrl ? photoUrl : null} />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption color="gray" title="Like" Icon={ThumbUpAltOutlinedIcon} />
        <InputOption color="gray" title="Commet" Icon={ChatOutlined} />
        <InputOption color="gray" title="Share" Icon={ShareOutlined} />
        <InputOption color="gray" title="Send" Icon={SendOutlined} />
      </div>
    </div>
  );
};

export default Post;
