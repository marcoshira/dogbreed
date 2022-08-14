import { Meta, Story } from '@storybook/react/types-6-0';
import { PhotoGrid, PhotoGridProps } from '.';
import mock from './mock';

export default {
  title: 'PhotoGrid',
  component: PhotoGrid,
  args: mock,
} as Meta<PhotoGridProps>;

export const Template: Story<PhotoGridProps> = (args) => {
  return (
    <div>
      <PhotoGrid {...args} />
    </div>
  );
};
