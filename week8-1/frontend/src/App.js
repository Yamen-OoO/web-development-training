import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './componets/Header';
import Contact from './componets/Contact';
import { StoreProvider } from './context/StoreContext';
import ProductList from './componets/ProductList';
import './store.css'
import UserList from './componets/UserList';
import Settings from './componets/Settings';
// 

function App() {


  


  return (
    <>
    {/* section one */}
    {/* <ThemeProvider>
      <Header />
      <Contact />
    </ThemeProvider> */}


      {/* section tow */}
      {/* <StoreProvider>
        <div className='app-container'>
          <Header />
          <ProductList />
        </div>
      </StoreProvider> */}

      {/* section three*/}
      <UserList />
      {/* <Settings /> */}

    </>
  );
}

export default App;
