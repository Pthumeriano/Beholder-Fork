import React, { useState, useEffect } from "react";
import "../Styles/Mesas.css";
import RPGTableCard from "../components/RPGTableCard";
import JogadoresF from "../components/JogadoresF";
import { useSearch } from "../contexts/SearchContext";
import { getUsuarioPorId } from "../services/api/usuario";
import { getMesas } from "../services/api/mesa";
import { Link } from "react-router-dom";

const MesasF = () => {
  const [activeTab, setActiveTab] = useState("mesas");
  const [mesas, setMesas] = useState([]);

  const fetchMestreName = async (id) => {
    try {
      console.log(`Fetching mestre name for ID: ${id}`);
      const mestre = await getUsuarioPorId(id);
      console.log("Mestre data:", mestre);
      return mestre.data[0].nome; // Supondo que a resposta é um array com um único item
    } catch (error) {
      console.error("Erro ao buscar mestre: ", error);
      return "Mestre Desconhecido";
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMesas();
        const mesasData = response.data;

        console.log("Mesas data:", mesasData);

        const mestresNames = await Promise.all(
          mesasData.map((mesa) => fetchMestreName(mesa.mestre))
        );

        console.log("Mestres names:", mestresNames);

        const mesasAtualizadas = mesasData.map((mesa, index) => ({
          ...mesa,
          dungeonMasterName: mestresNames[index],
        }));

        console.log("Mesas atualizadas:", mesasAtualizadas);

        setMesas(mesasAtualizadas);
      } catch (error) {
        console.error("Erro ao buscar dados: ", error);
      }
    };

    fetchData();
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
                  dungeonMasterName: mesa.dungeonMasterName,
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
