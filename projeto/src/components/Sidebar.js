import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaBell, FaEnvelope, FaUser } from 'react-icons/fa';
import '../Styles/Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <Link to="/feedpage" className="sidebar-item"><FaHome /> Página Inicial</Link>
            <div className="sidebar-item"><FaSearch /> Aventuras</div>
            <Link to="/noti" className="sidebar-item"><FaBell /> Notificações</Link>
            <div className="sidebar-item"><FaEnvelope /> Mensagens</div>
            <Link to="/perfil" className="sidebar-item"><FaUser /> Perfil</Link>
            <button className="sidebar-button">Postar</button>
        </div>
    )
}

export default Sidebar;
