import * as Styled from './styles';

export type PhotoCardProps = {
  srcImg: string;
  onClick: () => void;
};
export const PhotoCard = ({ srcImg, onClick }: PhotoCardProps) => {
  return (
    <Styled.Wrapper onClick={onClick}>
      <img src={srcImg} />
    </Styled.Wrapper>
  );
};
