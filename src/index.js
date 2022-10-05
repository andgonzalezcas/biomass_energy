import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//pages
import App from './App';
import Home from "./pages/Home";
import Team from "./pages/Team";
import Experts from "./pages/Experts";
import PestalAnalysis from "./pages/PestalAnalysis";
import PageNotFound from "./pages/PageNotFound"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="home" element={<Home />} />
        <Route path="team" element={<Team />} />
        <Route path="pestal-analysis" element={<PestalAnalysis />} />
        <Route path="experts" element={<Experts />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)