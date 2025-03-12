'use client'; 


import React, { useState, useEffect } from 'react';

const TechLoader = ({ onLoadingComplete = () => {} }) => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            onLoadingComplete();
          }, 500);
          return 80;
        }
        return prevProgress + Math.floor(Math.random() * 8) + 1;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="relative min-h-screen">
      {/* Loading Screen */}
      <div 
        className={`fixed inset-0 bg-gray-900 z-50 flex flex-col items-center justify-center transition-opacity duration-500 ${
          isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Logo Container */}
        <div className="mb-10 relative">
          <div className="text-center">
            <div className="mb-2 flex justify-center items-center">
              <span className="text-green-400 text-4xl font-mono animate-pulse">&lt;</span>
              <span className="mx-1 text-green-400 text-4xl font-mono animate-pulse">/</span>
              <span className="text-green-400 text-4xl font-mono animate-pulse">&gt;</span>
            </div>
            <h1 className="text-white font-bold text-5xl md:text-6xl">
              8bit
            </h1>
            <h2 className="text-green-400 font-bold text-2xl md:text-3xl tracking-wider mt-1">
              Warriors
            </h2>
          </div>
        </div>
        
        {/* Loading Bar */}
        <div className="w-64 md:w-80 bg-gray-800 rounded-full h-2 mb-4 overflow-hidden">
          <div 
            className="h-full bg-green-400 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        {/* Loading Text */}
        <div className="text-gray-400 font-mono text-sm">
          {progress < 100 ? (
            <span>LOADING SYSTEM... {progress}%</span>
          ) : (
            <span className="text-green-400">SYSTEM READY</span>
          )}
        </div>
        
        {/* Pixel Effect (optional - creates a scanline effect) */}
        <div className="fixed inset-0 pointer-events-none z-10 bg-scanline opacity-5"></div>
      </div>

      {/* Main Content (appears after loading) */}
      <div className={`transition-opacity duration-500 ease-in ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Your content goes here */}
      </div>
    </div>
  );
};

export default TechLoader;