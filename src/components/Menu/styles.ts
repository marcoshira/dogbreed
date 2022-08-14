import styled, { css } from 'styled-components';
import { Title as Heading } from '../Heading/styles';

type MenuVisible = {
  visible?: boolean;
};

const menuVisible = () => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.div<MenuVisible>`
  ${({ theme, visible }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid ${theme.colors.primaryColor};
    background: ${theme.colors.white};
    transition: all 300ms ease-in-out;

    & ${Heading} {
      margin-top: 0;
      margin-bottom: 0;
    }

    @media ${theme.media.lteMedium} {
      height: 100vh;
      visibility: hidden;
      opacity: 0;
      ${visible && menuVisible()}
      border-bottom: none;

      & ${Heading} {
        padding-bottom: ${theme.spacings.large};
        display: flex;
        justify-content: center;
      }
    }
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    width: 95%;
    align-items: center;
    left: 0;
    right: 0;

    @media ${theme.media.lteMedium} {
      display: block;
      text-align: center;
      padding-bottom: ${theme.spacings.xxlarge};
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    z-index: 6;
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    display: none;
    border: none;

    > svg {
      width: 2.5rem;
      height: 2.5rem;
    }

    @media ${theme.media.lteMedium} {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`;
