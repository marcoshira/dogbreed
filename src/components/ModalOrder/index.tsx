import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import Modal from 'react-modal';
import * as Styled from './styles';
import { theme } from '../../styles/theme';

export type ModalOrderProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  srcImg: string;
};
export const ModalOrder = ({
  isOpen,
  onRequestClose,
  srcImg,
}: ModalOrderProps) => {
  const customStyles = {
    content: {
      top: '50%',
      bottom: 'auto',
      left: '50%',
      right: 'auto',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'transparent',
      color: theme.colors.white,
      padding: '0',
    },
  };

  return (
    <Modal
      id="Modal"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      <Styled.Wrapper>
        <Styled.Button onClick={onRequestClose} className="react-modal-close">
          <CloseIcon aria-label="Close Menu" />
        </Styled.Button>
        <img src={srcImg} />
      </Styled.Wrapper>
    </Modal>
  );
};
