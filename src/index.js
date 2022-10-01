import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Mockup1 from './Components/Mockup-1/Mockup1';
import Mockup2 from './Components/Mockup-2/Mockup2';
import Mockup4 from './Components/Mockup-4/Mockup4';
import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <BrowserRouter>
      <Routes>

        <Route path='/mockup-1' element={<Mockup1/>} />
        <Route path='/mockup-2' element={<Mockup2/>}/>
        

        <Route path='/mockup-4' element={<Mockup4/>} />

      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);
