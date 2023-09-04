import React from 'react';
import Navbar from "./components/NavBar/navbar";
import Intro from './components/intro/intro';
import Skills from "./components/Skills/skills";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;
