import { ComponentMeta, ComponentStory } from '@storybook/react';

// import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/img.webp';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'features/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    username: 'admin',
    age: 22,
    country: Country.Russia,
    lastName: 'anysound',
    name: 'nurlan',
    city: 'spb',
    currency: Currency.RUB,
    avatar,
  },
};

export const WithError = Template.bind({});

WithError.args = {
  error: 'true',
};

export const Loading = Template.bind({});

Loading.args = {
  isLoading: true,
};
