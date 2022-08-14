import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;
    align-items: center;

    @media ${theme.media.lteMedium} {
      flex-flow: column wrap;
      align-content: center;
    }
  `}
`;
