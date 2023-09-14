import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Cadastro.css';
import logo from '../img/logo.png';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: '',
      dataNascimento: '',
      emailOuNumero: '',
      senha: '',
      isDateInputFocused: false
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleDateInputFocus = () => {
    this.setState({ isDateInputFocused: true });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para registrar o usuário
  }

  render() {
    const { isDateInputFocused, dataNascimento } = this.state;

    return (
      <div className="login-page">
        <div className="login-form">
          <div className="logo-container">
            <img src={logo} alt="Logo" style={{ width: '208px', height: '208px' }} />
            <h2>Cadastro</h2>
          </div>

          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="usuario"
                placeholder="Usuário"
                value={this.state.usuario}
                onChange={this.handleChange}
                required
              />
            </div>

            <div className="form-group">
              {isDateInputFocused || dataNascimento ? (
                <input
                  type="date"
                  name="dataNascimento"
                  value={dataNascimento}
                  onChange={this.handleChange}
                  required
                />
              ) : (
                <input
                  type="text"
                  placeholder="Data de Nascimento"
                  onFocus={this.handleDateInputFocus}
                />
              )}
            </div>

            <div className="form-group">
              <input
                type="text"
                name="emailOuNumero"
                placeholder="E-mail ou Número"
                value={this.state.emailOuNumero}
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

            <button type="submit" className="submit-button">Inscreva-se</button>
          </form>

          <div className="signup-link">
            Já possui uma conta? <Link to="/entrar">Entre aqui</Link>!
          </div>
        </div>
      </div>
    );
  }
}

export default SignupForm;
