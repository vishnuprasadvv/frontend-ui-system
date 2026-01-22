import { type ThemeColors, type ThemeConfig } from '../types/theme';

/**
 * Applies theme configuration to the document root
 */
export const applyTheme = (theme: ThemeConfig): void => {
  const root = document.documentElement;

  // Apply color variables
  Object.entries(theme.colors).forEach(([key, value]) => {
    const cssVarName = `--${camelToKebab(key)}`;
    
    // Clean the value: if it's "hsl(222 47% 11%)", convert to "222 47% 11%"
    const cleanValue = value.replace(/hsl\((.*)\)/, '$1').replace(/,/g, '');
    
    root.style.setProperty(cssVarName, cleanValue);
  });

  // Apply typography
  root.style.setProperty('--font-sans', theme.typography.fontFamily.sans);
  root.style.setProperty('--font-serif', theme.typography.fontFamily.serif);
  root.style.setProperty('--font-mono', theme.typography.fontFamily.mono);

  // Apply radius - This ensures the base --radius is set for our math
  root.style.setProperty('--radius', theme.spacing.radius.md);
  
  Object.entries(theme.spacing.radius).forEach(([key, value]) => {
    // This creates --radius-sm, --radius-md, etc.
    root.style.setProperty(`--radius-${key}`, value);
  });

  // Apply theme mode
  root.classList.remove('light', 'dark');
  root.classList.add(theme.mode);
};

/**
 * Convert camelCase to kebab-case
 */
const camelToKebab = (str: string): string => {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase();
};

/**
 * Convert hex color to HSL format for Tailwind
 */
export const hexToHSL = (hex: string): string => {
  hex = hex.replace('#', '');

  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
};

/**
 * Convert RGB to HSL
 */
export const rgbToHSL = (r: number, g: number, b: number): string => {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
};

/**
 * Merge theme configurations
 */
export const mergeThemes = (
  baseTheme: ThemeConfig,
  overrides: Partial<ThemeConfig>
): ThemeConfig => {
  return {
    mode: overrides.mode ?? baseTheme.mode,
    colors: { ...baseTheme.colors, ...(overrides.colors || {}) },
    typography: {
      fontFamily: {
        ...baseTheme.typography.fontFamily,
        ...(overrides.typography?.fontFamily || {}),
      },
      fontSize: {
        ...baseTheme.typography.fontSize,
        ...(overrides.typography?.fontSize || {}),
      },
      fontWeight: {
        ...baseTheme.typography.fontWeight,
        ...(overrides.typography?.fontWeight || {}),
      },
      lineHeight: {
        ...baseTheme.typography.lineHeight,
        ...(overrides.typography?.lineHeight || {}),
      },
    },
    spacing: {
      radius: {
        ...baseTheme.spacing.radius,
        ...(overrides.spacing?.radius || {}),
      },
      spacing: {
        ...baseTheme.spacing.spacing,
        ...(overrides.spacing?.spacing || {}),
      },
    },
  };
};

/**
 * Validate theme configuration
 */
export const validateTheme = (theme: Partial<ThemeConfig>): boolean => {
  try {
    if (theme.mode && !['light', 'dark'].includes(theme.mode)) {
      console.error('Invalid theme mode');
      return false;
    }

    if (theme.colors) {
      for (const [key, value] of Object.entries(theme.colors)) {
        if (typeof value !== 'string' || value.trim() === '') {
          console.error(`Invalid color value for ${key}`);
          return false;
        }
      }
    }

    return true;
  } catch (error) {
    console.error('Theme validation error:', error);
    return false;
  }
};

/**
 * Generate complementary colors for a theme
 */
export const generateThemeVariations = (baseColor: string): Partial<ThemeColors> => {
  // This is a simplified example - you could use a color manipulation library
  return {
    primary: baseColor,
    secondary: baseColor, // Could calculate a lighter/darker variation
    accent: baseColor, // Could calculate a complementary color
  };
};