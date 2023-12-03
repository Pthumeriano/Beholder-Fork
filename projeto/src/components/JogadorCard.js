import "../Styles/Dmesas.css";

const JogadorCard = ({ nome, email, temas = [], premiar }) => {
  return (
    <div className="sessao-perfil">
      <div className="info-perfil">
        <h2>{nome}</h2>
        <p className="username">{email}</p>
        <div className="tags">
          {temas.map((tema) => {
            return <span className="tag">{tema}</span>;
          })}
        </div>
        {premiar && <button className="botao-avaliar">Premiar</button>}
      </div>
    </div>
  );
};

export default JogadorCard;
