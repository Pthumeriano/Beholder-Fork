import { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "../Styles/formcriarmesa.css";
import { listarTemas } from "../services/api/tema";
import { fetchUserData } from "../services/utils/auth";
import { criarMesa } from "../services/api/mesa";

function FormCriarMesa() {
  const [temas, setTemas] = useState([]);
  const [periodo, setPeriodo] = useState(false);
  const [dias, setDias] = useState([]);

  const tituloInputRef = useRef(null);
  const subtituloInputRef = useRef(null);
  const sistemaInputRef = useRef(null);
  const descricaoInputRef = useRef(null);
  const temaInputRef = useRef(null);
  const periodoInputRef = useRef(null);
  const diaSemanaInputRef = useRef(null);
  const diaNumeroInputRef = useRef(null);
  const horarioInputRef = useRef(null);
  const vagasInputRef = useRef(null);
  const precoInputRef = useRef(null);

  const history = useHistory();

  useEffect(() => {
    const getNumberOfDays = () => {
      const currentDate = new Date();
      return new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
      ).getDate();
    };
    const diasPossiveis = [];
    for (let i = 1; i <= getNumberOfDays(); i++) {
      diasPossiveis.push(i);
    }
    setDias(diasPossiveis);
    (async () => {
      const listaDeTemas = await listarTemas();
      setTemas(listaDeTemas.data);
    })();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const mestre = (await fetchUserData())[0].id;
      const titulo = tituloInputRef.current.value;
      const subtitulo = subtituloInputRef.current.value;
      const sistema = sistemaInputRef.current.value;
      const descricao = descricaoInputRef.current.value;
      const dia =
        periodo === "diaria"
          ? "Diária"
          : periodo === "mensal"
          ? diaNumeroInputRef.current.value
          : diaSemanaInputRef.current.value;
      const horario = horarioInputRef.current.value;
      const preco = precoInputRef.current.value;
      const vagas = vagasInputRef.current.value;

      const mesa = await criarMesa({
        mestre,
        titulo,
        subtitulo,
        sistema,
        descricao,
        dia,
        horario,
        periodo,
        preco,
        vagas: Number(vagas) + 1,
      });

      console.log(mesa);
      history.push(`/dmesas/${mesa.data.mesa.data[0].id}`);
    } catch (error) {
      if ("error" in error.response.data) {
        alert(error.response.data.error);
      } else {
        alert(error.response.data.errors[0].msg);
      }
    }
  };

  return (
    <div className="form-criar-mesa">
      <h2>Criar Mesa</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="titulo">Título:</label>
          <input id="titulo" type="text" name="titulo" ref={tituloInputRef} />
        </div>
        <div>
          <label htmlFor="subtitulo">Subtítulo:</label>
          <input
            id="subtitulo"
            name="subtitulo"
            type="text"
            ref={subtituloInputRef}
          />
        </div>
        <div>
          <label htmlFor="sistema">Sistema:</label>
          <input
            id="sistema"
            name="sistema"
            type="text"
            ref={sistemaInputRef}
          />
        </div>
        <div>
          <label htmlFor="descricao">Descrição:</label>
          <textarea id="descricao" name="descricao" ref={descricaoInputRef} />
        </div>
        <div>
          <label htmlFor="tema">Tema:</label>
          <select id="tema" name="tema" ref={temaInputRef}>
            <option value="">Selecione o Tema</option>
            {temas.map((tema) => {
              return (
                <option key={tema.id} value={tema.id}>
                  {tema.nome}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label htmlFor="periodo">Período:</label>
          <select
            ref={periodoInputRef}
            id="periodo"
            name="periodo"
            onChange={(e) => {
              setPeriodo(e.target.value);
            }}
          >
            <option value="">Selecione o período</option>
            <option value="diaria">Diária</option>
            <option value="semanal">Semanal</option>
            <option value="mensal">Mensal</option>
          </select>
        </div>
        {periodo === "semanal" && (
          <div>
            <label htmlFor="dia">Dia:</label>
            <select id="dia" name="dia" ref={diaSemanaInputRef}>
              <option value="">Selecione o dia</option>
              <option value="Domingo">Domingo</option>
              <option value="Segunda-Feira">Segunda-Feira</option>
              <option value="Terça-Feira">Terça-Feira</option>
              <option value="Quarta-Feira">Quarta-Feira</option>
              <option value="Quint-Feira">Quint-Feira</option>
              <option value="Sexta-Feira">Sexta-Feira</option>
              <option value="Sábado">Sábado</option>
            </select>
          </div>
        )}
        {periodo === "mensal" && (
          <div>
            <label htmlFor="dia">Dia:</label>
            <select id="dia" name="dia" ref={diaNumeroInputRef}>
              <option value="">Selecione o dia</option>
              {dias.map((dia) => {
                return (
                  <option key={dia} value={dia}>
                    {dia}
                  </option>
                );
              })}
            </select>
          </div>
        )}
        <div>
          <label htmlFor="horario">Horário:</label>
          <select id="horario" name="horario" ref={horarioInputRef}>
            <option value="">Selecione o horário</option>
            <option value="00:00">00:00</option>
            <option value="01:00">01:00</option>
            <option value="02:00">02:00</option>
            <option value="03:00">03:00</option>
            <option value="04:00">04:00</option>
            <option value="05:00">05:00</option>
            <option value="06:00">06:00</option>
            <option value="07:00">07:00</option>
            <option value="08:00">08:00</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
            <option value="23:00">23:00</option>
          </select>
        </div>

        <div>
          <label htmlFor="vagas">Vagas:</label>
          <select id="vagas" name="vagas" ref={vagasInputRef}>
            <option value="">Selecione a quatidade</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
        </div>
        <div>
          <label htmlFor="vagas">Preço:</label>
          <select id="preco" name="preco" ref={precoInputRef}>
            <option value="">Preço da sessão</option>
            <option value="0">Gŕatis!</option>
            <option value="1">R$ 1</option>
            <option value="5">R$ 5</option>
            <option value="10'">R$ 10</option>
          </select>
        </div>
        <button type="submit">Criar Mesa de RPG</button>
      </form>
    </div>
  );
}

export default FormCriarMesa;
