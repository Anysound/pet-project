import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import 'app/styles/index.scss';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryJSX: Story) => (
  <StoreProvider initialState={state}>
    <StoryJSX />
  </StoreProvider>
);
