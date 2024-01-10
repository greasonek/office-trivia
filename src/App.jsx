import React from 'react';
import './App.css';
import Home from './components/Home';
import Info from './components/Info';
import Game from './components/Game';
import Error from './components/errorHandling/Error';
import Login from './components/Login';
import Rules from './components/Rules';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/info' element={<Info/>}/>
          <Route path="/rules" element={<Rules/>}/>
          <Route path='/game' element={<Game/>}/>
          <Route path='login' element={<Login/>} />
          <Route path='*' element={<Error/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
