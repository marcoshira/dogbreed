import { fireEvent, screen } from '@testing-library/react';
import { Menu } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import linksMock from '../NavLinks/mock';

describe('<Menu />', () => {
  it('should render Logo and Main Menu Nav', () => {
    const { container } = renderTheme(<Menu links={linksMock} />);
    expect(
      screen.getByRole('heading', { name: 'Dog Breed' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: 'Main menu' }),
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render Menu mobile and buttom for open and close menu', () => {
    renderTheme(<Menu links={linksMock} />);
    const button = screen.getByLabelText('Open/Close Menu');
    const menuContainer = button.nextSibling;

    expect(button).toHaveStyleRule('display', 'none');
    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.media.lteMedium,
    });
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('Open Menu')).toBeInTheDocument();
    fireEvent.click(button);
    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('Close Menu')).toBeInTheDocument();
    fireEvent.click(button);
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('Open Menu')).toBeInTheDocument();
    fireEvent.click(button);
    fireEvent.click(menuContainer);
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('Open Menu')).toBeInTheDocument();
  });

  it('should not render links', () => {
    const { container } = renderTheme(<Menu />);
    expect(
      screen.getByRole('navigation', { name: 'Main menu' }).firstChild,
    ).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
