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
import { createClient } from '@supabase/supabase-js'

// cliente supabase
const supabase = createClient('https://gnysjpeeumstgwzllknd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdueXNqcGVldW1zdGd3emxsa25kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQxNzU1OTQsImV4cCI6MjAwOTc1MTU5NH0.xGiRua3bBZT0Y_X4Rqc_vJQXMIL90ZJ_bZqPWfeN7F8')

function App() {

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
}

export default App;
