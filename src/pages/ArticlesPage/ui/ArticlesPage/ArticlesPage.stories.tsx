import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticlesPage from './ArticlesPage';

export default {
  title: 'shared/ArticlesPage',
  component: ArticlesPage,
  argTypes: {},
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
