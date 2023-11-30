import React from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import NewsFeed from '../components/NewsFeed';
import Detalhesdamesa from '../components/Detalhesdamesa';

function Dmesas() {
  return (
    <div className="main-layout">
            <Header />
            <div className="content-layout">
                <div className="Sidebar"><Sidebar /></div>
                <div className="divider"></div>
                <div className='MesasF'><Detalhesdamesa/></div>
                <div className="divider"></div>
                <div className="NewsFeed"><NewsFeed/></div>
            </div>
        </div>
  )
}

export default Dmesas