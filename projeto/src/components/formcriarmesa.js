import React, { useState } from 'react';
import '../Styles/formcriarmesa.css';

function FormCriarMesa() {
  const [mesaInfo, setMesaInfo] = useState({
    nomeMesa: '',
    descricaoMesa: '',
    tema: '',
    dia: '',
    horario: '',
    vagas: '',
    custoSessao: '',
    imagemMesa: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMesaInfo(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageUpload = (event) => {
    const imageFile = event.target.files[0];
    setMesaInfo(prevState => ({
      ...prevState,
      imagemMesa: imageFile,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Informações da Mesa de RPG:', mesaInfo);
  };

  return (
    <div className="form-criar-mesa">
      <h2>Criar Mesa de RPG</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nomeMesa">Nome da Mesa:</label>
          <input
            id="nomeMesa"
            type="text"
            name="nomeMesa"
            value={mesaInfo.nomeMesa}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="descricaoMesa">Descrição da Mesa:</label>
          <textarea
            id="descricaoMesa"
            name="descricaoMesa"
            value={mesaInfo.descricaoMesa}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="tema">Tema:</label>
          <select
            id="tema"
            name="tema"
            value={mesaInfo.tema}
            onChange={handleInputChange}
          >
            <option value="">Selecione o Tema</option>
            <option value="fantasia">Fantasia</option>
            <option value="ficcao">Ficção Científica</option>
            <option value="historico">Histórico</option>
          </select>
        </div>
        <div>
          <label htmlFor="dia">Dia:</label>
          <select
            id="dia"
            name="dia"
            value={mesaInfo.dia}
            onChange={handleInputChange}
          >
            <option value="">Selecione o Dia</option>
            <option value="segunda">Segunda-feira</option>
            <option value="terca">Terça-feira</option>
            <option value="quarta">Quarta-feira</option>
          </select>
        </div>
        <div>
          <label htmlFor="horario">Horário:</label>
          <input
            id="horario"
            type="text"
            name="horario"
            value={mesaInfo.horario}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="vagas">Vagas:</label>
          <input
            id="vagas"
            type="text"
            name="vagas"
            value={mesaInfo.vagas}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="custoSessao">Custo por Sessão:</label>
          <input
            id="custoSessao"
            type="text"
            name="custoSessao"
            value={mesaInfo.custoSessao}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="imagemMesa">Imagem da Mesa:</label>
          <input
            id="imagemMesa"
            type="file"
            accept="image/*"
            name="imagemMesa"
            onChange={handleImageUpload}
          />
        </div>
        <button type="submit">Criar Mesa de RPG</button>
      </form>
    </div>
  );
}

export default FormCriarMesa;
