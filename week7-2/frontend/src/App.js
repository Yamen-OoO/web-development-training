import React, { useEffect } from 'react';
import  {BroswerRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './componets/Home';
import About from './componets/About';
import Contact from './componets/Contact';
import UserProfile from './componets/UserProfile';
import Dashboard from './componets/Dashboard';
import LoginPage from './componets/LoginPage';
import NotFound from './componets/NotFound';

// router

function App() {


  


  return (
    <>
      <nav>
        {/* Basic */}
        <Link to='/'>HOME</Link>
        <Link to='/about'>ABOUT</Link>
        <Link to='/contact'>CONTACT</Link>

        {/* Dynamic */}
        <Link to='/user/1'>User1</Link>
        <Link to='/user/2'>User2</Link>
        <Link to='/user/3'>User3</Link>
      </nav>



      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/user/:userid' element={<UserProfile />} />

        {/* nested routring */}
        <Route path='/dashboard/*' element={<Dashboard />} />

        {/* useing navigate function */}
        <Route path='/login' element={<LoginPage />} />


        {/* catch all routes */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
