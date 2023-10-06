import React from 'react';
import '../Styles/Feed.css';
import { FaCamera, FaSmile } from 'react-icons/fa'; 
import Chu from '../img/chuu2.jpg';

const Feed = ({ posts }) => {
  return (
    <div className="feed-container">
      <div className="post-bar">
        <div className="post-input-container">
          <img className="user-avatar" src={Chu} alt="User Avatar" />
          <input className="post-input" type="text" placeholder='Compartilhe novidade das suas mesas!' />
        </div>
        <div className="post-icons">
          <FaCamera className="icon-camera" />  
          <FaSmile className="icon-smile" />   
        </div>
        <button className="post-button">Postar</button>
      </div>
      {/* ... resto do componente de posts ... */}
    </div>
  );
};

export default Feed;
