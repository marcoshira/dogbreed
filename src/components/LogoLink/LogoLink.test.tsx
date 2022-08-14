import { screen } from '@testing-library/react';
import { LogoLink } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    const { container } = renderTheme(<LogoLink />);
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
