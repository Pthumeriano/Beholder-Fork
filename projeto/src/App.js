import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Entrar from './Pages/Entrar';
import Ajuda from './Pages/Ajuda';
import Comunidade from './Pages/Comunidade';
import Mesas from './Pages/Mesas';
import Jogador from './Pages/Jogador';
import Cadastro from './Pages/Cadastro';
import Esqueceu from './Pages/Esqueceu';
import Deletar from './Pages/Deletar';
import Perfil from './Pages/Perfil';
import Feedpage from './Pages/Feedpage';
import Noti from './Pages/Notificacao';



export function App() {

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
                    <Route path="/deletar" component={Deletar} />
                    <Route path="/perfil" component={Perfil} />
                    <Route path="/feedpage" component={Feedpage} />
                    <Route path="/noti" component={Noti} />
                    
            
                </Switch>
            </div>
        </Router>
    );
}
export default App;
