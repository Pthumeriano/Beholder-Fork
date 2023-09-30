import React from 'react';
import { FaHome, FaSearch, FaBell, FaEnvelope, FaUser } from 'react-icons/fa';
import '../Styles/Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-item"><FaHome /> Página Inicial</div>
            <div className="sidebar-item"><FaSearch /> Aventuras</div>
            <div className="sidebar-item"><FaBell /> Notificações</div>
            <div className="sidebar-item"><FaEnvelope /> Mensagens</div>
            <div className="sidebar-item"><FaUser /> Perfil</div>
            <button className="sidebar-button">Postar</button>
        </div>
    )
}

export default Sidebar;
