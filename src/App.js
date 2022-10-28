import React from 'react';
import './App.css';
import {Home} from './Pages/Home'
import {Blog} from './Pages/Blog'
import {About} from './Pages/About'
import {Not} from './Pages/Not'
import {Layout} from './routes/Layout'
import { Routes, Route, Link } from "react-router-dom";



function App() {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='*' element={<Not/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
