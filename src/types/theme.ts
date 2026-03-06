export interface ThemeColors {
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  accent: string;
  accentForeground: string;
  background: string;
  foreground: string;
  muted: string;
  mutedForeground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  border: string;
  input: string;
  ring: string;
  destructive: string;
  destructiveForeground: string;
  success: string,
  successForeground: string,
  warning: string,
  warningForeground: string,
}

export interface ThemeTypography {
  fontFamily: {
    sans: string;
    serif: string;
    mono: string;
  };
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
  };
  fontWeight: {
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
  };
  lineHeight: {
    tight: string;
    normal: string;
    relaxed: string;
  };
}

export interface ThemeSpacing {
  radius: {
    none: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
}


/**
 * Complete theme configuration with support for light and dark modes.
 * 
 * @property mode - Current theme mode ('light' or 'dark')
 * @property lightColors - Color palette for light mode
 * @property darkColors - Color palette for dark mode
 * @property typography - Font settings (applies to both modes)
 * @property spacing - Spacing and radius settings (applies to both modes)
 * 
 * @example
 * ```typescript
 * const theme: ThemeConfig = {
 *   mode: 'light',
 *   lightColors: {
 *     background: '0 0% 100%',
 *     foreground: '222.2 84% 4.9%',
 *     // ... other light colors
 *   },
 *   darkColors: {
 *     background: '222.2 84% 4.9%',
 *     foreground: '210 40% 98%',
 *     // ... other dark colors
 *   },
 *   typography: { ... },
 *   spacing: { ... }
 * }
 * ```
 */
export interface ThemeConfig {
  mode: "light" | "dark";
  lightColors: ThemeColors;
  darkColors: ThemeColors;
  typography: ThemeTypography;
  spacing: ThemeSpacing;
}

export interface APIThemeResponse {
  theme: ThemeConfig;
  lastUpdated: string;
  version?: string;
}