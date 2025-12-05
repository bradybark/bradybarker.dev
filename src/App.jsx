// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom'; // Added Navigate
import './App.css';

import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects'; 

// Layout component handles global state and persistent UI (Navbar)
const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Check system preference on mount
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // REMOVED: All manual style manipulation for will-change or scroll-position
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ease-in-out">
        {/* Pass shared state to children routes */}
        <Outlet context={{ darkMode, isSidebarOpen, setIsSidebarOpen }} />
      </main>

      <footer className="py-8 text-center text-slate-500 dark:text-slate-600 text-sm">
        <p>© {new Date().getFullYear()} Brady Barker. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Automatically redirect from root (/) to /resume */}
          <Route index element={<Navigate to="/resume" replace />} />
          
          <Route path="resume" element={<Resume />} />
          <Route path="projects" element={<Projects />} />
          <Route path="home" element={<Home />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;