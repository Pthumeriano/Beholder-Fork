import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'




function Feedpage() {
  return (
    <div className="main-layout">
        <Header />
        <div className="content-layout">
            <div className="Sidebar"><Sidebar /></div>
        </div>
    </div>
  )
}

export default Feedpage;