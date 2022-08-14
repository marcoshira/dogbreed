import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    font-size: ${theme.font.sizes.ltmedium};
    padding: ${theme.spacings.small};
    color: ${theme.colors.primaryColor};
    position: relative;
    transition: ${theme.transitions.faster};
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }

    svg {
      transition: ${theme.transitions.faster};
      width: 30px;
      color: ${theme.colors.primaryColor};

      &:hover {
        transform: scale(1.15);
      }
    }
  `}
`;
