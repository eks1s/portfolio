import React, { useEffect, useState } from 'react';
import { createContext } from 'react';

export const themes = {
  dark: 'dark',
  light: 'light',
};

interface IThemeProvider {
  children: React.ReactNode;
}

export interface IThemeContextProps {
  theme: string;
  setTheme: (value: string) => void;
}

export const ThemeContext = createContext({});

const getTheme = () => {
  const theme = `${window?.localStorage?.getItem('theme')}`;
  if (Object.values(themes).includes(theme)) return theme;

  const userMedia = window.matchMedia('(prefers-color-scheme: light)');
  if (userMedia.matches) return themes.light;

  return themes.dark;
};

const ThemeProvider = ({ children }: IThemeProvider) => {
  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
