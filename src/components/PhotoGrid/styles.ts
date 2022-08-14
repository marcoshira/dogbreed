import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 0;
    @media ${theme.media.lteSmall} {
      grid-template-columns: 1fr;
    }
  `}
`;
