import { FormLogin, FormLoginProps } from '../../components/FormLogin';
import { Wrapper } from '../../components/Wrapper';
import * as Styled from './styles';

export type HomeProps = FormLoginProps;

export function Home({ onLogin }: HomeProps) {
  return (
    <Styled.Wrapper>
      <Wrapper>
        <FormLogin onLogin={onLogin} />
      </Wrapper>
    </Styled.Wrapper>
  );
}
