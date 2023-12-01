import React from 'react';
import { MdStar, MdStarHalf, MdStarBorder } from 'react-icons/md';
import '../Styles/Dmesas.css';
import profilePic from '../img/02.jpg';  
import im1 from '../img/01.jpg';
import backgroundImage from '../img/02.jpg';
import logomestre from '../img/logomestre.png'
import logodia from '../img/logodia.png'
import logovalor from '../img/logovalor.png'
import logovagas from '../img/logovagas2.png'



function Detalhesdamesa() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    padding: '40px 20px',
    textAlign: 'left',
    borderRadius: '8px',
    color: 'white',
    boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.5)', 
  };

  return (
    <div className="detalhes-da-mesa">
      <div className="sessao-header" style={backgroundStyle}>
        
      </div>
      
      <img src={profilePic} alt="Foto de Perfil" className="profile-pic"/>
      <h1>Stellarium – RPG</h1>
        <p>Num nevoeiro de estrelas, se encontram heróis predestinados a encontrar os segredos ocultos no universo. Assim, marcados pelo próprio universo, são
capazes de determinar o destino do mesmo.
<br></br>Embarque nessa história e desbrave o mundo de Stellarium conosco!</p>
<br></br>
<img src={logomestre} alt="Logo Mestre" className="logo-mestre"/>
<p>Mestre: Chuu do Critei</p>
<img src={logodia} alt="Logo Dia" className="logo-dia"/>
<p>Sexta | 20:00 - 22:30</p>
<img src={logovalor} alt="Logo Valor" className="logo-valor"/>
<p>60R$/Sessão</p>
<img src={logovagas} alt="Logo Vagas" className="logo-vagas"/>
<p>Vagas: 2/3</p>
<br></br>

<div className="avaliacao">
            <MdStar className="star" />
            <MdStar className="star" />
            <MdStar className="star" />
            <MdStarHalf className="star" />
            <MdStarBorder className="star" />
          </div>
        
      <button className="botao-participante">Participante</button>

    
      
      <div className="sessao-perfil">
        <img src={im1} alt="Amanda Amaral" className="imagem-perfil" />
        <div className="info-perfil">
          <h2>Amanda Amaral</h2>
          <p className="username">@amandx</p>
          <div className="tags">
            <span className="tag">Medieval</span>
            <span className="tag">Mistério</span>
          </div>
          <div className="avaliacao">
            <MdStar className="star" />
            <MdStar className="star" />
            <MdStar className="star" />
            <MdStarHalf className="star" />
            <MdStarBorder className="star" />
          </div>
          <button className="botao-avaliar">Avaliar</button>
        </div>
      </div>
    </div>
  );
}

export default Detalhesdamesa;
