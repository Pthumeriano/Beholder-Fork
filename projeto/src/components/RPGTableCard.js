import React from 'react';
import '../Styles/CardRPG.css';

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
      </div>
      <div className="table-details">
        <h3>{tableData.title}</h3>
        <p>Jogadores: {tableData.players}</p>
        <p>Mestre: {tableData.dungeonMaster}</p>
        <p>Tema: {tableData.tema}</p>
        <p>Horario: {tableData.horario}</p>
        <p>Valor: {tableData.valor}</p>
      </div>
      <button onClick={() => joinTable(tableData.id)}>Enviar pedido</button>
    </div>
  );
}

export default RPGTableCard;
