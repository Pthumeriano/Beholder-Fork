import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Entrar from "./Pages/Entrar";
import Ajuda from "./Pages/Ajuda";
import Comunidade from "./Pages/Comunidade";
import Mesas from "./Pages/Mesas";
import Jogador from "./Pages/Jogador";
import Cadastro from "./Pages/Cadastro";
import Esqueceu from "./Pages/Esqueceu";
import Deletar from "./Pages/Deletar";
import Perfil from "./Pages/Perfil";
import Feedpage from "./Pages/Feedpage";
import Noti from "./Pages/Notificacao";
import CriarMesa from "./Pages/CriarMesa";
import Dmesas from "./Pages/Dmesas";
import Chat from "./Pages/Chat";

import { SearchContextProvider } from "./contexts/SearchContext";

export function App() {
  return (
    <SearchContextProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Home />
                  <Footer />
                </>
              }
            />
            <Route path="/entrar" element={<Entrar />} />
            <Route path="/ajuda" element={<Ajuda />} />
            <Route path="/comunidade" element={<Comunidade />} />
            <Route path="/mesas" element={<Mesas />} />
            <Route path="/jogador" element={<Jogador />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/esqueceu" element={<Esqueceu />} />
            <Route path="/deletar" element={<Deletar />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/feedpage" element={<Feedpage />} />
            <Route path="/noti" element={<Noti />} />
            <Route path="/criarmesa" element={<CriarMesa />} />
            <Route path="/dmesas/:id" element={<Dmesas />} />
            <Route path="/chat/:id" element={<Chat />} />
          </Routes>
        </div>
      </Router>
    </SearchContextProvider>
  );
}

export default App;
