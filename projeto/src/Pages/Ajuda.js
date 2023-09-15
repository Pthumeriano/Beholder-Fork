import React from 'react';
import '../Styles/Ajuda.css';

function Ajuda() {
    return (
        <div className="ajuda-container">
            <div className="faq">
                <h2>Perguntas Frequentes</h2>
                {/* Adicione aqui a lista de perguntas frequentes */}
            </div>

            <div className="contato">
                <h2>Tem uma pergunta?</h2>
                <input type="text" placeholder="Digite sua pergunta..." />
                <input type="email" placeholder="Seu email..." />
                <button>Enviar</button>
            </div>
        </div>
    );
}

export default Ajuda;