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
    // Check for saved theme in localStorage or system preference
    const savedTheme = localStorage.getItem('backgroundTheme') as BackgroundTheme | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setBackgroundTheme(savedTheme);
    } else if (systemPrefersDark) {
      setBackgroundTheme('dark');
    }
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