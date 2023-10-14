import React from 'react';
import '../Styles/Feed.css';

import Post from '../components/Post'; 

import imagem2 from '../img/09.jpg';
import Chu2 from '../img/chuu2.jpg';

const examplePosts = [
  {
    authorName: "Amanda Amaral",
    authorHandle: "amandx",
    timeAgo: "18h",
    content: "Fiz uma arte da minha personagem nova pro RPG que vou participar. Espero que gostem dela!",
    imageUrl: imagem2,
    authorAvatar: Chu2
  }
];

const FeedHeader = () => (
  <div className="feed-header">
    <div className="tab active">Todos</div>
    <div className="tab">Menções</div>
  </div>
);

const Mencoes = ({ posts = examplePosts }) => {  
  return (
    <div className="posts-container">
      <FeedHeader />
      <div className="posts">
        {posts && posts.length > 0 ? (
          posts.map((post, index) => (
            <Post
              key={index}
              authorName={post.authorName}
              authorHandle={post.authorHandle}
              timeAgo={post.timeAgo}
              content={post.content}
              imageUrl={post.imageUrl}
              authorAvatar={post.authorAvatar}
            />
          ))
        ) : (
          <p>Nenhum post disponível.</p>
        )}
      </div>
    </div>
  );
};

export default Mencoes;
