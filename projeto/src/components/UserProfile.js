// ... (other imports)

import coverPic from '../img/06.png';  
import profilePic from '../img/chuu2.jpg';  
import globeIcon from '../img/globe.png';  
import linkIcon from '../img/link.png';  
import '../Styles/UserProfile.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as JWT from 'jwt-decode';

function getCookieValue(nome) {
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [name, value] = cookie.split('=');
    if (name === nome) {
      return value;
    }
  }
  return null;
}

function UserProfile() {
  const [activeTab, setActiveTab] = useState("UserProfile");
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = getCookieValue('BeholderToken');
        if (token) {
          const decodedToken = JWT.jwtDecode(token);
          const userId = decodedToken.userId;
          const response = await axios.get(`http://localhost:4200/api/usuario/${userId}`);
          setUserData(response.data);
        }
      } catch (error) {
        console.error('Erro ao obter os dados do usuário:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="perfil-container">
      <img src={coverPic} alt="Foto de Capa" className="cover-pic"/>
      <img src={profilePic} alt="Foto de Perfil" className="profile-pic"/>
      <div className="profile-content">
        {userData.length > 0 ? (
          <div className="header-content">
            <h2>{userData[0].nome}</h2>
            <button className="edit-profile-button">Editar Perfil</button>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        {userData.length > 0 && userData[0].email && (
          <p className='user-tag'>{`Email: ${userData[0].email}`}</p>
        )}
        <p className='user-info'>
          {userData.length > 0 && userData[0].descricao || "Nenhuma descrição disponível"}
        </p>
        <div className="details">
          <div className="detail">
            <img src={globeIcon} alt="Globo Icon" className="icon" />
            Brasil
          </div>
          <div className="detail">
            <img src={linkIcon} alt="Link Icon" className="icon" />
            <a href="https://stellarrpgs.com">stellarrpgs.com</a>
          </div>
        </div>
        <div className="stats">
          <div className="stat">
            <p>23</p>
            <p>Seguindo</p>
          </div>
          <div className="stat">
            <p>56</p>
            <p>Seguidores</p>
          </div>
        </div>
      </div>
      <div className="posts-container">
      <div className="feed-header">
        <div
          className={`tab ${activeTab === "posts" ? "active clickable" : "clickable"}`}
          onClick={() => setActiveTab("posts")}
        >
          Posts
        </div>

        <div
          className={`tab ${activeTab === "respostas" ? "active clickable" : "clickable"}`}
          onClick={() => setActiveTab("respostas")}
        >

          Respostas

         </div>

        <div
          className={`tab ${activeTab === "mesas" ? "active clickable" : "clickable"}`}
          onClick={() => setActiveTab("mesas")}
        >
          Mesas
         </div>

         <div
          className={`tab ${activeTab === "curtidas" ? "active clickable" : "clickable"}`}
          onClick={() => setActiveTab("curtidas")}
        >
          Curtidas
         </div>

        </div>
      </div>

      {activeTab === 'posts' && (
        <div>
          aaaa
        </div>
      )
        
      }

      {activeTab === 'respostas' && (
        <div>
          bbbb
        </div>
      )
        
      }

      {activeTab === 'mesas' && (
        <div>
          cccc
        </div>
      )
        
      }
      
      {activeTab === 'curtidas' && (
        <div>
          dddd
        </div>
      )
        
      }
    </div>
    
  );
}

export default UserProfile;