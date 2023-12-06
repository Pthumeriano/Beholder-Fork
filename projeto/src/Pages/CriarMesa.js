import React from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import NewsFeed from '../components/NewsFeed';
import FormCriarMesa from '../components/formcriarmesa';
function CriarMesa() {
    return (
      <div className="main-layout">
              <Header />
              <div className="content-layout">
                  <div className="Sidebar"><Sidebar /></div>
                  <div className="divider"></div>
                  <div className="FormCriarMesa"><FormCriarMesa/></div> 
                  <div className="divider"></div>
                  <div className="NewsFeed"><NewsFeed/></div>
              </div>
          </div>
    )
  }
  
  export default CriarMesa