import { renderTheme } from '../../styles/render-theme';
import { ModalOrder, ModalOrderProps } from '.';

const func = jest.fn();

const props: ModalOrderProps = {
  isOpen: false,
  onRequestClose: func,
  srcImg: 'img.png',
};

describe('<ModalOrder />', () => {
  it('should render', () => {
    const { container } = renderTheme(<ModalOrder {...props} />);

    expect(container).toMatchSnapshot();
  });
});
