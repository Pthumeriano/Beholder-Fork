import React from 'react';
import '../Styles/Feed.css';
import { FaCamera, FaSmile } from 'react-icons/fa'; 

const Feed = ({ posts }) => {
  return (
    <div className="feed-container">
      <div className="post-bar">
        <img className="user-avatar" src="url-da-imagem-do-avatar" alt="User Avatar" />
        <input type="text" placeholder="Compartilhe novidade das suas mesas!" />
        <div className="post-icons">
          <FaCamera />  
          <FaSmile />   
        </div>
        <button>Postar</button>
      </div>
      
      {/* ... resto do componente de posts ... */}
    </div>
  );
};

export default Feed;
