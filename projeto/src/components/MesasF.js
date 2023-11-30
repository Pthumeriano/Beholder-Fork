import React, { useState } from 'react';
import '../Styles/Mesas.css';
import { FaChevronDown } from 'react-icons/fa';
import RPGTableCard from '../components/RPGTableCard';
import JogadoresF from '../components/JogadoresF'; 
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import I1 from "../img/05.jpg";

const MesasF = () => {
  const [activeTab, setActiveTab] = useState("mesas");

  const [selectedFilter, setSelectedFilter] = useState({
    tema1: 'Tema 1',
    tema2: 'Tema 2',
    horario: 'Horário',
    valores: 'Valores'
  });
  const [dropdownVisible, setDropdownVisible] = useState({
    tema1: false,
    tema2: false,
    horario: false,
    valores: false
  });

  const [mesas, setMesas] = useState([]); // Estado para armazenar os dados das mesas

  useEffect(() => {
    const fetchMesas = async () => {
      try {
        const response = await axios.get('http://localhost:4200/api/mesas');
        setMesas(response.data); // Atualiza o estado com as mesas recebidas
      } catch (error) {
        console.error("Erro ao buscar dados: ", error);
      }
    };

    fetchMesas();
  }, []);

  const toggleDropdown = (filter) => {
    setDropdownVisible(prevState => ({ ...prevState, [filter]: !prevState[filter] }));
  };

  const selectOption = (filter, option) => {
    setSelectedFilter(prevState => ({ ...prevState, [filter]: option }));
    toggleDropdown(filter);
  };

  const tableDataMock = {
    id: "123",
    imagePath: I1,
    title: "Título da Mesa",
    players: "4",
    dungeonMaster: "Nome do Mestre",
    tema: "Fantasia",
    horario: "19h - 23h",
    valor: "R$ 50"
  };

  return (
    <div className="posts-container">
      <div className="feed-header">
        <div
          className={`tab ${activeTab === "mesas" ? "active clickable" : "clickable"}`}
          onClick={() => setActiveTab("mesas")}
        >
          Mesas
        </div>
        <div
          className={`tab ${activeTab === "jogadores" ? "active clickable" : "clickable"}`}
          onClick={() => setActiveTab("jogadores")}
        >
          Jogadores
        </div>
      </div>

      {activeTab === "mesas" && (
        <>
          {/* ...filtros */}

          {mesas.map((mesa) => (
            <RPGTableCard
              key={mesa.id}
              tableData={{
                id: mesa.id,
                title: mesa.titulo,
                subtitle: mesa.subtitulo,
                system: mesa.sistema,
                description: mesa.descricao,
                createdOn: mesa.criado_em,
                date: mesa.data,
                time: mesa.horario,
                period: mesa.periodo,
                price: mesa.preco,
                vacancies: mesa.vagas,
                dungeonMasterId: mesa.mestre,
                chatId: mesa.chat
              }}
            />
          ))}
        </>
      )}

      {activeTab === "jogadores" && <JogadoresF />}

      <Link to="/criarmesa" className="button create-table-button">Criar Mesa</Link>
    </div>

    
  );
};

export default MesasF;
