import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/CardRPG.css';

const JogadoresList = () => {
  const [jogadores, setJogadores] = useState([]);

  useEffect(() => {
    const fetchJogadores = async () => {
      try {
        const response = await axios.get('http://localhost:4200/api/usuarios');
        setJogadores(response.data);
      } catch (error) {
        console.error("Erro ao buscar jogadores: ", error);
      }
    };

    fetchJogadores();
  }, []);

  return (
    <div>
        {jogadores.map(jogador => (
            <div key={jogador.id} className="jogador-card">
                <div className="jogador-info">
                    <h3 className="jogador-nome">{jogador.nome}</h3>
                    <p className="jogador-detalhes">XP: {jogador.xp}</p>
                    <p className="jogador-detalhes">Email: {jogador.email}</p>
                    {/* Adicione mais detalhes conforme necessário */}
                </div>
                {/* Pode adicionar botões ou outras ações aqui */}
            </div>
        ))}
    </div>
);
};

export default JogadoresList;
