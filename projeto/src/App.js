import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar.js';
import Home from './Pages/Home';
import Entrar from './Pages/Entrar';
import Ajuda from './Pages/Ajuda';
import Comunidade from './Pages/Comunidade';
import Mesas from './Pages/Mesas';
import Jogador from './Pages/Jogador';
import Footer from './components/Footer';
import Cadastro from './Pages/Cadastro';
import Esqueceu from './Pages/Esqueceu';


function App() {
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

          <Route exact path="/cadastro">
            <Cadastro />
          </Route>

          <Route exact path="/esqueceu">
            <Esqueceu />
          </Route>
          

        </Switch>
    </Router>
  );
}

export default App;
