import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { AchievementProvider } from './context/AchievementContext';
import './App.css';

import { ErrorBoundary } from '@bradybark/ui';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FancyLoader from './components/common/FancyLoader';

// Lazy load page components for code splitting
const Home = lazy(() => import('./pages/Home'));
const Resume = lazy(() => import('./pages/Resume'));
const Projects = lazy(() => import('./pages/Projects'));
const Achievements = lazy(() => import('./pages/Achievements'));
const Game = lazy(() => import('./pages/Games'));

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <HelmetProvider>
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
                <Suspense fallback={<FancyLoader />}>
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
          <Analytics />
        </AchievementProvider>
      </HelmetProvider>
    </Router>
  );
}

export default App;
