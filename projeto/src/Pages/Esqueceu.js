import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Esqueceu.css';
import logo from '../img/logo.png';

class ForgotPasswordForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailOuNumero: ''
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="login-page">
        <div className="login-form">
          <div className="logo-container">
            <Link to="/"> 
            <img src={logo} alt="Logo" style={{ width: '208px', height: '208px' }} />
            </Link>
            
            <h2>Recuperar Senha</h2>
          </div>

          <form onSubmit={this.handleSubmit}>
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

            <button type="submit" className="submit-button">Solicitar Código</button>
          </form>

          <div className="resend-code">
            Não recebeu? <Link to="/solicitar-novamente">Solicitar Novamente</Link>
          </div>

          <div className="signup-link">
            Lembrou da senha? <Link to="/entrar">Entre aqui</Link>!
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPasswordForm;
