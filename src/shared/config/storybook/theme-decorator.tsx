import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';

export const ThemeDecorator = (theme: Theme) => (StoryJSX: Story) => (
  <div className={`app ${theme}`}>
    <StoryJSX />
  </div>
);
