import React from 'react';
import Firstbody from './components/Firstbody';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nftbody from './components/Nftbody';
import Buybody from './components/Buybody';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Firstbody />} />
        <Route path="/nftbody" element={<Nftbody />} />
        <Route path='/buybody' element={<Buybody />} />
      </Routes>
      
    </Router>
  );
}

export default App;
