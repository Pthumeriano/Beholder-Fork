import React, { useState } from 'react';

import '../Styles/Ajuda.css';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

//  função InfoBox 
const InfoBox = ({ pergunta, resposta }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="info-box">
      <button onClick={toggle}>
        <FontAwesomeIcon
          icon={isOpen ? faMinus : faPlus}
          className={isOpen ? "rotate" : ""}
        />
      </button>
      <div>
        <h3>{pergunta}</h3>
        {isOpen && <p>{resposta}</p>}
      </div>
    </div>
  );
};


const perguntasFrequentes = [
  {
    pergunta: "1. Consigo recuperar minha senha caso esqueça?",
    resposta: 'Sim, basta enviar o e-mail usado na conta para enviarmos o código de acesso.',
  },
  {
    pergunta: "Quais são as formas de pagamento?",
    resposta: "Temos várias formas de pagamento, incluindo cartão de crédito, débito e PayPal.",
  },
  {
    pergunta: "Como posso avaliar pessoas e denunciá-las?",
    resposta: "Para avaliar ou denunciar outras pessoas, vá para a seção de perfil da pessoa em questão e você encontrará opções para avaliação e denúncia.",
  },
  {
    pergunta: "Como encontro temas de RPG compatíveis comigo?",
    resposta: ' Você pode encontrar temas compatíveis de RPG em nossa seção de busca de jogos. Use os filtros para encontrar jogos com temas que você goste.',
  },
  
];

function Ajuda() {
  return (
    <div className="ajuda-container">
      <Link to="/feedpage" className="logo-link">
        <img
          src={logo}
          alt="Logo da sua empresa"
          className="logoajuda"
        />
      </Link>

      <div className="faq">
        <h2 style={{ color: '#8B0000' }}>Perguntas Frequentes</h2>
        <div className="info-box-container">
          {perguntasFrequentes.map((pergunta, index) => (
            <InfoBox
              key={index}
              pergunta={pergunta.pergunta}
              resposta={pergunta.resposta}
            />
          ))}
        </div>
      </div>

      <div className="contato">
        <h2 style={{ color: '#8B0000' }}>Faça sua pergunta</h2>
        <textarea style={{ width: '100%' }} rows="5" placeholder="Digite sua pergunta..."></textarea>
        <br />
        <h2 style={{ color: '#8B0000' }}>Digite seu email</h2>

        <input type="email" placeholder="Seu email..." />
        <br />
        <button>Enviar</button>
      </div>
    </div>
  );
}

export default Ajuda;
