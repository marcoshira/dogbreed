import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Container = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${theme.colors.primaryColor};
    margin-left: ${theme.spacings.large};
    transition: ${theme.transitions.faster};
    font-size: ${theme.font.sizes.ltlarge};
    width: 108%;

    &:hover {
      color: ${theme.colors.white};
      text-shadow: -1.5px -1.5px 0 ${theme.colors.primaryColor},
        1.5px -1.5px 0 ${theme.colors.primaryColor},
        -1.5px 1.5px 0 ${theme.colors.primaryColor},
        1.5px 1.5px 0 ${theme.colors.primaryColor};
    }

    @media ${theme.media.lteMedium} {
      display: none;
    }
  `};
`;
