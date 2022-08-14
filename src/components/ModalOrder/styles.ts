/* istanbul ignore file */
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    img {
      width: ${theme.frameSizes.medium};
      height: ${theme.frameSizes.medium};
    }

    @media ${theme.media.lteOrEqMedium} {
      width: ${theme.frameSizes.largeMedium};
    }

    @media ${theme.media.lteOrEqSmall} {
      width: 100vw;
    }

    @media ${theme.media.lteSmall} {
      width: 100vw;
      height: 55vh;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    z-index: 6;
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 3rem;
    height: 3rem;
    background: none;
    color: ${theme.colors.white};
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ${theme.transitions.fastest};
    cursor: pointer;
    > svg {
      width: 3rem;
      height: 3rem;
    }

    &:hover {
      transform: scale(1.05);
      color: ${theme.colors.black};
      /* background: ${theme.colors.white}; */
    }
  `}
`;
