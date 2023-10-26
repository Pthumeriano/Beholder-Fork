import React from 'react';
import '../Styles/Feed.css';
import { FaCamera, FaSmile } from 'react-icons/fa'; 
import Chu from '../img/chuu2.jpg';
import Post from '../components/Post'; 

import imagem1 from '../img/08.jpg'
import imagem2 from '../img/09.jpg'

import Chu3 from '../img/chu3.png'
import Chu2 from '../img/chuu2.jpg'



const examplePosts = [
  {
    authorName: "Chuu do Critei",
    authorHandle: "chuul102",
    timeAgo: "1h",
    content: "A nova soundtrack do meu RPG tá fino do fino, amo as produções do @jvic",
    imageUrl: imagem1,
    authorAvatar: Chu3
  },
  {
    authorName: "Amanda Amaral",
    authorHandle: "amandx",
    timeAgo: "18h",
    content: "Fiz uma arte da minha personagem nova pro RPG que vou participar. Espero que gostem dela!",
    imageUrl: imagem2,
    authorAvatar: Chu2
  }
];


const Feed = ({ posts = examplePosts }) => {  
  return (
    <div className="feed-container">
      <div className="post-bar">
        <div className="post-input-container">
          <img className="user-avatar" src={Chu} alt="User Avatar" />
          <input className="post-input" type="text" placeholder='Compartilhe novidades das suas mesas!' />
        </div>
        <div className="post-icons">
          <FaCamera className="icon-camera" />  
          <FaSmile className="icon-smile" />   
        </div>
        <button className="post-button">Postar</button>
      </div>
      
      {/* Verifique se a propriedade 'posts' está definida e não é vazia antes de mapear */}
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

export default Feed;
