import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentCard } from './CommentCard';

export default {
  title: 'entities/CommentCard',
  component: CommentCard,
  argTypes: {},
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  comment: {
    id: '1',
    text: 'hello world',
    user: {
      username: 'vasya',
      id: '1',
    },
  },
  isLoading: false,
};

export const IsLoading = Template.bind({});
IsLoading.args = {
  comment: {
    id: '1',
    text: 'hello world',
    user: {
      username: 'vasya',
      id: '1',
    },
  },
  isLoading: true,
};
