import React from 'react';
import { MdStar, MdStarHalf, MdStarBorder } from 'react-icons/md';
import '../Styles/Dmesas.css';

import im1 from '../img/01.jpg';
import backgroundImage from '../img/02.jpg';

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
        <h1>Stellarium – RPG</h1>
        <p>Num nevoeiro de estrelas, se encontram heróis predestinados a encontrar os segredos ocultos no universo...</p>
        <button className="botao-participante">Participante</button>
      </div>
      
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
