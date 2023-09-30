import React from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import NewsFeed from '../components/NewsFeed';
import UserProfile from '../components/UserProfile'; 
import '../Styles/Perfil.css';

function Perfil() {
  return (
    <div className="main-layout">
        <Header />
        <div className="content-layout">
            <Sidebar />
            {/*<UserProfile />*/}
            {/*<NewsFeed/>*/}
        </div>
    </div>
  )
}

export default Perfil;
