import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Mockup1 from './Components/Mockup-1/Mockup1';
import Mockup2 from './Components/Mockup-2/Mockup2';
import Mockup3 from './Components/Mockup-3/Mockup3';
import Mockup4 from './Components/Mockup-4/Mockup4';
import Mockup5 from './Components/Mockup-5/Mockup5';
import Mockup8 from './Components/Mockup-8/Mockup8';
import Mockup11 from './Components/Mockup-11/Mockup11';
import Mockup12 from './Components/Mockup-12/Mockup12';
import Mockup21 from './Components/Mockup-21/Mockup21';
import Mockup10 from './Components/Mockup-10/Mockup10';
import Mockup19 from './Components/Mockup-19/Mockup19';
import Mockup20 from './Components/Mockup-20/Mockup20';




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
        <Route path='/mockup-3' element={<Mockup3/>} />

        <Route path='/mockup-4' element={<Mockup4/>} />
        <Route path='/mockup-8' element={<Mockup8/>} />

        <Route path='/mockup-10' element={<Mockup10/>}/>
        <Route path='/mockup-11' element={<Mockup11/>} />
        <Route path='/mockup-12' element={<Mockup12/>} />
        <Route path='/mockup-19' element={<Mockup19/>} />
        <Route path='/mockup-20' element={<Mockup20/>} />
        <Route path='/mockup-21' element={<Mockup21/>}/>

      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);
