import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

function Dashboard() {
    function Overview(){
        return <h1>Overview content ....</h1>
    }
    function Settings(){
        return <h1>Settings content ....</h1>
    }




  return (
    <div>
        <Link to="/dashboard/overview">Overview</Link>
        <Link to="/dashboard/settings">Settings</Link>
        <h1>Dashboard home page</h1>

        <Routes>
            <Route path='overview' element={<Overview />} />
            <Route path='settings' element={<Settings />} />
        </Routes>
      
    </div>
  )
}

export default Dashboard
