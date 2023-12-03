import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function Chat() {
  return (
    <div className="main-layout">
      <Header />
      <div className="content-layout">
        <div className="Sidebar">
          <Sidebar />
        </div>
        <div className="divider"></div>
      </div>
    </div>
  );
}

export default Chat;
