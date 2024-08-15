import { ComponentMeta, ComponentStory } from '@storybook/react';

// import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { LoginForm } from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
};

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
  children: 'Text',
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Text',
};

export const Square = Template.bind({});
Square.args = {
  children: '<',
  square: true,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  children: '<',
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
  children: '<',
  square: true,

};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
