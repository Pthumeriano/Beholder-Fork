import React from 'react';
import { FaStar, FaRegStar, FaUser, FaBookOpen, FaClock, FaCalendar, FaDollarSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../Styles/CardRPG.css';

function RPGTableCard({ tableData }) {
  const joinTable = (tableId) => {
    console.log(`Você está entrando na mesa com o ID ${tableId}`);
  };

  // Convertendo horário e data para um formato mais legível
  const formattedTime = tableData.time ? tableData.time.substring(0, 5) : '';
  const formattedDate = new Date(tableData.date).toLocaleDateString();

  return (
    <>
      <div className="card-contenttable">
        <div className="table-image-container">
          {/* Imagem da mesa (se disponível) */}
          <img
            src={tableData.imagePath || 'default_image_path.jpg'} // Coloque um caminho padrão se a imagem não estiver disponível
            alt={tableData.title}
            className="table-image"
          />
          {/* Avaliação - ajuste se disponível */}
          <div className="stars">
            {[...Array(5)].map((_, i) => i < tableData.rating ? <FaStar key={i} /> : <FaRegStar key={i} />)}
          </div>
        </div>
        <div className="table-details">
          <h3>{tableData.title}</h3>
          <span className="tag">{tableData.system}</span>
          <p><FaUser /> Mestre: {tableData.dungeonMasterId}</p>
          <p><FaBookOpen /> Vagas: {tableData.vacancies}</p>
          <p><FaClock /> Horário: {formattedTime}</p>
          <p><FaCalendar /> Data: {formattedDate}</p>
          <p><FaDollarSign /> Valor: R$ {tableData.price}</p>
          <p>Descrição: {tableData.description}</p>
        </div>
        <button className="button" onClick={() => joinTable(tableData.id)}>Entrar</button>
      </div>
      
    </>
  );
}

export default RPGTableCard;
