/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import NavBar from '../components/Navbar';
import Home from '../components/Home';
import UpperNavs from '../components/UpperNavs';
import SignUp from '../components/SignUp';
import Dashboard from '../components/Dashboard';
import Admin from '../components/auth/Admin';
import SignUpAuth from '../components/auth/SignUpAuth';


import './App.css'

function App() {


  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/navbar" element={<NavBar />} />
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="auth/admin" element={<Admin />} />
            <Route path="/auth/signUp" element={<SignUpAuth />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App
