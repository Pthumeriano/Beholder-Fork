
import React, { useState } from 'react';
import '../Styles/Mesas.css';
import { FaChevronDown } from 'react-icons/fa';
import JogadoresCard from '../components/JogadoresCard';
import I1 from "../img/05.jpg";

const JogadoresF = () => {
  const [selectedFilter, setSelectedFilter] = useState({
    tema1: 'Tema 1',
    tema2: 'Tema 2',
    horario: 'Horário'
  });

  const [dropdownVisible, setDropdownVisible] = useState({
    tema1: false,
    tema2: false,
    horario: false
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
    tag: "Fantasia", 
    horario: "19h - 23h",
    dungeonMaster: "Nome do Jogador",
    vagas: 4, 
    description: "Descrição da mesa", 
    rating: 4 
  };

  return (
    <div>
      <div className="filters-container">
        {['tema1', 'tema2', 'horario'].map(filter => (
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
      <JogadoresCard tableData={tableDataMock} />
    </div>
  );
};

export default JogadoresF;
