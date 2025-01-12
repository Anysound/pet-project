import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/img.webp';
import { StoreDecorator } from 'shared/config/storybook/store-decorator';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import ProfilePage from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

const Normal = Template.bind({});

Normal.decorators = [StoreDecorator({
  profile: {
    form: {
      username: 'admin',
      age: 22,
      country: Country.Russia,
      lastName: 'anysound',
      name: 'nurlan',
      city: 'spb',
      currency: Currency.RUB,
      avatar,
    },
  },
})];

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    form: {
      username: 'admin',
      age: 22,
      country: Country.Russia,
      lastName: 'anysound',
      name: 'nurlan',
      city: 'spb',
      currency: Currency.RUB,
      avatar,
    },
  },
})];
