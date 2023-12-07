import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSearch } from "../contexts/SearchContext";
import { fetchOtherUsers, fetchUserData } from "../services/utils/auth";
import { listarMensagens, enviarMensagem } from "../services/api/mensagem";

export default function ChatComponent() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [userData, setUserData] = useState({});
  const [otherUsersData, setOtherUsersData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mensagensResponse = await listarMensagens(id);

        if (mensagensResponse) {
          setMessages(mensagensResponse);
        }

        const userResponse = await fetchUserData();
        setUserData(userResponse);

        const otherUsersResponse = await fetchOtherUsers(id);
        setOtherUsersData(otherUsersResponse.data);
      } catch (error) {
        console.error("Erro ao obter dados:", error);
      }
    };

    fetchData();
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    try {
      await enviarMensagem(id, { mensagem: message });

      const mensagensResponse = await Promise.resolve(listarMensagens(id));

      if (mensagensResponse) {
        setMessages(mensagensResponse);
      }
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
    }

    setMessage("");
  };

  return (
    <div className="chat-container">
      <div className="chat-header">Chat Room</div>
      <div className="chat-messages">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={
              msg.autor === userData.id ? "player-message" : "other-message"
            }
          >
            <strong>
              {msg.autor === userData.id ? "Você" : "Outro Jogador"}:
            </strong>{" "}
            {typeof msg.texto === "string" && msg.texto.startsWith("{")
              ? JSON.parse(msg.texto).mensagem
              : msg.texto}
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
