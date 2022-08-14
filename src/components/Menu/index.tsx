import * as Styled from './styles';
import { LogoLink } from '../LogoLink';
import { NavLinks, NavLinksProps } from '../NavLinks';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { useState } from 'react';

export const Menu = ({ links = [] }: NavLinksProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Styled.Button
        onClick={() => setVisible(!visible)}
        aria-label="Open/Close Menu"
      >
        {visible ? (
          <CloseIcon aria-label="Close Menu" />
        ) : (
          <MenuIcon aria-label="Open Menu" />
        )}
      </Styled.Button>
      <Styled.Container visible={visible} onClick={() => setVisible(!visible)}>
        <Styled.MenuContainer>
          <LogoLink />
          <NavLinks links={links} />
        </Styled.MenuContainer>
      </Styled.Container>
    </>
  );
};
