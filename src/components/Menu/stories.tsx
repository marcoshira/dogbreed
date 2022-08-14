import { Meta, Story } from '@storybook/react/types-6-0';
import { Menu } from '.';
import { NavLinksProps } from '../NavLinks';

import linksMock from '../NavLinks/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: linksMock,
} as Meta;

export const Template: Story<NavLinksProps> = (args) => {
  return (
    <div style={{ height: '300vh', background: 'white' }}>
      <Menu {...args} />
    </div>
  );
};
