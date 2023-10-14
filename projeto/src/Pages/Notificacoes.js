import React from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import NewsFeed from '../components/NewsFeed';
import Noti from '../components/Noti'

function Mencoes() {
    return (
        <div className="main-layout">
            <Header />
            <div className="content-layout">
                <div className="Sidebar"><Sidebar /></div>
                <div className="divider"></div>
                <div className='Noti'><Noti/></div>
                <div className="divider"></div>
                <div className="NewsFeed"><NewsFeed/></div>
            </div>
        </div>
      );
}

export default Mencoes;
