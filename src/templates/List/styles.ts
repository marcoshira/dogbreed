import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(359deg);
      }
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    border: none;
    width: 35px;
    height: 35px;
    margin-left: ${theme.spacings.xsmall};
    cursor: pointer;
    transition: ${theme.transitions.slowest};
    transition: color 300ms ease-in-out;

    &:hover {
      animation: rotation 1s infinite ease-out;
      animation-delay: 0.2s;
      color: ${theme.colors.primaryColor};
    }

    svg {
      background: ${theme.colors.white};
    }
  `}
`;

export const HeadingContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css``}
`;
