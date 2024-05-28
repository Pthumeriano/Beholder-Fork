import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Entrar.css";
import logo from "../img/logo.png"; // Importe a imagem
import axios from "axios";
import Cookies from "js-cookie";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeSenha = (e) => {
    setSenha(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://next-beholder-server.onrender.com/api/usuarios/login",
        {
          email: email,
          senha: senha,
        },
        {
          withCredentials: true,
        }
      );

      console.log("Usuário autenticado com sucesso:", response.data);

      // Salva o cookie utilizando a biblioteca js-cookie
      Cookies.set("BeholderToken", response.data.token, {
        expires: 30,
        secure: true,
        sameSite: "none",
      });

      // Redireciona para "/feedpage"
      navigate("/feedpage");
    } catch (error) {
      console.log("Erro: ", error);
      alert("Email ou senha incorretos");
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
          <h2>Login</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="E-mail Número ou Usuário"
              value={email}
              onChange={handleChangeEmail}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              value={senha}
              onChange={handleChangeSenha}
              required
            />
          </div>

          <div className="forgot-password">
            <Link to="/esqueceu">Esqueceu sua senha?</Link>
          </div>

          <button type="submit" className="submit-button">
            Entrar
          </button>
        </form>

        <div className="signup-link">
          Não possui uma conta? <Link to="/cadastro">Cadastre-se aqui</Link>!
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
