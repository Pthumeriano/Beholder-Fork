import React, { useState } from 'react';
import '../Styles/Mesas.css';

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
        <div className="filters-container">
          {['tema1', 'tema2', 'horario', 'valores'].map(filter => (
            <div className="dropdown-container" key={filter}>
              <button className="dropdown-btn clickable" onClick={() => toggleDropdown(filter)}>
                {selectedFilter[filter]} ▼
              </button>
              {dropdownVisible[filter] && (
                <div className="dropdown-content">
                  {/* Aqui você pode ajustar as opções de cada filtro conforme necessário */}
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
      )}
      {/* Renderize a lista de mesas ou qualquer conteúdo relacionado a mesas aqui */}
    </div>
  );
};

export default MesasF;
