import coverPic from '../img/06.png';  
import profilePic from '../img/chuu2.jpg';  
import globeIcon from '../img/globe.png';  
import linkIcon from '../img/link.png';  
import '../Styles/UserProfile.css';
import React, { useState } from 'react';

function UserProfile() {
  const [activeTab, setActiveTab] = useState("UserProfile");
  return (
    
    <div className="perfil-container">
      <img src={coverPic} alt="Foto de Capa" className="cover-pic"/>
      <img src={profilePic} alt="Foto de Perfil" className="profile-pic"/>
      <div className="profile-content">
        <div className="header-content">
          <h2>Chuu do Critei</h2>
          <button className="edit-profile-button">Editar Perfil</button>
        </div>
        <p className='user-tag'>@chullo2</p>
        <p className='user-info'>
          Sou mestra e jogadora de RPG, atualmente, mestro uma campanha de D&D chamada "Stellarium", mais informações no link fixado!
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