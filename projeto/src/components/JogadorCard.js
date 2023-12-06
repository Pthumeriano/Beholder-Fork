// JogadorCard.js
import "../Styles/CardRPG.css";

import React from "react";

const JogadorCard = ({
  nome,
  id,
  email,
  temas = [],
  honrarJogador,
  honrarMestre,
}) => {
  return (
    <div className="sessao-perfil">
      <div className="info-perfil">
        <h2>{nome}</h2>
        <p className="username">{"ID: " + id}</p>
        <p className="username">{"email: " + email}</p>
        <div className="tags">
          {temas.length > 0 && (
            <ul className="tags-list">
              {temas.map((tema) => (
                <span className="tag" key={tema}>
                  {tema}
                </span>
              ))}
            </ul>
          )}
        </div>
        {honrarJogador && (
          <button className="botao-avaliar">Honrar Jogador</button>
        )}
        {honrarMestre && (
          <button className="botao-avaliar">Honrar Mestre</button>
        )}
      </div>
    </div>
  );
};

export default JogadorCard;
