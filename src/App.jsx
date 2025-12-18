// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AchievementProvider } from './context/AchievementContext';
import { ThemeProvider } from './context/ThemeContext';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';

function App() {
  // Lifted State for Sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <ThemeProvider>
        <AchievementProvider>
          <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
            
            {/* Pass state to Navbar so Hamburger works */}
            <Navbar 
              isSidebarOpen={isSidebarOpen} 
              setIsSidebarOpen={setIsSidebarOpen} 
            />
            
            <main className="flex-grow pt-16"> {/* added pt-16 for fixed navbar */}
              <Routes>
                <Route path="/" element={<Home />} />
                
                {/* Pass state to Resume so Sidebar responds */}
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