import React from 'react';
import Weblayout from './weblayout'
import SearchBar from './SearchBar'
import { useState } from 'react';
import {BrowserRouter , Routes, Route} from "react-router-dom";
import RoboID from './RoboID';
import Navbar from './Navbar';


// https://robohash.org/${user.id}?set=set1&size=200x200
function App() {

  
  return (
    
    <BrowserRouter>
      <Navbar />
      <Routes>
      
        <Route path='/' element={<Weblayout />}>
        </Route>

        <Route path='/profile/:id' element={<RoboID />}></Route>
        <Route path="*" element={<h1>not found 404</h1>} />
        
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
