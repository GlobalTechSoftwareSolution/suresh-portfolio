"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

type BackgroundTheme = 'light' | 'dark';

interface BackgroundColorContextType {
  backgroundTheme: BackgroundTheme;
  toggleBackgroundTheme: () => void;
}

const BackgroundColorContext = createContext<BackgroundColorContextType | undefined>(undefined);

export function BackgroundColorProvider({ children }: { children: React.ReactNode }) {
  const [backgroundTheme, setBackgroundTheme] = useState<BackgroundTheme>('light');

  useEffect(() => {
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('backgroundTheme') as BackgroundTheme | null;
    
    if (savedTheme) {
      setBackgroundTheme(savedTheme);
    }
    // Default to light theme if no saved preference
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (backgroundTheme === 'dark') {
      document.documentElement.classList.add('dark-bg');
    } else {
      document.documentElement.classList.remove('dark-bg');
    }
    
    // Save theme preference
    localStorage.setItem('backgroundTheme', backgroundTheme);
  }, [backgroundTheme]);

  const toggleBackgroundTheme = () => {
    setBackgroundTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <BackgroundColorContext.Provider value={{ backgroundTheme, toggleBackgroundTheme }}>
      {children}
    </BackgroundColorContext.Provider>
  );
}

export function useBackgroundColor() {
  const context = useContext(BackgroundColorContext);
  if (context === undefined) {
    throw new Error('useBackgroundColor must be used within a BackgroundColorProvider');
  }
  return context;
}