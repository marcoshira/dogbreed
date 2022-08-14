import styled, { css } from 'styled-components';
import { Wrapper as Button } from '../Button/styles';

export const Wrapper = styled.div``;

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    a {
      width: 100%;

      ${Button} {
        width: 100%;
      }
    }

    ${Button} {
      width: 100%;
      border: 2px solid ${theme.colors.primaryColor};
      background: ${theme.colors.primaryColor};
      color: ${theme.colors.white};
      border-radius: ${theme.spacings.tiny};
      margin-left: 0;
      &:hover {
        background: ${theme.colors.white};
        color: ${theme.colors.primaryColor};
      }
      &::after {
        height: 0;
      }
      &:disabled {
        background: ${theme.colors.grey};
        color: ${theme.colors.white};
        border: 2px solid ${theme.colors.grey};

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
    }

    @media ${theme.media.lteSmall} {
      flex-direction: column;

      ${Button} {
        margin-bottom: ${theme.spacings.xxsmall};
        width: 100%;
        padding: ${theme.spacings.xsmall} ${theme.spacings.xsmall};
      }
    }
  `}
`;
