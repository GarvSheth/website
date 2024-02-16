import React from 'react'
import { BrowserRouter, Route, Routes, useRoutes} from "react-router-dom";

import Navbar from './Navbar/Navbar'
import Home from './Home/Home.jsx'
import Team from './Team/Team.jsx'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </BrowserRouter>
    </>
    
  )
}