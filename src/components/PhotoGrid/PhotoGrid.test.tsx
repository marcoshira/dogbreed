import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PhotoGrid, PhotoGridProps } from '.';

const props: PhotoGridProps = {
  list: ['abc.png', 'aaa.png'],
};

describe('<PhotoGrid />', () => {
  it('should render', () => {
    renderTheme(<PhotoGrid {...props} />);

    expect(screen.getAllByRole('img')).toHaveLength(2);
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<PhotoGrid {...props} />);
    expect(container).toMatchSnapshot();
  });
});
