import { fireEvent, screen, waitFor } from '@testing-library/react';
import { MenuLink } from '.';
import { renderTheme } from '../../styles/render-theme';

const func = jest.fn();

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="http://localhost">Children</MenuLink>);
    expect(screen.getByText('Children')).toHaveAttribute('target', '_self');
  });

  it('should open in new tab', () => {
    renderTheme(
      <MenuLink link="http://localhost" newTab={true}>
        Children
      </MenuLink>,
    );
    expect(screen.getByText('Children')).toHaveAttribute('target', '_blank');
  });

  it('should call a function', async () => {
    renderTheme(
      <MenuLink link="http://localhost" onClick={func}>
        Children
      </MenuLink>,
    );
    expect(screen.getByText('Children')).toHaveAttribute('target', '_self');
    fireEvent.click(screen.getByText('Children'));
    await waitFor(() => {
      expect(func).toHaveBeenCalled();
    });
  });

  it('should match snapshot', () => {
    renderTheme(<MenuLink link="http://localhost">Children</MenuLink>);
    expect(screen.getByText('Children').parentElement).toMatchSnapshot();
  });
});
