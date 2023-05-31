import React, { useEffect } from 'react';
import { Navbar } from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import PageOutlet from './Components/Outlet/Outlet';
import NewsList from './Components/NewsList';

function App() {

  useEffect(() => {
    if (window.location.pathname === '/') {
      window.location.replace('/Home');
    }
  }, []); 
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<PageOutlet />}>
          <Route path='/home' element={<Home />} />
          <Route path='/news' element={<NewsList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;