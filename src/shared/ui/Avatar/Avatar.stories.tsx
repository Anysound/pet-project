import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from './img.webp';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 100,
  src: AvatarImg,
};

export const PrimaryBig = Template.bind({});
PrimaryBig.args = {
  size: 150,
  src: AvatarImg,
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  size: 50,
  src: AvatarImg,
};
