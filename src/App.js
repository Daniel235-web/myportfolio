import React from 'react';
import Navbar from "./components/NavBar/navbar";
import Intro from './components/intro/intro';
import Skills from "./components/Skills/skills";
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact/contact';


function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/clients" element={<Contact />} />
        
      </Routes>
    </div>
  );
}

export default App;
