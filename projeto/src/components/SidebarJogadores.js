import "../Styles/SidebarJogadores.css";
import JogadoresDaMesaComponent from "../components/JogadoresDaMesaComponent";

export default function SidebarJogadores() {
  return (
    <div className="sidebar-jogadores">
      <h2>Jogadores</h2>
      <JogadoresDaMesaComponent />
    </div>
  );
}
