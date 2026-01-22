# @xaults/ui

A modern, white-label UI component library built with React, TypeScript, Tailwind CSS v4, and shadcn/ui.

## ✨ Features

- 🎨 **Fully Themeable** - Configure colors, fonts, spacing, and more
- 🌐 **Backend-Driven Styling** - Load themes dynamically from API endpoints
- 📦 **shadcn/ui Components** - Beautiful, accessible components
- 🌙 **Dark Mode Support** - Built-in light and dark themes
- 📚 **Storybook** - Interactive component documentation
- 🔷 **TypeScript** - Full type safety out of the box
- ⚡ **Tailwind CSS v4** - Latest CSS-first configuration
- 🎯 **Tree-shakeable** - Import only what you need

## 📦 Installation

\`\`\`bash
npm install @your-company/ui
# or
yarn add @your-company/ui
# or
pnpm add @your-company/ui
\`\`\`

## 🚀 Quick Start

### 1. Wrap your app with ThemeProvider

\`\`\`tsx
import { ThemeProvider } from '@your-company/ui';
import '@your-company/ui/styles';

function App() {
  return (
    <ThemeProvider>
      {/* Your app */}
    </ThemeProvider>
  );
}
\`\`\`

### 2. Use components

\`\`\`tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from '@your-company/ui';

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello World</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  );
}
\`\`\`

## 🎨 Theming

### Custom Theme Configuration

\`\`\`tsx
import { ThemeProvider, defaultTheme } from '@your-company/ui';

const customTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: '221 83% 53%', // Blue
  },
};

function App() {
  return (
    <ThemeProvider initialTheme={customTheme}>
      {/* Your app */}
    </ThemeProvider>
  );
}
\`\`\`

### Backend-Driven Theming

\`\`\`tsx
import { ThemeProvider } from '@your-company/ui';

function App() {
  return (
    <ThemeProvider apiUrl="https://api.yourcompany.com/theme">
      {/* Theme will be loaded from API */}
    </ThemeProvider>
  );
}
\`\`\`

### Using the Theme Hook

\`\`\`tsx
import { useTheme, Button } from '@your-company/ui';

function ThemeToggle() {
  const { theme, toggleMode, setTheme, loadThemeFromAPI } = useTheme();
  
  return (
    <div>
      <p>Current mode: {theme.mode}</p>
      <Button onClick={toggleMode}>Toggle Dark Mode</Button>
      <Button onClick={() => loadThemeFromAPI('/api/theme')}>
        Load Theme
      </Button>
    </div>
  );
}
\`\`\`

### Using the Theme Switcher Component

\`\`\`tsx
import { ThemeSwitcher } from '@your-company/ui';

function Header() {
  return (
    <header>
      <h1>My App</h1>
      <ThemeSwitcher />
    </header>
  );
}
\`\`\`

## 📚 Available Components

- **Button** - Versatile button with multiple variants
- **Card** - Container with header, content, and footer
- **Input** - Text input field
- **Label** - Form label
- **Select** - Dropdown selection
- **Dialog** - Modal dialog
- **DropdownMenu** - Dropdown menu
- **Switch** - Toggle switch
- **Tabs** - Tabbed interface
- **Toast** - Notification toast
- **ThemeSwitcher** - Pre-built theme switcher

## 🛠️ Development

\`\`\`bash
# Install dependencies
npm install

# Run Storybook
npm run storybook

# Build library
npm run build

# Run linter
npm run lint
\`\`\`

## 🌐 API Theme Response Format

Your backend API should return themes in this format:

\`\`\`json
{
  "theme": {
    "mode": "light",
    "colors": {
      "primary": "222.2 47.4% 11.2%",
      "primaryForeground": "210 40% 98%",
      ...
    },
    "typography": {
      "fontFamily": {
        "sans": "Inter, sans-serif",
        ...
      },
      ...
    },
    "spacing": {
      "radius": {
        "md": "0.5rem",
        ...
      },
      ...
    }
  },
  "lastUpdated": "2025-01-21T10:00:00Z",
  "version": "1.0.0"
}
\`\`\`

## 📝 Theme Configuration Structure

\`\`\`typescript
interface ThemeConfig {
  mode: 'light' | 'dark';
  colors: {
    primary: string;
    primaryForeground: string;
    // ... more colors
  };
  typography: {
    fontFamily: {
      sans: string;
      serif: string;
      mono: string;
    };
    fontSize: { ... };
    fontWeight: { ... };
    lineHeight: { ... };
  };
  spacing: {
    radius: { ... };
    spacing: { ... };
  };
}
\`\`\`

## 🎯 Usage in Consumer Projects

Each project in your company can:

1. Install the library
2. Create their own theme config
3. Use components without worrying about styling
4. Load themes from your backend API

\`\`\`tsx
// project-a/src/theme.config.ts
import { ThemeConfig } from '@your-company/ui';

export const projectATheme: ThemeConfig = {
  // Your project-specific theme
};

