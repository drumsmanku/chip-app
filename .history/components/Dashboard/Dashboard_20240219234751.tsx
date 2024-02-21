import React from 'react'
import sytles from './Dashboard.module.css'
import Sidebar from './Sidebar/Sidebar'


function Dashboard() {
  return (
    <div className={sytles.container}>
      <Sidebar/>
    </div>
  )
}

export default Dashboard