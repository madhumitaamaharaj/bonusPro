import React, { useState } from 'react';
import "./style.css";
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Home from './components/Home';
import Task from './components/Task';

const App = () => {
  const [formData, setFormData] = useState(null);

  const saveData = (data) => {
   
    setFormData(data);
  };

  const clearLocalStorage = () => {
  
    setFormData(null);
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home clearLocalStorage={clearLocalStorage} storedData={formData} />} />
        <Route path="/contact" element={<Contact saveData={saveData} />} />
        <Route path="/task" element={<Task />} />
      </Routes>
    </div>
  );
};

export default App;
