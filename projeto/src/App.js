<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
=======
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import {motion} from 'framer-motion'

import Navbar from './components/Navbar.js';
>>>>>>> 2d6a62133c0bad085cbcd9a0234ff36725f84ecb
import Home from './Pages/Home';
import Entrar from './Pages/Entrar';
import Ajuda from './Pages/Ajuda';
import Comunidade from './Pages/Comunidade';
import Mesas from './Pages/Mesas';
import Jogador from './Pages/Jogador';
<<<<<<< HEAD
import Cadastro from './Pages/Cadastro';
import Esqueceu from './Pages/Esqueceu';
=======
import Footer from './components/Footer';
>>>>>>> 2d6a62133c0bad085cbcd9a0234ff36725f84ecb

function App() {
<<<<<<< HEAD
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <Navbar />
                        <Home />
                        <Footer />
                    </Route>
                    <Route path="/entrar" component={Entrar} />
                    <Route path="/ajuda" component={Ajuda} />
                    <Route path="/comunidade" component={Comunidade} />
                    <Route path="/mesas" component={Mesas} />
                    <Route path="/jogador" component={Jogador} />
                    <Route path="/cadastro" component={Cadastro} />
                    <Route path="/esqueceu" component={Esqueceu} />
                </Switch>
            </div>
        </Router>
    );
=======
  return (
    <Router>
        <Switch>

          <Route exact path="/">
            <Navbar />
            <Home />
            <Footer />
          </Route>

          <Route exact path="/entrar">
            <Entrar />
          </Route>

          <Route exact path="/ajuda">
            <Ajuda />
          </Route>

          <Route exact path="/comunidade">
            <Comunidade />
          </Route>

          <Route exact path="/mesas">
            <Mesas />
          </Route>

          <Route exact path="/jogador">
            <Jogador />
          </Route>

        </Switch>
    </Router>
  );
>>>>>>> 2d6a62133c0bad085cbcd9a0234ff36725f84ecb
}

export default App;
