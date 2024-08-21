import { ComponentMeta, ComponentStory } from '@storybook/react';

// import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/store-decorator';
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
Primary.args = {};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [StoreDecorator({
  login: {
    username: 'sdfasd',
    password: '323',
    error: 'error message',
  },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
  login: {
    isLoading: true,
  },
})];
