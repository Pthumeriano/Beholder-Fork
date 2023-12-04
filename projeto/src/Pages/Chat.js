import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SidebarJogadores from "../components/SidebarJogadores";
import "../Styles/Chat.css";
import ChatComponent from "../components/ChatComponent";

function Chat() {
  return (
    <div className="main-layout">
      <Header />
      <div className="content-layout">
        <div className="Sidebar">
          <Sidebar />
        </div>
        <div className="divider"></div>
        <ChatComponent />
        <div className="divider"></div>
        <SidebarJogadores />
      </div>
    </div>
  );
}

export default Chat;
