import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//pages
import App from './App';
import Home from "./pages/Home";
import Team from "./pages/Team";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="home" element={<Home />} />
        <Route path="team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)