import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation'
import Detail from './routes/Detail';

function App() {
  return (
    <>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home/introduction" element={<h1>Introduction</h1>} />
      <Route path= "/about" element={<About />} />
      <Route path="movie-detail" element={<Detail />} />
      </Routes>
      </>
      );
}

export default App;