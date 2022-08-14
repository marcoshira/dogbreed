import { screen } from '@testing-library/react';
import { NavLinks } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import mock from './mock';

describe('<NavLinks />', () => {
  it('should render links', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getByRole('navigation').children).toHaveLength(mock.length);
  });

  it('should not render links', () => {
    renderTheme(<NavLinks />);
    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });

  it('should render with media query', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getByText(/pug/i).parentElement).toHaveStyleRule(
      'flex-flow',
      'column wrap',
      {
        media: theme.media.lteMedium,
      },
    );
  });

  it('should match snapshot', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getByText(/pug/i).parentElement).toMatchSnapshot();
  });
});
