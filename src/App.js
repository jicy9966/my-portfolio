import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import React from 'react';
import { HomePage, AboutPage, ResumePage, ContactPage } from './pages/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<HomePage />}/>
          <Route path = "/about" element = {<AboutPage />}/>
          <Route path = "/resume" element = {<ResumePage />}/>
          <Route path = "/contact" element = {<ContactPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
