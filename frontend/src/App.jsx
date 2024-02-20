import React from 'react'
import { BrowserRouter, Route, Routes, useRoutes} from "react-router-dom";

import Publications from './Publications/Publs_page/Publications.jsx';
import Navbar from './Navbar/Navbar.jsx';
import Home from './Home/Home.jsx';
import Team from './Team/Team.jsx';

import './App.css'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/team" element={<Team />} />
          <Route path="/publications" element={<Publications />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}