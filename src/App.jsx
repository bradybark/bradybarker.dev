// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'; // <--- Check this
import { AchievementProvider } from './context/AchievementContext';
import { ThemeProvider } from './context/ThemeContext';
import './App.css'; 

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import Game from './pages/Games';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <ThemeProvider>
        <AchievementProvider>
          {/* Ensure Toaster is rendered here */}
          <Toaster 
            position="bottom-right" 
            reverseOrder={false}
            containerStyle={{ zIndex: 99999 }} // Force it to the top
          />

          <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
            <Navbar 
              isSidebarOpen={isSidebarOpen} 
              setIsSidebarOpen={setIsSidebarOpen} 
            />
            
            <main className="flex-grow pt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route 
                  path="/resume" 
                  element={
                    <Resume 
                      isSidebarOpen={isSidebarOpen} 
                      setIsSidebarOpen={setIsSidebarOpen} 
                    />
                  } 
                />
                <Route path="/projects" element={<Projects />} />
                <Route path="/achievements" element={<Achievements />} />
                <Route path="/game" element={<Game />} />
              </Routes>
            </main>
            
            <Footer />
          </div>
        </AchievementProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;