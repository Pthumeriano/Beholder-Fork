import React, { useState } from "react";
import "../Styles/Chat.css";

export default function ChatComponent() {
  const [message, setMessage] = useState(""); // Estado para a mensagem que o jogador está digitando
  const [messages, setMessages] = useState([]); // Estado para armazenar as mensagens existentes na mesa

  const handleSendMessage = (e) => {
    e.preventDefault();

    // Adicionar a nova mensagem ao estado de mensagens
    setMessages([...messages, { text: message, sender: "player" }]);

    // Limpar o campo de mensagem após o envio
    setMessage("");
  };

  return (
    <div className="chat-container">
      <div className="chat-header">Chat Room</div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={
              msg.sender === "player" ? "player-message" : "other-message"
            }
          >
            <strong>
              {msg.sender === "player" ? "Você" : "Outro Jogador"}:
            </strong>{" "}
            {msg.text}
          </div>
        ))}
      </div>
      <form className="chat-input" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
