import { type ThemeConfig } from '../../types/theme';

/**
 * DEFAULT LIGHT THEME
 */
export const defaultTheme: ThemeConfig = {
  mode: 'light',
  colors: {
    // Brand Colors
    primary: '234 58.8% 44.7%',
    // primary: '222.2 47.4% 11.2%',
    primaryForeground: '210 40% 98%',
    background: '0 0% 100%',
    foreground: '222.2 84% 4.9%',

    // UI Surfaces
    card: '0 0% 100%',
    cardForeground: '222.2 84% 4.9%',
    popover: '0 0% 100%',
    popoverForeground: '222.2 84% 4.9%',

    // Status & Feedback
    success: "142.1 76.2% 36.3%",
    successForeground: "355.7 100% 97.3%",
    warning: "38 92.2% 50%",
    warningForeground: "48 96% 8.9%",
    destructive: '0 84.2% 60.2%',
    destructiveForeground: '210 40% 98%',

    // Accents & System
    secondary: '210 40% 96.1%',
    secondaryForeground: '222.2 47.4% 11.2%',
    accent: '210 40% 96.1%',
    accentForeground: '222.2 47.4% 11.2%',
    muted: '210 40% 96.1%',
    mutedForeground: '215.4 16.3% 46.9%',
    border: '214.3 31.8% 91.4%',
    input: '214.3 31.8% 91.4%',
    ring: '222.2 84% 4.9%',
  },
  typography: {
    fontFamily: {
      sans: 'Inter, system-ui, -apple-system, sans-serif',
      serif: 'Georgia, Cambria, "Times New Roman", serif',
      mono: '"Fira Code", "Courier New", monospace',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75',
    },
  },
  spacing: {
    radius: {
      none: '0',
      xs: '0.125rem',
      sm: '0.25rem',
      md: '0.5rem',
      lg: '0.75rem',
      xl: '1rem',
      full: '9999px',
    },
    spacing: {
      xs: '0.5rem',
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '3rem',
      '2xl': '4rem',
    },
  },
};

/**
 * DARK THEME
 */
export const darkTheme: ThemeConfig = {
  ...defaultTheme,
  mode: 'dark',
  colors: {
    // Brand Colors
    primary: '210 40% 98%',
    primaryForeground: '222.2 47.4% 11.2%',
    background: '222.2 84% 4.9%',
    foreground: '210 40% 98%',

    // UI Surfaces
    card: '222.2 84% 4.9%',
    cardForeground: '210 40% 98%',
    popover: '222.2 84% 4.9%',
    popoverForeground: '210 40% 98%',

    // Status & Feedback
    success: "142.1 76.2% 36.3%",
    successForeground: "355.7 100% 97.3%",
    warning: "38 92.2% 50%",
    warningForeground: "48 96% 8.9%",
    destructive: '0 62.8% 30.6%',
    destructiveForeground: '210 40% 98%',

    // Accents & System
    secondary: '217.2 32.6% 17.5%',
    secondaryForeground: '210 40% 98%',
    accent: '217.2 32.6% 17.5%',
    accentForeground: '210 40% 98%',
    muted: '217.2 32.6% 17.5%',
    mutedForeground: '215 20.2% 65.1%',
    border: '217.2 32.6% 17.5%',
    input: '217.2 32.6% 17.5%',
    ring: '212.7 26.8% 83.9%',
  },
};

/**
 * BLUE THEME
 */
export const blueTheme: ThemeConfig = {
  mode: 'light',
  colors: {
    // Brand Colors
    primary: '221 83% 53%',
    primaryForeground: '210 40% 98%',
    background: '0 0% 100%',
    foreground: '222.2 84% 4.9%',

    // UI Surfaces
    card: '0 0% 100%',
    cardForeground: '222.2 84% 4.9%',
    popover: '0 0% 100%',
    popoverForeground: '222.2 84% 4.9%',

    // Status & Feedback
    success: "142.1 76.2% 36.3%",
    successForeground: "355.7 100% 97.3%",
    warning: "38 92.2% 50%",
    warningForeground: "48 96% 8.9%",
    destructive: '0 84.2% 60.2%',
    destructiveForeground: '210 40% 98%',

    // Accents & System
    secondary: '210 40% 96.1%',
    secondaryForeground: '222.2 47.4% 11.2%',
    accent: '210 100% 95%',
    accentForeground: '221 83% 53%',
    muted: '210 40% 96.1%',
    mutedForeground: '215.4 16.3% 46.9%',
    border: '214.3 31.8% 91.4%',
    input: '214.3 31.8% 91.4%',
    ring: '221 83% 53%',
  },
  typography: {
    fontFamily: {
      sans: 'Roboto, system-ui, sans-serif',
      serif: 'Georgia, serif',
      mono: 'Fira Code, monospace',
    },
    fontSize: defaultTheme.typography.fontSize,
    fontWeight: defaultTheme.typography.fontWeight,
    lineHeight: defaultTheme.typography.lineHeight,
  },
  spacing: {
    radius: {
      none: '0',
      xs: '0.25rem',
      sm: '0.375rem',
      md: '0.5rem',
      lg: '0.75rem',
      xl: '1rem',
      full: '9999px',
    },
    spacing: defaultTheme.spacing.spacing,
  },
};

/**
 * MIDNIGHT NEON
 * Cyberpunk / Developer style: Sharp edges, mono fonts, and glowing cyan.
 */
