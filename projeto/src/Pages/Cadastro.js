import { useRef } from "react";
import { Link, useHistory } from "react-router-dom";

import "../Styles/Cadastro.css";
import logo from "../img/logo.png";
import { autenticar, criarNovoUsuario } from "../services/api/usuario";

const SignupForm = () => {
  
  const usuarioInputRef = useRef(null);
  const dataNascimentoInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const senhaInputRef = useRef(null);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const nome = usuarioInputRef.current.value;
      const datanascimento = dataNascimentoInputRef.current.value;
      const email = emailInputRef.current.value;
      const senha = senhaInputRef.current.value;
  
      await criarNovoUsuario({ nome, datanascimento, email, senha });
  
      await autenticar({email, senha});
  
      history.push('/feedpage')

    } catch (error) {
      if('error' in error.response.data){
        alert(error.response.data.error);    
      }else{
        alert(error.response.data.errors[0].msg);
      }
    }

  };

  return (
    <div className="login-page">
      <div className="login-form">
        <div className="logo-container">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "208px", height: "208px" }}
            />
          </Link>
          <h2>Cadastro</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="usuario"
              placeholder="Usuário"
              ref={usuarioInputRef}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="date"
              name="dataNascimento"
              ref={dataNascimentoInputRef}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              ref={emailInputRef}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              ref={senhaInputRef}
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Inscreva-se
          </button>
        </form>

        <div className="signup-link">
          Já possui uma conta? <Link to="/entrar">Entre aqui</Link>!
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
