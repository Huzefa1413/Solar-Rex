import { createContext, useContext, useState, useEffect } from "react"

// Step 1
const ThemeContext = createContext()

// Step 2
export const useTheme = () => {
    return useContext(ThemeContext);
}

// Step 3
export const ThemeProvider = ({ children }) => {
 
    const [apexTheme, setApexTheme] = useState('light'); // Initialize with 'light' theme
  
    const toggleApexTheme = () => {
        // Toggle between 'dark' and 'light' themes
        setApexTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
    };


    return (
        <ThemeContext.Provider value={{ apexTheme, toggleApexTheme, setApexTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}


