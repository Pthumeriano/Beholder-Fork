import React, { useState, useEffect } from "react";
import "../Styles/CardRPG.css";
import { useSearch } from "../contexts/SearchContext";
import JogadorCard from "./JogadorCard";
import {
  getUsuarioTemaPorId,
  listarUsuarios,
  getUsuarioPorId,
} from "../services/api/usuario";
import { getUsuarioMesa } from "../services/api/usuariomesa";
import { useParams } from "react-router-dom";

const JogadoresList = () => {
  const [jogadoresMesa, setJogadoresMesa] = useState([]);
  const [temasDosJogadores, setTemasDosJogadores] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usuariosResponse = await listarUsuarios();
        const usuarios = usuariosResponse.data;

        setJogadoresMesa(await fetchUsuariosMesa(id));

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
  }, [id]); // Adicionando 'id' como dependência do useEffect

  useEffect(() => {
    // Este useEffect é acionado quando 'jogadoresMesa' é atualizado
    console.log("Jogadores da mesa foram atualizados:", jogadoresMesa);
  }, [jogadoresMesa]); // Adicionando 'jogadoresMesa' como dependência do useEffect

  const fetchUsuariosMesa = async (mesaId) => {
    try {
      const result = await getUsuarioMesa(mesaId);
      const usuariosMesaDetalhados = result.data.map(
        (usuarioMesa) => usuarioMesa.usuario
      );

      console.log("Usuários da mesa:");
      console.log(usuariosMesaDetalhados);

      return usuariosMesaDetalhados;
    } catch (error) {
      console.error("Erro ao buscar usuários da mesa: ", error);
      return [];
    }
  };

  const { search } = useSearch();

  return (
    <div>
      {temasDosJogadores &&
        jogadoresMesa.map((jogador) => (
          <JogadorCard
            premiar={true}
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
