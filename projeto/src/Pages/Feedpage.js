import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import NewsFeed from '../components/NewsFeed';

import '../Styles/Feedpage.css';

function Feedpage() {
  return (
    <div className="main-layout">
        <Header />
        <div className="content-layout">
            <div className="Sidebar"><Sidebar /></div>
            <div className="divider"></div>
            <div className='Feed'><Feed/></div>
            <div className="divider"></div>
            <div className="NewsFeed"><NewsFeed/></div>
        </div>
    </div>
  );
}

export default Feedpage;
