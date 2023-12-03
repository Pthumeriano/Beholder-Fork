import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/CardRPG.css";
import { useSearch } from "../contexts/SearchContext";
import JogadorCard from "./JogadorCard";
import { listarTemasFavoritos } from "../services/api/usuario";

const JogadoresList = () => {
  const [jogadores, setJogadores] = useState([]);
  const [temasDosJogadores, setTemasDosJogadores] = useState({});

  useEffect(() => {
    const fetchJogadores = async () => {
      try {
        const response = await axios.get("http://localhost:4200/api/usuarios");
        setJogadores(response.data);
      } catch (error) {
        console.error("Erro ao buscar jogadores: ", error);
      }
    };

    const fetchTemasDosJogadores = async () => {
      try {
        setTemasDosJogadores((await listarTemasFavoritos()).data);
      } catch (error) {
        console.error("Erro ao buscar temas dos jogadores: ", error);
      }
    };

    fetchJogadores();
    fetchTemasDosJogadores();
  }, []);

  const { search } = useSearch();

  return (
    <div>
      {temasDosJogadores &&
        jogadores
          .filter((jogador) =>
            jogador.nome.toLowerCase().includes(search.toLowerCase())
          )
          .map((jogador) => (
            <JogadorCard
              nome={jogador.nome}
              email={jogador.email}
              temas={temasDosJogadores[jogador.id]}
            />
          ))}
    </div>
  );
};

export default JogadoresList;
