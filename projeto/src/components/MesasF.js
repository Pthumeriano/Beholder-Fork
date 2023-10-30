import React, { useState } from 'react';
import '../Styles/Mesas.css';
import { FaChevronDown } from 'react-icons/fa';
import RPGTableCard from '../components/RPGTableCard';
import JogadoresF from '../components/JogadoresF'; 

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
          <div className="filters-container">
            {['tema1', 'tema2', 'horario', 'valores'].map(filter => (
              <div className="dropdown-container" key={filter}>
                <button className="dropdown-btn clickable" onClick={() => toggleDropdown(filter)}>
                  {selectedFilter[filter]} <FaChevronDown />
                </button>
                {dropdownVisible[filter] && (
                  <div className="dropdown-content" style={{ position: 'absolute', top: '100%', left: '0' }}>
                    {['Opção 1', 'Opção 2', 'Opção 3'].map(option => (
                      <div key={option} onClick={() => selectOption(filter, option)} className="clickable">
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <RPGTableCard tableData={tableDataMock} />
        </>
      )}

      {activeTab === "jogadores" && <JogadoresF />}
    </div>
  );
};

export default MesasF;
