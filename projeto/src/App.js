import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './components/Pages/Home';
import Entrar from './components/Pages/Entrar';
import Ajuda from './components/Pages/Ajuda';
import Comunidade from './components/Pages/Comunidade';
import Mesas from './components/Pages/Mesas';
import Jogador from './components/Pages/Jogador';
import Container from './components/Layout/Container';

function App() {
  return (
    <Router>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/entrar'>Entrar</Link>
        <Link to='/ajuda'>Ajuda</Link>
        <Link to='/comunidade'>Comunidade</Link>
        <Link to='/mesas'>Mesas</Link>
        <Link to='/jogador'>Jogador</Link>
      </div>
      <Container customClass="min-height">
        <Switch>
          <Route exact path="/">
            <Home />
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
      </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;
