import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Calculator from './pages/Calculator';
import Home from './pages/Home';
import Json from './pages/Json';
import Hobbies from './pages/Hobbies';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/calculator' element={<Calculator />}></Route>
          <Route path='/json' element={<Json />}></Route>
          <Route path='/hobbies' element={<Hobbies />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
