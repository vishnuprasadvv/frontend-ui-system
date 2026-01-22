import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { type ThemeConfig, type APIThemeResponse } from '../../types/theme';
import { defaultTheme, theme } from './defaultTheme';
import { applyTheme, validateTheme, mergeThemes } from '../../utils/themeUtils';

interface ThemeContextType {
  theme: ThemeConfig;
  setTheme: (theme: ThemeConfig | Partial<ThemeConfig>) => void;
  loadThemeFromAPI: (apiUrl: string) => Promise<void>;
  resetTheme: () => void;
  toggleMode: () => void;
  isLoading: boolean;
  error: string | null;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  initialTheme?: ThemeConfig;
  apiUrl?: string;
  onThemeChange?: (theme: ThemeConfig) => void;
  enableLocalStorage?: boolean;
  storageKey?: string;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialTheme = theme,
  apiUrl,
  onThemeChange,
  enableLocalStorage = false,
  storageKey = 'app-theme',
}) => {
  const [theme, setThemeState] = useState<ThemeConfig>(() => {
    if (enableLocalStorage && typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(storageKey);
        if (stored) {
          const parsedTheme = JSON.parse(stored);
          if (validateTheme(parsedTheme)) {
            return mergeThemes(initialTheme, parsedTheme);
          }
        }
      } catch (error) {
        console.error('Error loading theme from localStorage:', error);
      }
    }
    return initialTheme;
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const setTheme = useCallback(
    (newTheme: ThemeConfig | Partial<ThemeConfig>) => {
      setThemeState((prevTheme) => {
        const updatedTheme =
          'mode' in newTheme && 'colors' in newTheme
            ? (newTheme as ThemeConfig)
            : mergeThemes(prevTheme, newTheme);

        if (!validateTheme(updatedTheme)) {
          console.error('Invalid theme configuration');
          return prevTheme;
        }

        applyTheme(updatedTheme);

        if (enableLocalStorage && typeof window !== 'undefined') {
          try {
            localStorage.setItem(storageKey, JSON.stringify(updatedTheme));
          } catch (error) {
            console.error('Error saving theme to localStorage:', error);
          }
        }

        onThemeChange?.(updatedTheme);

        return updatedTheme;
      });
    },
    [enableLocalStorage, storageKey, onThemeChange]
  );

  const loadThemeFromAPI = useCallback(
    async (url: string) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: APIThemeResponse = await response.json();

        if (!data.theme) {
          throw new Error('Invalid API response: missing theme data');
        }

        if (!validateTheme(data.theme)) {
          throw new Error('Invalid theme configuration from API');
        }

        setTheme(data.theme);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'Failed to load theme';
        setError(errorMessage);
        console.error('Error loading theme from API:', err);
      } finally {
        setIsLoading(false);
      }
    },
    [setTheme]
  );

  const resetTheme = useCallback(() => {
    setTheme(defaultTheme);
  }, [setTheme]);

  const toggleMode = useCallback(() => {
    setTheme({ mode: theme.mode === 'light' ? 'dark' : 'light' });
  }, [theme.mode, setTheme]);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    if (apiUrl) {
      loadThemeFromAPI(apiUrl);
    }
  }, [apiUrl, loadThemeFromAPI]);

  const value: ThemeContextType = {
    theme,
    setTheme,
    loadThemeFromAPI,
    resetTheme,
    toggleMode,
    isLoading,
    error,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};