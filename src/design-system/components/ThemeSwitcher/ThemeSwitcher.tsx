import React from 'react';
import { useTheme } from '../../theme/ThemeProvider';
import { Button } from '../../../components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../../components/ui/dropdown-menu';
import { Moon, Sun, Palette } from 'lucide-react';
import { defaultTheme, darkTheme, blueTheme } from '../../theme/defaultTheme';

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme, toggleMode } = useTheme();

  return (
    <div className="flex gap-2">
      <Button variant="default" size="icon" onClick={toggleMode}>
        {theme.mode === 'light' ? (
          <Moon className="h-4 w-4" />
        ) : (
          <Sun className="h-4 w-4" />
        )}
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="default" size="icon">
            <Palette className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => setTheme(defaultTheme)}>
            Default Theme
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme(darkTheme)}>
            Dark Theme
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme(blueTheme)}>
            Blue Theme
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};