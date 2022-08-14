import { Meta, Story } from '@storybook/react/types-6-0';
import { LogoLink } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};
