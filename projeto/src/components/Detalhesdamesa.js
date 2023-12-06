import React, { useState, useEffect } from "react";
import "../Styles/Dmesas.css";
import backgroundImage from "../img/02.jpg";
import logomestre from "../img/logomestre.png";
import logodia from "../img/logodia.png";
import logovalor from "../img/logovalor.png";
import logovagas from "../img/logovagas2.png";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getUsuarioPorId, getUsuarioTemaPorId } from "../services/api/usuario";
import { getMesa } from "../services/api/mesa";
import JogadorCard from "./JogadorCard";

function Detalhesdamesa() {
  const { id } = useParams();
  const [mesa, setMesa] = useState(null);
  const [mestreName, setMestreName] = useState("Nenhum Tema Favorito");
  const [temaFavoritoMestre, setTemaFavoritoMestre] = useState([]);

  useEffect(() => {
    const fetchMestreName = async (mestreId) => {
      try {
        const mestre = await getUsuarioPorId(mestreId);
        return mestre.data[0].nome;
      } catch (error) {
        console.error("Erro ao buscar mestre: ", error);
        return "Mestre Desconhecido";
      }
    };

    const fetchTemaFavoritoMestre = async (mestreId) => {
      try {
        const temaFavorito = await getUsuarioTemaPorId(mestreId);
        return temaFavorito || [];
      } catch (error) {
        console.error("Erro ao buscar tema favorito do mestre: ", error);
        return [];
      }
    };

    const fetchData = async () => {
      try {
        const response = await getMesa(id);
        const mesaData = response.data;

        console.log("Mesa data:", mesaData);

        const mestreName = await fetchMestreName(mesaData[0].mestre);
        const temaFavorito = await fetchTemaFavoritoMestre(mesaData[0].mestre);

        console.log("Mestre name:", mestreName);
        console.log("Tema favorito do mestre:", temaFavorito);

        setMesa(mesaData);
        setMestreName(mestreName);
        setTemaFavoritoMestre(temaFavorito);
      } catch (error) {
        console.error("Erro na solicitação:", error);
      }
    };

    fetchData();
  }, [id]);

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    padding: "40px 20px",
    textAlign: "left",
    borderRadius: "8px",
    color: "white",
    boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
  };

  const periodos = { diaria: "Diária", semanal: "Semanal", mensal: "Mensal" };

  return (
    <div className="detalhes-da-mesa">
      {mesa ? (
        <div className="sessao-header" style={backgroundStyle}>
          <h1>{mesa[0].titulo}</h1>
          <p>{mesa[0].subtitulo}</p>
          <img src={logomestre} alt="Logo Mestre" className="logo-mestre" />
          <p>ID: {mesa[0].id}</p>
          <img src={logodia} alt="Logo Dia" className="logo-dia" />
          <p>Período: {periodos[mesa[0].periodo]}</p>
          <p>Dia: {mesa[0].dia}</p>
          <p>Horario: {mesa[0].horario}</p>
          <img src={logovagas} alt="Logo Vagas" className="logo-vagas" />
          <p>Vagas: {mesa[0].vagas}</p>
          <img src={logovalor} alt="Logo Valor" className="logo-valor" />
          <p>Preço: {mesa[0].preco > 0 ? "R$ " + mesa[0].preco : "Grátis"}</p>
          <Link to={`/chat/${id}`}>
            <button className="botao-participante">Entrar</button>
          </Link>

          <JogadorCard
            honrarMestre={true}
            nome={"Mestre: " + mestreName}
            id={mesa[0].mestre}
            email={mestreName} // Adicione o campo de e-mail, se disponível
            temas={temaFavoritoMestre}
          />
        </div>
      ) : (
        <p>Carregando detalhes da mesa...</p>
      )}
    </div>
  );
}

export default Detalhesdamesa;
