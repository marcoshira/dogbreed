import { fireEvent, screen, waitFor } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { FormLogin } from '.';

const func = jest.fn();

describe('<FormLogin />', () => {
  it('should render', () => {
    renderTheme(<FormLogin />);

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });
  it('should call function', async () => {
    renderTheme(<FormLogin onLogin={func} />);

    const input = screen.getByLabelText('Email');
    fireEvent.change(input, { target: { value: 'teste@email.com' } });

    expect(input).toHaveValue('teste@email.com');
    fireEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(func).toHaveBeenCalled();
    });
  });
  it('should call invalid email error', async () => {
    renderTheme(<FormLogin onLogin={func} />);

    const input = screen.getByLabelText('Email');
    fireEvent.change(input, { target: { value: 'teste' } });
    fireEvent.click(screen.getByRole('button'));

    expect(input).toHaveValue('teste');
    expect(
      screen.getByText('Please provide a valid email'),
    ).toBeInTheDocument();
  });
  it('should call void email error', async () => {
    renderTheme(<FormLogin onLogin={func} />);
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Please fill in all fields.')).toBeInTheDocument();
  });
});
