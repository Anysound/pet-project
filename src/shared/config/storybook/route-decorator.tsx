import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (StoryJSX: Story) => (
  <BrowserRouter>
    <StoryJSX />
  </BrowserRouter>
);
