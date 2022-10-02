import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Mockup4 from './Components/Mockup-4/Mockup4';
import Mockup11 from './Components/Mockup-11/Mockup11';
import Mockup12 from './Components/Mockup-12/Mockup12';
import './index.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path='/mockup-4' element={<Mockup4/>} />
        <Route path='/mockup-11' element={<Mockup11/>} />
        <Route path='/mockup-12' element={<Mockup12/>} />
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);
