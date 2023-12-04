// JogadoresList.js
import React, { useState, useEffect } from "react";
import "../Styles/CardRPG.css";
import { useSearch } from "../contexts/SearchContext";
import JogadorCard from "./JogadorCard";
import { getUsuarioTemaPorId, listarUsuarios } from "../services/api/usuario";

const JogadoresList = () => {
  const [jogadores, setJogadores] = useState([]);
  const [temasDosJogadores, setTemasDosJogadores] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usuariosResponse = await listarUsuarios();
        const usuarios = usuariosResponse.data;

        setJogadores(usuarios);

        const temasResponse = await Promise.all(
          usuarios.map((usuario) => getUsuarioTemaPorId(usuario.id))
        );

        const temasDosJogadores = {};
        temasResponse.forEach((response, index) => {
          temasDosJogadores[usuarios[index].id] = response;
        });

        setTemasDosJogadores(temasDosJogadores);
      } catch (error) {
        console.error("Erro ao buscar dados: ", error);
      }
    };

    fetchData();
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
              key={jogador.id}
              nome={jogador.nome}
              id={jogador.id}
              email={jogador.email}
              temas={temasDosJogadores[jogador.id] || []}
            />
          ))}
    </div>
  );
};

export default JogadoresList;
