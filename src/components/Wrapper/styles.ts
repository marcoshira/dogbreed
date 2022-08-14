import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: 7rem auto;
    background: ${theme.colors.white};
    padding: ${theme.spacings.xlarge};
    height: 100vh;

    @media ${theme.media.lteSmall} {
      padding: ${theme.spacings.small};
    }
  `}
`;
