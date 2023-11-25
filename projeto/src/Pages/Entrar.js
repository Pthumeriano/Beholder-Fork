import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Entrar.css';
import logo from '../img/logo.png'; // Importe a imagem
import axios from 'axios';

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
  
  handleSubmit = async (e) => {
    e.preventDefault();

    const email = this.state.email;
    const senha = this.state.senha;

    try {
      const response = await axios.post('http://localhost:4200/api/usuarios/login', {
        email: email,
        senha: senha,
      }, {
        withCredentials: true,
      });

      console.log('Usuário autenticado com sucesso:', response.data);

      // Use history.push para redirecionar após o login
      this.props.history.push('/feedpage');
    } catch (error) {
      console.error('Erro ao autenticar o usuário:', error);
    }
  }
  

  render() {
    return (
      <div className="login-page">
        <div className="login-form">
          <div className="logo-container">
            <Link to= "/">
            <img src={logo} alt="Logo" style={{ width: '208px', height: '208px' }} /> 
            </Link>
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