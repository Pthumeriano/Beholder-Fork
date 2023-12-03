import React from "react";
import Logo from "./Logonavbar.png";
import { Link } from "react-router-dom";
import "../Styles/Header.css";
import { useSearch } from "../contexts/SearchContext";

function Navbar() {
  const { search, setSearch } = useSearch();

  return (
    <div className="header">
      <div className="leftSide">
        <img src={Logo} alt="Logo" />
      </div>

      <div className="Center">
        <input
          value={search}
          type="text"
          placeholder="Pesquisar"
          className="search-input"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>

      <div className="rightSide">
        <Link to="/jogador"> Jogador </Link>
        <Link to="/mesas"> Mesas </Link>
        <Link to="/comunidade"> Comunidade </Link>
        <Link to="/ajuda"> Ajuda </Link>
      </div>
    </div>
  );
}

export default Navbar;
