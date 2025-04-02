import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
  title: 'entities/CommentList',
  component: CommentList,
  argTypes: {},
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  comments: [
    {
      id: '1',
      text: 'hello world',
      user: {
        username: 'vasya',
        id: '1',
      },
    },
    {
      id: '2',
      text: 'hello world',
      user: {
        username: 'petya',
        id: '2',
      },
    },
  ],
};

export const IsLoading = Template.bind({});
IsLoading.args = {
  isLoading: true,
};
