import './App.css';
import React from 'react';
// import InputBox from "./components/InputBox";
import HabitListContainers from "./components/HabitListCon";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Weekly from './components/Weekly';
import Error from './components/Error';
import  {HabitProvider}  from './components/HabitContext.js';

const App = () => {
  return <>
    <BrowserRouter>
    <HabitProvider>
      <Routes>
        <Route exact path="/" element={<HabitListContainers />} />
        <Route exact path="/Weekly" element={<Weekly />} />
        <Route path="*" element={<Error />} />      
  </Routes>
  </HabitProvider>

    </BrowserRouter>

  </>
}

export default App;
