import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { TextInput, TextInputProps } from '.';

const props: TextInputProps = {
  label: 'Teste label',
  name: 'input-name',
  disabled: false,
  errorMessage: '',
};

const props2: TextInputProps = {
  label: 'Teste label',
  name: 'input-name',
  disabled: false,
};

describe('<TextInput />', () => {
  it('should render', () => {
    const { container } = renderTheme(<TextInput {...props} />);

    expect(screen.getByLabelText('Teste label')).toHaveAttribute(
      'type',
      'text',
    );
    expect(container).toMatchSnapshot();
  });
  it('should change input', () => {
    renderTheme(<TextInput {...props} />);
    const input = screen.getByLabelText('Teste label');
    fireEvent.change(input, { target: { value: 'teste' } });

    expect(input).toHaveValue('teste');
  });
  it('should not render error', () => {
    const { container } = renderTheme(<TextInput {...props2} />);

    expect(container).toMatchSnapshot();
  });
});
