import { fireEvent, screen, waitFor } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PhotoCard, PhotoCardProps } from '.';

const func = jest.fn();

const props: PhotoCardProps = {
  srcImg: 'img.png',
  onClick: func,
};

describe('<PhotoCard />', () => {
  it('should render', () => {
    renderTheme(<PhotoCard {...props} />);

    expect(screen.getByRole('img')).toHaveAttribute('src', 'img.png');
  });
  it('should call function', async () => {
    renderTheme(<PhotoCard {...props} />);
    fireEvent.click(screen.getByRole('img'));
    await waitFor(() => {
      expect(func).toHaveBeenCalled();
    });
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<PhotoCard {...props} />);

    expect(container).toMatchSnapshot();
  });
});
