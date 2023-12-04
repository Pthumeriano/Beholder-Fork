// JogadorCard.js
import "../Styles/CardRPG.css";
import "../Styles/Dmesas.css";
import React from "react";

const JogadorCard = ({ nome, id, email, temas = [], premiar }) => {
  return (
    <div className="sessao-perfil">
      <div className="info-perfil">
        <h2>{nome}</h2>
        <p className="username">{"ID: " + id}</p>
        <p className="username">{"email: " + email}</p>
        <div className="tags">
          {temas.length > 0 && (
            <ul className="">
              {temas.map((tema) => (
                <li className="tag" key={tema.id}>
                  {tema}
                </li>
              ))}
            </ul>
          )}
        </div>
        {premiar && <button className="botao-avaliar">Premiar</button>}
      </div>
    </div>
  );
};

export default JogadorCard;
