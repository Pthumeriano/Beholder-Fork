import React, { useState, useEffect } from 'react';
import { MdStar, MdStarHalf, MdStarBorder } from 'react-icons/md';
import '../Styles/Dmesas.css';
import backgroundImage from '../img/02.jpg';
import logomestre from '../img/logomestre.png';
import logodia from '../img/logodia.png';
import logovalor from '../img/logovalor.png';
import logovagas from '../img/logovagas2.png';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Detalhesdamesa() {
  const { id } = useParams();
  const [mesa, setMesa] = useState(null);

  useEffect(() => {
    console.log('ID da URL:', id); // Adicione este log para verificar se o ID está sendo capturado corretamente
    // Substitua 'localhost:4200/api/mesa/:id' pela URL correta da sua API com o ID dinâmico
    axios
      .get(`http://localhost:4200/api/mesa/${id}`)
      .then((response) => {
        console.log('Resposta da API:', response.data); // Adicione este log para verificar a resposta da API
        setMesa(response.data);
      })
      .catch((error) => {
        console.error('Erro na solicitação:', error); // Adicione este log para capturar erros na solicitação
      });
  }, [id]);

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
      {mesa ? (
        <div className="sessao-header" style={backgroundStyle}>
          {/* Renderize os detalhes da mesa aqui */}
          <h1>{mesa[0].titulo}</h1>
          <p>{mesa[0].subtitulo}</p>
          <img src={logomestre} alt="Logo Mestre" className="logo-mestre" />
          <p>Mestre: {mesa[0].mestre}</p>
          <img src={logodia} alt="Logo Dia" className="logo-dia" />
          <p>Data: {mesa[0].data}</p>
          <img src={logovalor} alt="Logo Valor" className="logo-valor" />
          <p>Preço: {mesa[0].preco}R$/Sessão</p>
          <img src={logovagas} alt="Logo Vagas" className="logo-vagas" />
          <p>Vagas: {mesa[0].vagas}</p>
         
          <button className="botao-participante">Entrar</button>
        </div>
      ) : (
        <p>Carregando detalhes da mesa...</p>
      )}
      {/* Renderize outros detalhes da mesa aqui */}
    </div>
  );
}

export default Detalhesdamesa;
