import { Meta, Story } from '@storybook/react/types-6-0';
import { PhotoCard, PhotoCardProps } from '.';
import mock from '../PhotoGrid/mock';
import { Wrapper } from '../Wrapper';

export default {
  title: 'PhotoCard',
  component: PhotoCard,
  args: mock.list[0],
} as Meta<PhotoCardProps>;

export const Template: Story<PhotoCardProps> = (args) => {
  return (
    <Wrapper>
      <PhotoCard {...args} />
    </Wrapper>
  );
};
