import React from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import NewsFeed from '../components/NewsFeed';
import MencoesP from '../components/MencoesP'

function Mencoes() {
    return (
        <div className="main-layout">
            <Header />
            <div className="content-layout">
                <div className="Sidebar"><Sidebar /></div>
                <div className="divider"></div>
                <div className='MencoesP'><MencoesP/></div>
                <div className="divider"></div>
                <div className="NewsFeed"><NewsFeed/></div>
            </div>
        </div>
      );
}

export default Mencoes;