export const midnightNeon: ThemeConfig = {
  mode: 'dark',
  colors: {
    primary: '180 100% 50%',
    primaryForeground: '230 25% 5%',
    background: '230 25% 5%',
    foreground: '180 100% 90%',
    card: '230 25% 8%',
    cardForeground: '180 100% 95%',
    popover: '230 25% 8%',
    popoverForeground: '180 100% 95%',
    success: '145 100% 50%',
    successForeground: '145 100% 5%',
    warning: '45 100% 50%',
    warningForeground: '45 100% 5%',
    destructive: '0 100% 60%',
    destructiveForeground: '0 0% 100%',
    muted: '230 25% 15%',
    mutedForeground: '180 20% 60%',
    secondary: '230 25% 12%',
    secondaryForeground: '180 100% 50%',
    accent: '220 30% 15%',
    accentForeground: '230 25% 100%',
    border: '180 100% 50% / 0.2',
    input: '230 25% 20%',
    ring: '180 100% 50%',
  },
  typography: {
    fontFamily: {
      sans: '"JetBrains Mono", "Fira Code", monospace',
      serif: 'ui-serif, Georgia, serif',
      mono: '"JetBrains Mono", monospace',
    },
    fontSize: defaultTheme.typography.fontSize,
    fontWeight: { normal: 400, medium: 500, semibold: 600, bold: 700 },
    lineHeight: { tight: '1.2', normal: '1.6', relaxed: '1.8' },
  },
  spacing: {
    radius: {
      none: '0px',
      xs: '0px',
      sm: '0px',
      md: '0px', // Sharp developer look
      lg: '0px',
      xl: '0px',
      full: '9999px',
    },
    spacing: defaultTheme.spacing.spacing,
  },
};

/**
 * FOREST MINIMAL
 * Organic / Editorial style: Deep greens, serif headers, and extra soft corners.
 */
export const forestMinimal: ThemeConfig = {
  mode: 'light',
  colors: {
    primary: '158 25% 18%', // Deep Forest
    primaryForeground: '45 25% 96%', // Cream
    background: '45 20% 98%', // Off-white Paper
    foreground: '158 20% 12%',
    card: '45 20% 96%',
    cardForeground: '158 20% 12%',
    popover: '45 20% 96%',
    popoverForeground: '158 20% 12%',
    success: '140 40% 40%',
    successForeground: '45 25% 96%',
    warning: '35 60% 50%',
    warningForeground: '45 25% 96%',
    destructive: '0 50% 45%',
    destructiveForeground: '0 0% 100%',
    muted: '158 10% 90%',
    mutedForeground: '158 10% 40%',
    secondary: '158 15% 92%',
    secondaryForeground: '158 25% 18%',
    accent: '38 45% 85%', // Soft Earthy Sand
    accentForeground: '158 25% 18%',
    border: '158 15% 85%',
    input: '158 15% 88%',
    ring: '158 25% 18%',
  },
  typography: {
    fontFamily: {
      sans: '"Public Sans", system-ui, sans-serif', // Clean, readable
      serif: '"Playfair Display", serif', // Elegant headers
      mono: '"IBMPlexMono", monospace',
    },
    fontSize: defaultTheme.typography.fontSize,
    fontWeight: { normal: 400, medium: 500, semibold: 600, bold: 700 },
    lineHeight: { tight: '1.25', normal: '1.7', relaxed: '2.0' },
  },
  spacing: {
    radius: {
      none: '0px',
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem', // Extra rounded
      lg: '1.5rem',
      xl: '2rem',
      full: '9999px',
    },
    spacing: defaultTheme.spacing.spacing,
  },
};

/**
 * NORDIC ICE
 * Cold / Clean style: High-end tech look with geometric sans fonts.
 */
export const nordicIce: ThemeConfig = {
  mode: 'light',
  colors: {
    primary: '215 100% 20%', // Navy
    primaryForeground: '210 40% 98%',
    background: '210 40% 98%', // Frozen white
    foreground: '215 50% 10%',
    card: '210 40% 96%',
    cardForeground: '215 50% 10%',
    popover: '210 40% 96%',
    popoverForeground: '215 50% 10%',
    success: '160 80% 30%',
    successForeground: '210 40% 98%',
    warning: '40 90% 45%',
    warningForeground: '210 40% 98%',
    destructive: '0 70% 50%',
    destructiveForeground: '0 0% 100%',
    muted: '214 20% 90%',
    mutedForeground: '215 15% 45%',
    secondary: '214 30% 92%',
    secondaryForeground: '215 100% 20%',
    accent: '215 100% 92%',
    accentForeground: '215 100% 20%',
    border: '214 30% 88%',
    input: '214 30% 88%',
    ring: '215 100% 20%',
  },
  typography: {
    fontFamily: {
      sans: '"Plus Jakarta Sans", sans-serif', // Geometric & Modern
      serif: 'serif',
      mono: '"Fira Code", monospace',
    },
    fontSize: defaultTheme.typography.fontSize,
    fontWeight: { normal: 400, medium: 500, semibold: 600, bold: 800 },
    lineHeight: { tight: '1.1', normal: '1.5', relaxed: '1.75' },
  },
  spacing: {
    radius: {
      none: '0px',
      xs: '0.1rem',
      sm: '0.2rem',
      md: '0.4rem',
      lg: '0.6rem',
      xl: '0.8rem',
      full: '9999px',
    },
    spacing: defaultTheme.spacing.spacing,
  },
};

export const theme: ThemeConfig = defaultTheme;