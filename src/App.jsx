/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Home from '../components/Home';
import UpperNavs from '../components/UpperNavs';
import SignUp from '../components/SignUp';
import Dashboard from '../components/Dashboard';
import Admin from '../components/Admin';

import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/navbar" element={<NavBar />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
