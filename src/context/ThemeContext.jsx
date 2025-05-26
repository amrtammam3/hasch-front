// src/context/ThemeContext.jsx

// Import necessary React hooks
import { createContext, useContext, useState, useEffect } from 'react';

// Create a new context for theme
const ThemeContext = createContext();

// ThemeProvider component that wraps children with the theme context
export const ThemeProvider = ({ children }) => {
  // Initialize theme state with default value 'light'
  const [theme, setTheme] = useState('light'); // Default theme

  // Effect hook to update the HTML document's class based on theme
  useEffect(() => {
    // Remove existing theme classes from the HTML root element
    document.documentElement.classList.remove('light', 'dark');
    // Add the current theme as a class to the HTML root element
    document.documentElement.classList.add(theme);
  }, [theme]); // Runs every time the 'theme' value changes

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Provide the theme and toggleTheme function to child components
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to consume the ThemeContext
export const useTheme = () => {
  // Access the context value
  const context = useContext(ThemeContext);
  // Ensure the hook is used within a ThemeProvider
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
