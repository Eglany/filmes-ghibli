import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Film from './page/Film';
import Header from './components/Header';

function App() {
  return (
    <main>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route Route path="/" element={<Home />} />
          <Route path="/film/:title" element={<Film />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
