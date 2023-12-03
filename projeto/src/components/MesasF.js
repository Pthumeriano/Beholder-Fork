import React, { useState } from "react";
import "../Styles/Mesas.css";
import { FaChevronDown } from "react-icons/fa";
import RPGTableCard from "../components/RPGTableCard";
import JogadoresF from "../components/JogadoresF";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import I1 from "../img/05.jpg";
import { useSearch } from "../contexts/SearchContext";

const MesasF = () => {
  const [activeTab, setActiveTab] = useState("mesas");
  const [mesas, setMesas] = useState([]); // Estado para armazenar os dados das mesas

  useEffect(() => {
    const fetchMesas = async () => {
      try {
        const response = await axios.get("http://localhost:4200/api/mesas");
        setMesas(response.data); // Atualiza o estado com as mesas recebidas
      } catch (error) {
        console.error("Erro ao buscar dados: ", error);
      }
    };

    fetchMesas();
  }, []);

  const { search, setSearch } = useSearch();

  return (
    <div className="posts-container">
      <div className="feed-header">
        <div
          className={`tab ${
            activeTab === "mesas" ? "active clickable" : "clickable"
          }`}
          onClick={() => {
            setActiveTab("mesas");
            setSearch("");
          }}
        >
          Mesas
        </div>
        <div
          className={`tab ${
            activeTab === "jogadores" ? "active clickable" : "clickable"
          }`}
          onClick={() => {
            setActiveTab("jogadores");
            setSearch("");
          }}
        >
          Jogadores
        </div>
      </div>

      {activeTab === "mesas" && (
        <>
          {/* ...filtros */}

          {mesas
            .filter((mesa) =>
              mesa.titulo.toLowerCase().includes(search.toLowerCase())
            )
            .map((mesa) => (
              <RPGTableCard
                key={mesa.id}
                tableData={{
                  id: mesa.id,
                  title: mesa.titulo,
                  subtitle: mesa.subtitulo,
                  system: mesa.sistema,
                  description: mesa.descricao,
                  createdOn: mesa.criado_em,
                  date: mesa.dia,
                  time: mesa.horario,
                  period: mesa.periodo,
                  price: mesa.preco,
                  vacancies: mesa.vagas,
                  dungeonMasterId: mesa.mestre,
                  chatId: mesa.chat,
                }}
              />
            ))}
        </>
      )}

      {activeTab === "jogadores" && <JogadoresF />}

      <Link to="/criarmesa" className="button create-table-button">
        Criar Mesa
      </Link>
    </div>
  );
};

export default MesasF;
