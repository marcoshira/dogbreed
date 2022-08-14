import styled, { css } from 'styled-components';

export const Wrapper = styled.button`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    background: inherit;
    color: ${theme.colors.primaryColor};
    border: none;
    font-size: ${theme.font.sizes.ltmedium};
    font-weight: 500;
    margin-left: ${theme.spacings.xxsmall};
    margin-top: 5px;
    margin-bottom: 4px;
    position: relative;
    transition: ${theme.transitions.faster};

    &:disabled {
      background: ${theme.colors.grey};
      color: ${theme.colors.white};
      border: 2px solid ${theme.colors.grey};
      transition: none;

      &:hover {
        background: ${theme.colors.grey};
        color: ${theme.colors.white};
        border: 2px solid ${theme.colors.grey};
        cursor: not-allowed;
      }

      &::after {
        content: none;
      }
    }
    &:hover {
      color: ${theme.colors.thirdColor};
      cursor: pointer;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0.2rem;
      left: 50%;
      width: 0;
      height: 0.2rem;
      background: ${theme.colors.thirdColor};
      transition: all 200ms ease-in-out;
    }

    &:hover::after {
      left: 25%;
      width: 50%;
    }
  `}
`;
