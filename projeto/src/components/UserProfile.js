import React from 'react'
import coverPic from '../img/01.jpg';  
import profilePic from '../img/chu.jpg';  
import '../Styles/UserProfile.css';

function UserProfile() {
  return (
    <div className="perfil-container">
    <img src={coverPic} alt="Foto de Capa" className="cover-pic"/>
    <img src={profilePic} alt="Foto de Perfil" className="profile-pic"/>
    <div className="profile-content">
        <div className="header-content">
            <h2>Chuo do Critei</h2>
            <button className="edit-profile-button">Editar Perfil</button>
        </div>
        <p>@chullo2</p>
        <p>Sou mestre e jogador de RPG, atualmente...</p>
        <p>🇧🇷 Brasil</p>
        <a href="https://stellarrpgs.com">stellarrpgs.com</a>
        <div className="stats">
            <p>23 Seguindo</p>
            <p>56 Seguidores</p>
        </div>
    </div>
</div>
  )
}

export default UserProfile;
