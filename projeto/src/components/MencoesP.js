import React, { useState } from 'react';
import '../Styles/Feed.css';

import Post from '../components/Post';
import NotificationsScreen from './NotificationsScreen';

import imagem2 from '../img/09.jpg';
import Chu2 from '../img/chuu2.jpg';

const examplePosts = [
  {
    authorName: "Amanda Amaral",
    authorHandle: "amandx",
    timeAgo: "18h",
    content: "Arte para a @chuull02, um monstro da campanha dela de D&D, a Hidra Falsa.",
    imageUrl: imagem2,
    authorAvatar: Chu2
  }
];

const MencoesP = () => {
  const [activeTab, setActiveTab] = useState("notificacao"); // Assumindo que a tela padrão seja "notificacao"

  return (
    <div className="posts-container">
      <div className="feed-header">
        <div
          className={`tab ${activeTab === "notificacao" ? "active" : ""}`}
          onClick={() => setActiveTab("notificacao")}
        >
          Notificações
        </div>
        <div
          className={`tab ${activeTab === "mencao" ? "active" : ""}`}
          onClick={() => setActiveTab("mencao")}
        >
          Menções
        </div>
      </div>

      <div className="posts">
        {activeTab === "notificacao" ? (
          <NotificationsScreen />
        ) : (
          examplePosts.map((post, index) => (
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
        )}
      </div>
    </div>
  );
};

export default MencoesP;
