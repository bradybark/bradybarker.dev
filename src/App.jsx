// src/App.jsx
import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AchievementProvider } from './context/AchievementContext';
import './App.css';

import { ErrorBoundary } from '@bark/ui';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Lazy load page components for code splitting
const Home = lazy(() => import('./pages/Home'));
const Resume = lazy(() => import('./pages/Resume'));
const Projects = lazy(() => import('./pages/Projects'));
const Achievements = lazy(() => import('./pages/Achievements'));
const Game = lazy(() => import('./pages/Games'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-neutral-800 border-t-neutral-400 rounded-full animate-spin"></div>
      <p className="text-neutral-400">Loading...</p>
    </div>
  </div>
);

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <AchievementProvider>
        {/* Ensure Toaster is rendered here */}
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          containerStyle={{ zIndex: 99999 }} // Force it to the top
        />

        <div className="flex flex-col min-h-screen bg-neutral-950 text-white transition-colors duration-300">

          {/* Global Navbar */}
          <Navbar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />

          <main className="flex-grow pt-16">
            <ErrorBoundary>
              <Suspense fallback={<LoadingFallback />}>
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
              </Suspense>
            </ErrorBoundary>
          </main>

          <Footer />
        </div>
      </AchievementProvider>
    </Router>
  );
}

export default App;