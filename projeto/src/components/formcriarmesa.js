import React, { useState } from 'react';
import '../Styles/formcriarmesa.css';

function FormCriarMesa() {
  const [mesaInfo, setMesaInfo] = useState({
    nomeMesa: '',
    descricaoMesa: '',
    dia: '', // Inicialmente, nenhum valor selecionado
    horario: '',
    vagas: '',
    custoSessao: '',
    imagemMesa: null, // Inicialmente, nenhuma imagem selecionada
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMesaInfo({
      ...mesaInfo,
      [name]: value,
    });
  };

  const handleImageUpload = (event) => {
    const imageFile = event.target.files[0];
    setMesaInfo({
      ...mesaInfo,
      imagemMesa: imageFile,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode processar os dados do formulário, incluindo a imagem, como enviá-los para o servidor ou executar alguma ação.
    console.log('Informações da Mesa de RPG:', mesaInfo);
  };

  return (
    <div>
      <h2>Criar Mesa de RPG</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome da Mesa:</label>
          <input
            type="text"
            name="nomeMesa"
            value={mesaInfo.nomeMesa}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Descrição da Mesa:</label>
          <textarea
            name="descricaoMesa"
            value={mesaInfo.descricaoMesa}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Tema:</label>
          <select
            name="tema"
            value={mesaInfo.tema}
            onChange={handleInputChange}
          >
            <option value="">Selecione o Tema</option>
            <option value="fantasia">Fantasia</option>
            <option value="ficcao">Ficção Científica</option>
            <option value="historico">Histórico</option>
            {/* Adicione mais opções de tema conforme necessário */}
          </select>
        </div>
        <div>
          <label>Dia:</label>
          <select
            name="dia"
            value={mesaInfo.dia}
            onChange={handleInputChange}
          >
            <option value="">Selecione o Dia</option>
            <option value="segunda">Segunda-feira</option>
            <option value="terca">Terça-feira</option>
            <option value="quarta">Quarta-feira</option>
            {/* Adicione mais opções de dia conforme necessário */}
          </select>
        </div>
        <div>
          <label>Horário:</label>
          <input
            type="text"
            name="horario"
            value={mesaInfo.horario}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Vagas:</label>
          <input
            type="text"
            name="vagas"
            value={mesaInfo.vagas}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Custo por Sessão:</label>
          <input
            type="text"
            name="custoSessao"
            value={mesaInfo.custoSessao}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Imagem da Mesa:</label>
          <input
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


