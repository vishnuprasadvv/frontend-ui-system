import type { Preview } from "@storybook/react";
import { ThemeProvider } from "../src/design-system/theme/ThemeProvider";
import { defaultTheme, darkTheme, blueTheme, midnightNeon, forestMinimal, nordicIce } from "../src/design-system/theme/defaultTheme";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
    },
  },
  decorators: [
    (Story, context) => {
      const themeMap = {
        light: defaultTheme,
        dark: darkTheme,
        blue: blueTheme,
        midnightNeon: midnightNeon,
        forest: forestMinimal,
        nordicIce: nordicIce
      };
      
      const selectedTheme = themeMap[context.globals.theme as keyof typeof themeMap] || defaultTheme;
      
      return (
        <ThemeProvider initialTheme={selectedTheme}>
          <div className="min-h-screen p-8">
            <Story />
          </div>
        </ThemeProvider>
      );
    },
  ],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light Theme', icon: 'sun' },
          { value: 'dark', title: 'Dark Theme', icon: 'moon' },
          { value: 'blue', title: 'Blue Theme', icon: 'circle' },
          { value: 'midnightNeon', title: 'midnight Theme', icon: 'circle' },
          { value: 'forest', title: 'forest minimal Theme', icon: 'circle' },
          { value: 'nordicIce', title: 'Nordic Ice Theme', icon: 'circle' },
        ],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;