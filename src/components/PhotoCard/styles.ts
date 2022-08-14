import styled, { css } from 'styled-components';

export const Wrapper = styled.a`
  ${({ theme }) => css`
    display: inline-block;
    margin: 10px;
    cursor: pointer;
    overflow: hidden;
    height: 260px;
    width: 260px;
    border-radius: 5%;

    img {
      height: 260px;
      width: 260px;
      transition: all 300ms ease-in-out;

      object-fit: cover;

      &:hover {
        transform: scale(1.2) rotate(10deg);
      }
    }
  `}
`;
