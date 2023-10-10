import React from 'react';
import '../Styles/Post.css';
import { FaRegComment, FaRegHeart } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';

function Post({ authorName, authorHandle, timeAgo, content, imageUrl, authorAvatar }) {
  return (
    <div className="post-container">
      <div className="post-header">
        {authorAvatar && <img src={authorAvatar} alt="Author's avatar" className="author-avatar" />}
        <strong>{authorName}</strong> <span>@{authorHandle} · {timeAgo}</span>
      </div>
      <p>{content}</p>
      {imageUrl && <img src={imageUrl} alt="Post content" className="post-image" />}
      <div className="post-actions">
        <button><FaRegComment /> {/* Número de comentários */}</button>
        <button><FiShare2 /> {/* Número de compartilhamentos */}</button>
        <button><FaRegHeart /> {/* Número de curtidas */}</button>
      </div>
    </div>
  );
}

export default Post;
