import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Entrar.css';
import logo from '../img/logo.png'; // Importe a imagem

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: ''
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para autenticar o usuário
  }

  render() {
    return (
      <div className="login-page">
        <div className="login-form">
          <div className="logo-container">
            <img src={logo} alt="Logo" style={{ width: '208px', height: '208px' }} /> {/* Defina o tamanho da imagem aqui */}
            <h2>Login</h2>
          </div>

          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="E-mail Número ou Usuário"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                name="senha"
                placeholder="Senha"
                value={this.state.senha}
                onChange={this.handleChange}
                required
              />
            </div>

            <div className="forgot-password">
              <Link to="/esqueceu">Esqueceu sua senha?</Link>
            </div>

            <button type="submit" className="submit-button">Entrar</button>
          </form>

          <div className="signup-link">
            Não possui uma conta? <Link to="/cadastro">Cadastre-se aqui</Link>!
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
