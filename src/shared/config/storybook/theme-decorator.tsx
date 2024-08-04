import { Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';

export const ThemeDecorator = (theme: Theme) => (StoryJSX: Story) => (
  <StoreProvider>
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <StoryJSX />
      </div>
    </ThemeProvider>
  </StoreProvider>
);
