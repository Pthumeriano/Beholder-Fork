import React from 'react';
import { FaStar, FaRegStar, FaUser, FaBookOpen, FaClock, FaCalendar, FaDollarSign } from 'react-icons/fa';
import '../Styles/CardRPG.css'

function RPGTableCard({ tableData }) {
  const joinTable = (tableId) => {
    console.log(`Você está entrando na mesa com o ID ${tableId}`);
  };

  return (
    <div className="card-contenttable">
      <div className="table-image-container">
        <img
          src={tableData.imagePath}
          alt={tableData.title}
          className="table-image"
        />
        <div className="stars">
          {[...Array(5)].map((_, i) => i < tableData.rating ? <FaStar key={i} /> : <FaRegStar key={i} />)}
        </div>
      </div>
      <div className="table-details">
        <h3>{tableData.title}</h3>
        <span className="tag">{tableData.tag}</span>
        <p><FaUser /> Mestre: {tableData.dungeonMaster}</p>
        <p><FaBookOpen /> Vagas: {tableData.vagas}</p>
        <p><FaClock /> Duração: {tableData.duration}</p>
        <p><FaCalendar /> Horário: {tableData.horario}</p>
        <p><FaDollarSign /> Valor: {tableData.valor}</p>
        <p>{tableData.description}</p>
      </div>
      <button className="button" onClick={() => joinTable(tableData.id)}>Enviar Pedido</button>
    </div>
  );
}

export default RPGTableCard;
